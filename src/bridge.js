// stdio <-> Streamable HTTP bridge for the APICK MCP server.
//
// APICK serves MCP over Streamable HTTP at https://apick.app/mcp/{server}. Clients that
// speak remote HTTP should connect there directly. This bridge exists for clients that
// only launch local stdio processes.
//
// It is a pump, not a protocol implementation: every JSON-RPC message read from stdin is
// forwarded verbatim, and every message the server returns is written verbatim to stdout.
// Capability and version negotiation, tool schemas and errors are all handled end to end
// by the client and the server.

export const DEFAULT_ENDPOINT = 'https://apick.app/mcp';

export const SERVERS = [
	'all',
	'business',
	'identity',
	'ocr',
	'finance',
	'web',
	'convert',
	'vision',
	'ai'
];

// A key must never reach stdout, stderr or an error message.
export function redact(text, apiKey) {
	if (!text) return text;
	let out = String(text);
	if (apiKey) out = out.split(apiKey).join('***');
	return out.replace(/(Bearer\s+)[\w.\-]+/gi, '$1***');
}

// Streamable HTTP replies with either a single JSON body or an SSE stream carrying one or
// more JSON-RPC messages. Both shapes reduce to "a list of messages".
function parseEventStream(text) {
	const messages = [];
	for (const block of text.split(/\r?\n\r?\n/)) {
		const data = block
			.split(/\r?\n/)
			.filter((line) => line.startsWith('data:'))
			.map((line) => line.slice(5).trim())
			.join('\n');
		if (!data) continue;
		try {
			messages.push(JSON.parse(data));
		} catch {
			// Keep-alive or comment frame - nothing to forward.
		}
	}
	return messages;
}

export function createBridge(options = {}) {
	const server = options.server || 'all';
	const apiKey = options.apiKey || '';
	const endpoint = (options.endpoint || DEFAULT_ENDPOINT).replace(/\/+$/, '') + '/' + server;
	const fetchImpl = options.fetch || globalThis.fetch;
	const write = options.write || ((line) => process.stdout.write(line + '\n'));
	const warn = options.warn || ((line) => process.stderr.write(line + '\n'));

	// The gateway is stateless, but honour a session id and the negotiated protocol
	// version if the server ever starts sending them.
	let sessionId = null;
	let protocolVersion = null;

	function headers() {
		const h = {
			'content-type': 'application/json',
			accept: 'application/json, text/event-stream',
			'user-agent': 'apick-mcp-bridge'
		};
		if (apiKey) h.authorization = 'Bearer ' + apiKey;
		if (sessionId) h['mcp-session-id'] = sessionId;
		if (protocolVersion) h['mcp-protocol-version'] = protocolVersion;
		return h;
	}

	function remember(message) {
		const negotiated = message && message.result && message.result.protocolVersion;
		if (negotiated) protocolVersion = negotiated;
	}

	async function send(message) {
		let res;
		try {
			res = await fetchImpl(endpoint, {
				method: 'POST',
				headers: headers(),
				body: JSON.stringify(message)
			});
		} catch (err) {
			return fail(message, -32001, 'Cannot reach ' + endpoint + ': ' + redact(err.message, apiKey));
		}

		const incomingSession = res.headers.get && res.headers.get('mcp-session-id');
		if (incomingSession) sessionId = incomingSession;

		const body = await res.text();
		if (!body) {
			// 202 for notifications and responses - nothing to forward.
			if (res.ok) return;
			return fail(message, -32002, 'HTTP ' + res.status + ' from ' + endpoint);
		}

		const contentType = (res.headers.get && res.headers.get('content-type')) || '';
		let messages;
		if (contentType.includes('text/event-stream')) {
			messages = parseEventStream(body);
		} else {
			try {
				const parsed = JSON.parse(body);
				messages = Array.isArray(parsed) ? parsed : [parsed];
			} catch {
				return fail(message, -32002, 'HTTP ' + res.status + ' from ' + endpoint + ': unexpected response body');
			}
		}

		for (const out of messages) {
			remember(out);
			write(JSON.stringify(out));
		}
	}

	// Only a request (one carrying an id) can be answered with an error; a failed
	// notification is reported on stderr so the client is not left waiting on a reply.
	function fail(message, code, text) {
		const detail = redact(text, apiKey);
		if (message && message.id !== undefined && message.id !== null) {
			write(JSON.stringify({ jsonrpc: '2.0', id: message.id, error: { code, message: detail } }));
		} else {
			warn('apick-mcp: ' + detail);
		}
	}

	// Newline-delimited JSON in, newline-delimited JSON out.
	function handleLine(line) {
		const trimmed = line.trim();
		if (!trimmed) return Promise.resolve();
		let message;
		try {
			message = JSON.parse(trimmed);
		} catch {
			warn('apick-mcp: ignoring unparseable input line');
			return Promise.resolve();
		}
		return send(message);
	}

	function attach(input) {
		let buffer = '';
		const pending = new Set();
		input.setEncoding('utf8');
		input.on('data', (chunk) => {
			buffer += chunk;
			let index;
			while ((index = buffer.indexOf('\n')) !== -1) {
				const line = buffer.slice(0, index);
				buffer = buffer.slice(index + 1);
				const task = handleLine(line).catch((err) => warn('apick-mcp: ' + redact(err.message, apiKey)));
				pending.add(task);
				task.finally(() => pending.delete(task));
			}
		});
		return new Promise((resolve) => {
			input.on('end', async () => {
				if (buffer.trim()) await handleLine(buffer).catch(() => {});
				await Promise.allSettled([...pending]);
				resolve();
			});
		});
	}

	return { endpoint, attach, handleLine };
}

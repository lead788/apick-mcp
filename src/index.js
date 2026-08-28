#!/usr/bin/env node
// apick-mcp - run the APICK MCP server over stdio.
//
// Usage:
//   apick-mcp [--server <name>]
//
// Environment:
//   APICK_API_KEY     APICK license key. Optional: tools/list works without one,
//                     tools/call needs it.
//   APICK_MCP_SERVER  Which server to expose (default: all).
//   APICK_MCP_URL     Base URL override (default: https://apick.app/mcp).

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createBridge, DEFAULT_ENDPOINT, SERVERS } from './bridge.js';

const HELP = `apick-mcp - APICK MCP server over stdio

  apick-mcp [--server <name>]

Options
  --server, -s <name>  ${SERVERS.join(', ')}  (default: all)
  --version, -v        print version
  --help, -h           print this message

Environment
  APICK_API_KEY        APICK license key (get one at https://apick.app)
  APICK_MCP_SERVER     same as --server
  APICK_MCP_URL        base URL override (default: ${DEFAULT_ENDPOINT})

Clients that support remote MCP can skip this bridge and connect straight to
${DEFAULT_ENDPOINT}/all with an Authorization: Bearer header.
Docs: https://apick.app/dev_guide/mcp
`;

function parseArgs(argv) {
	const args = { server: process.env.APICK_MCP_SERVER || 'all' };
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === '--help' || arg === '-h') args.help = true;
		else if (arg === '--version' || arg === '-v') args.version = true;
		else if (arg === '--server' || arg === '-s') args.server = argv[++i];
		else if (arg.startsWith('--server=')) args.server = arg.slice('--server='.length);
		else args.unknown = arg;
	}
	return args;
}

async function main() {
	const args = parseArgs(process.argv.slice(2));

	if (args.help) {
		process.stdout.write(HELP);
		return;
	}
	if (args.version) {
		const pkgPath = fileURLToPath(new URL('../package.json', import.meta.url));
		process.stdout.write(JSON.parse(readFileSync(pkgPath, 'utf8')).version + '\n');
		return;
	}
	if (args.unknown) {
		process.stderr.write('apick-mcp: unknown argument ' + args.unknown + '\n\n' + HELP);
		process.exitCode = 2;
		return;
	}
	if (!SERVERS.includes(args.server)) {
		process.stderr.write(
			'apick-mcp: unknown server "' + args.server + '". Available: ' + SERVERS.join(', ') + '\n'
		);
		process.exitCode = 2;
		return;
	}

	const bridge = createBridge({
		server: args.server,
		apiKey: process.env.APICK_API_KEY,
		endpoint: process.env.APICK_MCP_URL
	});

	if (!process.env.APICK_API_KEY) {
		process.stderr.write(
			'apick-mcp: no APICK_API_KEY set - tool discovery works, tool calls will ask you to sign in at https://apick.app\n'
		);
	}

	await bridge.attach(process.stdin);
}

main().catch((err) => {
	process.stderr.write('apick-mcp: ' + err.message + '\n');
	process.exitCode = 1;
});

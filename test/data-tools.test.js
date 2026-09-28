import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createBridge } from '../src/bridge.js';

const products = ['employment', 'personal_income', 'nps_join_history', 'driving_license', 'health_checkup'];
const names = products.flatMap(p => ['req_' + p, 'get_' + p]);
const read = file => readFileSync(new URL('../' + file, import.meta.url), 'utf8');

// TOOLS.md 공통 계약의 상태표와 같은 순서·묶음이다. 문서나 이 목록 어느 한쪽에서
// 상태를 빼거나 다른 처리 묶음으로 옮기면 계약 테스트와 브릿지 전달 테스트가 함께 실패한다.
const statusGroups = {
	waiting: ['AUTH_REQUESTED', 'AUTH_WAITING'],
	collecting: ['AUTH_COMPLETED', 'COLLECTING', 'COLLECTED'],
	done: ['SUCCESS', 'PARTIAL_SUCCESS'],
	stopped: ['AUTH_REJECTED', 'AUTH_EXPIRED', 'FAILED']
};
const statuses = Object.values(statusGroups).flat();
const errorCodes = ['RESULT_EXPIRED', 'AUTH_EXPIRED', 'AUTH_REJECTED', 'COLLECT_FAILED'];

function contractSection(tools) {
	const start = tools.indexOf('<a id="simple-auth-data"></a>');
	const end = tools.indexOf('<a id="req-employment"></a>', start);
	assert.ok(start >= 0 && end > start, 'TOOLS.md simple-auth-data 섹션');
	return tools.slice(start, end);
}

function documentedStatusRows(section) {
	const [, table] = section.split('| 상태 | 클라이언트 처리 |');
	assert.ok(table, 'TOOLS.md 상태표');
	const rows = [];
	for (const line of table.split(/\r?\n/).slice(2)) {
		if (!line.startsWith('|')) break;
		rows.push([...line.split('|')[1].matchAll(/`([A-Z_]+)`/g)].map(m => m[1]));
	}
	return rows;
}

function documentedErrorCodes(section) {
	const sentence = section.match(/`errorCode`는 ((?:`[A-Z_]+`(?:, )?)+)를 포함/);
	assert.ok(sentence, 'TOOLS.md errorCode 목록');
	return [...sentence[1].matchAll(/`([A-Z_]+)`/g)].map(m => m[1]);
}

function documentedResultKey(tools, product) {
	const section = tools.split('### `get_' + product + '`')[1].split('\n---')[0];
	return section.match(/성공 결과: `result\.([A-Za-z]+)`/)[1];
}

// 상태 묶음별로 클라이언트가 판단에 쓰는 필드를 채운 get_* 응답 data. 중첩 객체·배열·null·한글이
// 섞여 있어 브릿지가 값을 바꾸거나 누락하면 바로 드러난다.
function statusData({ product, status, errorCode, resultKey, transactionId }) {
	const group = Object.keys(statusGroups).find(key => statusGroups[key].includes(status));
	const done = group === 'done';
	const data = {
		schemaVersion: 1, transactionId, product, status, resultAvailable: done, charged: done, success: group !== 'stopped',
		message: status + ' 상태입니다.',
		sources: [
			{ id: 'source-1', status: done ? 'SUCCESS' : status, detail: null },
			{ id: 'source-2', status: status === 'PARTIAL_SUCCESS' ? 'FAILED' : done ? 'SUCCESS' : status, detail: { note: '부분 항목' } }
		]
	};
	if (group === 'waiting') Object.assign(data, { expiresAt: '2026-09-28T09:05:00Z', approvals: [{ provider: 'kakao', approved: false }] });
	if (group === 'collecting') data.progress = { completed: status === 'COLLECTED' ? 2 : 1, total: 2 };
	if (done) Object.assign(data, { checkedAt: '2026-09-28T09:03:00Z', resultExpiresAt: '2026-09-29T09:03:00Z', result: { [resultKey]: { items: [{ label: '항목', value: 1 }, { label: '누락', value: null }] } } });
	if (errorCode) data.errorCode = errorCode;
	return { data, cost: done ? (status === 'PARTIAL_SUCCESS' ? 150 : 300) : 0 };
}

// FAILED는 수집 실패와 결과 만료(RESULT_EXPIRED)를 모두 전달해야 한다.
const errorCodesByStatus = { AUTH_REJECTED: ['AUTH_REJECTED'], AUTH_EXPIRED: ['AUTH_EXPIRED'], FAILED: ['COLLECT_FAILED', 'RESULT_EXPIRED'] };

test('배포 대상 106개 목록과 Business 25개·상태 변경 24개 메타데이터가 일치한다', () => {
	const tools = read('TOOLS.md');
	const readme = read('README.md');
	const inventory = tools.match(/<details>[\s\S]*?<\/details>/)[0];
	const listed = [...inventory.matchAll(/`([a-z0-9_]+)`/g)].map(m => m[1]);
	assert.equal(listed.length, 106);
	assert.equal(new Set(listed).size, 106);
	const business = tools.split('## Business & Commerce')[1].split('<a id="identity">')[0];
	assert.equal([...business.matchAll(/^### `([a-z0-9_]+)`/gm)].length, 25);
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/business` \| 25 \|/);
	assert.match(readme, /24 of 106 are not read-only/);
	assert.match(readme, /82 of 106 tools are read-only/);
	for (const name of names) {
		assert.ok(listed.includes(name), name);
		assert.ok(readme.includes('`' + name + '`'), name);
		assert.ok(tools.includes('### `' + name + '`'), name);
		assert.ok(tools.includes('POST /rest/' + name), name);
	}
	for (const field of ['birthDate', 'authProvider', 'insuranceYears', 'incomeYears', 'transactionId', 'resultAvailable', 'resultExpiresAt', 'RESULT_EXPIRED']) assert.ok(tools.includes(field), field);
	assert.match(tools, /대응하는 원격 서버 버전이 필요/);
	assert.match(tools, /PCCC.*별도 계약/);
	assert.match(tools, /업무 상태 오류는 `isError: false`/);
	const pkg = JSON.parse(read('package.json'));
	const lock = JSON.parse(read('package-lock.json'));
	assert.equal(pkg.version, '3.5.0');
	assert.equal(lock.version, pkg.version);
	assert.equal(lock.packages[''].version, pkg.version);
	// 공개 JSON-RPC 예시도 실제 목록의 Tool을 참조해야 한다.
	for (const match of tools.matchAll(/```json\s*([\s\S]*?)```/g)) {
		const example = JSON.parse(match[1]);
		if (example.method === 'tools/call') assert.ok(listed.includes(example.params.name), example.params.name);
	}
});

test('TOOLS.md 상태 계약이 10개 상태·4개 처리 묶음·오류코드·결과 위치와 일치한다', () => {
	const tools = read('TOOLS.md');
	const section = contractSection(tools);
	assert.deepEqual(documentedStatusRows(section), Object.values(statusGroups));
	assert.equal(new Set(statuses).size, 10);
	assert.deepEqual(documentedErrorCodes(section), errorCodes);
	assert.deepEqual(Object.values(errorCodesByStatus).flat().sort(), [...errorCodes].sort());
	assert.match(section, /`RESULT_EXPIRED`[^\n]*만료된 결과는 다시 조회할 수 없으며 새로운 인증 접수가 필요/);
	for (const field of ['resultAvailable', 'sources', 'errorCode', 'progress', 'resultExpiresAt', '_meta["app.apick/cost"]']) assert.ok(section.includes('`' + field + '`'), field);
	const resultKeys = { employment: 'employment', personal_income: 'personalIncome', nps_join_history: 'npsJoinHistory', driving_license: 'drivingLicense', health_checkup: 'healthCheckup' };
	for (const product of products) {
		assert.equal(documentedResultKey(tools, product), resultKeys[product], product);
		assert.ok(section.includes('`result.' + resultKeys[product] + '`'), product);
	}
});

test('신규 Tool 검색과 5개 접수 Tool을 브릿지가 필드 변환 없이 전달한다', async () => {
	const sent = [], output = [];
	let response;
	const bridge = createBridge({ server: 'business', write: line => output.push(JSON.parse(line)), fetch: async (url, options) => {
		assert.equal(url, 'https://apick.app/mcp/business');
		sent.push(JSON.parse(options.body));
		return new Response(JSON.stringify(response), { status: 200, headers: { 'content-type': 'application/json' } });
	} });
	const discovery = { jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} };
	response = { jsonrpc: '2.0', id: 1, result: { tools: names.map(name => ({ name, inputSchema: { type: 'object' } })) } };
	await bridge.handleLine(JSON.stringify(discovery));
	assert.deepEqual(sent.at(-1), discovery);
	assert.deepEqual(output.at(-1), response);
	for (const product of products) {
		const transactionId = 'a'.repeat(32);
		const request = { jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'req_' + product, arguments: {
			name: '홍길동', birthDate: '19900101', phone: '01012345678', authProvider: 'kakao',
			...(product === 'employment' ? { insuranceYears: 3 } : product === 'personal_income' ? { incomeYears: 5 } : product === 'nps_join_history' ? { from: '2025-01', to: '2026-09' } : {})
		} } };
		response = { jsonrpc: '2.0', id: 2, result: { structuredContent: { transactionId, status: 'AUTH_REQUESTED', charged: true } } };
		await bridge.handleLine(JSON.stringify(request));
		assert.deepEqual(sent.at(-1), request);
		assert.deepEqual(output.at(-1), response);
	}
});

test('5개 결과 Tool이 10개 상태 전부와 상태별 핵심 필드를 JSON·SSE 모두에서 그대로 전달한다', async () => {
	const tools = read('TOOLS.md');
	const documented = documentedStatusRows(contractSection(tools)).flat();
	const sent = [], output = [];
	let body, contentType;
	const bridge = createBridge({ server: 'business', write: line => output.push(JSON.parse(line)), fetch: async (url, options) => {
		assert.equal(url, 'https://apick.app/mcp/business');
		sent.push(JSON.parse(options.body));
		return new Response(body, { status: 200, headers: { 'content-type': contentType } });
	} });
	const seen = new Map(products.map(product => [product, new Set()]));
	const seenErrorCodes = new Set();
	let id = 10;
	for (const product of products) {
		const resultKey = documentedResultKey(tools, product);
		const transactionId = '0123456789abcdef'.repeat(2);
		for (const status of documented) {
			for (const errorCode of errorCodesByStatus[status] || [undefined]) {
				const { data, cost } = statusData({ product, status, errorCode, resultKey, transactionId });
				for (const transport of ['json', 'sse']) {
					const get = { jsonrpc: '2.0', id: ++id, method: 'tools/call', params: { name: 'get_' + product, arguments: { transactionId } } };
					const response = { jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: JSON.stringify(data) }], structuredContent: data, isError: false, _meta: { 'app.apick/cost': cost } } };
					body = transport === 'sse' ? 'event: message\ndata: ' + JSON.stringify(response) + '\n\n' : JSON.stringify(response);
					contentType = transport === 'sse' ? 'text/event-stream' : 'application/json';
					const before = output.length;
					await bridge.handleLine(JSON.stringify(get));
					const label = `get_${product} ${status}${errorCode ? ' ' + errorCode : ''} ${transport}`;
					assert.deepEqual(sent.at(-1), get, label);
					assert.equal(output.length, before + 1, label);
					const got = output.at(-1);
					assert.deepEqual(got, response, label);
					const out = got.result.structuredContent;
					assert.equal(out.status, status, label);
					assert.equal(out.resultAvailable, statusGroups.done.includes(status), label);
					assert.equal(out.errorCode, errorCode, label);
					assert.equal(Object.hasOwn(out, 'errorCode'), Boolean(errorCode), label);
					assert.deepEqual(out.sources, data.sources, label);
					assert.equal(Object.hasOwn(out, 'result'), out.resultAvailable, label);
					if (out.resultAvailable) assert.deepEqual(out.result[resultKey], data.result[resultKey], label);
					assert.equal(got.result.isError, false, label);
					assert.equal(got.result._meta['app.apick/cost'], cost, label);
					assert.deepEqual(JSON.parse(got.result.content[0].text), data, label);
					seen.get(product).add(status);
					if (errorCode) seenErrorCodes.add(errorCode);
				}
			}
		}
	}
	for (const product of products) assert.deepEqual([...seen.get(product)], statuses, product);
	for (const status of ['PARTIAL_SUCCESS', 'AUTH_REJECTED', 'AUTH_EXPIRED', 'AUTH_COMPLETED', 'COLLECTED']) assert.ok(documented.includes(status), status);
	assert.deepEqual([...seenErrorCodes].sort(), [...errorCodes].sort());
});

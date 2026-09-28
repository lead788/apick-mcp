import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createBridge } from '../src/bridge.js';

const products = ['employment', 'personal_income', 'nps_join_history', 'driving_license', 'health_checkup'];
const names = products.flatMap(p => ['req_' + p, 'get_' + p]);
const read = file => readFileSync(new URL('../' + file, import.meta.url), 'utf8');

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

test('신규 Tool 검색과 5개 접수·결과 쌍을 브릿지가 필드 변환 없이 전달한다', async () => {
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
		for (const status of ['AUTH_WAITING', 'COLLECTING', 'SUCCESS', 'FAILED']) {
			const get = { jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'get_' + product, arguments: { transactionId } } };
			response = { jsonrpc: '2.0', id: 3, result: { isError: false, structuredContent: { transactionId, status, charged: false, ...(status === 'FAILED' ? { errorCode: 'RESULT_EXPIRED' } : {}) }, _meta: { 'app.apick/cost': 0 } } };
			await bridge.handleLine(JSON.stringify(get));
			assert.deepEqual(sent.at(-1), get);
			assert.deepEqual(output.at(-1), response);
		}
	}
});

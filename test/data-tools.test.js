import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createBridge } from '../src/bridge.js';

const products = ['employment', 'personal_income', 'nps_join_history', 'driving_license', 'health_checkup', 'cash_receipt_deduction', 'tax_return_history'];
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

// 공개 REST 타입과 SDK 예제 기준(네트워크 없이 검증):
// https://github.com/lead788/apick-api/blob/8b2cde8d27e3035557f7e342e3c8390e67657182/src/index.d.ts#L69-L103
// https://github.com/lead788/apick-api/blob/8b2cde8d27e3035557f7e342e3c8390e67657182/test/client.test.cjs#L308-L320
// fixture 전용 검사다. 브릿지의 응답 검증·변환 규칙으로 사용하지 않는다.
function assertDataContract(data) {
	assert.equal(data.schemaVersion, '1.0');
	assert.equal(typeof data.success, 'number');
	assert.ok(data.success === 0 || data.success === 1);
	assert.equal(typeof data.resultAvailable, 'boolean');
	assert.equal(typeof data.charged, 'boolean');
	if (Object.hasOwn(data, 'approvals')) assert.equal(typeof data.approvals, 'number');
	assert.ok(Array.isArray(data.sources));
	for (const source of data.sources) {
		assert.deepEqual(Object.keys(source).sort(), ['source', 'status', 'type']);
		for (const field of ['source', 'type', 'status']) assert.equal(typeof source[field], 'string');
	}
}

// get_* 응답의 공통 필드는 REST 계약을 따른다. 기관명과 result 내부 값은 전달 검사용 합성 데이터이며
// 상품별 결과 스키마를 정의하지 않는다. 중첩 객체·배열·null·한글의 원형 보존도 함께 검사한다.
function statusData({ product, status, errorCode, resultKey, transactionId, repeated = false }) {
	const group = Object.keys(statusGroups).find(key => statusGroups[key].includes(status));
	const done = group === 'done';
	const charged = done && !repeated;
	const data = {
		schemaVersion: '1.0', transactionId, product, status, resultAvailable: done, charged, success: charged ? 1 : 0,
		message: status + ' 상태입니다.',
		sources: done || status === 'COLLECTING' ? [
			{ source: '테스트 기관 1', type: product, status: 'SUCCESS' },
			{ source: '테스트 기관 2', type: product, status: status === 'SUCCESS' ? 'SUCCESS' : 'FAILED' }
		] : []
	};
	if (group === 'waiting') data.expiresAt = '2026-09-28T18:05:00+09:00';
	if (status === 'COLLECTING') data.progress = { completed: 1, total: 2 };
	if (done) Object.assign(data, { checkedAt: '2026-09-28T18:03:00+09:00', resultExpiresAt: '2026-09-29T18:03:00+09:00', result: { [resultKey]: { items: [{ label: '항목', value: 1 }, { label: '누락', value: null }] } } });
	if (errorCode) data.errorCode = errorCode;
	return { data, cost: charged ? (status === 'PARTIAL_SUCCESS' ? 150 : 300) : 0 };
}

// 결과 유효기간 만료도 AUTH_EXPIRED이며 errorCode로 인증 만료와 구분한다.
const errorCodesByStatus = { AUTH_REJECTED: ['AUTH_REJECTED'], AUTH_EXPIRED: ['AUTH_EXPIRED', 'RESULT_EXPIRED'], FAILED: ['COLLECT_FAILED'] };

test('응답 fixture가 공개 REST 필드 타입을 지키며 과거의 잘못된 형태를 거부한다', () => {
	for (const status of statuses) {
		const { data } = statusData({ product: 'employment', status, resultKey: 'employment', transactionId: 'a'.repeat(32) });
		assertDataContract(data);
		assert.equal(data.success, statusGroups.done.includes(status) ? 1 : 0);
		assert.equal(Object.hasOwn(data, 'approvals'), false);
		if (statusGroups.done.includes(status)) {
			const replay = statusData({ product: 'employment', status, resultKey: 'employment', transactionId: 'a'.repeat(32), repeated: true });
			assertDataContract(replay.data);
			assert.equal(replay.data.success, 0);
			assert.equal(replay.data.charged, false);
			assert.equal(replay.cost, 0);
			assert.equal(replay.data.resultAvailable, true);
			assert.deepEqual(replay.data.result, data.result);
		}
	}
	const valid = {
		schemaVersion: '1.0', success: 1, resultAvailable: false, charged: true, approvals: 2,
		sources: [{ source: '테스트 기관', type: 'employment', status: 'SUCCESS' }]
	};
	assertDataContract(valid);
	const { approvals, ...withoutApprovals } = valid;
	assertDataContract(withoutApprovals);
	for (const invalid of [
		{ schemaVersion: 1 }, { success: true }, { success: false },
		{ approvals: [{ provider: 'kakao', approved: false }] },
		{ sources: [{ id: 'source-1', status: 'SUCCESS', detail: null }] }
	]) assert.throws(() => assertDataContract({ ...valid, ...invalid }), assert.AssertionError);
});

test('배포 대상 118개 목록과 Business 29개·Web 17개·상태 변경 29개 메타데이터가 일치한다', () => {
	const tools = read('TOOLS.md');
	const readme = read('README.md');
	const inventory = tools.match(/<details>[\s\S]*?<\/details>/)[0];
	const listed = [...inventory.matchAll(/`([a-z0-9_]+)`/g)].map(m => m[1]);
	assert.equal(listed.length, 118);
	assert.equal(new Set(listed).size, 118);
	const business = tools.split('## Business & Commerce')[1].split('<a id="identity">')[0];
	assert.equal([...business.matchAll(/^### `([a-z0-9_]+)`/gm)].length, 29);
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/business` \| 29 \|/);
	const web = tools.split('## Web & Search')[1].split('<a id="convert">')[0];
	assert.equal([...web.matchAll(/^### `([a-z0-9_]+)`/gm)].length, 17);
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/web` \| 17 \|/);
	for (const name of ['youtube_metadata', 'youtube_thumbnail', 'youtube_subtitle_list', 'youtube_subtitle']) {
		assert.ok(listed.includes(name), name);
		assert.ok(web.includes('### `' + name + '`'), name);
	}
	assert.match(readme, /29 of 118 are not read-only/);
	assert.match(readme, /89 of 118 tools are read-only/);
	// 3.7.0: all 서버 전용 find_tools 가 전체 목록과 README 한눈에 보기에 포함된다.
	assert.ok(listed.includes('find_tools'));
	assert.ok(tools.includes('### `find_tools`'));
	assert.match(readme, /\*\*All only 통합 서버 전용\*\* `find_tools`/);
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/all` \| \*\*118\*\* \|/);
	for (const name of names) {
		assert.ok(listed.includes(name), name);
		assert.ok(readme.includes('`' + name + '`'), name);
		assert.ok(tools.includes('### `' + name + '`'), name);
		assert.ok(tools.includes('POST /rest/' + name), name);
	}
	for (const field of ['birthDate', 'authProvider', 'insuranceYears', 'incomeYears', 'years', 'transactionId', 'resultAvailable', 'resultExpiresAt', 'RESULT_EXPIRED']) assert.ok(tools.includes(field), field);
	assert.match(tools, /원격 서버에 이미 배포/);
	assert.match(tools, /PCCC.*별도 계약/);
	assert.match(tools, /업무 상태 오류는 `isError: false`/);
	const pkg = JSON.parse(read('package.json'));
	const lock = JSON.parse(read('package-lock.json'));
	assert.equal(pkg.version, '3.11.0');
	assert.equal(lock.version, pkg.version);
	assert.equal(lock.packages[''].version, pkg.version);
	// 공개 JSON-RPC 예시도 실제 목록의 Tool을 참조해야 한다. skills 서버는 all 과 별도 목록이다.
	const skillsSection = tools.split('<a id="skills"></a>')[1] || '';
	const skillsListed = [...skillsSection.matchAll(/^### `([a-z0-9_]+)`/gm)].map(m => m[1]);
	assert.equal(skillsListed.length, 6);
	for (const name of skillsListed) assert.ok(!listed.includes(name), name);
	for (const match of tools.matchAll(/```json\s*([\s\S]*?)```/g)) {
		const example = JSON.parse(match[1]);
		if (example.method === 'tools/call') assert.ok(listed.includes(example.params.name) || skillsListed.includes(example.params.name), example.params.name);
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
	const resultKeys = { employment: 'employment', personal_income: 'personalIncome', nps_join_history: 'npsJoinHistory', driving_license: 'drivingLicense', health_checkup: 'healthCheckup', cash_receipt_deduction: 'cashReceiptDeduction', tax_return_history: 'taxReturnHistory' };
	for (const product of products) {
		assert.equal(documentedResultKey(tools, product), resultKeys[product], product);
		assert.ok(section.includes('`result.' + resultKeys[product] + '`'), product);
	}
});

test('신규 Tool 검색과 7개 접수 Tool을 JSON·SSE에서 필드 변환 없이 전달한다', async () => {
	const sent = [], output = [];
	let response, transport = 'json';
	const bridge = createBridge({ server: 'business', write: line => output.push(JSON.parse(line)), fetch: async (url, options) => {
		assert.equal(url, 'https://apick.app/mcp/business');
		sent.push(JSON.parse(options.body));
		const body = transport === 'sse' ? 'event: message\ndata: ' + JSON.stringify(response) + '\n\n' : JSON.stringify(response);
		return new Response(body, { status: 200, headers: { 'content-type': transport === 'sse' ? 'text/event-stream' : 'application/json' } });
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
			...(product === 'employment' ? { insuranceYears: 3 } : product === 'personal_income' ? { incomeYears: 5 } : product === 'nps_join_history' ? { from: '2025-01', to: '2026-09' } : product === 'cash_receipt_deduction' ? { incomeYears: 3 } : product === 'tax_return_history' ? { years: 10 } : {})
		} } };
		const data = {
			schemaVersion: '1.0', transactionId, product, status: 'AUTH_REQUESTED',
			resultAvailable: false, charged: true, sources: [], message: '인증 대기중입니다.',
			expiresAt: '2026-09-28T18:05:00+09:00', success: 1, approvals: 2
		};
		for (const approvals of [2, undefined]) {
			if (approvals === undefined) delete data.approvals;
			else data.approvals = approvals;
			assertDataContract(data);
			response = { jsonrpc: '2.0', id: 2, result: { content: [{ type: 'text', text: JSON.stringify(data) }], structuredContent: data, isError: false, _meta: { 'app.apick/cost': 20 } } };
			for (transport of ['json', 'sse']) {
				const before = output.length;
				await bridge.handleLine(JSON.stringify(request));
				assert.deepEqual(sent.at(-1), request);
				assert.equal(output.length, before + 1);
				assert.deepEqual(output.at(-1), response);
				assertDataContract(output.at(-1).result.structuredContent);
			}
		}
	}
});

test('7개 결과 Tool이 10개 상태 전부와 상태별 핵심 필드를 JSON·SSE 모두에서 그대로 전달한다', async () => {
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
	const scenarios = documented.flatMap(status => (errorCodesByStatus[status] || [undefined]).flatMap(errorCode =>
		(statusGroups.done.includes(status) ? [false, true] : [false]).map(repeated => ({ status, errorCode, repeated }))));
	let id = 10;
	for (const product of products) {
		const resultKey = documentedResultKey(tools, product);
		const transactionId = '0123456789abcdef'.repeat(2);
		for (const status of documented) {
			for (const { errorCode, repeated } of scenarios.filter(scenario => scenario.status === status)) {
				const { data, cost } = statusData({ product, status, errorCode, resultKey, transactionId, repeated });
				assertDataContract(data);
				for (const transport of ['json', 'sse']) {
					const get = { jsonrpc: '2.0', id: ++id, method: 'tools/call', params: { name: 'get_' + product, arguments: { transactionId } } };
					const response = { jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: JSON.stringify(data) }], structuredContent: data, isError: false, _meta: { 'app.apick/cost': cost } } };
					body = transport === 'sse' ? 'event: message\ndata: ' + JSON.stringify(response) + '\n\n' : JSON.stringify(response);
					contentType = transport === 'sse' ? 'text/event-stream' : 'application/json';
					const before = output.length;
					await bridge.handleLine(JSON.stringify(get));
					const label = `get_${product} ${status}${errorCode ? ' ' + errorCode : ''} ${transport} repeated=${repeated}`;
					assert.deepEqual(sent.at(-1), get, label);
					assert.equal(output.length, before + 1, label);
					const got = output.at(-1);
					assert.deepEqual(got, response, label);
					const out = got.result.structuredContent;
					assertDataContract(out);
					assert.equal(out.success, statusGroups.done.includes(status) && !repeated ? 1 : 0, label);
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

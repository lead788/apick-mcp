import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createBridge, SERVERS } from '../src/bridge.js';

const TOOL_NAMES = ['search_skills', 'get_skill', 'quote_skill', 'run_skill', 'get_skill_run', 'cancel_skill_run'];

test('skills 서버를 받아 /mcp/skills 로 그대로 전달한다', async () => {
	assert.ok(SERVERS.includes('skills'));
	const requests = [];
	const output = [];
	const serverMessage = {
		jsonrpc: '2.0', id: 3,
		result: {
			isError: false,
			content: [{ type: 'text', text: '{"run_id":"run_1","status":"succeeded"}' }],
			structuredContent: { run_id: 'run_1', status: 'succeeded', billing: { status: 'captured', charged_points: 50 }, result: { nested: { list: [1, 2] } } }
		}
	};
	const bridge = createBridge({
		server: 'skills',
		apiKey: 'private-test-key',
		write: (line) => output.push(JSON.parse(line)),
		fetch: async (url, options) => {
			requests.push({ url, options });
			return new Response(JSON.stringify(serverMessage), { status: 200, headers: { 'content-type': 'application/json' } });
		}
	});
	const call = { jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'run_skill', arguments: { skill_id: 'sk_example', input: { nested: { list: [1, 2] } }, idempotency_key: 'order-0001', max_cost_points: 50 } } };
	await bridge.handleLine(JSON.stringify(call));
	assert.equal(String(requests[0].url), 'https://apick.app/mcp/skills');
	// 중첩 입력을 바꾸지 않고 그대로 보낸다.
	assert.deepEqual(JSON.parse(requests[0].options.body), call);
	assert.deepEqual(output, [serverMessage]);
});

test('Skills 문서가 6개 Tool 과 과금·멱등 계약을 담고 내부 정보를 담지 않는다', () => {
	const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
	const tools = readFileSync(new URL('../TOOLS.md', import.meta.url), 'utf8');
	const section = tools.split('<a id="skills"></a>')[1];
	assert.ok(section, 'TOOLS.md 에 Skills 절이 있어야 한다');
	for (const name of TOOL_NAMES) assert.ok(section.includes('### `' + name + '`'), name);
	assert.match(section, /`https:\/\/apick\.app\/mcp\/skills` — 6 tools/);
	assert.match(section, /\| `idempotency_key` \| `string` \| \*\*필수 \/ required\*\* \|/);
	assert.match(section, /실패·시간초과·취소는 차감하지 않습니다/);
	assert.match(section, /`wait_seconds` \| `integer` \| 선택 \/ optional \| [^\n]*0~20초 \(기본 20\)/);
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/skills` \| 6 \|/);
	// 검색 순서와 고를 때 참고하는 항목.
	assert.match(section, /\| `sort` \| `string` \| 선택 \/ optional \| `recommended` 추천 · `popular` 인기 · `used` 많이 사용 · `likes` 좋아요순 · `rating` 평점순 · `new` 최신 · `mine` 내가 자주 쓴 · `liked` 내가 좋아요한/);
	for (const field of ['usage_label', 'like_count', 'review_count', 'rating_average']) assert.ok(section.includes('`' + field + '`'), field);
	// Skills 는 all 과 별도라 118개 집계가 그대로다.
	assert.match(tools, /\| \*\*All 통합\*\* \| `\/mcp\/all` \| \*\*118\*\* \|/);
	// 판매자 원본·적립 비율·실행 방식 같은 내부 정보는 공개 문서에 두지 않는다.
	assert.doesNotMatch(section, /수수료|원가|정산|프롬프트|컨테이너|sandbox|docker|fee_bps|vault/i);
});

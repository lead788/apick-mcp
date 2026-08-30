import assert from 'node:assert/strict';
import test from 'node:test';
import { createBridge } from '../src/bridge.js';
import { readFileSync } from 'node:fs';

test('신분증 structuredContent 오류 코드를 변경 없이 전달한다', async () => {
	const output = [];
	const serverMessage = {
		jsonrpc: '2.0', id: 7,
		result: {
			isError: true,
			content: [{ type: 'text', text: '[422] IDENTITY_TEXT_UNREADABLE' }],
			structuredContent: { error_code: 'IDENTITY_TEXT_UNREADABLE', error: '글자를 읽지 못했습니다.' }
		}
	};
	const bridge = createBridge({
		server: 'identity',
		write: (line) => output.push(JSON.parse(line)),
		fetch: async () => new Response(JSON.stringify(serverMessage), { status: 200, headers: { 'content-type': 'application/json' } })
	});
	await bridge.handleLine(JSON.stringify({ jsonrpc: '2.0', id: 7, method: 'tools/call', params: { name: 'identity_document_id_card', arguments: {} } }));
	assert.deepEqual(output, [serverMessage]);
});

test('2.0.1 공개 메타데이터는 운영 78개·Convert 14개·AI 4개 계약과 일치한다', () => {
	const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
	const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
	const tools = readFileSync(new URL('../TOOLS.md', import.meta.url), 'utf8');
	assert.equal(pkg.version, '2.0.1');
	assert.match(pkg.description, /78 Korean data & AI tools/);
	assert.match(readme, /\| \[AI · LLM\]\(TOOLS\.md#ai\) \| `https:\/\/apick\.app\/mcp\/ai` \| 4 \|/);
	assert.match(tools, /\| \*\*All 통합\*\* \| `\/mcp\/all` \| \*\*78\*\* \|/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/convert` — 14 tools/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/ai` — 4 tools/);
	for (const retired of ['ai_' + 'image_generation', 'person_' + 'detection', 'car_' + 'detection']) {
		assert.doesNotMatch(readme, new RegExp(retired));
		assert.doesNotMatch(tools, new RegExp(retired));
	}
	assert.doesNotMatch(readme, /`tts`|text-to-speech|음성합성\(TTS\)/i);
	assert.doesNotMatch(tools, /`tts`|text-to-speech|음성합성\(TTS\)/i);
	assert.match(tools, /`google_lens_search`/);
	assert.match(tools, /`face_detection`/);
});

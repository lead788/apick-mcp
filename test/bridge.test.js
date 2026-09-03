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

test('2.3.0 공개 메타데이터는 운영 83개·Convert 19개·AI 4개와 외국인 신분증 마스킹 계약에 일치한다', () => {
	const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
	const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
	const tools = readFileSync(new URL('../TOOLS.md', import.meta.url), 'utf8');
	assert.equal(pkg.version, '2.3.0');
	assert.match(pkg.description, /83 Korean data & AI tools/);
	assert.match(readme, /\| \[AI · LLM\]\(TOOLS\.md#ai\) \| `https:\/\/apick\.app\/mcp\/ai` \| 4 \|/);
	assert.match(tools, /\| \*\*All 통합\*\* \| `\/mcp\/all` \| \*\*83\*\* \|/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/convert` — 19 tools/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/ai` — 4 tools/);
	for (const retired of ['ai_' + 'image_generation', 'person_' + 'detection', 'car_' + 'detection']) {
		assert.doesNotMatch(readme, new RegExp(retired));
		assert.doesNotMatch(tools, new RegExp(retired));
	}
	assert.doesNotMatch(readme, /`tts`(?!_jobs)|text-to-speech|음성합성\(TTS\)/i);
	assert.doesNotMatch(tools, /`tts`(?!_jobs)|text-to-speech|음성합성\(TTS\)/i);
	for (const name of ['tts_jobs_create', 'tts_jobs_status', 'tts_jobs_cancel', 'tts_jobs_result', 'tts_jobs_subtitles']) {
		assert.match(readme, new RegExp('`' + name + '`'));
		assert.match(tools, new RegExp('`' + name + '`'));
	}
	assert.match(tools, /재다운로드할 수 없습니다/);
	assert.match(tools, /MP3\(`audio\/mpeg`\)/);
	assert.match(tools, /`waiting` 또는 `processing` 상태에서 취소/);
	assert.match(readme, /Cancels a waiting or processing job without a refund/);
	assert.doesNotMatch(tools, /완료된 ZIP 결과/);
	assert.match(readme, /MP3와 ASS 자막은 서로 독립된 1회용 원본/);
	assert.match(tools, /최대 800자/);
	assert.doesNotMatch(tools, /20,000자/);
	assert.match(tools, /ASS 타이밍 자막/);
	assert.match(readme, /8MB/);
	assert.match(readme, /허용 IP가 공란이면 제한 없이/);
	for (const document of ['외국인등록증', '영주증', '외국국적동포 국내거소신고증']) {
		assert.match(readme, new RegExp(document));
		assert.match(tools, new RegExp(document));
	}
	assert.match(tools, /마스킹만 지원하며 진위확인 Tool의 범위에는 포함되지 않습니다/);
	assert.match(tools, /`google_lens_search`/);
	assert.match(tools, /`face_detection`/);
});

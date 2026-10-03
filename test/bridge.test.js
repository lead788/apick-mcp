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

test('3.9.2 공개 메타데이터는 대상 115개·Convert 22개·AI 15개와 이미지 작업 계약에 일치한다', () => {
	const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
	const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
	const tools = readFileSync(new URL('../TOOLS.md', import.meta.url), 'utf8');
	assert.equal(pkg.version, '3.9.2');
	assert.match(pkg.description, /115 Korean data, AI, image & video tools/);
	assert.match(readme, /\| \[AI · LLM\]\(TOOLS\.md#ai\) \| `https:\/\/apick\.app\/mcp\/ai` \| 15 \|/);
	assert.match(tools, /\| \*\*All 통합\*\* \| `\/mcp\/all` \| \*\*115\*\* \|/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/business` — 29 tools/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/web` — 17 tools/);
	assert.doesNotMatch(tools, /`check_pccc`/);
	assert.doesNotMatch(readme, /`check_pccc`/);
	assert.match(tools, /\| `birthday` \| `string` \| \*\*필수 \/ required\*\* \| 생년월일 8자리/);
	assert.match(tools, /\| `tx_id` \| `string` \| \*\*필수 \/ required\*\* \| req_pccc/);
	assert.match(tools, /조회된 개인통관고유부호가 없습니다/);
	assert.doesNotMatch(tools, /`auth_key`/);
	assert.doesNotMatch(tools, /인증번호 6자리/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/convert` — 22 tools/);
	assert.match(tools, /`https:\/\/apick\.app\/mcp\/ai` — 15 tools/);
	for (const name of ['image_generate','image_edit','image_batch_create','image_batch_status','image_batch_result']) assert.match(tools, new RegExp('`'+name+'`'));
	assert.doesNotMatch(tools, /image_batch_cancel/);
	assert.match(tools, /최대 28,000자/);
	assert.match(tools, /접수된 작업은 취소할 수 없습니다/);
	assert.doesNotMatch(tools, /mask_url/);
	assert.doesNotMatch(tools, /output_compression/);
	assert.match(tools, /reference_image_url/);
	assert.match(tools, /image_count/);
	for (const retired of ['ai_' + 'image_generation', 'person_' + 'detection', 'car_' + 'detection']) {
		assert.doesNotMatch(readme, new RegExp(retired));
		assert.doesNotMatch(tools, new RegExp(retired));
	}
	assert.doesNotMatch(readme, /`tts`(?!_jobs)|text-to-speech|음성합성\(TTS\)/i);
	assert.doesNotMatch(tools, /`tts`(?!_jobs)|text-to-speech|음성합성\(TTS\)/i);
	for (const name of ['tts_jobs_create', 'tts_jobs_status', 'tts_jobs_cancel', 'tts_jobs_result', 'tts_jobs_subtitles', 'tts_jobs_quality', 'tts_jobs_retry', 'tts_jobs_candidate_audio']) {
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

test('3.7.0 find_tools·stt artifact_filter·llm_chat relevance 계약이 문서화돼 있다', () => {
	const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
	const tools = readFileSync(new URL('../TOOLS.md', import.meta.url), 'utf8');
	const changelog = readFileSync(new URL('../CHANGELOG.md', import.meta.url), 'utf8');
	// find_tools: all 서버 전용, 무료, 인증키 불필요, task 2~500자, limit 1~10(기본 5)
	const entry = tools.split('### `find_tools`')[1].split('\n---')[0];
	assert.match(entry, /읽기 전용 \/ read-only/);
	assert.match(entry, /server `all`/);
	assert.match(entry, /\| `task` \| `string` \| \*\*필수 \/ required\*\* \| [^\n]*2~500자/);
	assert.match(entry, /\| `limit` \| `integer` \| 선택 \/ optional \| [^\n]*1~10 \(기본 5\)/);
	for (const field of ['tools[].name', 'tools[].title', 'tools[].description', 'tools[].relevance', 'message']) assert.ok(entry.includes('`' + field + '`'), field);
	assert.match(entry, /`high` · `medium` · `low`/);
	assert.match(entry, /인증키 없이/);
	assert.match(readme, /### Find the right tool \/ 알맞은 Tool 찾기 — `find_tools`/);
	assert.match(readme, /works without an API key, and is available on the `all` server only/);
	assert.match(readme, /`bank_code`·`info`·`llm_models`·`find_tools`는 무료입니다/);
	assert.match(readme, /"name":"find_tools"/);
	// find_tools 는 all 전용이라 분야별 서버 수는 그대로다.
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/convert` \| 22 \|/);
	assert.match(readme, /`https:\/\/apick\.app\/mcp\/ai` \| 15 \|/);
	// stt artifact_filter
	assert.match(tools, /\| `artifact_filter` \| `string` \| 선택 \/ optional \| [^\n]*`flag`, `remove` \|/);
	for (const field of ['segments[].suspect', 'artifact_filter.mode', 'artifact_filter.applied', 'artifact_filter.suspect_count', 'artifact_filter.removed']) assert.ok(tools.includes('`' + field + '`'), field);
	// llm_chat compact.strategy relevance
	assert.match(tools, /strategy: 'none'\(기본\) \\\| 'sliding_window' \\\| 'relevance'/);
	assert.match(changelog, /## 3\.7\.0[\s\S]*`find_tools`[\s\S]*`artifact_filter`[\s\S]*`relevance`[\s\S]*## 3\.6\.0/);
});

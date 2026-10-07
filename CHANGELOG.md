# 4.3.3

- `google_rank_check` 가 정확한 순위만 돌려줍니다. 찾은 순위보다 앞쪽 구간을 모두 확인했을 때만 순위를, 찾지 못했을 때는 1~100위를 모두 확인했을 때만 `found: false` 를 응답합니다. 그렇지 못하면 결과 없이 실패로 끝나며 과금하지 않습니다(이전의 확인 구간 비율 과금은 없어졌습니다). `complete`·`unchecked_ranks` 필드는 그대로 있으며 성공 응답에서는 항상 `true`·빈 배열입니다.
- `app_reviews` 의 2페이지 이후 리뷰를 더 안정적으로 가져옵니다.
- `google_maps_search` 가 혼잡한 시간에도 더 안정적으로 응답합니다. 처리에 보통 30~60초가 걸리므로 클라이언트의 도구 대기 시간을 120초 이상으로 두기를 권장합니다. 도구·파라미터 추가나 삭제는 없습니다.
- `google_rank_check` now returns only exact results. It reports a rank only when every range above it was checked, and `found: false` only when ranks 1-100 were all checked; otherwise the call fails without charge (proportional charging for partially checked ranges is gone). `complete` and `unchecked_ranks` remain and are always `true` and empty on success.
- `app_reviews` reads review pages 2 and later more reliably.
- `google_maps_search` responds more reliably at busy times. It usually takes 30-60 s, so keep your client tool timeout at 120 s or more. No tools or parameters were added or removed.

# 4.3.2

- 응답을 받기 전에 연결이 끊긴 호출은 과금하지 않습니다. MCP 클라이언트가 시간 초과 등으로 요청을 취소하면 서버도 처리를 멈추고 포인트를 차감하지 않으며, 같은 요청을 다시 보내면 한 번만 과금됩니다. 오래 걸리는 조회(인스타그램·틱톡 프로필, 구글 지도 검색 등)를 쓸 때 클라이언트의 도구 대기 시간을 넉넉히(120초 이상) 두기를 권장합니다.
- `crawl_youtube` 가 정상 동작합니다. `user_id` 에 채널 아이디(예: `CNN`)·핸들(`@CNN`)·채널 ID(`UC…`)·채널 주소를 받고, 채널 정보(구독자 수·설명·인증 여부)와 최근 업로드 영상 최대 60개를 돌려줍니다.
- `app_reviews` 가 리뷰를 더 안정적으로 가져옵니다. 리뷰가 있는 앱인데 리뷰를 가져오지 못하면 과금 없이 오류로 응답합니다. 잘못된 앱 ID 는 입력 오류(400), 없는 앱은 404 입니다.
- `youtube_formats` 의 `estimated_cost` 가 호출한 계정에 실제로 적용되는 단가로 계산됩니다.
- 파일로 돌려주는 도구의 파일 이름 확장자가 실제 형식과 맞습니다(예: `youtube_subtitle` 의 srt 는 `.srt`).
- `google_shopping_search` 의 모든 상품에 `image_url` 이 채워집니다(상위 상품도 72시간 유효한 이미지 주소로 제공). 도구·파라미터 추가나 삭제는 없습니다.
- Calls whose connection drops before the response arrives are no longer charged. When an MCP client cancels a request (for example on its own timeout) the server stops and charges nothing; retrying the same request is charged once. For slow lookups (Instagram/TikTok profiles, Google Maps search) give your client a generous tool timeout (120 s or more).
- `crawl_youtube` now works. `user_id` accepts a channel name (e.g. `CNN`), a handle (`@CNN`), a channel ID (`UC…`) or a channel URL, and returns the channel profile (subscribers, description, verification) with up to 60 latest uploads.
- `app_reviews` fetches reviews more reliably and returns an unbilled error when an app that has reviews cannot be read; an invalid app ID is a 400 input error and an unknown app is 404.
- `youtube_formats` `estimated_cost` now uses the price that actually applies to the calling account.
- File results carry the right extension (e.g. `.srt` for `youtube_subtitle` in srt).
- Every `google_shopping_search` item now has an `image_url` (top items get an image URL valid for 72 hours). No tools or parameters were added or removed.

# 4.3.1

- 요금 안내 갱신(서버 이용약관 제9조 개정, 2026-11-06 시행): 사용량 과금 상품의 기본요금을 안내합니다. TTS 작업당 5P, LLM 채팅(`llm_chat`) 요청당 5P, 결과 건수 과금 수집 작업은 결과가 있을 때 작업당 10P(인스타그램 댓글 50P)입니다. 포인트 계산의 소수점은 올림하며(0.1P → 1P) 과금되는 이용 1건은 최소 1P입니다. 도구·파라미터 변경은 없습니다.
- Pricing notes (Terms art. 9 amended, effective 2026-11-06): usage-billed products now have a base fee — TTS 5 points per job, `llm_chat` 5 points per request, result-billed collection jobs 10 points per job with results (Instagram comments 50). Fractional points are rounded up (0.1 → 1) and every billed use is at least 1 point. No tool or parameter changes.
- 에이픽 에이전트(`apick-agent`) 안내: AI 사용 작업 기본 5P(2026-11-06부터), 캐시 재사용 1P로 표기를 실제 요금에 맞췄습니다. / `apick-agent` notes now match billing: 5-point base fee for AI jobs from 2026-11-06, cache reuse 1 point.

# 4.3.0

- Web 서버에 `google_maps_place_create`(구글 지도 장소 상세·리뷰 조회 접수)를 추가했습니다. 평점·리뷰 수·별점 분포(1~5점)·대표 리뷰(최대 10건)·영업시간·시간대별 혼잡도·비슷한 장소·사진을 돌려주며, 결과는 `scrape_jobs_status` 로 받습니다. 건당 20포인트, 장소를 찾지 못하면 환불됩니다. 통합 도구는 144개, Web은 42개입니다.
- Add `google_maps_place_create` to the Web server: Google Maps place rating, reviews count, 1-5 star distribution, top reviews, opening hours, busy hours, similar places and photos, read through `scrape_jobs_status`. 20 points per place, refunded if not found — 144 tools overall, 42 on Web.

# 4.2.1

- `youtube_subtitle` 이 자동 번역 자막(`translated: true`) 때문에 받지 못하면 원어 자막을 쓰라는 안내와 함께 실패로 응답합니다(과금 없음). 서버 재시작 등으로 처리가 끊긴 유튜브 요청은 서버가 자동으로 다시 시도합니다.
- `youtube_subtitle` now fails with guidance to use an original-language track when an auto-translated caption is refused (not charged). YouTube requests interrupted by a server restart are retried automatically.

# 4.2.0

- Web 서버에 아마존 상품 조회, X 프로필·게시물 조회와 수집 작업 7개(인스타그램 게시물 목록·댓글, 틱톡 키워드 검색·영상·댓글, 아마존 리뷰 접수, 작업 상태·결과 조회)를 추가했습니다. 통합 도구는 143개, Web은 41개입니다.
- 수집 작업(`*_create`)은 바로 `job_id` 를 돌려줍니다. 접수 때 `max_results` × 단가를 예약하고, `scrape_jobs_status` 로 결과를 받을 때 실제 결과 건수만 차감한 뒤 나머지는 돌려드립니다. 실패·대상 없음은 전액 환불, 결과는 72시간 보관합니다.
- 댓글·리뷰 작성자는 공개 사용자명만 제공합니다.
- Add Amazon product lookup, X profile and post lookup, and 7 collection-job tools (Instagram posts and comments, TikTok keyword search, video and comments, Amazon reviews, and job status) — 143 tools overall, 41 on Web.
- Collection jobs return a `job_id` immediately, reserve `max_results` × unit price, and charge only the results actually returned when read through `scrape_jobs_status`; failures are fully refunded and results are kept for 72 hours.

# 4.1.0

- Web 서버에 유튜브 검색·채널·재생목록·해시태그·댓글·다운로드 화질 조회와 오디오 다운로드 7개 도구를 추가했습니다. 통합 도구는 133개, Web은 31개입니다.
- `download_youtube_video` 는 화질(quality)·코덱(codec)·구간(start·end)을 고를 수 있고, 1시간 유효한 다운로드 링크를 돌려줍니다. 요금은 30포인트 + 파일 10MB당 2포인트입니다(오디오는 20포인트 기본).
- Add 7 Web tools for YouTube: search, channel, playlist, hashtag, comments, downloadable formats and audio download — 133 tools overall, 31 on Web.
- `download_youtube_video` now accepts quality, codec and a time range, and returns a download link valid for 1 hour. Billed as 30 points plus 2 points per 10MB (audio: 20 points base).
- Web 서버에 구글 뉴스·쇼핑·지도 장소 검색, 구글 검색 순위 확인(1~100위), 인스타그램 프로필·게시물/릴스 조회, 틱톡 프로필 조회 7개 도구를 추가했습니다. 통합 도구는 126개, Web은 24개입니다.
- `google_rank_check` 는 일부 순위 구간을 확인하지 못하면 `complete:false`·`unchecked_ranks` 와 함께 확인한 구간 비율만큼만 과금됩니다.
- `google_search` 는 페이지당 최대 10건을 돌려줍니다. `google_image_search` 의 page 는 1~5(페이지당 20건, 최대 100건)입니다. 실패한 호출은 과금되지 않습니다.
- Add 7 Web tools: Google News, Shopping and Maps place search, Google rank check (top 100), Instagram profile and post/reel lookup, and TikTok profile lookup — 126 tools overall, 24 on Web.
- `google_search` returns up to 10 results per page; `google_image_search` pages are 1-5 (20 per page, 100 max). Failed calls are not charged.
- The bridge remains a transparent JSON-RPC transport; no server implementation or credentials are included.

# 4.0.1 — 2026-10-06

- 이미지 도구(`image_generate`·`image_edit`·`image_batch_create`) 문서에 `quality` 옵션과 품질별 장당 고정가(기본 40P · 고급 350P · 최고급 1,400P)를 반영했습니다. 같은 요청도 매번 새로 생성·과금하므로 이미지 도구의 `idempotency_key` 안내를 삭제했습니다.
- Document the image `quality` option and fixed per-image prices (basic 40, advanced 350, premium 1,400 points). Image tools no longer accept `idempotency_key`; every request is generated and charged again.

# 4.0.0

- 공개 전 점검 중인 Business 12개를 활성 목록에서 제외했습니다. 상세 계약은 비활성 표시와 함께 보존합니다. / Exclude 12 unavailable Business tools from the active inventory and retain their contracts with an availability notice.

- Align TTS documentation with Gemini/ChatGPT, shared expression options, multi-speaker input and default-on paid normalization. Legacy APICK voices, automatic fallback and quality/retry/candidate tools have retired.
- TTS 현재 계약과 한영 문서·중계 시험을 동기화했습니다. 기본 접수는 Gemini이며 두 엔진 모두 MP3·원문 ASS 결과를 사용합니다. 현재 통합 도구는 119개, Convert는 25개입니다.
- The bridge remains a transparent JSON-RPC transport; no server implementation or credentials are included.

# 3.12.0

- TTS: ChatGPT(gpt-audio-mini) 직접 합성 도구 `tts_openai_create`·`tts_openai_voices`를 추가했습니다. 도구 수는 133개(Convert 27개)입니다.
- TTS: 감정·톤·억양·속도·음높이·음량·멀티화자 옵션과 `speakers`·`multi_speaker`를 Gemini·ChatGPT 공통으로 지원합니다. 옵션을 생략한 기존 호출은 그대로 동작합니다.
- TTS: `tts_quote` 엔진이 `gemini | openai`로 바뀌었습니다. `apick` 자체 합성과 대기열 전환(`fallback_policy`·`fallback_options`)은 종료되었습니다.
- TTS: add ChatGPT (gpt-audio-mini) synthesis tools `tts_openai_create` and `tts_openai_voices`, for 133 tools overall (Convert 27).
- TTS: emotion, tone, accent, pace, pitch, volume and multi-speaker options now work on both engines through the same fields; omitting them keeps the previous behavior.
- TTS: `tts_quote` now takes `engine: gemini | openai`. The apick engine and its queue fallback options are retired.

# 3.11.0

- TTS: Gemini direct synthesis, queue fallback, default-on paid normalization, unified MP3/ASS and billing.
- TTS: Gemini 직접 합성, 대기 상태별 전환, 기본 on 유료 정규화, 공통 MP3·ASS와 정산 내역.
- 사용량 미확정 작업은 재호출하지 않고 작업 ID로 정산 상태를 조회합니다.
- Poll the returned job ID for unconfirmed usage instead of resubmitting generation.

# 3.10.0 — 2026-10-04

subagent 서버(7개 도구)를 추가했습니다. 로컬 파일 수집과 스킬 설치는 apick-subagent 패키지를 사용합니다.

Adds the Subagent integration and usage-based installed-agent contract. Existing API contracts remain supported.

# 변경 기록

## 3.9.3 — 2026-10-04

- 기존·신규 스킬의 성능표와 공개 측정 JSON 안내를 추가했습니다. 도구 수·브릿지 동작은 그대로입니다.
- Document measured Skill performance and its public JSON report. Tool counts and bridge behavior are unchanged.

## 3.9.2 — 2026-10-03

- 상품별 조회 안내와 공통 인증 가이드 링크를 보강했습니다. API 계약 변경은 없습니다.
- Document product-specific data guides and shared authentication; API contracts are unchanged.

## 3.9.1 — 2026-10-03

- 스킬 가변 견적·시간·도구 호출 수와 결과 파일 안내 추가. 브릿지 동작 변경 없음.
- Document Skill execution estimates and authenticated artifact downloads; bridge behavior unchanged.

## 3.9.0 — 2026-10-02

- `skills` 서버의 `search_skills` 에 `sort` 를 추가했습니다: `recommended`(추천)·`popular`(인기)·`used`(많이 사용)·`likes`(좋아요순)·`rating`(평점순)·`new`(최신)·`mine`(내가 자주 쓴)·`liked`(내가 좋아요한). 생략하면 예전처럼 등록 순서입니다. 검색어는 Skill 의 이름·요약·설명과 판매자 이름에서 찾습니다.
- Add `sort` to `search_skills` on the `skills` server: `recommended`, `popular`, `used`, `likes`, `rating`, `new`, `mine` and `liked` (the last two are scoped to the API key's account). Omitting it keeps registration order. The query now matches a Skill's name, summary, description and seller name.
- `search_skills`·`get_skill` 결과에 고를 때 참고하는 `usage_label`(사용 건수 구간: `1,000회 미만`, `1,000+`, `1만+` …)·`like_count`·`review_count`·`rating_average` 가 추가됐습니다. 좋아요와 리뷰는 에이픽 웹의 Skill 화면에서 남깁니다.
- `search_skills` and `get_skill` results now include `usage_label` (a usage tier, not an exact count), `like_count`, `review_count` and `rating_average`. Likes and reviews are left on the Skill page of the APICK website.
- Tool 수와 브릿지 전송 방식은 바뀌지 않았습니다. 원격 서버에는 이미 배포돼 있습니다. / No tool-count or bridge transport change. Already live on the remote server.

## 3.8.2 — 2026-10-02

- TTS 목소리 문서를 현재 지원하는 14개 `voice_id`와 표시 이름으로 갱신했습니다. 더 이상 제공하지 않는 예전 목록과 예시를 정리했습니다.
- Update the TTS voice documentation to the 14 currently supported `voice_id` values and display names, removing the outdated list and example.
- TTS 요금이 100자당 10포인트에서 "100자까지 30포인트, 이후 100자당 10포인트"로 바뀌었습니다(100자 30P, 101자 40P, 800자 100P). 한국어 읽기 자동 변환이 이 요금에 포함되며, 과금 기준은 계속 보낸 원문의 글자 수입니다.
- TTS pricing changed from 10 points per 100 characters to 30 points for up to 100 characters plus 10 points for each additional 100 characters (100 chars 30P, 101 chars 40P, 800 chars 100P). Automatic Korean reading conversion is included, and billing is still based on the character count of the text you send.
- 모든 TTS 요청에 한국어 읽기 전처리가 자동 적용되어 추가 옵션이나 별도 Skill 호출이 필요하지 않음을 한영 문서에 명시했습니다. 원문 기준 요금과 ASS 자막 표기는 유지되며, 정규화에 실패하면 원문으로 합성합니다. 요청·응답과 브릿지 동작은 변경하지 않았습니다.
- Clarify in Korean and English that every TTS request automatically applies Korean reading normalization, with no extra option or separate Skill call. Billing and ASS subtitle spelling remain based on the original text; failed normalization falls back to synthesis from that text. No request, response or bridge behavior changes.

## 3.8.1 — 2026-10-02

- `tts_jobs_create`가 문장의 숫자·단위·기호·영문 약어를 문맥에 맞는 한글 읽기로 자동 변환해 합성한다는 안내를 문서에 추가했습니다. 과금 글자 수와 요금은 보낸 원문 기준이고 요청·응답 형식은 그대로이며, ASS 자막은 보낸 원문 표기로 제공됩니다. 문서만 바뀌었고 브릿지와 Tool 수는 그대로입니다.
- Document that `tts_jobs_create` automatically converts numbers, units, symbols and English abbreviations into context-appropriate Korean readings before synthesis. Billing is based on the text you send, request and response formats are unchanged, and ASS subtitles keep the text as you sent it. Documentation only; no bridge or tool-count change.

## 3.8.0 — 2026-10-02

- 브릿지가 `skills` 서버(`https://apick.app/mcp/skills`)를 받습니다: `npx -y apick-mcp --server skills`. 검수된 Skill 을 검색·상세·견적·실행·조회·취소하는 Tool 6개(`search_skills`·`get_skill`·`quote_skill`·`run_skill`·`get_skill_run`·`cancel_skill_run`)이며 `all` 서버의 115개에는 포함되지 않습니다.
- The bridge accepts the `skills` server (`https://apick.app/mcp/skills`): `npx -y apick-mcp --server skills`. Six tools to search, inspect, quote, run, read and cancel reviewed Skills. They are not part of the 115 tools on `all`.
- `run_skill`은 `idempotency_key`가 필수이며 결과가 약속한 형식으로 반환된 실행만 차감합니다. 실패·시간초과·취소는 차감하지 않습니다. 차감 금액은 기본 금액에 실제 AI 사용량을 더한 값이고, `quote_skill`이 예상 금액(`estimated_points`)과 최대 금액(`max_points`)을 알려 줍니다.
- `run_skill` requires `idempotency_key` and charges only when a result in the promised format is returned; failures, timeouts and cancellations are not charged. The charge is the base amount plus actual AI usage; `quote_skill` returns `estimated_points` and `max_points`.
- 브릿지 전송 방식은 바뀌지 않았습니다. / No bridge transport change.

## 3.7.0 — 2026-10-01

- `all` 서버에 도구 찾기 Tool `find_tools`를 추가했습니다. 자연어(한국어·영어) 작업 설명(`task`, 2~500자)을 받아 알맞은 Tool을 최대 `limit`개(1~10, 기본 5) 추천하고 이름·제목·설명·관련도(`high`·`medium`·`low`)를 돌려줍니다. 무료이며 인증키 없이 호출할 수 있습니다. 전체 115개, 조회 Tool 87개, 상태 변경 Tool 28개이며 분야별 서버의 Tool 수는 그대로입니다. 원격 서버에는 이미 배포돼 있습니다.
- Add `find_tools` to the `all` server. It takes a natural-language task (`task`, 2–500 chars, Korean or English) and recommends up to `limit` (1–10, default 5) matching tools with name, title, description and a `high`/`medium`/`low` relevance label. Free and callable without an API key. 115 total, 87 read-only, 28 non-read-only; domain server counts are unchanged. Already live on the remote server.
- `stt`에 선택 인자 `artifact_filter`(`flag`·`remove`)를 추가했습니다. 무음·잡음 구간에서 생긴 비음성 문구를 `flag`는 `segments[].suspect`로 표시하고 `remove`는 제거한 뒤 `text`를 다시 구성합니다. 응답의 `artifact_filter`에 `mode`·`applied`와 `suspect_count` 또는 `removed`가 포함되며 추가 요금은 없습니다. 생략하면 기존 응답과 같습니다.
- Add optional `artifact_filter` (`flag` | `remove`) to `stt` to mark or remove non-speech phrases produced by silence or noise. Responses include `segments[].suspect` (flag) and `artifact_filter { mode, applied, suspect_count | removed }`. No extra charge; omitting it keeps the previous response.
- `llm_chat`의 `compact.strategy`에 `relevance`를 추가했습니다. 최근 2페어와 마지막 질문에 필요한 이전 페어를 골라 `window_pairs` 이내로 보내 input 토큰을 줄입니다.
- `llm_chat` `compact.strategy` now accepts `relevance`, which keeps the 2 latest pairs plus earlier pairs needed for the latest question, within `window_pairs`, to reduce input tokens.
- 브릿지 전송 방식은 바뀌지 않았습니다. / No bridge transport change.

## 3.6.0 — 2026-09-30

- 간편인증 데이터 조회 2종(현금영수증 소득공제 내역, 국세 신고내역 조회)의 접수·결과 Tool 4개와 유튜브 영상 정보·썸네일·자막 목록·자막 다운로드 Tool 4개를 추가했습니다. 전체 114개, Business 29개, Web 17개, 상태 변경 Tool 28개입니다. 원격 서버에는 이미 배포돼 있습니다.
- Add four request/result tools for two simple-auth data products (cash receipt deductions, tax return history) and four YouTube tools (metadata, thumbnail, subtitle list, subtitle download). 114 total, 29 Business, 17 Web, 28 non-read-only. Already live on the remote server.
- 새 간편인증 상품은 인증 발송 성공 시 20P, 최초 결과 60P × (1 + 0.5 × (연수 - 1))로 과금되며 대기·유효기간 내 재조회는 무료입니다.
- The new simple-auth products charge 20P on successful authentication dispatch and 60P × (1 + 0.5 × (years - 1)) for the first result; waiting polls and repeat reads are free.

## 3.5.0 — 2026-09-28

- 간편인증 데이터 조회 5종의 접수·결과 Tool 10개 계약을 추가했습니다. 전체 106개, Business 25개, 상태 변경 Tool 25개입니다. 원격 서버의 대응 패치 배포가 필요합니다.
- Document ten request/result tools for five simple-auth data products (106 total, 25 Business, 24 non-read-only). Requires the corresponding remote-server deployment.
- SDK와 동일한 입력·응답 이름, 승인 대기 흐름, 최초 결과 과금·무료 재조회와 PCCC 계약 차이를 명시했습니다.
- Preserve the bridge protocol; verify metadata, tool discovery, and request/result forwarding without live data calls.

## 3.4.1 — 2026-09-27

- 이미지 생성·편집 요금을 장당 25포인트에서 40포인트로 인상했습니다.
- Image generation/editing price increased from 25 to 40 points per image.

## 3.4.0 — 2026-09-19

- 개인통관고유부호 조회가 문자(SMS) 인증번호 방식에서 간편인증 방식으로 바뀌었습니다. 기존 `rrn1`·`rrn2`·`auth_key`·`answer` 인자는 더 이상 쓰지 않습니다.
- `req_pccc` 는 `name`, `birthday`(생년월일 8자리), `phone`, `provider`(간편인증 방식)를 받아 tx_id 를 즉시 반환합니다.
- `get_pccc` 는 `tx_id` 만 받아 처리 상태와 결과를 확인합니다. 결과는 수집 시각(`checked_at`) 기준 24시간 동안 재조회할 수 있습니다.
- `check_pccc` Tool 이 제거되어 전체 Tool 이 97개에서 96개로 줄었습니다.
- Replace the SMS-verification PCCC flow with simple authentication; `check_pccc` is removed.

## 3.3.0 — 2026-09-14

- Seedance 참조 소재의 이미지·영상·오디오 파일 인자를 문서화했습니다.
- Add video generation version selection documentation and compatibility tests.
- 영상 생성 버전 선택, 버전별 옵션·요금 안내와 호환 검증을 추가했습니다.
- Pass version and tier through the existing bridge; no transport change.
- Document and verify Seedance 2.0 Fast and Mini tier pass-through.

## 3.2.2 - 2026-09-14

- 운전면허 `ghost_num`의 생략·빈값·임의 문자열 허용과 판정 미사용 계약을 한영 문서에 명시했습니다.
- 운전면허 불일치와 무과금 처리 실패를 구분하고, 응답에 조회 페이지 HTML을 포함하지 않는 계약을 안내합니다.
- Clarify optional driver-license serial input, match semantics, safe messages, and uncharged processing failures.

## 3.2.1 - 2026-09-14

- Seedance 영상 생성 요금을 해상도별로 세분화(480p 560P·720p 1,250P·1080p 2,810P)하고 1080p 해상도를 지원합니다.
- Kling 영상 생성 요금을 std 410P·pro 550P로 갱신했습니다.

## 3.2.0 - 2026-09-14

- Seedance·Veo·Kling 영상 생성 Tool 6종을 추가해 전체 97개, AI 그룹 15개로 갱신했습니다.
- 비동기 접수 후 상태를 폴링하고, 완료 시 응답의 `result_url`로 REST 다운로드하는 계약을 문서화했습니다.
- 초당 포인트 × 길이(초)로 과금되며, 실패·시간 초과·Seedance 오디오 정책 거부 시 전액 환불됩니다.

## 3.0.0 - 2026-09-05

- 이미지 프롬프트 입력 한도를 최대 28,000자로 확대했습니다.
- 대량 이미지 작업의 접수 시 선차감·실패 이미지 즉시 환급 계약을 반영했습니다.
- 접수 후 취소할 수 없는 계약에 맞춰 `image_batch_cancel`을 제거하고 전체 88개, AI 그룹 9개로 갱신했습니다.

## 2.5.0 - 2026-09-05

- 이미지 대량 수량 필드를 `image_count`로 명확히 하고 압축 조정 필드를 제거했습니다.
- 이미지 크기를 5개 표준 크기로 제한하고 파라미터 설명과 예시를 보강했습니다.
- 생성 Tool에 선택적 `reference_image_url`을 추가해 참고 이미지와 텍스트를 함께 사용할 수 있습니다.

## 2.4.1 - 2026-09-05

- 이미지 편집 Tool에서 마스크 입력을 제거하고 원본 이미지와 프롬프트만 받도록 동기화했습니다.

## 2.4.0 - 2026-09-05

- 이미지 생성·편집·대량 작업 Tool 6종을 추가해 전체 89개, AI 그룹 10개로 갱신했습니다.
- 성공 이미지당 25포인트, 최대 50장, 멱등 키와 24시간 결과 보관 계약을 반영했습니다.

## 2.3.0 - 2026-09-03

- `identity_document_residence_card`의 개인정보 마스킹 대상을 외국인등록증·영주증·외국국적동포 국내거소신고증으로 확대했습니다.
- 요청·응답 형식과 `document_type: residence_card` 계약은 유지합니다.
- 외국인등록증 진위확인 Tool의 지원 범위는 변경하지 않았습니다.

## 2.2.0 - 2026-09-01

- 운영 MCP에 비동기 TTS 접수·상태·취소·MP3·ASS 자막 Tool 5종을 동기화했습니다.
- 전체 83개, Convert 그룹 19개 Tool 계약으로 갱신했습니다.
- TTS 입력 한도를 실제 계약인 800자로 바로잡고, MP3·ASS를 각각 한 번 다운로드하는 규칙을 반영했습니다.
- 허용 IP 공란·CIDR·즉시 반영과 `tools/list`의 무인증 범위를 한영 문서에 추가했습니다.

## 2.1.2 - 2026-08-31

- `tts_jobs_cancel`이 `waiting`뿐 아니라 `processing` 작업도 취소하는 계약을 한영 문서에 반영했습니다.
- 실행 중 취소에도 접수 시 과금액은 환불되지 않습니다.
- 17개 TTS `voice_id`의 사용자 표시 이름을 공개 문서와 도구 설명에 추가했습니다.

## 2.1.1 - 2026-08-30

- TTS 결과 다운로드 계약을 ZIP에서 MP3(`audio/mpeg`)로 맞췄습니다.

## 2.1.0 - 2026-08-30

- 비동기 TTS 작업 접수·상태 조회·대기 취소·1회 결과 다운로드 Tool 4종을 추가했습니다.
- 17개 중립 내레이션 `voice_id`, 접수 시 과금, 취소 시 미환불, 결과 즉시 소모 계약을 문서화했습니다.
- 운영 `tools/list`와 공개 카탈로그를 전체 82개, Convert 그룹 18개로 확장했습니다.

## 2.0.1 - 2026-08-30

- 종료된 기존 동기 TTS Tool과 사용법을 공개 문서·키워드에서 제거했습니다.
- 운영 `tools/list`와 공개 카탈로그를 전체 78개, Convert 그룹 14개로 동기화했습니다.

## 2.0.0 - 2026-08-30

- 종료된 이미지 기능과 관련 문서·메타데이터를 제거했습니다.
- 운영 `tools/list`와 공개 카탈로그를 전체 79개, AI 그룹 4개로 동기화했습니다.
- OCR, Google Lens 이미지 역검색, 이미지 변환과 얼굴 검출 Tool은 그대로 유지합니다.

스킬 구매 전 [성능표와 시험 방식](https://apick.app/skills/performance)을 확인하세요. 표본 수·평가일·기계 검사와 모델 점수를 구분하며, 미검증 항목은 수치를 표시하지 않습니다. [공개 JSON](https://apick.app/skills/performance/data.json)도 제공하며 별도의 유료 도구 호출이 필요하지 않습니다.

Before choosing a Skill, review its [measured performance and test methods](https://apick.app/skills/performance). Sample sizes, dates, machine checks and model scores are reported separately; untested values are not scored. A [public JSON report](https://apick.app/skills/performance/data.json) is available without a paid tool call.

<div align="center">

<img src="https://raw.githubusercontent.com/lead788/apick-mcp/main/assets/logo-400.png" alt="APICK" width="88" height="88">

# APICK MCP — 115 Korean Data, AI, Image & Video Tools

> 3.9.0: `skills` 서버의 `search_skills` 가 `sort`(추천·인기·많이 사용·좋아요순·평점순·최신)를 받고, Skill 검색·상세 결과에 사용 건수 구간(`usage_label`)·좋아요 수·평점이 함께 옵니다. Tool 수는 그대로이며 원격 서버에 이미 배포돼 있습니다.
> 3.9.0: `search_skills` on the `skills` server accepts `sort` (recommended, popular, most used, likes, rating, newest), and Skill search/detail results include a usage tier (`usage_label`), like count and rating. Tool counts are unchanged; already live on the remote server.
>
> 3.8.0: 검수된 Skill 을 검색·견적·실행하는 `skills` 서버(Tool 6개)를 추가했습니다: `npx -y apick-mcp --server skills`. `all` 서버의 115개 Tool 과 분야별 서버의 Tool 수는 그대로입니다. 새 서버는 원격 서버에 이미 배포돼 있으며, 실제 사용 가능 목록은 연결한 서버의 `tools/list`로 확인하세요.
> 3.8.0: adds the `skills` server (6 tools) to search, quote and run reviewed Skills: `npx -y apick-mcp --server skills`. The 115 tools on `all` and the domain server counts are unchanged. The new server is already live on the remote server; check the connected server’s `tools/list` for availability.

**Korean business registry, ID verification, OCR, parcel tracking, file conversion, web intelligence and LLM — as MCP tools for any AI agent.**

**대한민국 사업자조회 · 신분증 진위확인 · OCR · 택배 배송조회 · 파일변환 · 웹조회 · LLM을 MCP Tool로.**

[![npm](https://img.shields.io/npm/v/apick-mcp?color=%230a7cff&label=npm%20apick-mcp)](https://www.npmjs.com/package/apick-mcp)
[![npm downloads](https://img.shields.io/npm/dm/apick-mcp?color=%230a7cff)](https://www.npmjs.com/package/apick-mcp)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-app.apick-black)](https://registry.modelcontextprotocol.io/v0/servers?search=app.apick)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

### **[apick.app](https://apick.app)** — Official site 공식 사이트
**[Integration guide 연동 가이드](https://apick.app/dev_guide/mcp)** · **[Full tool catalog 전체 Tool 목록](TOOLS.md)** · **[API list API 목록](https://apick.app/api_list)**

</div>

---

## What is this? / 이게 뭔가요?

**EN** — APICK is a Korean data and AI API platform. This MCP server exposes **115 tools** for Korean business data, identity verification, OCR, parcel tracking, image and video generation, file conversion, web intelligence, and LLM calls.

**KO** — 에이픽(APICK)은 대한민국 데이터·AI API 플랫폼입니다. 이 MCP 서버는 **Tool 115개**로 사업자 조회, 신분증 진위확인, 택배 배송조회, OCR, 이미지·영상 생성, 파일 변환, 웹 검색과 LLM 호출을 **인증키 하나로** 제공합니다.

**The server is hosted by APICK. Nothing to install, build, or keep running.**
**서버는 에이픽이 운영합니다. 설치할 것도, 띄워둘 것도 없습니다.**

```
https://apick.app/mcp/all
```

---

## Quick start / 빠른 시작

### 1. Get an API key / 인증키 발급

Sign up at **[apick.app](https://apick.app)** and copy your license key from the dashboard. New accounts get **1,000 free points**.
**[apick.app](https://apick.app)** 에서 가입하고 대시보드에서 인증키를 복사하세요. 신규 가입 시 **1,000포인트 무료**.

> `tools/list` works **without** a key — a client can connect and discover all 115 tools before you sign up. Only `tools/call` validates the key and allowed IP.
> `tools/list`는 **인증 없이** 동작합니다. 가입 전에도 클라이언트가 연결해 115개 Tool을 확인할 수 있고, 키와 허용 IP는 `tools/call`부터 검증합니다.

Leave the allowed-IP list blank for unrestricted access. To restrict access, register the public IPv4 address seen by APICK as an exact address or CIDR such as `/32`. Changes apply immediately with no separate synchronization.
마이페이지의 허용 IP가 공란이면 제한 없이 사용할 수 있습니다. 제한하려면 APICK에 도착하는 공인 IPv4를 단일 주소 또는 CIDR(`/32` 등)로 등록하세요. 저장 즉시 반영되며 별도 동기화는 필요하지 않습니다.

### 2. Connect / 연결

<table>
<tr><th>Client</th><th>How / 방법</th></tr>
<tr><td><b>Claude Code</b></td><td>

```bash
claude mcp add --transport http apick https://apick.app/mcp/all --header "Authorization: Bearer YOUR_KEY"
```
Restart Claude Code so the tools load. 툴이 로드되도록 재시작하세요.
</td></tr>
<tr><td><b>Claude Desktop</b><br><code>claude_desktop_config.json</code></td><td>

```json
{
  "mcpServers": {
    "apick": {
      "type": "http",
      "url": "https://apick.app/mcp/all",
      "headers": { "Authorization": "Bearer YOUR_KEY" }
    }
  }
}
```
</td></tr>
<tr><td><b>Cursor</b><br><code>~/.cursor/mcp.json</code></td><td>

```json
{
  "mcpServers": {
    "apick": {
      "url": "https://apick.app/mcp/all",
      "headers": { "Authorization": "Bearer YOUR_KEY" }
    }
  }
}
```
</td></tr>
<tr><td><b>Windsurf</b><br><code>~/.codeium/windsurf/mcp_config.json</code></td><td>

```json
{
  "mcpServers": {
    "apick": {
      "serverUrl": "https://apick.app/mcp/all",
      "headers": { "Authorization": "Bearer YOUR_KEY" }
    }
  }
}
```
</td></tr>
<tr><td><b>VS Code</b><br><code>.vscode/mcp.json</code></td><td>

```json
{
  "servers": {
    "apick": {
      "type": "http",
      "url": "https://apick.app/mcp/all",
      "headers": { "Authorization": "Bearer YOUR_KEY" }
    }
  }
}
```
</td></tr>
<tr><td><b>Cline</b> / any client without<br>remote MCP support<br>원격 MCP 미지원 클라이언트</td><td>

```json
{
  "mcpServers": {
    "apick": {
      "command": "npx",
      "args": ["-y", "apick-mcp", "--server", "all"],
      "env": { "APICK_API_KEY": "YOUR_KEY" }
    }
  }
}
```
Zero-dependency stdio bridge, Node 18+. 의존성 0개 stdio 브릿지.
</td></tr>
</table>

### 3. Ask / 물어보기

```
사업자번호 439-87-00761 정상 사업자인지 확인하고 회사 정보 정리해줘
Check whether Korean business number 439-87-00761 is active and summarize the company
```

The agent picks `biz_detail`, calls it, and reads back the result.
AI가 알맞은 Tool(`biz_detail`)을 골라 호출하고 결과를 정리해 줍니다.

---

## Servers / 서버 목록

Connect to `all` for everything, or to one server to keep the tool list short and the agent's choices focused.
전부 쓰려면 `all`, 특정 분야만 쓰려면 해당 서버에 연결하면 Tool 목록이 짧아져 AI가 더 정확히 고릅니다.

| Server 서버 | Endpoint | Tools | Coverage 범위 |
| --- | --- | --- | --- |
| **All 통합** | `https://apick.app/mcp/all` | **115** | 아래 전부 + `find_tools` |
| [Business 사업자·커머스](TOOLS.md#business) | `https://apick.app/mcp/business` | 29 | 사업자·법인 조회, 택배 배송조회, 부동산 실거래가, 차량 이력, 유효성 검사 |
| [Identity 신분증](TOOLS.md#identity) | `https://apick.app/mcp/identity` | 16 | 주민등록증·운전면허증·여권·외국인등록증 진위확인, 실명확인, 개인정보 마스킹 |
| [Convert 파일변환](TOOLS.md#convert) | `https://apick.app/mcp/convert` | 22 | PDF·DOCX·엑셀 변환, STT, 비동기 TTS, 워터마크 |
| [Web 웹·검색](TOOLS.md#web) | `https://apick.app/mcp/web` | 17 | 도메인·IP·WHOIS, 웹페이지 수집, 구글 검색, 유튜브 |
| [Vision 이미지·영상](TOOLS.md#vision) | `https://apick.app/mcp/vision` | 6 | 얼굴 검출, 이미지 유사도, 유해이미지 판별, 영상 추출 |
| [OCR 문자인식](TOOLS.md#ocr) | `https://apick.app/mcp/ocr` | 6 | 이미지 텍스트 추출, 신분증 항목 추출 |
| [AI · LLM](TOOLS.md#ai) | `https://apick.app/mcp/ai` | 15 | LLM 챗, 텍스트 요약·교정, 이미지 생성·편집·대량 작업, 비동기 영상 생성 |
| [Finance 금융](TOOLS.md#finance) | `https://apick.app/mcp/finance` | 3 | 계좌 예금주 조회, 1원 인증 |
| [Skills](TOOLS.md#skills) | `https://apick.app/mcp/skills` | 6 | 검수된 Skill 검색·견적·실행. `all`과 별도 서버 / reviewed Skills, separate from `all` |

### Every tool / 전체 Tool

**[→ TOOLS.md](TOOLS.md)** — all 115 tools with parameters, types, and copy-paste JSON-RPC examples.
**[→ TOOLS.md](TOOLS.md)** — 115개 전체를 파라미터·타입·호출 예시까지 정리했습니다.

<details>
<summary><b>Tool names at a glance / Tool 이름 한눈에 보기</b></summary>

**Business** `biz_detail` `venture_biz_info` `land_rt_price` `req_pccc` `get_pccc` `req_employment` `get_employment` `req_personal_income` `get_personal_income` `req_nps_join_history` `get_nps_join_history` `req_driving_license` `get_driving_license` `req_health_checkup` `get_health_checkup` `req_cash_receipt_deduction` `get_cash_receipt_deduction` `req_tax_return_history` `get_tax_return_history` `get_car_flooding` `get_car_scrap` `parcel_tracking` `parcel_tracking_auto` `check_email_valid` `check_phone_valid` `check_spam_number` `holiday_info` `search_juso` `info`

**Identity** `identi_card1`–`identi_card5` `identi_card_image1`–`identi_card_image5` `name_rrn_auth` `hide_rrn` `identity_document_id_card` `identity_document_driver_license` `identity_document_passport` `identity_document_residence_card`

**OCR** `ocr` `ocr_identi1` `ocr_identi2` `ocr_identi3` `ocr_identi4` `ocr_identi5`

**Finance** `transfer_1won` `account_realname` `bank_code`

**Web** `nslookup` `reverse_ip` `location` `ip_history` `whois` `url_html` `url_screenshot` `url_similarity` `google_search` `google_image_search` `google_lens_search` `crawl_youtube` `download_youtube_video` `youtube_metadata` `youtube_thumbnail` `youtube_subtitle_list` `youtube_subtitle`

**Convert** `stt` `tts_jobs_create` `tts_jobs_status` `tts_jobs_cancel` `tts_jobs_result` `tts_jobs_subtitles` `tts_jobs_quality` `tts_jobs_retry` `tts_jobs_candidate_audio` `voice_change` `face_blur` `pdf_to_docx` `pdf_to_image` `pdf_merge` `html_to_pdf` `docx_to_pdf` `json_to_excel` `base64_to_image` `set_watermark` `get_watermark` `draw_watermark_pdf` `draw_watermark_image`

**Vision** `nsfw_detection` `image_similarity` `video_to_mp3` `extract_video_thumbnail` `word_cloud` `face_detection`

**AI** `llm_models` `llm_chat` `text_summary` `text_polish` `image_generate` `image_edit` `image_batch_create` `image_batch_status` `image_batch_result` `seedance_jobs_create` `seedance_jobs_status` `veo_jobs_create` `veo_jobs_status` `kling_jobs_create` `kling_jobs_status`

**All only 통합 서버 전용** `find_tools`

</details>

### Find the right tool / 알맞은 Tool 찾기 — `find_tools`

**EN** — The `all` server has 115 tools. `find_tools` recommends the best-matching APICK tools for a task described in natural language (Korean or English). It returns each tool's name, title, description and a relevance label (`high`, `medium`, `low`). It is free, works without an API key, and is available on the `all` server only; domain servers are small enough to choose from `tools/list` directly.

**KO** — `all` 서버에는 Tool이 115개 있습니다. `find_tools`는 자연어(한국어·영어)로 설명한 작업에 가장 알맞은 에이픽 Tool을 추천하고, Tool 이름·제목·설명과 관련도(`high`·`medium`·`low`)를 돌려줍니다. 무료이며 인증키 없이 호출할 수 있고, `all` 서버에서만 제공합니다. 분야별 서버는 Tool 수가 적어 `tools/list`만으로 고를 수 있습니다.

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `task` | `string` | **required 필수** | Task to perform, 2–500 characters · 하려는 작업 설명 (2~500자) |
| `limit` | `integer` | optional 선택 | Number of tools to return, 1–10 (default 5) · 돌려받을 Tool 수 (1~10, 기본 5) |

```bash
curl -X POST "https://apick.app/mcp/all" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"find_tools","arguments":{"task":"사업자등록번호로 폐업 여부 확인","limit":3}}}'
```

Response `structuredContent` / 응답 `structuredContent`:

```json
{"task":"사업자등록번호로 폐업 여부 확인","tools":[{"name":"biz_detail","title":"사업자 정보 조회","description":"Look up general status information of a Korean business ...","relevance":"high"}]}
```

If nothing fits, `tools` is empty and a `message` asks you to describe the task more specifically. Call the recommended tool with your API key as usual.
맞는 Tool이 없으면 `tools`가 빈 배열이고 작업을 더 구체적으로 적어 달라는 `message`가 포함됩니다. 추천받은 Tool은 평소처럼 인증키로 호출하세요.

---

## Use cases / 주요 활용 사례

### 1. B2B onboarding & KYB — 거래처 실사 자동화

> "거래처 사업자번호 목록 검증하고, 폐업이나 휴업 있으면 표로 정리해줘"
> "Validate this list of Korean business numbers and flag any that are closed or suspended"

`biz_detail` → `venture_biz_info` → `check_email_valid` · `check_phone_valid`

Pull registry status, representative, industry code and address for each business number, cross-check the contact email and phone, and get one table back. Replaces manual 국세청/공정위 lookups.
사업자번호마다 국세청 상태·대표자·업종·주소를 끌어오고 담당자 이메일·전화 유효성까지 교차검증해 표 하나로 받습니다.

### 2. Identity verification pipeline — 비대면 신원확인

> "이 신분증 이미지 진위확인하고 주민번호 뒷자리 마스킹한 사본 만들어줘"
> "Verify this ID document image and produce a copy with the registration number masked"

`identi_card_image1` → `ocr_identi1` → `identity_document_id_card`

Checks the document against the government registry, extracts the fields, then returns a masked image safe to store. Covers 주민등록증 · 운전면허증 · 여권 · 외국인등록증 · 주민등록등본.
정부 registry 대조로 진위를 확인하고, 항목을 추출한 뒤, 보관 가능한 마스킹 사본까지 한 번에 만듭니다.

`identity_document_residence_card`는 외국인등록증·영주증·외국국적동포 국내거소신고증의 개인정보 마스킹을 지원합니다. 영주증과 외국국적동포 국내거소신고증은 마스킹만 지원하며 외국인등록증 진위확인 Tool의 범위에는 포함되지 않습니다.
`identity_document_residence_card` masks residence cards, permanent resident cards, and overseas Korean resident cards. The latter two are masking-only and are not accepted by the alien registration card authenticity-check tools.

### 3. Logistics & CS automation — 배송 문의 자동응답

> "운송장 123456789012 지금 어디야? 지연되면 고객 안내문도 써줘"
> "Where is tracking number 123456789012? Draft a customer notice if it's delayed"

`parcel_tracking_auto` → `text_polish`

Auto-detects the carrier from the number alone across **33 Korean carriers** (CJ대한통운, 한진, 롯데, 우체국, 로젠, 쿠팡로지스틱스 …), then drafts the customer message.
운송장 번호만으로 **33개 택배사**를 자동 판별해 조회하고, 고객 안내문 초안까지 씁니다.

### 4. Document processing — 문서 파이프라인

> "이 PDF들 하나로 합치고 워터마크 넣은 다음 DOCX로도 뽑아줘"
> "Merge these PDFs, add a watermark, and also give me a DOCX"

`pdf_merge` → `draw_watermark_pdf` → `pdf_to_docx`

Also: `html_to_pdf` for invoices and reports, `json_to_excel` for data exports, and `stt` for speech recognition.
견적서·리포트는 `html_to_pdf`, 데이터 내보내기는 `json_to_excel`, 음성 인식은 `stt`를 사용합니다.

### 5. Domain & fraud investigation — 도메인·사기 조사

> "이 사이트 IP, 위치, WHOIS 조사하고 우리 사이트랑 얼마나 비슷한지 봐줘"
> "Investigate this site's IP, location and WHOIS, and compare it to ours"

`nslookup` → `location` → `whois` → `ip_history` → `url_similarity` → `url_screenshot`

Built for phishing and copycat-site investigation: resolve the host, trace its IP history, score how closely it clones your page, and capture a screenshot as evidence.
피싱·모방 사이트 조사용입니다. 호스트를 확인하고 IP 이력을 추적한 뒤, 우리 페이지와의 유사도를 점수화하고 증거용 스크린샷까지 남깁니다.

### 6. Content safety & media — 콘텐츠 검수

> "업로드된 이미지 중 유해한 거 걸러내고 사람 얼굴은 블러 처리해줘"
> "Filter unsafe uploads and blur any faces"

`nsfw_detection` → `face_detection` → `face_blur`

### 7. Payout & account verification — 정산 계좌 검증

> "정산 대상 계좌 예금주가 등록된 이름과 같은지 확인해줘"
> "Check that the payout account holder matches the registered name"

`bank_code` → `account_realname` → `transfer_1won`

`account_realname` reads the holder name; `transfer_1won` proves ownership by depositing 1 KRW with a code in the memo.
`account_realname`은 예금주명을 읽고, `transfer_1won`은 적요에 인증코드를 담아 1원을 입금해 실소유를 증명합니다.

### 8. AI video generation — AI 영상 생성

> "제품 사진으로 4초짜리 짧은 홍보 영상 만들어줘"
> "Turn this product photo into a short 4-second promo video"

`veo_jobs_create` → `veo_jobs_status`

Video generation (`seedance_jobs_create`, `veo_jobs_create`, `kling_jobs_create`) is asynchronous — submit a job, poll status, then download once it's `completed` via the status result's `result_url`. Billed per second (`duration × per-second points`), refunded in full on failure or timeout.
영상 생성(`seedance_jobs_create`, `veo_jobs_create`, `kling_jobs_create`)은 비동기입니다 — 접수 후 상태를 조회하다가 `completed`가 되면 상태 결과의 `result_url`로 다운로드합니다. 초당 포인트 × 길이(초)로 과금되며 실패·시간 초과 시 전액 환불됩니다.

Seedance 참조 소재 모드는 지원 버전에서 참조 이미지·영상·오디오(MP3·WAV) URL을 함께 받을 수 있습니다.

---

## How it works / 동작 방식

| | EN | KO |
| --- | --- | --- |
| **Transport** | Streamable HTTP — one endpoint per server, JSON-RPC 2.0 over HTTPS POST, stateless | 서버당 단일 엔드포인트, HTTPS POST로 JSON-RPC 2.0, 세션 없이 요청 단위 |
| **Protocol** | MCP `2026-07-28`, auto-compatible with earlier client versions | MCP `2026-07-28` 기본, 이전 규격 클라이언트 자동 호환 |
| **Discovery** | `tools/list` returns every tool with JSON Schema, description and live price — no key needed | `tools/list`가 스키마·설명·실시간 단가를 반환, 인증 불필요 |
| **Annotations** | Every tool declares `title`, `readOnlyHint`, `openWorldHint`. 28 of 115 are not read-only | 전 Tool이 `title`·`readOnlyHint`·`openWorldHint` 선언. 115개 중 상태 변경 Tool은 28개 |
| **Results** | Text (JSON) + `structuredContent`. Images as image content; files up to 8MB as base64 | 텍스트(JSON)와 `structuredContent` 동시 반환. 이미지는 이미지 콘텐츠, 8MB 이하 파일은 base64 |
| **File input** | File-taking tools accept a public `https` URL (`image_url`, `pdf_url`, …) — APICK downloads and processes it | 파일 Tool은 공개 `https` URL을 받습니다. 에이픽 서버가 내려받아 처리합니다 |
| **Errors** | Delivered via `isError`; identity masking also preserves `structuredContent.error_code` | `isError`로 전달되며 신분증 마스킹은 `structuredContent.error_code`도 보존합니다 |
| **Auth** | `Authorization: Bearer <key>`; `X-API-Key` also accepted | `Authorization: Bearer 인증키`, `X-API-Key`도 지원 |

## 간편인증 데이터 조회 / Simple-auth data lookups

Business 또는 All 서버에서 접수 Tool을 호출하고, 사용자가 휴대폰에서 승인한 뒤 같은 상품의 결과 Tool에 `transactionId`를 전달합니다. 접수는 알림 발송·과금을 동반하므로 사용자 확인 후 실행하며 승인 대기 중 자동으로 재접수하지 않습니다.

Call the request tool on Business or All, ask the user to approve on their phone, then pass `transactionId` to the matching result tool. Request calls send a notification and incur a charge; obtain confirmation and do not repeatedly submit while waiting.

| 기능 | SDK 메서드 | MCP Tool |
| --- | --- | --- |
| 재직·보험료 확인 | `requestEmployment` / `getEmployment` | `req_employment` / `get_employment` |
| 금융소득(이자·배당) 조회 | `requestPersonalIncome` / `getPersonalIncome` | `req_personal_income` / `get_personal_income` |
| 국민연금 가입내역 | `requestNpsJoinHistory` / `getNpsJoinHistory` | `req_nps_join_history` / `get_nps_join_history` |
| 운전면허 조회 | `requestDrivingLicense` / `getDrivingLicense` | `req_driving_license` / `get_driving_license` |
| 국가 건강검진 결과 | `requestHealthCheckup` / `getHealthCheckup` | `req_health_checkup` / `get_health_checkup` |
| 현금영수증 소득공제 내역 | `requestCashReceiptDeduction` / `getCashReceiptDeduction` | `req_cash_receipt_deduction` / `get_cash_receipt_deduction` |
| 국세 신고내역 조회 | `requestTaxReturnHistory` / `getTaxReturnHistory` | `req_tax_return_history` / `get_tax_return_history` |

공통 입력은 SDK와 같은 `name`, `birthDate`(YYYYMMDD), `phone`, `authProvider`입니다. 상품별 기간 옵션과 응답 상태·오류는 [Tool 계약](TOOLS.md#simple-auth-data)을 확인하세요. 최초 결과 반환 시 조회 범위에 따라 과금하며, 대기 중 조회와 유효기간 내 재조회는 무료입니다.

Common inputs match the SDK: `name`, `birthDate`, `phone`, and `authProvider`. The first result delivery is billed by query scope; waiting polls and repeat reads within the result lifetime are free. See the [tool contract](TOOLS.md#simple-auth-data) for options and response fields.

**PCCC 비교:** 승인 흐름은 같지만 `req_pccc`는 `birthday`·`provider`, `get_pccc`는 `tx_id`를 사용하며 결과 재조회도 과금됩니다. 간편인증 데이터 조회 7개 상품의 입력 이름이나 무료 재조회 정책을 PCCC에 적용하지 마세요.

**PCCC comparison:** The approval flow is the same, but PCCC retains `birthday`/`provider` and `tx_id`, and charges for repeated result reads. Its contract is unchanged.

---

### Tools with side effects / 부작용이 있는 Tool

87 of 115 tools are read-only. The other 28 change state, charge points, cancel work, or consume a result and carry `readOnlyHint: false` so your client can require approval:
115개 중 87개는 조회입니다. 나머지 28개는 과금·취소·결과 생성 등 상태를 바꾸므로 `readOnlyHint: false`가 붙습니다.

| Tool | What it does / 하는 일 |
| --- | --- |
| `req_employment` | Requests phone approval and charges acceptance · 재직·보험료 확인 인증 요청·접수 과금 |
| `get_employment` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `req_personal_income` | Requests phone approval and charges acceptance · 금융소득(이자·배당) 조회 인증 요청·접수 과금 |
| `get_personal_income` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `req_nps_join_history` | Requests phone approval and charges acceptance · 국민연금 가입내역 인증 요청·접수 과금 |
| `get_nps_join_history` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `req_driving_license` | Requests phone approval and charges acceptance · 운전면허 조회 인증 요청·접수 과금 |
| `get_driving_license` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `req_health_checkup` | Requests phone approval and charges acceptance · 국가 건강검진 결과 인증 요청·접수 과금 |
| `get_health_checkup` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `req_cash_receipt_deduction` | Requests phone approval and charges acceptance · 현금영수증 소득공제 내역 인증 요청·접수 과금 |
| `get_cash_receipt_deduction` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `req_tax_return_history` | Requests phone approval and charges acceptance · 국세 신고내역 조회 인증 요청·접수 과금 |
| `get_tax_return_history` | Collects and bills the first result; repeat reads are free · 결과 수집·최초 반환 과금, 재조회 무료 |
| `image_generate` / `image_edit` / `image_batch_create` | Creates images and charges points · 이미지 생성·편집·작업 접수 과금 |
| `tts_jobs_retry` | Resumes a TTS job · TTS 작업 상태 변경 |
| `transfer_1won` | Deposits 1 KRW into a bank account · 실제로 1원을 입금합니다 |
| `req_pccc` | Sends a simple-authentication request to the person's phone · 본인 휴대폰으로 간편인증 요청을 발송합니다 |
| `get_pccc` | Reads the approval result by tx_id and charges once per result · tx_id 로 승인 결과를 조회하고 결과 1건마다 과금합니다 |
| `tts_jobs_create` | Accepts and charges a TTS job once · TTS 작업을 접수하고 1회 과금합니다 |
| `tts_jobs_cancel` | Cancels a waiting or processing job without a refund · 대기·생성 중 작업을 환불 없이 취소합니다 |
| `tts_jobs_result` | Permanently consumes the one-time result · 1회용 결과 원본을 영구 소모합니다 |
| `tts_jobs_subtitles` | Permanently consumes the one-time ASS subtitles · 1회용 ASS 자막 원본을 영구 소모합니다 |
| `seedance_jobs_create` | Submits and charges an async Seedance video job · Seedance 영상 작업을 접수하고 과금합니다 |
| `veo_jobs_create` | Submits and charges an async Veo video job · Veo 영상 작업을 접수하고 과금합니다 |
| `kling_jobs_create` | Submits and charges an async Kling video job · Kling 영상 작업을 접수하고 과금합니다 |

TTS 보이스 표시 이름: `v2_ann_m_30s_01` 준호, `v2_ann_m_30s_02` 태산, `v2_ann_m_30s_04` 강우, `v2_ann_m_30s_05` 상현, `v2_ann_f_30s_02` 수빈, `v2_ann_f_30s_03` 은채, `v2_ann_f_30s_04` 다인, `v2_ann_f_30s_05` 예린, `v2_m_teen_01` 하늘, `v2_m_young_01` 도윤, `v2_m_mid_01` 정한, `v2_m_senior_01` 만복, `v2_f_young_01` 서아, `v2_f_senior_01` 정순.

TTS 작업 입력은 최대 800자입니다. 완성된 MP3와 ASS 자막은 서로 독립된 1회용 원본이므로, 결과를 저장할 준비가 된 뒤 `tts_jobs_result`와 `tts_jobs_subtitles`를 각각 한 번만 호출하세요.

`tts_jobs_create`는 접수한 문장의 숫자·단위·기호·영문을 문맥에 맞는 한글 읽기로 자동 변환한 뒤 음성을 생성합니다(예: `5번 버스` → 오 번 버스, `버튼을 5번` → 다섯 번, `-5℃` → 영하 오 도, `인증번호 105028` → 한 자리씩). 모든 TTS 요청에 자동 적용되므로 추가 옵션이나 별도 Skill 호출이 필요하지 않습니다. 과금 글자 수와 요금은 보낸 원문 기준이며 요청·응답 형식은 그대로입니다. 요금은 100자까지 30포인트이고 이후 100자마다 10포인트가 추가되며, 자동 변환에 따른 추가 요금은 없습니다. 읽는 법을 직접 정하려면 한글로 풀어 써서 보내세요. ASS 자막은 보낸 원문 표기로 제공됩니다. 정규화에 실패하면 원문으로 음성을 생성합니다.

`tts_jobs_create` automatically converts numbers, units, symbols and English text in the submitted text into context-appropriate Korean readings before synthesis (for example, `5번 버스` is read as "오 번 버스", `버튼을 5번` as "다섯 번", `-5℃` as "영하 오 도", and `인증번호 105028` digit by digit). This applies automatically to every TTS request; no extra option or separate Skill call is needed. The billed character count and price are based on the text you send, and the request and response formats are unchanged. The price is 30 points for up to 100 characters plus 10 points for each additional 100 characters, with no extra charge for the automatic conversion. To choose a reading yourself, spell it out in Hangul. ASS subtitles keep the text as you sent it. If normalization fails, speech is generated from the original text.

### Try it with curl / curl로 바로 확인

```bash
# Tool list — no key needed / 인증 불필요
curl -X POST "https://apick.app/mcp/business" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'

# Business lookup / 사업자 조회
curl -X POST "https://apick.app/mcp/business" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"biz_detail","arguments":{"biz_no":"4398700761"}}}'
```

More in [`examples/`](examples). 더 많은 예시는 [`examples/`](examples).

### stdio bridge options / 브릿지 옵션

```bash
npx -y apick-mcp --server business     # one server / 특정 서버만
npx -y apick-mcp --help
```

| Variable 환경변수 | Default | Meaning 설명 |
| --- | --- | --- |
| `APICK_API_KEY` | — | License key. Optional for discovery, required for calls · 인증키. 탐색은 없어도 되고 호출에 필요 |
| `APICK_MCP_SERVER` | `all` | Same as `--server` · `--server`와 동일 |
| `APICK_MCP_URL` | `https://apick.app/mcp` | Base URL override · 기본 URL 변경 |

---

## Pricing / 요금

Prepaid points, charged per call, at the same rate as the APICK REST API. No subscription, no per-seat fee. **Failed calls are not charged.** Each tool's live price is appended to its description in `tools/list`, so the agent sees the cost before it decides to call. Free tools include `bank_code`, `info`, `llm_models` and `find_tools`.

포인트 선불, 호출당 차감이며 단가는 에이픽 REST API와 동일합니다. 구독료도 좌석당 요금도 없습니다. **실패한 호출은 과금되지 않습니다.** 각 Tool의 현재 단가는 `tools/list` 설명에 자동으로 붙어 AI가 호출 전에 비용을 보고 판단합니다. `bank_code`·`info`·`llm_models`·`find_tools`는 무료입니다.

**Current rates 단가표 → <https://apick.app/dev_guide/mcp>**

---

## Links / 링크

| | |
| --- | --- |
| **Official site 공식 사이트** | <https://apick.app> |
| Integration guide 연동 가이드 | <https://apick.app/dev_guide/mcp> |
| REST API list API 목록 | <https://apick.app/api_list> |
| Full tool catalog 전체 Tool | [TOOLS.md](TOOLS.md) |
| Install guide for agents | [llms-install.md](llms-install.md) |
| MCP Registry | [`app.apick/*`](https://registry.modelcontextprotocol.io/v0/servers?search=app.apick) |
| npm | [`apick-mcp`](https://www.npmjs.com/package/apick-mcp) |
| Issues 문의·버그 | <https://github.com/lead788/apick-mcp/issues> |

---

## Keywords / 검색 키워드

Korean business registry API · 사업자등록번호 조회 API · business registration number lookup · 휴폐업 조회 · 법인등록번호 · 벤처기업 조회 · Korean ID verification · 신분증 진위확인 API · 주민등록증 진위확인 · 운전면허증 진위확인 · 여권 진위확인 · 외국인등록증 · 실명확인 · 주민번호 마스킹 · 개인정보 비식별화 · Korean OCR API · 신분증 OCR · 문자인식 · parcel tracking API Korea · 택배 배송조회 API · 운송장 조회 · CJ대한통운 한진 롯데택배 우체국 로젠 · 계좌 실명조회 · 예금주 조회 · 1원 인증 API · 개인통관고유부호 · PCCC · 부동산 실거래가 API · 침수차 조회 · 폐차 조회 · 도로명주소 검색 API · 공휴일 API · WHOIS API · DNS lookup · IP 위치조회 · 웹페이지 스크린샷 API · 구글 검색 API · 구글 이미지 검색 · 구글 렌즈 · 유튜브 크롤링 · PDF 변환 API · PDF to DOCX · HTML to PDF · 엑셀 변환 · 워터마크 API · STT 음성인식 API · 얼굴 인식 API · 얼굴 블러 · 유해이미지 판별 · NSFW detection · 이미지 유사도 · 워드클라우드 · LLM API

## Hashtags

`#MCP` `#ModelContextProtocol` `#MCPServer` `#MCPTools` `#AIAgent` `#ClaudeMCP` `#ClaudeCode` `#ClaudeDesktop` `#Cursor` `#Cline` `#Windsurf` `#VSCode` `#APICK` `#에이픽` `#OpenAPI` `#RESTAPI` `#KoreaAPI` `#한국API` `#사업자조회` `#사업자등록번호조회` `#휴폐업조회` `#신분증진위확인` `#실명확인` `#본인인증` `#개인정보마스킹` `#OCR` `#문자인식` `#택배조회` `#배송조회` `#운송장조회` `#계좌실명조회` `#1원인증` `#통관고유부호` `#부동산실거래가` `#도로명주소` `#공휴일API` `#WHOIS` `#DNS` `#IP조회` `#웹크롤링` `#구글검색API` `#스크린샷API` `#PDF변환` `#DOCX변환` `#엑셀변환` `#워터마크` `#STT` `#음성인식` `#얼굴인식` `#얼굴블러` `#유해이미지` `#NSFW` `#이미지유사도` `#LLM` `#KYC` `#KYB` `#핀테크` `#이커머스` `#물류자동화` `#업무자동화`

---

## Privacy Policy / 개인정보처리방침

**<https://apick.app/personal_policy>** · Terms 이용약관: **<https://apick.app/terms>**

**EN** — This repository ships documentation and a stdio bridge. The bridge stores nothing and transmits nothing beyond the JSON-RPC messages your MCP client sends, forwarded to `https://apick.app/mcp/{server}` over HTTPS with your license key in the `Authorization` header. It writes no logs and never prints your key.

What APICK collects when you call a tool — the request parameters needed to fulfil it, the account the key belongs to, and a billing record (which tool, cost, timestamp) — plus retention periods, third-party sharing and contact details, is covered in the policy above. Tools that take a file fetch it from the `https` URL you supply; the file is processed and not retained. Do not send personal data you are not authorized to process.

**KO** — 이 저장소는 문서와 stdio 브릿지로 구성됩니다. 브릿지는 아무것도 저장하지 않으며, MCP 클라이언트가 보낸 JSON-RPC 메시지를 HTTPS로 `https://apick.app/mcp/{server}` 에 전달하는 것 외의 통신을 하지 않습니다. 로그를 남기지 않고 인증키를 출력하지 않습니다.

Tool 호출 시 에이픽이 수집하는 항목(처리에 필요한 요청 파라미터, 인증키에 연결된 계정, 과금 기록)과 보관기간·제3자 제공·문의처는 위 방침에 정리되어 있습니다. 파일을 받는 Tool은 사용자가 준 `https` URL에서 파일을 내려받아 처리하며 보관하지 않습니다. 처리 권한이 없는 개인정보는 전송하지 마세요.

---

## License / 라이선스

MIT — see [LICENSE](LICENSE). Covers this repository (documentation and the stdio bridge). Use of the APICK service is governed by the [APICK terms](https://apick.app).

MIT — [LICENSE](LICENSE) 참고. 이 저장소(문서와 stdio 브릿지)에 적용됩니다. 에이픽 서비스 이용은 [에이픽 이용약관](https://apick.app)을 따릅니다.

## TTS quality and recovery / TTS 검수와 재개

`tts_jobs_quality` takes `job_id` and returns utterance quality and candidate history. `tts_jobs_candidate_audio` takes `job_id` and `candidate_id` and returns candidate WAV audio without consuming the final downloads. Candidates remain available for 72 hours after termination.

`tts_jobs_retry` takes `job_id`, `utterance_ids` (such as `["u002"]`), and `idempotency_key`. Reuse the same key and IDs after a lost response. Technical recovery does not add a charge. This tool changes job state (`readOnlyHint: false`).

`tts_jobs_quality`는 작업 ID로 발화 검수와 후보 이력을 조회합니다. `tts_jobs_candidate_audio`는 작업 ID·후보 ID로 WAV를 조회하며 최종 다운로드를 소비하지 않습니다. 후보는 종료 후 72시간 보존됩니다. `tts_jobs_retry`는 발화 ID 목록과 멱등 키로 같은 작업을 추가 과금 없이 재개합니다. 응답 단절 시 동일한 키와 목록을 재사용하세요.

## Video model versions

Omitting `version` preserves Seedance 2.5, Veo 3.1 and Kling 3.0. Set `version` and `tier` explicitly to select a generation; jobs are never silently switched to another version. Submission and status responses include `version`.

Available generations: Seedance 1.0/1.5/2.0/2.5, including Seedance 2.0 Standard/Fast/Mini; Veo 3.1 (Standard/Fast/Lite); Kling 1.6/2.0/2.1/2.5/2.6/3.0/O1/O3. Veo 3.0 is unavailable. Modes, tiers, resolutions, durations, audio, file limits and prices vary by combination. See the [Seedance](https://apick.app/dev_guide/seedancejobs), [Veo](https://apick.app/dev_guide/veojobs) and [Kling](https://apick.app/dev_guide/klingjobs) version tables. Unsupported combinations are rejected before submission.

## 영상 모델 버전 선택

`version`을 생략하면 Seedance 2.5, Veo 3.1, Kling 3.0을 사용합니다. 버전과 등급을 명시하면 해당 조합으로 생성하며 다른 모델로 자동 대체하지 않습니다. 생성과 상태 응답의 `version`으로 확인할 수 있습니다.

| 제품 | 제공 버전 | 제약과 요금 |
|---|---|---|
| Seedance | 2.5, 2.0(Standard·Fast·Mini), 1.5, 1.0 | [버전별 지원표](https://apick.app/dev_guide/seedancejobs) |
| Veo | 3.1 (Standard, Fast, Lite) | [버전별 지원표](https://apick.app/dev_guide/veojobs) |
| Kling | 3.0, O3, O1, 2.6, 2.5, 2.1, 2.0, 1.6 | [버전별 지원표](https://apick.app/dev_guide/klingjobs) |

등급·해상도·길이·오디오·파일 개수와 초당 포인트는 선택 조합별로 다릅니다. Seedance 2.0은 Standard·Fast·Mini를 제공하며 Mini는 480p·720p와 4~15초를 지원합니다. 무음 전용 모델은 `audio=false`, 오디오 필수 모델은 `audio=true`만 허용합니다. Veo 3.0은 현재 제공하지 않습니다. 지원하지 않는 조합은 접수 전에 거절됩니다.

## 스킬 실행 견적과 파일 / Skill estimates and files

스킬 상세·견적의 `execution_info`에는 가격·소요시간 범위와 도구 호출 횟수 예상이 있습니다. 입력에 따라 달라지며 보장값이 아닙니다. `quote_skill`의 최대 예약액을 확인한 후 실행하세요. 성공 결과의 `artifacts`에는 파일 ID·형식·크기·SHA-256이 있습니다. 인증이 필요한 다운로드는 `apick-api`의 `getSkillArtifact(runId, fileId)`로 처리할 수 있습니다. 결과 만료 시 파일도 만료됩니다.

`execution_info` provides estimated price/duration ranges and tool call counts, not guarantees. Check the maximum reservation in `quote_skill` before execution. Successful results may include `artifacts` with file IDs, MIME types, byte sizes, and SHA-256 digests. Use `getSkillArtifact(runId, fileId)` in `apick-api` for authenticated downloads. Files expire with the run result. Tool counts and bridge behavior are unchanged.

## 서브에이전트 / Subagent

설치형 `apick-agent` 상품은 `apick-subagent` 스킬 패키지와 전용 REST·MCP를 사용합니다. 원가 +40%, 승인된 동일 결과 캐시 무료, 충전 잔액 외 상품 한도 없음. [연동 가이드](https://apick.app/dev_guide/subagent).

The installed `apick-agent` product uses the `apick-subagent` skill package and dedicated REST/MCP interfaces. Confirmed cost plus 40%; approved identical cache reuse is free, with no product quota beyond prepaid balance. [Integration guide](https://apick.app/dev_guide/subagent).

```sh
npx -y apick-mcp --server subagent
# Local workspace collection / 로컬 파일 수집
npm install -g apick-subagent
apick-subagent install
```

Set `APICK_API_KEY` in the environment. 원격 MCP는 업로드된 자료를 처리합니다. The remote MCP processes uploaded content; the installed bridge collects local files.

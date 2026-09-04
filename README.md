<div align="center">

<img src="https://raw.githubusercontent.com/lead788/apick-mcp/main/assets/logo-400.png" alt="APICK" width="88" height="88">

# APICK MCP — 88 Korean Data, AI & Image Tools

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

**EN** — APICK is a Korean data and AI API platform. This MCP server exposes **88 tools** for Korean business data, identity verification, OCR, parcel tracking, image generation and editing, file conversion, web intelligence, and LLM calls.

**KO** — 에이픽(APICK)은 대한민국 데이터·AI API 플랫폼입니다. 이 MCP 서버는 **Tool 88개**로 사업자 조회, 신분증 진위확인, 택배 배송조회, OCR, 이미지 생성·편집, 파일 변환, 웹 검색과 LLM 호출을 **인증키 하나로** 제공합니다.

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

> `tools/list` works **without** a key — a client can connect and discover all 88 tools before you sign up. Only `tools/call` validates the key and allowed IP.
> `tools/list`는 **인증 없이** 동작합니다. 가입 전에도 클라이언트가 연결해 88개 Tool을 확인할 수 있고, 키와 허용 IP는 `tools/call`부터 검증합니다.

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
| **All 통합** | `https://apick.app/mcp/all` | **88** | 아래 전부 |
| [Business 사업자·커머스](TOOLS.md#business) | `https://apick.app/mcp/business` | 16 | 사업자·법인 조회, 택배 배송조회, 부동산 실거래가, 차량 이력, 유효성 검사 |
| [Identity 신분증](TOOLS.md#identity) | `https://apick.app/mcp/identity` | 16 | 주민등록증·운전면허증·여권·외국인등록증 진위확인, 실명확인, 개인정보 마스킹 |
| [Convert 파일변환](TOOLS.md#convert) | `https://apick.app/mcp/convert` | 19 | PDF·DOCX·엑셀 변환, STT, 비동기 TTS, 워터마크 |
| [Web 웹·검색](TOOLS.md#web) | `https://apick.app/mcp/web` | 13 | 도메인·IP·WHOIS, 웹페이지 수집, 구글 검색, 유튜브 |
| [Vision 이미지·영상](TOOLS.md#vision) | `https://apick.app/mcp/vision` | 6 | 얼굴 검출, 이미지 유사도, 유해이미지 판별, 영상 추출 |
| [OCR 문자인식](TOOLS.md#ocr) | `https://apick.app/mcp/ocr` | 6 | 이미지 텍스트 추출, 신분증 항목 추출 |
| [AI · LLM](TOOLS.md#ai) | `https://apick.app/mcp/ai` | 9 | LLM 챗, 텍스트 요약·교정, 이미지 생성·편집·대량 작업 |
| [Finance 금융](TOOLS.md#finance) | `https://apick.app/mcp/finance` | 3 | 계좌 예금주 조회, 1원 인증 |

### Every tool / 전체 Tool

**[→ TOOLS.md](TOOLS.md)** — all 88 tools with parameters, types, and copy-paste JSON-RPC examples.
**[→ TOOLS.md](TOOLS.md)** — 88개 전체를 파라미터·타입·호출 예시까지 정리했습니다.

<details>
<summary><b>Tool names at a glance / Tool 이름 한눈에 보기</b></summary>

**Business** `biz_detail` `venture_biz_info` `land_rt_price` `req_pccc` `get_pccc` `check_pccc` `get_car_flooding` `get_car_scrap` `parcel_tracking` `parcel_tracking_auto` `check_email_valid` `check_phone_valid` `check_spam_number` `holiday_info` `search_juso` `info`

**Identity** `identi_card1`–`identi_card5` `identi_card_image1`–`identi_card_image5` `name_rrn_auth` `hide_rrn` `identity_document_id_card` `identity_document_driver_license` `identity_document_passport` `identity_document_residence_card`

**OCR** `ocr` `ocr_identi1` `ocr_identi2` `ocr_identi3` `ocr_identi4` `ocr_identi5`

**Finance** `transfer_1won` `account_realname` `bank_code`

**Web** `nslookup` `reverse_ip` `location` `ip_history` `whois` `url_html` `url_screenshot` `url_similarity` `google_search` `google_image_search` `google_lens_search` `crawl_youtube` `download_youtube_video`

**Convert** `stt` `tts_jobs_create` `tts_jobs_status` `tts_jobs_cancel` `tts_jobs_result` `tts_jobs_subtitles` `voice_change` `face_blur` `pdf_to_docx` `pdf_to_image` `pdf_merge` `html_to_pdf` `docx_to_pdf` `json_to_excel` `base64_to_image` `set_watermark` `get_watermark` `draw_watermark_pdf` `draw_watermark_image`

**Vision** `nsfw_detection` `image_similarity` `video_to_mp3` `extract_video_thumbnail` `word_cloud` `face_detection`

**AI** `llm_models` `llm_chat` `text_summary` `text_polish` `image_generate` `image_edit` `image_batch_create` `image_batch_status` `image_batch_result`

</details>

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

---

## How it works / 동작 방식

| | EN | KO |
| --- | --- | --- |
| **Transport** | Streamable HTTP — one endpoint per server, JSON-RPC 2.0 over HTTPS POST, stateless | 서버당 단일 엔드포인트, HTTPS POST로 JSON-RPC 2.0, 세션 없이 요청 단위 |
| **Protocol** | MCP `2026-07-28`, auto-compatible with earlier client versions | MCP `2026-07-28` 기본, 이전 규격 클라이언트 자동 호환 |
| **Discovery** | `tools/list` returns every tool with JSON Schema, description and live price — no key needed | `tools/list`가 스키마·설명·실시간 단가를 반환, 인증 불필요 |
| **Annotations** | Every tool declares `title`, `readOnlyHint`, `openWorldHint`. 10 of 88 are not read-only | 전 Tool이 `title`·`readOnlyHint`·`openWorldHint` 선언. 88개 중 상태 변경 Tool은 10개 |
| **Results** | Text (JSON) + `structuredContent`. Images as image content; files up to 8MB as base64 | 텍스트(JSON)와 `structuredContent` 동시 반환. 이미지는 이미지 콘텐츠, 8MB 이하 파일은 base64 |
| **File input** | File-taking tools accept a public `https` URL (`image_url`, `pdf_url`, …) — APICK downloads and processes it | 파일 Tool은 공개 `https` URL을 받습니다. 에이픽 서버가 내려받아 처리합니다 |
| **Errors** | Delivered via `isError`; identity masking also preserves `structuredContent.error_code` | `isError`로 전달되며 신분증 마스킹은 `structuredContent.error_code`도 보존합니다 |
| **Auth** | `Authorization: Bearer <key>`; `X-API-Key` also accepted | `Authorization: Bearer 인증키`, `X-API-Key`도 지원 |

### Tools with side effects / 부작용이 있는 Tool

78 of 88 tools are read-only. The other 10 change state, charge points, cancel work, or consume a result and carry `readOnlyHint: false` so your client can require approval:
88개 중 78개는 조회입니다. 나머지 10개는 과금·취소·결과 생성 등 상태를 바꾸므로 `readOnlyHint: false`가 붙습니다.

| Tool | What it does / 하는 일 |
| --- | --- |
| `transfer_1won` | Deposits 1 KRW into a bank account · 실제로 1원을 입금합니다 |
| `req_pccc` | Sends a verification SMS to the person · 본인 휴대폰으로 인증 SMS를 발송합니다 |
| `get_pccc` | Consumes a one-time verification code · 1회용 인증 응답을 소모합니다 |
| `tts_jobs_create` | Accepts and charges a TTS job once · TTS 작업을 접수하고 1회 과금합니다 |
| `tts_jobs_cancel` | Cancels a waiting or processing job without a refund · 대기·생성 중 작업을 환불 없이 취소합니다 |
| `tts_jobs_result` | Permanently consumes the one-time result · 1회용 결과 원본을 영구 소모합니다 |
| `tts_jobs_subtitles` | Permanently consumes the one-time ASS subtitles · 1회용 ASS 자막 원본을 영구 소모합니다 |

TTS 보이스 표시 이름: `narrator_m_01` 태준, `narrator_m_02` 민석, `narrator_m_03` 도현, `narrator_m_04` 강우, `narrator_m_05` 성훈, `narrator_f_10s_01` 서아, `narrator_f_10s_02` 하린, `narrator_f_10s_03` 예린, `narrator_m_20s_01` 도윤, `narrator_f_20s_01` 지안, `narrator_f_20s_02` 서윤, `narrator_f_20s_03` 소연, `narrator_f_20s_04` 유나, `narrator_m_30s_01` 현우, `narrator_m_30s_02` 준혁, `narrator_m_40s_01` 정우, `narrator_m_80s_01` 영수.

TTS 작업 입력은 최대 800자입니다. 완성된 MP3와 ASS 자막은 서로 독립된 1회용 원본이므로, 결과를 저장할 준비가 된 뒤 `tts_jobs_result`와 `tts_jobs_subtitles`를 각각 한 번만 호출하세요.

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

Prepaid points, charged per call, at the same rate as the APICK REST API. No subscription, no per-seat fee. **Failed calls are not charged.** Each tool's live price is appended to its description in `tools/list`, so the agent sees the cost before it decides to call. Free tools include `bank_code`, `info` and `llm_models`.

포인트 선불, 호출당 차감이며 단가는 에이픽 REST API와 동일합니다. 구독료도 좌석당 요금도 없습니다. **실패한 호출은 과금되지 않습니다.** 각 Tool의 현재 단가는 `tools/list` 설명에 자동으로 붙어 AI가 호출 전에 비용을 보고 판단합니다. `bank_code`·`info`·`llm_models`는 무료입니다.

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

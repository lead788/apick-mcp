# APICK MCP — Full Tool Catalog / 전체 Tool 목록

**126 tools** across **8 domain servers**, plus the combined `all` server.
**Tool 126개**, 분야별 서버 8개와 통합 서버 `all`.

4.1.0 계약 기준입니다. 실제 연결한 서버의 현재 제공 목록은 `tools/list`로 확인하세요. Current availability is returned by `tools/list` on the connected server.



Official site 공식 사이트: **<https://apick.app>** · Docs 연동 가이드: **<https://apick.app/dev_guide/mcp>**

Endpoint pattern: `https://apick.app/mcp/{server}` — connect to `all` for everything, or to one server to keep the tool list short.
엔드포인트: `https://apick.app/mcp/{server}` — 전부 쓰려면 `all`, 특정 분야만 쓰려면 해당 서버에 연결하면 Tool 목록이 짧아집니다.

## Index / 목차

| Server 서버 | Endpoint | Tools | Coverage 범위 |
| --- | --- | --- | --- |
| [Business & Commerce · 사업자 · 커머스](#business) | `/mcp/business` | 30 | 사업자·법인 조회, 택배 배송조회, 부동산 실거래가, 차량 이력, 유효성 검사. |
| [Identity Verification · 신분증 진위확인 · 마스킹](#identity) | `/mcp/identity` | 16 | 주민등록증·운전면허증·여권·외국인등록증 진위확인, 실명확인, 개인정보 마스킹. |
| [OCR · OCR 문자인식](#ocr) | `/mcp/ocr` | 6 | 이미지 텍스트 추출과 신분증 항목 추출. |
| [Finance · 금융 · 계좌확인](#finance) | `/mcp/finance` | 3 | 계좌 예금주 실명조회와 1원 인증. |
| [Web & Search · 웹 · 검색](#web) | `/mcp/web` | 24 | 도메인·IP 조회, WHOIS, 웹페이지 수집, 구글 검색(웹·이미지·뉴스·쇼핑·지도·순위), 유튜브·인스타그램·틱톡. |
| [File Conversion · 파일 변환 · 워터마크](#convert) | `/mcp/convert` | 25 | PDF·DOCX·엑셀 변환, 음성인식(STT), 비동기 TTS, 워터마크. |
| [Vision · 이미지 · 영상 분석](#vision) | `/mcp/vision` | 6 | 얼굴 검출, 이미지 유사도, 유해이미지 판별, 영상 추출. |
| [AI & LLM · AI · LLM](#ai) | `/mcp/ai` | 15 | LLM 챗, 텍스트 도구, 이미지 생성·편집·대량 작업, 비동기 영상 생성. |
| **All 통합** | `/mcp/all` | **126** | 아래 전부 + [`find_tools`](#find-tools) |
| [Skills · 검수된 Skill 실행](#skills) | `/mcp/skills` | 6 | Skill 검색·상세·견적·실행·조회·취소. `all`에는 포함되지 않는 별도 서버 / separate server, not part of `all`. |

<details><summary><b>All 126 tool names / 전체 Tool 이름</b></summary>

`biz_detail` · `venture_biz_info` · `land_rt_price` · `req_pccc` · `get_pccc` · `get_car_flooding` · `get_car_scrap` · `parcel_tracking` · `parcel_tracking_auto` · `check_email_valid` · `check_phone_valid` · `check_spam_number` · `holiday_info` · `search_juso` · `info` · `app_reviews` · `req_cash_receipt_deduction` · `get_cash_receipt_deduction` · `req_tax_return_history` · `get_tax_return_history` · `req_employment` · `get_employment` · `req_personal_income` · `get_personal_income` · `req_nps_join_history` · `get_nps_join_history` · `req_driving_license` · `get_driving_license` · `req_health_checkup` · `get_health_checkup`

`identi_card1` · `identi_card2` · `identi_card3` · `identi_card4` · `identi_card5` · `identi_card_image1` · `identi_card_image2` · `identi_card_image3` · `identi_card_image4` · `identi_card_image5` · `name_rrn_auth` · `hide_rrn` · `identity_document_residence_card` · `identity_document_passport` · `identity_document_id_card` · `identity_document_driver_license`

`ocr` · `ocr_identi1` · `ocr_identi2` · `ocr_identi3` · `ocr_identi4` · `ocr_identi5`

`transfer_1won` · `account_realname` · `bank_code`

`nslookup` · `reverse_ip` · `location` · `ip_history` · `whois` · `url_html` · `url_screenshot` · `url_similarity` · `google_search` · `google_image_search` · `google_news_search` · `google_shopping_search` · `google_maps_search` · `google_rank_check` · `google_lens_search` · `crawl_youtube` · `download_youtube_video` · `youtube_metadata` · `youtube_thumbnail` · `youtube_subtitle_list` · `youtube_subtitle` · `instagram_profile` · `instagram_post` · `tiktok_profile`

`stt` · `tts_jobs_create` · `tts_gemini_create` · `tts_gemini_voices` · `tts_openai_create` · `tts_openai_voices` · `tts_options` · `tts_quote` · `tts_jobs_status` · `tts_jobs_cancel` · `tts_jobs_result` · `tts_jobs_subtitles` · `voice_change` · `face_blur` · `pdf_to_docx` · `pdf_to_image` · `pdf_merge` · `html_to_pdf` · `docx_to_pdf` · `json_to_excel` · `base64_to_image` · `set_watermark` · `get_watermark` · `draw_watermark_pdf` · `draw_watermark_image`

`nsfw_detection` · `image_similarity` · `video_to_mp3` · `extract_video_thumbnail` · `word_cloud` · `face_detection`

`llm_models` · `llm_chat` · `text_summary` · `text_polish` · `image_generate` · `image_edit` · `image_batch_create` · `image_batch_status` · `image_batch_result` · `seedance_jobs_create` · `seedance_jobs_status` · `veo_jobs_create` · `veo_jobs_status` · `kling_jobs_create` · `kling_jobs_status`

`find_tools` (all only / 통합 서버 전용)

</details>

---

<a id="all-only"></a>

## All server only · 통합 서버 전용

`https://apick.app/mcp/all` — 1 tool in addition to the 117 domain tools

Tools that exist only on the combined `all` server. Domain servers keep their own tool counts.

분야별 Tool 117개에 더해 통합 서버 `all`에만 있는 Tool입니다. 분야별 서버의 Tool 수는 바뀌지 않습니다.

<a id="find-tools"></a>

### `find_tools` — APICK 도구 찾기

Recommend the APICK tools that best fit a task described in natural language (Korean or English), with a relevance label for each match.

자연어(한국어·영어)로 설명한 작업에 가장 알맞은 에이픽 Tool을 추천합니다. Tool이 많은 `all` 서버에서 호출할 Tool을 고르기 전에 사용하세요. 무료이며 인증키 없이 호출할 수 있습니다.

> 읽기 전용 / read-only · 무료·인증키 불필요 / free, no key needed · server `all`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `task` | `string` | **필수 / required** | 하려는 작업 설명, 2~500자 (예: "사업자등록번호로 폐업 여부 확인", "Merge two PDF files") |
| `limit` | `integer` | 선택 / optional | 돌려받을 Tool 수, 1~10 (기본 5) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"find_tools","arguments":{"task":"Merge two PDF files","limit":3}}}
```

Response / 응답 (`structuredContent`, same JSON in text content / 텍스트 콘텐츠에도 같은 JSON):

| Field | Type | Description 설명 |
| --- | --- | --- |
| `task` | `string` | 요청한 작업 설명 (앞뒤 공백 제거) / the task you sent, trimmed |
| `tools` | `array` | 추천 Tool 목록, 관련도 높은 순 / recommended tools, best match first |
| `tools[].name` | `string` | 호출할 Tool 이름 / tool name to call |
| `tools[].title` | `string` | Tool 제목 / tool title |
| `tools[].description` | `string` | Tool 설명 요약 / short tool description |
| `tools[].relevance` | `string` | 관련도 `high` · `medium` · `low` / relevance label |
| `message` | `string` | 맞는 Tool이 없을 때만 포함되며 `tools`는 빈 배열 / present only when nothing matches and `tools` is empty |

Call the recommended tool afterwards with your API key as usual. 추천받은 Tool은 평소처럼 인증키로 호출하세요.

---

<a id="business"></a>

## Business & Commerce · 사업자 · 커머스

`https://apick.app/mcp/business` — 30 tools

Korean business registry, corporate credit, parcel tracking, real-estate prices, vehicle history, and input validation.

사업자·법인 조회, 택배 배송조회, 부동산 실거래가, 차량 이력, 유효성 검사.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`biz_detail`](#biz-detail) | 사업자 정보 조회 | `biz_no` |
| [`venture_biz_info`](#venture-biz-info) | 벤처기업 정보조회 | `biz_no` |
| [`land_rt_price`](#land-rt-price) | 부동산 실거래가 조회 | `addr1`, `addr2`, `type`, `year` |
| [`req_pccc`](#req-pccc) | 개인통관고유부호 인증 요청 | `name`, `birthday`, `phone`, `provider` |
| [`get_pccc`](#get-pccc) | 개인통관고유부호 조회 | `tx_id` |
| [`req_employment`](#req-employment) | 재직·보험료 확인 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_employment`](#get-employment) | 재직·보험료 확인 상태·결과 | `transactionId` |
| [`req_personal_income`](#req-personal-income) | 금융소득(이자·배당) 조회 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_personal_income`](#get-personal-income) | 금융소득(이자·배당) 조회 상태·결과 | `transactionId` |
| [`req_nps_join_history`](#req-nps-join-history) | 국민연금 가입내역 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_nps_join_history`](#get-nps-join-history) | 국민연금 가입내역 상태·결과 | `transactionId` |
| [`req_driving_license`](#req-driving-license) | 운전면허 조회 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_driving_license`](#get-driving-license) | 운전면허 조회 상태·결과 | `transactionId` |
| [`req_health_checkup`](#req-health-checkup) | 국가 건강검진 결과 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_health_checkup`](#get-health-checkup) | 국가 건강검진 결과 상태·결과 | `transactionId` |
| [`req_cash_receipt_deduction`](#req-cash-receipt-deduction) | 현금영수증 소득공제 내역 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_cash_receipt_deduction`](#get-cash-receipt-deduction) | 현금영수증 소득공제 내역 상태·결과 | `transactionId` |
| [`req_tax_return_history`](#req-tax-return-history) | 국세 신고내역 조회 인증 요청 | `name`, `birthDate`, `phone`, `authProvider` |
| [`get_tax_return_history`](#get-tax-return-history) | 국세 신고내역 조회 상태·결과 | `transactionId` |
| [`get_car_flooding`](#get-car-flooding) | 차량 침수차 여부 조회 | `type`, `value` |
| [`get_car_scrap`](#get-car-scrap) | 차량 폐차사고처리 여부 조회 | `type`, `value` |
| [`parcel_tracking`](#parcel-tracking) | 택배 배송조회 | `carrier`, `trackingNumber` |
| [`parcel_tracking_auto`](#parcel-tracking-auto) | 택배 배송조회(자동) | `trackingNumber` |
| [`check_email_valid`](#check-email-valid) | 이메일 유효성 검사 | `email` |
| [`check_phone_valid`](#check-phone-valid) | 전화번호 유효성 검사 | `number` |
| [`check_spam_number`](#check-spam-number) | 스팸/광고/범죄 전화번호 조회 | `number` |
| [`holiday_info`](#holiday-info) | 공휴일 조회 | `year`, `month` |
| [`search_juso`](#search-juso) | 도로명주소 조회 | `juso` |
| [`info`](#info) | 계정 정보 조회 | — |
| [`bid_notice`](#bid-notice) | 나라장터 입찰공고 조회 | — |
| [`bid_award`](#bid-award) | 나라장터 낙찰정보 조회 | — |
| [`dart_disclosure`](#dart-disclosure) | 기업 공시 검색 | — |
| [`dart_company`](#dart-company) | 기업 개황 조회 | `corpCode` |
| [`dart_financials`](#dart-financials) | 기업 재무제표 조회 | `corpCode`, `bsnsYear` |
| [`kipris_patent`](#kipris-patent) | 특허·실용신안 검색 | `word` |
| [`kipris_trademark`](#kipris-trademark) | 상표 검색 | `word` |
| [`rtms_trade`](#rtms-trade) | 부동산 매매 실거래가 조회 | `lawdCd`, `dealYmd` |
| [`rtms_rent`](#rtms-rent) | 부동산 전월세 실거래가 조회 | `lawdCd`, `dealYmd` |
| [`public_price`](#public-price) | 공시가격 조회 | `pnu`, `stdrYear` |
| [`geocode`](#geocode) | 주소·필지(PNU) 조회 | — |
| [`shop_price`](#shop-price) | 상품 최저가 조회 | `query` |
| [`app_reviews`](#app-reviews) | 앱 리뷰 조회 | `appId` |

<a id="biz-detail"></a>

### `biz_detail` — 사업자 정보 조회

Look up general status information of a Korean business by its 10-digit business registration number.

사업자등록번호로 해당 사업자의 일반 현황 정보(대표자, 주소, 직원수, 설립일, 업종, 업태, 종목, 연락처, 사업자상태, 과세유형 등)를 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `biz_no` | `string` | **필수 / required** | 사업자등록번호 (숫자 10자리, 하이픈 제외, 예: 4398700761) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"biz_detail","arguments":{"biz_no":"<biz_no>"}}}
```

<a id="venture-biz-info"></a>

### `venture_biz_info` — 벤처기업 정보조회

Look up venture company information of a Korean business, including financial statements and investment data.

벤처기업을 대상으로 사업자 정보, 대차대조표, 손익계산서, 투자정보, 벤처기업확인정보를 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `biz_no` | `string` | **필수 / required** | 사업자등록번호 (숫자 10자리, 하이픈 제외) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"venture_biz_info","arguments":{"biz_no":"<biz_no>"}}}
```

<a id="land-rt-price"></a>

### `land_rt_price` — 부동산 실거래가 조회

Look up real estate transaction price records in Korea by region, property type, and year.

시/도·시/군/구, 부동산 유형, 년도를 지정해 부동산 실거래 이력을 조회합니다. addr1 값이 잘못되면 응답의 options 필드로 선택 가능한 지역 목록을 안내합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `addr1` | `string` | **필수 / required** | 도/광역시/특별시 정식 명칭 (예: 서울특별시, 경기도, 부산광역시) |
| `addr2` | `string` | **필수 / required** | 시/군/구 (예: 금천구) |
| `type` | `string` | **필수 / required** | 유형 코드 A~H 중 하나. A:아파트, B:연립/다세대, C:단독/다가구, D:오피스텔, E:분양/입주권, F:상업/업무용, G:토지, H:공장/창고등 |
| `year` | `string` | **필수 / required** | 조회 년도 (1950 ~ 현재 년도, 예: 2025) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"land_rt_price","arguments":{"addr1":"<addr1>","addr2":"<addr2>","type":"<type>","year":"<year>"}}}
```

<a id="req-pccc"></a>

### `req_pccc` — 개인통관고유부호 인증 요청

Request simple authentication (KakaoTalk, Toss, PASS, etc.) to retrieve a Korean Personal Customs Clearance Code (PCCC).

이름, 생년월일, 휴대전화번호, 간편인증 방식을 입력하면 해당 휴대폰으로 간편인증 요청을 보내고 결과 조회에 사용할 tx_id 를 즉시 반환합니다. 사용자가 휴대폰에서 직접 승인해야 하며, 승인 결과는 `get_pccc` 에 tx_id 를 넣어 확인합니다.

> **부작용 있음 / has side effects** · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `name` | `string` | **필수 / required** | 이름 |
| `birthday` | `string` | **필수 / required** | 생년월일 8자리 (YYYYMMDD, 예: 19900101) |
| `phone` | `string` | **필수 / required** | 휴대전화 번호 (본인 명의, 숫자만) |
| `provider` | `string` | **필수 / required** | 간편인증 방식: `kakao`, `naver`, `toss`, `pass`, `samsung`, `kb`, `shinhan`, `hana`, `woori`, `ibk`, `nh`, `kakaobank`, `banksalad` |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"req_pccc","arguments":{"name":"<name>","birthday":"19900101","phone":"<phone>","provider":"kakao"}}}
```

인증 요청이 실제 발송된 접수 시점에 과금됩니다. 이미 대기 중인 요청을 다시 보내면 인증을 재발송하지 않고 기존 tx_id 를 반환하며 과금되지 않습니다. 인증 유효시간은 5분입니다.

<a id="get-pccc"></a>

### `get_pccc` — 개인통관고유부호 조회

Retrieve a Korean Personal Customs Clearance Code (PCCC) by transaction ID.

req_pccc Tool 호출로 받은 tx_id 를 입력해 처리 상태를 확인합니다. 아직 승인 전이면 status 는 `pending`, message 는 "인증 대기중입니다." 이며 과금되지 않습니다. 승인이 끝나면 서버가 최종 정보를 조회해 개인통관고유부호와 주소, 수집 시각 `checked_at` 을 반환하며 이때 과금됩니다. 발급된 부호가 없으면 message 는 "조회된 개인통관고유부호가 없습니다." 이고 과금되지 않습니다. 결과는 24시간 동안 재조회할 수 있고 재조회할 때마다 과금됩니다.

> **부작용 있음 / has side effects** · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `tx_id` | `string` | **필수 / required** | req_pccc(개인통관고유부호 인증 요청) 응답의 트랜잭션 ID |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_pccc","arguments":{"tx_id":"<tx_id>"}}}
```

<a id="simple-auth-data"></a>

### 간편인증 데이터 조회 공통 계약 / Shared data-lookup contract

아래 7개 상품은 **접수 → 휴대폰 승인 → 결과 조회** 순서로 호출합니다. 접수 전에 알림 발송·과금과 조회 항목을 사용자에게 확인하고, 승인은 사용자가 휴대폰에서 직접 수행합니다. 승인 대기 중 접수를 반복하지 않습니다.

Use request → user approval on the phone → result lookup. Confirm the requested data and acceptance charge before submitting. Never approve on the user’s behalf or automatically repeat the authentication request.

| 접수 입력 | 형식 | 필수 |
| --- | --- | --- |
| `name` | 본인 이름, 2~40자 | 필수 |
| `birthDate` | 생년월일 숫자 8자리, YYYYMMDD | 필수 |
| `phone` | 본인 명의 휴대전화 번호, 숫자 10~11자리, 01로 시작 | 필수 |
| `authProvider` | `kakao`, `naver`, `toss`, `pass`, `samsung`, `kb`, `shinhan`, `hana`, `woori`, `ibk`, `nh`, `kakaobank`, `banksalad` | 필수 |

결과 Tool은 **같은 상품**의 접수 응답에서 받은 `transactionId`(소문자 16진수 32자리)만 받습니다. 접수·결과 Tool 모두 `readOnlyHint: false`입니다. 접수는 `idempotentHint: false`, 결과 조회는 동일 거래 재조회 시 중복 과금하지 않아 `idempotentHint: true`입니다.

Result tools require the `transactionId` from the same product. Both stages are non-read-only because they may trigger notifications, collection or billing. Repeated result reads do not charge again.

| 상품 | 선택 입력 | 성공 결과 위치 |
| --- | --- | --- |
| 재직·보험료 확인 | insuranceYears: 정수 1~3 (선택, 기본 1) | `result.employment` |
| 금융소득(이자·배당) 조회 | incomeYears: 정수 1~5 (선택, 기본 1) | `result.personalIncome` |
| 국민연금 가입내역 | from, to: YYYY-MM (각각 선택) | `result.npsJoinHistory` |
| 운전면허 조회 | 없음 | `result.drivingLicense` |
| 국가 건강검진 결과 | 없음 | `result.healthCheckup` |
| 현금영수증 소득공제 내역 | incomeYears: 정수 1~3 (선택, 기본 1) | `result.cashReceiptDeduction` |
| 국세 신고내역 조회 | years: 정수 1~10 (선택, 기본 1) | `result.taxReturnHistory` |

**응답:** MCP의 `structuredContent`와 JSON 텍스트에는 REST 응답의 `data`가 그대로 담깁니다. `schemaVersion`, `transactionId`, `product`, `status`, `resultAvailable`, `charged`, `sources`, `message`, `success`를 확인합니다. 접수에는 `expiresAt`와 선택적 `approvals`, 수집 중에는 `progress`, 결과에는 `checkedAt`, `resultExpiresAt`, `result`가 포함될 수 있습니다. 실제 차감 포인트는 `_meta["app.apick/cost"]`입니다.

**Response:** `structuredContent` and JSON text preserve the REST `data` envelope. Check `status`, `resultAvailable`, `charged`, and `errorCode`; transport success alone does not mean collection succeeded. Billing metadata is available under `_meta["app.apick/cost"]`.

| 상태 | 클라이언트 처리 |
| --- | --- |
| `AUTH_REQUESTED`, `AUTH_WAITING` | 사용자에게 휴대폰 승인을 안내하고 같은 ID 유지 |
| `AUTH_COMPLETED`, `COLLECTING`, `COLLECTED` | 완료 여부를 확인하며 간격을 두고 같은 결과 Tool 조회 |
| `SUCCESS`, `PARTIAL_SUCCESS` | `resultAvailable`과 `result` 확인; 부분 성공이면 누락 항목 확인 |
| `AUTH_REJECTED`, `AUTH_EXPIRED`, `FAILED` | `errorCode`와 `message` 확인; 자동 재접수 중단 |

`errorCode`는 `RESULT_EXPIRED`, `AUTH_EXPIRED`, `AUTH_REJECTED`, `COLLECT_FAILED`를 포함합니다. 만료된 결과는 다시 조회할 수 없으며 새로운 인증 접수가 필요합니다. 업무 상태 오류는 `isError: false`인 정상 MCP 응답에도 담길 수 있으므로 `status`와 `errorCode`를 함께 검사하세요.

접수 시 정액 과금, 결과 최초 반환 시 조회 범위별 과금입니다. 현금영수증 소득공제 내역과 국세 신고내역은 인증 발송 성공 시 20P, 최초 결과 60P × (1 + 0.5 × (연수 - 1))입니다. 승인 대기·수집 중 조회 및 `resultExpiresAt` 전 재조회는 무료입니다. **PCCC는 별도 계약**으로 `birthday`·`provider`·`tx_id`를 사용하고 결과 재조회도 과금됩니다.

Acceptance is billed separately; first result delivery is billed by scope. Waiting/collecting polls and repeat reads before `resultExpiresAt` are free. PCCC keeps its existing `birthday`/`provider`/`tx_id` contract and charges repeated result reads.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "req_employment",
    "arguments": {
      "name": "홍길동",
      "birthDate": "19900101",
      "phone": "01012345678",
      "authProvider": "kakao",
      "insuranceYears": 1
    }
  }
}
```

사용자가 휴대폰에서 승인한 뒤 접수 응답의 실제 `transactionId`로 조회합니다:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "get_employment",
    "arguments": {
      "transactionId": "0123456789abcdef0123456789abcdef"
    }
  }
}
```

<a id="req-employment"></a>

### `req_employment` — 재직·보험료 확인 인증 요청

REST: `POST /rest/req_employment` · SDK: `requestEmployment()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: insuranceYears: 정수 1~3 (선택, 기본 1).

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-employment"></a>

### `get_employment` — 재직·보험료 확인 결과 조회

REST: `POST /rest/get_employment` · SDK: `getEmployment()`

필수: `transactionId`. 성공 결과: `result.employment`.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="req-personal-income"></a>

### `req_personal_income` — 금융소득(이자·배당) 조회 인증 요청

REST: `POST /rest/req_personal_income` · SDK: `requestPersonalIncome()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: incomeYears: 정수 1~5 (선택, 기본 1).

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-personal-income"></a>

### `get_personal_income` — 금융소득(이자·배당) 조회 결과 조회

REST: `POST /rest/get_personal_income` · SDK: `getPersonalIncome()`

필수: `transactionId`. 성공 결과: `result.personalIncome`.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="req-nps-join-history"></a>

### `req_nps_join_history` — 국민연금 가입내역 인증 요청

REST: `POST /rest/req_nps_join_history` · SDK: `requestNpsJoinHistory()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: from, to: YYYY-MM (각각 선택).

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-nps-join-history"></a>

### `get_nps_join_history` — 국민연금 가입내역 결과 조회

REST: `POST /rest/get_nps_join_history` · SDK: `getNpsJoinHistory()`

필수: `transactionId`. 성공 결과: `result.npsJoinHistory`.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="req-driving-license"></a>

### `req_driving_license` — 운전면허 조회 인증 요청

REST: `POST /rest/req_driving_license` · SDK: `requestDrivingLicense()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: 없음.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-driving-license"></a>

### `get_driving_license` — 운전면허 조회 결과 조회

REST: `POST /rest/get_driving_license` · SDK: `getDrivingLicense()`

필수: `transactionId`. 성공 결과: `result.drivingLicense`.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="req-health-checkup"></a>

### `req_health_checkup` — 국가 건강검진 결과 인증 요청

REST: `POST /rest/req_health_checkup` · SDK: `requestHealthCheckup()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: 없음.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-health-checkup"></a>

### `get_health_checkup` — 국가 건강검진 결과 결과 조회

REST: `POST /rest/get_health_checkup` · SDK: `getHealthCheckup()`

필수: `transactionId`. 성공 결과: `result.healthCheckup`.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="req-cash-receipt-deduction"></a>

### `req_cash_receipt_deduction` — 현금영수증 소득공제 내역 인증 요청

REST: `POST /rest/req_cash_receipt_deduction` · SDK: `requestCashReceiptDeduction()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: incomeYears: 정수 1~3 (선택, 기본 1). 인증 발송 성공 시 20P이며 조회 범위와 무관합니다.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-cash-receipt-deduction"></a>

### `get_cash_receipt_deduction` — 현금영수증 소득공제 내역 결과 조회

REST: `POST /rest/get_cash_receipt_deduction` · SDK: `getCashReceiptDeduction()`

필수: `transactionId`. 성공 결과: `result.cashReceiptDeduction` (`조회연도`, `전체합계`, `연도별[].사용내역`). 최초 결과 60P × (1 + 0.5 × (incomeYears - 1)), 기본 60P.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="req-tax-return-history"></a>

### `req_tax_return_history` — 국세 신고내역 조회 인증 요청

REST: `POST /rest/req_tax_return_history` · SDK: `requestTaxReturnHistory()`

필수: `name`, `birthDate`, `phone`, `authProvider`. 선택: years: 정수 1~10 (선택, 기본 1). 인증 발송 성공 시 20P이며 조회 범위와 무관합니다.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-tax-return-history"></a>

### `get_tax_return_history` — 국세 신고내역 조회 결과 조회

REST: `POST /rest/get_tax_return_history` · SDK: `getTaxReturnHistory()`

필수: `transactionId`. 성공 결과: `result.taxReturnHistory` (`조회기간`, `합계`, `신고내역`). 최초 결과 60P × (1 + 0.5 × (years - 1)), 기본 60P.

[공통 입력·응답·과금 계약](#simple-auth-data)을 따릅니다.

---

<a id="get-car-flooding"></a>

### `get_car_flooding` — 차량 침수차 여부 조회

Check whether a Korean vehicle has a flood damage record, by VIN or license plate number.

차대번호(VIN) 또는 차량번호로 자동차의 침수 이력 여부를 조회합니다. 중고차 구매 전 확인 등에 사용합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `type` | `string` | **필수 / required** | 조회 종류. 1: 차대번호(VIN), 2: 차량번호 |
| `value` | `string` | **필수 / required** | 차대번호(type=1, 17자리) 또는 차량번호(type=2) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_car_flooding","arguments":{"type":"<type>","value":"<value>"}}}
```

<a id="get-car-scrap"></a>

### `get_car_scrap` — 차량 폐차사고처리 여부 조회

Check whether a Korean vehicle has a scrap/total-loss accident record, by VIN or license plate number.

차대번호(VIN) 또는 차량번호로 폐차사고처리 여부를 조회합니다. 중고차 구매 전 확인 등에 사용합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `type` | `string` | **필수 / required** | 조회 종류. 1: 차대번호(VIN), 2: 차량번호 |
| `value` | `string` | **필수 / required** | 차대번호(type=1, 17자리) 또는 차량번호(type=2) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_car_scrap","arguments":{"type":"<type>","value":"<value>"}}}
```

<a id="parcel-tracking"></a>

### `parcel_tracking` — 택배 배송조회

Track a Korean parcel in real time by carrier code and tracking number.

택배사 코드와 운송장번호를 지정해 실시간 배송현황을 조회합니다. 결과는 저장하지 않고 매 호출마다 즉시 조회합니다. carrier 코드 예: cj(CJ대한통운), hanjin(한진택배), lotte(롯데택배), logen(로젠택배), epost-domestic(우체국택배) 등 — 전체 목록은 /rest/parcel_tracking_carriers(무료)에서 확인할 수 있고, 택배사를 모르면 parcel_tracking_auto Tool로 자동판별 조회하세요.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `carrier` | `string` | **필수 / required** | 택배사 코드 (예: cj, hanjin, lotte, logen, epost-domestic) |
| `trackingNumber` | `string` | **필수 / required** | 운송장번호 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"parcel_tracking","arguments":{"carrier":"<carrier>","trackingNumber":"<trackingNumber>"}}}
```

<a id="parcel-tracking-auto"></a>

### `parcel_tracking_auto` — 택배 배송조회(자동)

Track a Korean parcel in real time with automatic carrier detection from the tracking number alone.

택배사 지정 없이 운송장번호만으로 택배사를 자동 판별해 실시간 배송현황을 조회합니다. 택배사를 이미 아는 경우에는 parcel_tracking Tool이 더 정확합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `trackingNumber` | `string` | **필수 / required** | 운송장번호 (택배사 지정 없이 형식만으로 자동 판별) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"parcel_tracking_auto","arguments":{"trackingNumber":"<trackingNumber>"}}}
```

<a id="check-email-valid"></a>

### `check_email_valid` — 이메일 유효성 검사

Validate whether an email address is real and deliverable.

이메일 주소의 유효성 여부를 검사합니다. 회원가입 입력값 검증, 발송 전 리스트 정제 등에 사용합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `email` | `string` | **필수 / required** | 이메일 주소 (예: hong@example.com) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"check_email_valid","arguments":{"email":"<email>"}}}
```

<a id="check-phone-valid"></a>

### `check_phone_valid` — 전화번호 유효성 검사

Validate whether a phone number is in service.

전화번호의 유효성 여부를 검사합니다. 국내 번호는 0으로 시작하는 형식(예: 01012341234) 그대로 입력하면 되고, 해외 번호는 + 국가코드 형식으로 입력합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `number` | `string` | **필수 / required** | 전화번호 (예: 01012341234, 해외는 +국가코드 형식) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"check_phone_valid","arguments":{"number":"<number>"}}}
```

<a id="check-spam-number"></a>

### `check_spam_number` — 스팸/광고/범죄 전화번호 조회

Check whether a phone number has been reported for spam, advertising, or criminal use in Korea.

스팸/광고/범죄에 사용된 전화번호인지 조회합니다. 수신 전화 필터링, 이상 거래 탐지 등에 사용합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `number` | `string` | **필수 / required** | 전화번호 (예: 01012341234) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"check_spam_number","arguments":{"number":"<number>"}}}
```

<a id="holiday-info"></a>

### `holiday_info` — 공휴일 조회

Look up Korean public holidays for a given year and month.

해당 년월의 대한민국 공휴일 정보를 조회합니다. 영업일 계산, 일정 관리 등에 사용합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `year` | `string` | **필수 / required** | 조회 년도 (1900 ~ 2200, 예: 2024) |
| `month` | `string` | **필수 / required** | 조회 월 (1 ~ 12, 예: 02) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"holiday_info","arguments":{"year":"<year>","month":"<month>"}}}
```

<a id="search-juso"></a>

### `search_juso` — 도로명주소 조회

Search Korean road-name addresses by keyword.

지번 또는 도로명 키워드로 도로명 주소를 검색합니다. 페이지당 10건씩 반환되며 total_count 필드로 전체 검색결과 개수를 확인할 수 있습니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `juso` | `string` | **필수 / required** | 검색할 주소 키워드 (지번, 도로명. 예: 디지털로) |
| `page` | `string` | 선택 / optional | 검색 결과 조회 페이지 (기본값 1, 페이지당 10건) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"search_juso","arguments":{"juso":"<juso>"}}}
```

<a id="info"></a>

### `info` — 계정 정보 조회

Check your APICK account balance and status.

현재 인증 키에 연결된 APICK 계정의 잔여 포인트와 계정 상태 정보를 조회합니다. 무료입니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

_No parameters. 파라미터 없음._

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"info","arguments":{}}}
```

---

<a id="bid-notice"></a>

### `bid_notice` — 나라장터 입찰공고 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean public procurement (Nara Market) bid notices by business type, period, or notice number.

조달청 나라장터 입찰공고를 업무구분(물품·공사·용역·외자)·기간(최대 31일)·공고번호로 조회합니다. bizType 미지정 시 용역(Servc)이며, bidNtceNo만 주면 공고번호로 조회합니다. startDate·endDate는 YYYYMMDD 또는 YYYYMMDDHHMM 입니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `bizType` | `string` (물품 / 공사 / 용역 / 외자) | 선택 / optional | 업무구분 (물품·공사·용역·외자, 기본 용역) |
| `startDate` | `string` | 선택 / optional | 조회 시작일 (YYYYMMDD 또는 YYYYMMDDHHMM) |
| `endDate` | `string` | 선택 / optional | 조회 종료일 (YYYYMMDD 또는 YYYYMMDDHHMM) |
| `bidNtceNo` | `string` | 선택 / optional | 입찰공고번호 (지정 시 공고번호로 조회) |
| `indstrytyCd` | `string` | 선택 / optional | 업종코드 (선택) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 999) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"bid_notice","arguments":{"bizType":"<bizType>","startDate":"<startDate>","endDate":"<endDate>","bidNtceNo":"<bidNtceNo>","indstrytyCd":"<indstrytyCd>","pageNo":1,"numOfRows":1}}}
```

<a id="bid-award"></a>

### `bid_award` — 나라장터 낙찰정보 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean public procurement (Nara Market) bid-opening and award results by business type, period, or notice number.

조달청 나라장터 개찰·낙찰 결과를 업무구분(물품·공사·용역·외자)·기간(최대 31일)·공고번호로 조회합니다. bizType 미지정 시 용역(Servc)입니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `bizType` | `string` (물품 / 공사 / 용역 / 외자) | 선택 / optional | 업무구분 (물품·공사·용역·외자, 기본 용역) |
| `startDate` | `string` | 선택 / optional | 조회 시작일 (YYYYMMDD 또는 YYYYMMDDHHMM) |
| `endDate` | `string` | 선택 / optional | 조회 종료일 (YYYYMMDD 또는 YYYYMMDDHHMM) |
| `bidNtceNo` | `string` | 선택 / optional | 입찰공고번호 (지정 시 공고번호로 조회) |
| `indstrytyCd` | `string` | 선택 / optional | 업종코드 (선택) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 999) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"bid_award","arguments":{"bizType":"<bizType>","startDate":"<startDate>","endDate":"<endDate>","bidNtceNo":"<bidNtceNo>","indstrytyCd":"<indstrytyCd>","pageNo":1,"numOfRows":1}}}
```

<a id="dart-disclosure"></a>

### `dart_disclosure` — 기업 공시 검색

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean corporate disclosures (DART) by company code, period, or disclosure type.

금융감독원 DART 전자공시를 회사 고유번호(corpCode)·기간(YYYYMMDD)·공시유형(pblntfTy, A~J)으로 조회합니다. corpCode 없이 기간만 조회하면 기간은 최대 3개월입니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `corpCode` | `string` | 선택 / optional | DART 고유번호 (8자리) |
| `startDate` | `string` | 선택 / optional | 조회 시작일 (YYYYMMDD) |
| `endDate` | `string` | 선택 / optional | 조회 종료일 (YYYYMMDD) |
| `pblntfTy` | `string` (A / B / C / D / E / F / G / H / I / J) | 선택 / optional | 공시유형 (A 정기, B 주요사항, C 발행, D 지분, E 기타, F 외부감사, G 펀드, H 자산유동화, I 거래소, J 공정위) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 100) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"dart_disclosure","arguments":{"corpCode":"<corpCode>","startDate":"<startDate>","endDate":"<endDate>","pblntfTy":"<pblntfTy>","pageNo":1,"numOfRows":1}}}
```

<a id="dart-company"></a>

### `dart_company` — 기업 개황 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Get a Korean company overview from DART by its company code.

금융감독원 DART에 등록된 기업의 개황(정식명칭·대표자·주소·업종·설립일 등)을 고유번호로 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `corpCode` | `string` | **필수 / required** | DART 고유번호 (8자리) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"dart_company","arguments":{"corpCode":"<corpCode>"}}}
```

<a id="dart-financials"></a>

### `dart_financials` — 기업 재무제표 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Get Korean company financial statements from DART by year and report code.

금융감독원 DART 단일회사 주요 재무제표를 고유번호·사업연도·보고서(1분기/반기/3분기/사업)·개별/연결 구분으로 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `corpCode` | `string` | **필수 / required** | DART 고유번호 (8자리) |
| `bsnsYear` | `string` | **필수 / required** | 사업연도 (YYYY, 2015년 이후) |
| `reprtCode` | `string` (11011 / 11012 / 11013 / 11014) | 선택 / optional | 보고서 코드 (11011 사업, 11012 반기, 11013 1분기, 11014 3분기 / 기본 사업) |
| `fsDiv` | `string` (CFS / OFS) | 선택 / optional | 연결(CFS)/개별(OFS) 구분 (기본 CFS) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"dart_financials","arguments":{"corpCode":"<corpCode>","bsnsYear":"<bsnsYear>","reprtCode":"<reprtCode>","fsDiv":"<fsDiv>"}}}
```

<a id="kipris-patent"></a>

### `kipris_patent` — 특허·실용신안 검색

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean patents and utility models by keyword via KIPRIS. KIPRIS Plus

에서 특허·실용신안 공개·등록공보를 키워드로 검색합니다. patent·utility 로 특허/실용신안 포함 여부를 정합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `word` | `string` | **필수 / required** | 검색어 (최대 100자) |
| `patent` | `boolean` | 선택 / optional | 특허 포함 여부 (기본 true) |
| `utility` | `boolean` | 선택 / optional | 실용신안 포함 여부 (기본 true) |
| `year` | `string` | 선택 / optional | 연도 필터 (YYYY) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 500) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"kipris_patent","arguments":{"word":"<word>","patent":true,"utility":true,"year":"<year>","pageNo":1,"numOfRows":1}}}
```

<a id="kipris-trademark"></a>

### `kipris_trademark` — 상표 검색

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean trademarks by keyword via KIPRIS. KIPRIS Plus

에서 상표 출원 속보를 키워드로 검색합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `word` | `string` | **필수 / required** | 검색어 (최대 100자) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 500) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"kipris_trademark","arguments":{"word":"<word>","pageNo":1,"numOfRows":1}}}
```

<a id="rtms-trade"></a>

### `rtms_trade` — 부동산 매매 실거래가 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean real estate sale transactions (MOLIT RTMS) by district code and contract month.

국토교통부 실거래가 자료를 지역코드(법정동코드 앞 5자리)·계약년월(YYYYMM)·부동산 유형으로 조회합니다(매매). propertyType: apt 아파트, rh 연립다세대, sh 단독다가구, offi 오피스텔.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `lawdCd` | `string` | **필수 / required** | 지역코드 (법정동코드 앞 5자리, 예: 11110) |
| `dealYmd` | `string` | **필수 / required** | 계약년월 (YYYYMM, 예: 202601) |
| `propertyType` | `string` (apt / rh / sh / offi) | 선택 / optional | 부동산 유형 (기본 apt) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 1000) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"rtms_trade","arguments":{"lawdCd":"<lawdCd>","dealYmd":"<dealYmd>","propertyType":"<propertyType>","pageNo":1,"numOfRows":1}}}
```

<a id="rtms-rent"></a>

### `rtms_rent` — 부동산 전월세 실거래가 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean real estate rent transactions (MOLIT RTMS) by district code and contract month.

국토교통부 실거래가 자료를 지역코드(법정동코드 앞 5자리)·계약년월(YYYYMM)·부동산 유형으로 조회합니다(전월세). propertyType: apt 아파트, rh 연립다세대, sh 단독다가구, offi 오피스텔.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `lawdCd` | `string` | **필수 / required** | 지역코드 (법정동코드 앞 5자리, 예: 11110) |
| `dealYmd` | `string` | **필수 / required** | 계약년월 (YYYYMM, 예: 202601) |
| `propertyType` | `string` (apt / rh / sh / offi) | 선택 / optional | 부동산 유형 (기본 apt) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 1000) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"rtms_rent","arguments":{"lawdCd":"<lawdCd>","dealYmd":"<dealYmd>","propertyType":"<propertyType>","pageNo":1,"numOfRows":1}}}
```

<a id="public-price"></a>

### `public_price` — 공시가격 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Get Korean official real estate prices (MOLIT NSDI) by parcel number and reference year.

국토교통부 공시가격(공동주택·개별주택·개별공시지가)을 PNU(19자리)·기준연도로 조회합니다. priceType: apart 공동주택, indvdHouse 개별주택, indvdLand 개별공시지가.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `pnu` | `string` | **필수 / required** | 필지고유번호 (19자리) |
| `stdrYear` | `string` | **필수 / required** | 공시 기준연도 (YYYY) |
| `priceType` | `string` (apart / indvdHouse / indvdLand) | 선택 / optional | 공시가격 유형 (기본 apart) |
| `pageNo` | `integer` | 선택 / optional | 페이지 번호 (기본 1) |
| `numOfRows` | `integer` | 선택 / optional | 페이지당 결과 수 (기본 10, 최대 1000) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"public_price","arguments":{"pnu":"<pnu>","stdrYear":"<stdrYear>","priceType":"<priceType>","pageNo":1,"numOfRows":1}}}
```

<a id="geocode"></a>

### `geocode` — 주소·필지(PNU) 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Resolve a Korean address to coordinates and parcel identifiers (V-World).

주소를 좌표와 필지로 변환해 PNU(19자리)·법정동코드·지번·좌표를 돌려줍니다. 공시가격·실거래가 조회에 필요한 식별자를 얻을 때 씁니다. addrType: parcel 지번, road 도로명, auto 자동(기본).

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `address` | `string` | 선택 / optional | 지번 또는 도로명 주소 (예: 서울특별시 강남구 역삼동 808) |
| `pnu` | `string` | 선택 / optional | PNU(19자리). 주면 좌표 조회 없이 바로 조회합니다. |
| `addrType` | `string` (auto / parcel / road) | 선택 / optional | 주소 유형 (기본 auto) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"geocode","arguments":{"address":"<address>","pnu":"<pnu>","addrType":"<addrType>"}}}
```

<a id="shop-price"></a>

### `shop_price` — 상품 최저가 조회

> 현재 공개 전 점검으로 비활성 상태이며 `tools/list`와 호출에서 제외됩니다. 아래 계약은 참고용으로 보존합니다. / Currently unavailable and excluded from `tools/list` and calls. The contract below is retained for reference.

Search Korean shopping listings (Naver Shopping) by keyword and return sellers, prices and the lowest-price item.

키워드로 상품을 검색해 판매처·가격과 최저가 상품을 돌려줍니다. sort: sim 정확도, date 최신, asc 낮은가격, dsc 높은가격.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `query` | `string` | **필수 / required** | 검색어 (최대 100자) |
| `display` | `integer` | 선택 / optional | 결과 수 (기본 10, 최대 100) |
| `start` | `integer` | 선택 / optional | 시작 위치 (기본 1, 최대 1000) |
| `sort` | `string` (sim / date / asc / dsc) | 선택 / optional | 정렬 (기본 sim) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"shop_price","arguments":{"query":"<query>","display":1,"start":1,"sort":"<sort>"}}}
```

<a id="app-reviews"></a>

### `app_reviews` — 앱 리뷰 조회

Get App Store app metadata and customer reviews (Apple iTunes) by numeric app id.

앱스토어 앱 정보(평점·가격·장르)와 고객 리뷰를 함께 돌려줍니다. country 기본 kr, page 로 리뷰 페이지를 넘깁니다(최대 10).

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `appId` | `string` | **필수 / required** | 앱스토어 앱 ID (숫자) |
| `country` | `string` | 선택 / optional | 국가 코드 (기본 kr) |
| `page` | `integer` | 선택 / optional | 리뷰 페이지 (기본 1, 최대 10) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"app_reviews","arguments":{"appId":"<appId>","country":"<country>","page":1}}}
```

<a id="identity"></a>

## Identity Verification · 신분증 진위확인 · 마스킹

`https://apick.app/mcp/identity` — 16 tools

Authenticity checks for Korean ID documents against government registries, real-name verification, and PII masking.

주민등록증·운전면허증·여권·외국인등록증 진위확인, 실명확인, 개인정보 마스킹.

마스킹 5종의 실패 결과는 기존 텍스트 오류와 함께 `structuredContent.error_code` 및 `structuredContent.error`를 제공합니다. 오류 코드는 `IDENTITY_TEXT_UNREADABLE`, `IDENTITY_DOCUMENT_MISMATCH`, `IDENTITY_PROCESSING_FAILED`입니다. 과금 없이 실패하며 브리지는 서버 결과를 그대로 전달합니다.

The five masking tools preserve the text error and also return `structuredContent.error_code` and `structuredContent.error`. The service codes are `IDENTITY_TEXT_UNREADABLE`, `IDENTITY_DOCUMENT_MISMATCH`, and `IDENTITY_PROCESSING_FAILED`; failed calls are not charged and the bridge forwards the server result unchanged.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`identi_card1`](#identi-card1) | [Text] 주민등록증 진위 확인 | `name`, `rrn1`, `rrn2`, `date` |
| [`identi_card2`](#identi-card2) | [Text] 운전면허증 진위 확인 | `birth_y`, `birth_m`, `birth_d`, `name`, `licen_no0`, `licen_no1`, `licen_no2`, `licen_no3` |
| [`identi_card3`](#identi-card3) | [Text] 여권 진위 확인 | `name`, `pass_num`, `made_date`, `exp_date`, `birth_date` |
| [`identi_card4`](#identi-card4) | [Text] 주민등록등본 진위 확인 | `doc_num1`, `doc_num2`, `doc_num3`, `doc_num4`, `type` |
| [`identi_card5`](#identi-card5) | [Text] 외국인등록증 진위 확인 | `rrn`, `made_date` |
| [`identi_card_image1`](#identi-card-image1) | [Image/PDF] 주민등록증 진위 확인 | `image_url` |
| [`identi_card_image2`](#identi-card-image2) | [Image/PDF] 운전면허증 진위 확인 | `image_url` |
| [`identi_card_image3`](#identi-card-image3) | [Image/PDF] 여권 진위 확인 | `image_url` |
| [`identi_card_image4`](#identi-card-image4) | [Image/PDF] 주민등록등본 진위 확인 | `image_url` |
| [`identi_card_image5`](#identi-card-image5) | [Image/PDF] 외국인등록증 진위 확인 | `image_url` |
| [`name_rrn_auth`](#name-rrn-auth) | 성명/주민등록번호 실명확인 | `name`, `rrn1`, `rrn2` |
| [`hide_rrn`](#hide-rrn) | 개인정보 마스킹(주민등록번호) | `type`, `image_url` |
| [`identity_document_residence_card`](#identity-document-residence-card) | 외국인등록증 개인정보 마스킹 | `image_url` |
| [`identity_document_passport`](#identity-document-passport) | 여권 개인정보 마스킹 | `image_url` |
| [`identity_document_id_card`](#identity-document-id-card) | 주민등록증 개인정보 마스킹 | `image_url` |
| [`identity_document_driver_license`](#identity-document-driver-license) | 운전면허증 개인정보 마스킹 | `image_url` |

<a id="identi-card1"></a>

### `identi_card1` — [Text] 주민등록증 진위 확인

Verify the authenticity of a Korean resident registration card (jumin-deungnokjeung) using text input.

주민등록증의 기재 정보를 입력해 진위 여부를 확인합니다. name, rrn1, rrn2, date 네 항목을 모두 입력해야 하며, date는 숫자만 허용됩니다(예: 20230101). 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `name` | `string` | **필수 / required** | 성명 |
| `rrn1` | `string` | **필수 / required** | 주민등록번호 앞 6자리 |
| `rrn2` | `string` | **필수 / required** | 주민등록번호 뒤 7자리 |
| `date` | `string` | **필수 / required** | 발급일자 (숫자만, 예: 20230101) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card1","arguments":{"name":"<name>","rrn1":"<rrn1>","rrn2":"<rrn2>","date":"<date>"}}}
```

<a id="identi-card2"></a>

### `identi_card2` — [Text] 운전면허증 진위 확인

Check Korean driver license number and personal details. `ghost_num` is optional: omit it, send an empty string, or send any string. Its content is not used in the match decision. This tool does not verify the serial number itself or the physical document's authenticity.

운전면허번호와 인적사항의 일치 여부를 조회합니다. birth_y, birth_m, birth_d, name과 면허번호 4구획(licen_no0~licen_no3)은 필수입니다. ghost_num(식별번호)은 생략·빈값·임의 문자열 모두 허용하며 전달값은 판정에 사용하지 않습니다. rrn1, rrn2도 선택 입력입니다. 암호일련번호 자체나 실물 면허증의 위·변조 여부는 검증하지 않습니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

`result=0` means a mismatch and `result=1` means a match. An unconfirmed result returns HTTP 424 (`result=2`); a timeout returns HTTP 408 (`result=3`). These processing failures are not charged. Responses contain short public messages, never source-page HTML.

`result=0`은 불일치, `result=1`은 일치입니다. 판정 확인 실패는 HTTP 424(`result=2`), 시간 초과는 HTTP 408(`result=3`)이며 과금되지 않습니다. 응답에는 짧은 안내 문구만 포함되고 조회 페이지 HTML은 포함되지 않습니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `birth_y` | `string` | **필수 / required** | 생년월일 - 년 (예: 2000) |
| `birth_m` | `string` | **필수 / required** | 생년월일 - 월 (예: 01) |
| `birth_d` | `string` | **필수 / required** | 생년월일 - 일 (예: 01) |
| `name` | `string` | **필수 / required** | 성명 |
| `licen_no0` | `string` | **필수 / required** | 면허번호 1구획 (예: 21) |
| `licen_no1` | `string` | **필수 / required** | 면허번호 2구획 (예: 19) |
| `licen_no2` | `string` | **필수 / required** | 면허번호 3구획 (예: 174133) |
| `licen_no3` | `string` | **필수 / required** | 면허번호 4구획 (예: 01) |
| `ghost_num` | `string` | 선택 / optional | 생략·빈값 허용, 전달값은 판정에 사용하지 않음 / May be omitted or empty; not used in the match decision |
| `rrn1` | `string` | 선택 / optional | 주민등록번호 앞 6자리 (선택) |
| `rrn2` | `string` | 선택 / optional | 주민등록번호 뒤 7자리 (선택) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card2","arguments":{"birth_y":"<birth_y>","birth_m":"<birth_m>","birth_d":"<birth_d>","name":"<name>","licen_no0":"<licen_no0>","licen_no1":"<licen_no1>","licen_no2":"<licen_no2>","licen_no3":"<licen_no3>"}}}
```

<a id="identi-card3"></a>

### `identi_card3` — [Text] 여권 진위 확인

Verify the authenticity of a Korean passport using text input.

여권의 기재 정보를 입력해 진위 여부를 확인합니다. name, pass_num, made_date, exp_date, birth_date 다섯 항목을 모두 입력해야 하며, 일자 세 항목은 숫자만 허용됩니다(예: 20230101). 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `name` | `string` | **필수 / required** | 성명 |
| `pass_num` | `string` | **필수 / required** | 여권번호 (예: M00000000) |
| `made_date` | `string` | **필수 / required** | 발급일자 (숫자만, 예: 20230101) |
| `exp_date` | `string` | **필수 / required** | 만료일자 (숫자만, 예: 20330101) |
| `birth_date` | `string` | **필수 / required** | 생년월일 (숫자만, 예: 20000101) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card3","arguments":{"name":"<name>","pass_num":"<pass_num>","made_date":"<made_date>","exp_date":"<exp_date>","birth_date":"<birth_date>"}}}
```

<a id="identi-card4"></a>

### `identi_card4` — [Text] 주민등록등본 진위 확인

Verify the authenticity of a Korean resident registration certificate (jumin-deungnok-deungbon) using text input.

주민등록등본의 문서확인번호로 진위 여부를 확인합니다. 문서확인번호 16자리를 4자리씩 나눈 doc_num1~doc_num4와 발급 종류 type(1: 정부24 발급, 2: 기타 발급)은 필수이며, name(성명)은 선택 입력입니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `doc_num1` | `string` | **필수 / required** | 문서확인번호 1구획 (4자리) |
| `doc_num2` | `string` | **필수 / required** | 문서확인번호 2구획 (4자리) |
| `doc_num3` | `string` | **필수 / required** | 문서확인번호 3구획 (4자리) |
| `doc_num4` | `string` | **필수 / required** | 문서확인번호 4구획 (4자리) |
| `name` | `string` | 선택 / optional | 성명 |
| `type` | `string` | **필수 / required** | 발급 종류 (1: 정부24 발급, 2: 기타 발급) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card4","arguments":{"doc_num1":"<doc_num1>","doc_num2":"<doc_num2>","doc_num3":"<doc_num3>","doc_num4":"<doc_num4>","type":"<type>"}}}
```

<a id="identi-card5"></a>

### `identi_card5` — [Text] 외국인등록증 진위 확인

Verify the authenticity of a Korean alien registration card (residence card) using text input.

외국인등록증의 기재 정보를 입력해 진위 여부를 확인합니다. rrn(외국인등록번호 13자리)과 made_date(발급일자 10자리, 예: 2020-01-01)는 필수이며, card_sn(뒷면 일련번호)은 입력 시 11자리여야 하고 2011-01-01 이후 발급된 등록증은 필수입니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `rrn` | `string` | **필수 / required** | 외국인등록번호 (숫자 13자리) |
| `made_date` | `string` | **필수 / required** | 발급일자 (10자리, 예: 2020-01-01) |
| `card_sn` | `string` | 선택 / optional | 뒷면 일련번호 (11자리). 2011-01-01 이후 발급분은 필수 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card5","arguments":{"rrn":"<rrn>","made_date":"<made_date>"}}}
```

<a id="identi-card-image1"></a>

### `identi_card_image1` — [Image/PDF] 주민등록증 진위 확인

Verify the authenticity of a Korean resident registration card from an image or PDF file.

주민등록증 이미지 또는 PDF 파일을 업로드하면 기재 정보를 자동 인식해 진위 여부를 확인합니다. 텍스트 입력 없이 파일 하나만 전달하면 됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card_image1","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identi-card-image2"></a>

### `identi_card_image2` — [Image/PDF] 운전면허증 진위 확인

Verify the authenticity of a Korean driver license from an image or PDF file.

운전면허증 이미지 또는 PDF 파일을 업로드하면 기재 정보를 자동 인식해 진위 여부를 확인합니다. 텍스트 입력 없이 파일 하나만 전달하면 됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card_image2","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identi-card-image3"></a>

### `identi_card_image3` — [Image/PDF] 여권 진위 확인

Verify the authenticity of a Korean passport from an image or PDF file.

여권 인적사항면 이미지 또는 PDF 파일을 업로드하면 기재 정보를 자동 인식해 진위 여부를 확인합니다. 텍스트 입력 없이 파일 하나만 전달하면 됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card_image3","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identi-card-image4"></a>

### `identi_card_image4` — [Image/PDF] 주민등록등본 진위 확인

Verify the authenticity of a Korean resident registration certificate from an image or PDF file.

주민등록등본 이미지 또는 PDF 파일을 업로드하면 문서확인번호 등 기재 정보를 자동 인식해 진위 여부를 확인합니다. 텍스트 입력 없이 파일 하나만 전달하면 됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card_image4","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identi-card-image5"></a>

### `identi_card_image5` — [Image/PDF] 외국인등록증 진위 확인

Verify the authenticity of a Korean alien registration card (residence card) from an image or PDF file.

외국인등록증 이미지 또는 PDF 파일을 업로드하면 기재 정보를 자동 인식해 진위 여부를 확인합니다. card_sn(뒷면 일련번호 11자리)은 선택 입력이며, 2011-01-01 이후 발급된 등록증은 필수입니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `card_sn` | `string` | 선택 / optional | 뒷면 일련번호 (11자리). 2011-01-01 이후 발급분은 필수 |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identi_card_image5","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="name-rrn-auth"></a>

### `name_rrn_auth` — 성명/주민등록번호 실명확인

Verify that a Korean name and resident registration number (RRN) match a real registered person.

성명과 주민등록번호의 일치 여부(실명 존재 여부)를 확인합니다. name, rrn1(앞 6자리), rrn2(뒤 7자리)를 모두 입력해야 합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `name` | `string` | **필수 / required** | 한글 성명 |
| `rrn1` | `string` | **필수 / required** | 주민등록번호 앞 6자리 숫자 |
| `rrn2` | `string` | **필수 / required** | 주민등록번호 뒤 7자리 숫자 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"name_rrn_auth","arguments":{"name":"<name>","rrn1":"<rrn1>","rrn2":"<rrn2>"}}}
```

<a id="hide-rrn"></a>

### `hide_rrn` — 개인정보 마스킹(주민등록번호)

Mask resident registration numbers found in an image and return the masked image.

이미지에서 주민등록번호를 인식해 지정한 방식으로 가린 이미지를 반환합니다. 이미지 파일과 type(1: 주민등록번호 전체 가림, 2: 뒷자리 전체 가림, 3: 뒷자리 첫 숫자 제외 가림, 4: 주민등록번호와 주소 가림)을 모두 입력해야 합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `type` | `string` | **필수 / required** | 가림 처리 타입 (1: 주민등록번호 전체, 2: 뒷자리 전체, 3: 뒷자리 첫 숫자 제외, 4: 주민등록번호+주소) |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"hide_rrn","arguments":{"type":"<type>","image_url":"https://example.com/file"}}}
```

<a id="identity-document-residence-card"></a>

### `identity_document_residence_card` — 외국인등록증 개인정보 마스킹

Extract key fields from a Korean residence card, permanent resident card, or overseas Korean resident card image and mask the last 6 digits of the registration or domestic residence report number.

외국인등록증·영주증·외국국적동포 국내거소신고증 이미지에서 지정 정보를 추출하고 등록번호 또는 거소신고번호 뒷자리 6자리를 마스킹한 이미지를 함께 반환합니다. 한 번에 신분증 한 장이 포함된 PNG 또는 JPEG 이미지만 전달해야 하며, 마스킹된 이미지는 JSON 응답의 masked_image 필드에 base64로 포함됩니다. 영주증과 외국국적동포 국내거소신고증은 마스킹만 지원하며 진위확인 Tool의 범위에는 포함되지 않습니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, 최대 20MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identity_document_residence_card","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identity-document-passport"></a>

### `identity_document_passport` — 여권 개인정보 마스킹

Extract key fields from a passport image and mask the passport number and MRZ area.

여권 인적사항면 이미지에서 지정 정보를 추출하고 여권번호 및 MRZ 영역을 마스킹한 이미지를 함께 반환합니다. MRZ 2줄이 포함되도록 촬영한 PNG 또는 JPEG 이미지 파일 하나만 전달하면 되며, 마스킹된 이미지는 JSON 응답의 masked_image 필드에 base64로 포함됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, 최대 20MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identity_document_passport","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identity-document-id-card"></a>

### `identity_document_id_card` — 주민등록증 개인정보 마스킹

Extract key fields from a Korean resident registration card image and mask the last 6 digits of the RRN.

주민등록증 이미지에서 지정 정보를 추출하고 주민등록번호 뒷자리 6자리를 마스킹한 이미지를 함께 반환합니다. PNG 또는 JPEG 이미지 파일 하나만 전달하면 되며, 마스킹된 이미지는 JSON 응답의 masked_image 필드에 base64로 포함됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, 최대 20MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identity_document_id_card","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="identity-document-driver-license"></a>

### `identity_document_driver_license` — 운전면허증 개인정보 마스킹

Extract key fields from a Korean driver license image and mask the last 6 digits of the RRN.

운전면허증(주민등록번호 표기형) 이미지에서 지정 정보를 추출하고 주민등록번호 뒷자리 6자리를 마스킹한 이미지를 함께 반환합니다. PNG 또는 JPEG 이미지 파일 하나만 전달하면 되며, 마스킹된 이미지는 JSON 응답의 masked_image 필드에 base64로 포함됩니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `identity`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, 최대 20MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"identity_document_driver_license","arguments":{"image_url":"https://example.com/file"}}}
```

---

<a id="ocr"></a>

## OCR · OCR 문자인식

`https://apick.app/mcp/ocr` — 6 tools

Text extraction from images and structured field extraction from Korean ID documents.

이미지 텍스트 추출과 신분증 항목 추출.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`ocr`](#ocr) | 이미지 텍스트 추출(OCR) | `image_url` |
| [`ocr_identi1`](#ocr-identi1) | 주민등록증 텍스트 추출(OCR) | `image_url` |
| [`ocr_identi2`](#ocr-identi2) | 운전면허증 텍스트 추출(OCR) | `image_url` |
| [`ocr_identi3`](#ocr-identi3) | 여권 텍스트 추출(OCR) | `image_url` |
| [`ocr_identi4`](#ocr-identi4) | 주민등록등본 텍스트 추출(OCR) | `image_url` |
| [`ocr_identi5`](#ocr-identi5) | 외국인등록증 텍스트 추출(OCR) | `image_url` |

<a id="ocr"></a>

### `ocr` — 이미지 텍스트 추출(OCR)

Extract text from an image file (OCR).

이미지 파일에서 텍스트를 추출해 전체 텍스트(full_text)를 반환합니다. 문서 사진, 스캔 이미지, 캡처 화면 등 범용 이미지에 사용합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ocr`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ocr","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="ocr-identi1"></a>

### `ocr_identi1` — 주민등록증 텍스트 추출(OCR)

Extract key fields from a Korean resident registration card (jumin card) image via OCR.

주민등록증 사진에서 이름, 주민등록번호, 주소, 발급일자 등 주요 정보를 추출해 구조화된 결과와 원문 텍스트(raw_text)를 반환합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ocr`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ocr_identi1","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="ocr-identi2"></a>

### `ocr_identi2` — 운전면허증 텍스트 추출(OCR)

Extract key fields from a Korean driver license image via OCR.

운전면허증 사진에서 이름, 면허번호, 생년월일 등 주요 정보를 추출해 구조화된 결과와 원문 텍스트(raw_text)를 반환합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ocr`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ocr_identi2","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="ocr-identi3"></a>

### `ocr_identi3` — 여권 텍스트 추출(OCR)

Extract key fields from a passport image via OCR.

여권 사진에서 이름, 여권번호, 발급일자, 만료일자, 생년월일 등 주요 정보를 추출해 구조화된 결과와 원문 텍스트(raw_text)를 반환합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ocr`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ocr_identi3","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="ocr-identi4"></a>

### `ocr_identi4` — 주민등록등본 텍스트 추출(OCR)

Extract key fields from a Korean certified copy of resident registration (deungbon) image via OCR.

주민등록등본 사진에서 주요 정보를 추출해 구조화된 결과와 원문 텍스트(raw_text)를 반환합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ocr`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ocr_identi4","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="ocr-identi5"></a>

### `ocr_identi5` — 외국인등록증 텍스트 추출(OCR)

Extract key fields from a Korean alien registration card (residence card) image via OCR.

외국인등록증 사진에서 이름, 외국인등록번호, 발급일자 등 주요 정보를 추출해 구조화된 결과와 원문 텍스트(raw_text)를 반환합니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ocr`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ocr_identi5","arguments":{"image_url":"https://example.com/file"}}}
```

---

<a id="finance"></a>

## Finance · 금융 · 계좌확인

`https://apick.app/mcp/finance` — 3 tools

Korean bank account holder lookup and 1 KRW deposit verification.

계좌 예금주 실명조회와 1원 인증.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`transfer_1won`](#transfer-1won) | 1원 인증 | `account_num` |
| [`account_realname`](#account-realname) | 계좌 예금주 실명 조회 | `account_num` |
| [`bank_code`](#bank-code) | 은행코드 조회 | — |

<a id="transfer-1won"></a>

### `transfer_1won` — 1원 인증

Send a 1 KRW verification deposit to a Korean bank account and return the 4-character verification code printed on the transaction.

대한민국 은행 계좌로 1원을 입금해 적요에 표시되는 인증코드를 반환합니다. 계좌 실소유 확인(1원 인증) 절차에 사용합니다. bank_code 또는 bank_name 중 하나는 입력해야 합니다.

> **부작용 있음 / has side effects** · 외부 데이터 조회 / external lookup · server `finance`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `account_num` | `string` | **필수 / required** | 계좌번호 (숫자만, 하이픈 제외) |
| `bank_code` | `string` | 선택 / optional | 은행 코드 (bank_code Tool로 조회 가능, 예: 004) |
| `bank_name` | `string` | 선택 / optional | 은행명 (예: 국민). bank_code 대신 입력 가능 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"transfer_1won","arguments":{"account_num":"<account_num>"}}}
```

<a id="account-realname"></a>

### `account_realname` — 계좌 예금주 실명 조회

Look up the account holder name of a Korean bank account.

대한민국 은행 계좌의 예금주명을 조회합니다. 송금 전 예금주 확인 등에 사용합니다. bank_code 또는 bank_name 중 하나는 입력해야 합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `finance`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `account_num` | `string` | **필수 / required** | 계좌번호 (숫자만, 하이픈 제외) |
| `bank_code` | `string` | 선택 / optional | 은행 코드 (bank_code Tool로 조회 가능, 예: 004) |
| `bank_name` | `string` | 선택 / optional | 은행명 (예: 국민). bank_code 대신 입력 가능 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"account_realname","arguments":{"account_num":"<account_num>"}}}
```

<a id="bank-code"></a>

### `bank_code` — 은행코드 조회

List Korean bank codes and names.

대한민국 은행 코드·은행명 전체 목록을 반환합니다. transfer_1won, account_realname Tool의 bank_code 입력값을 찾을 때 사용합니다. 무료입니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `finance`

_No parameters. 파라미터 없음._

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"bank_code","arguments":{}}}
```

---

<a id="web"></a>

## Web & Search · 웹 · 검색

`https://apick.app/mcp/web` — 24 tools

Domain and IP intelligence, WHOIS, page capture, Google search (web, images, news, shopping, maps, rank check), YouTube, Instagram and TikTok.

도메인·IP 조회, WHOIS, 웹페이지 수집, 구글 검색(웹·이미지·뉴스·쇼핑·지도·순위), 유튜브·인스타그램·틱톡.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`nslookup`](#nslookup) | 도메인으로 IP 조회 | `domain` |
| [`reverse_ip`](#reverse-ip) | IP로 도메인 조회 | `ip` |
| [`location`](#location) | 도메인/IP 위치 조회 | `address` |
| [`ip_history`](#ip-history) | IP 변경 이력 조회 | `domain` |
| [`whois`](#whois) | WHOIS 조회 | `address` |
| [`url_html`](#url-html) | URL HTML 추출 | `url` |
| [`url_screenshot`](#url-screenshot) | URL 화면캡처 | `url` |
| [`url_similarity`](#url-similarity) | URL 유사도 비교 | `url1`, `url2` |
| [`google_search`](#google-search) | 구글 키워드 검색 | `keyword` |
| [`google_image_search`](#google-image-search) | 구글 이미지 검색(키워드로 검색) | `keyword` |
| [`google_news_search`](#google-news-search) | 구글 뉴스 검색 | `keyword` |
| [`google_shopping_search`](#google-shopping-search) | 구글 쇼핑 검색 | `keyword` |
| [`google_maps_search`](#google-maps-search) | 구글 지도 장소 검색 | `keyword` |
| [`google_rank_check`](#google-rank-check) | 구글 검색 순위 확인 | `keyword`, `domain` |
| [`google_lens_search`](#google-lens-search) | 구글 렌즈 검색(이미지로 검색) | `image_url` |
| [`crawl_youtube`](#crawl-youtube) | 유튜브 계정 정보 수집 | `user_id` |
| [`download_youtube_video`](#download-youtube-video) | 유튜브 동영상 다운로드 | `url` |
| [`youtube_metadata`](#youtube-metadata) | 유튜브 영상 정보 조회 | `url` |
| [`youtube_thumbnail`](#youtube-thumbnail) | 유튜브 썸네일 다운로드 | `url` |
| [`youtube_subtitle_list`](#youtube-subtitle-list) | 유튜브 자막 목록 조회 | `url` |
| [`youtube_subtitle`](#youtube-subtitle) | 유튜브 자막 다운로드 | `url`, `lang` |
| [`instagram_profile`](#instagram-profile) | 인스타그램 프로필 조회 | `username` 또는 `url` |
| [`instagram_post`](#instagram-post) | 인스타그램 게시물·릴스 조회 | `url` |
| [`tiktok_profile`](#tiktok-profile) | 틱톡 프로필 조회 | `username` 또는 `url` |

<a id="nslookup"></a>

### `nslookup` — 도메인으로 IP 조회

Resolve a domain name to its currently registered IP addresses (DNS lookup).

도메인에 현재 등록된 IP 주소 목록을 조회합니다. 도메인 형식이 아닌 값은 오류로 응답합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `domain` | `string` | **필수 / required** | 검색할 도메인 (예: apick.app) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"nslookup","arguments":{"domain":"<domain>"}}}
```

<a id="reverse-ip"></a>

### `reverse_ip` — IP로 도메인 조회

Reverse IP lookup: list domains that have been hosted on a given IP address.

특정 IP에 등록된 도메인 이력 정보를 조회합니다. IP 주소 형식만 허용됩니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `ip` | `string` | **필수 / required** | 검색할 IP 주소 (예: 121.140.146.38) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"reverse_ip","arguments":{"ip":"<ip>"}}}
```

<a id="location"></a>

### `location` — 도메인/IP 위치 조회

Look up the geographic location of a domain or IP address.

도메인 또는 IP의 위치(지리 정보)를 조회합니다. 도메인을 입력하면 해당 도메인의 IP를 찾아 위치를 반환합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `address` | `string` | **필수 / required** | 검색할 도메인 또는 IP (예: apick.app) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"location","arguments":{"address":"<address>"}}}
```

<a id="ip-history"></a>

### `ip_history` — IP 변경 이력 조회

Look up the historical IP address changes of a domain.

도메인에 대한 IP 주소 변경 이력 정보를 조회합니다. 최상위 도메인 기준으로 조회되며 하위 도메인은 추적되지 않습니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `domain` | `string` | **필수 / required** | 검색할 도메인 (예: apick.app) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"ip_history","arguments":{"domain":"<domain>"}}}
```

<a id="whois"></a>

### `whois` — WHOIS 조회

WHOIS lookup for a domain or IP address, returning registration and ownership information.

특정 도메인 또는 IP의 WHOIS(등록·소유) 정보를 조회합니다. .kr/.한국 도메인, 국내 IP, AS번호(예: AS9318)는 KISA/KRNIC 원본 정보로 조회됩니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `address` | `string` | **필수 / required** | 검색할 도메인 또는 IP (예: apick.app) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"whois","arguments":{"address":"<address>"}}}
```

<a id="url-html"></a>

### `url_html` — URL HTML 추출

Fetch a web page and return its rendered HTML source.

입력한 URL의 페이지를 열어 HTML을 추출해 반환합니다. 자바스크립트 렌더링이 필요한 페이지도 처리됩니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 페이지 URL (예: https://apick.app) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"url_html","arguments":{"url":"<url>"}}}
```

<a id="url-screenshot"></a>

### `url_screenshot` — URL 화면캡처

Capture a screenshot of a web page and return it as a JPEG image.

입력한 URL의 화면을 캡처해 JPEG 이미지로 반환합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 페이지 URL (예: https://www.naver.com/) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"url_screenshot","arguments":{"url":"<url>"}}}
```

<a id="url-similarity"></a>

### `url_similarity` — URL 유사도 비교

Compare two web pages and judge how similar they are.

입력한 두 사이트 페이지의 유사 여부를 분석해 유사도 결과를 반환합니다. 피싱·복제 사이트 판별 등에 활용할 수 있습니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url1` | `string` | **필수 / required** | 비교할 첫 번째 페이지 URL |
| `url2` | `string` | **필수 / required** | 비교할 두 번째 페이지 URL |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"url_similarity","arguments":{"url1":"<url1>","url2":"<url2>"}}}
```

<a id="google-search"></a>

### `google_search` — 구글 키워드 검색

Google keyword search: return web search results (link, title, snippet) for a keyword.

특정 키워드의 구글 검색 결과(링크·제목·요약)를 조회합니다. page 로 결과 페이지를 넘겨 가며 조회할 수 있습니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `keyword` | `string` | **필수 / required** | 검색할 키워드 |
| `page` | `string` | 선택 / optional | 검색 결과 조회 페이지 (기본값 1) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_search","arguments":{"keyword":"<keyword>"}}}
```

<a id="google-image-search"></a>

### `google_image_search` — 구글 이미지 검색(키워드로 검색)

Google image search by keyword: return image results (image URL, source link, title).

특정 키워드의 구글 이미지 검색 결과(이미지 URL·출처 링크·제목)를 조회합니다. page 로 결과 페이지를 넘겨 가며 조회할 수 있습니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `keyword` | `string` | **필수 / required** | 검색할 키워드 |
| `page` | `string` | 선택 / optional | 검색 결과 조회 페이지 1~5 (기본값 1, 페이지당 20건) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_image_search","arguments":{"keyword":"<keyword>"}}}
```

<a id="google-news-search"></a>

### `google_news_search` — 구글 뉴스 검색

Google News search: return news results (title, publisher, published time, link) for a keyword.

키워드의 구글 뉴스 검색 결과(제목·언론사·게시 시각·링크)를 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `keyword` | `string` | **필수 / required** | 검색어 (1~200자) |
| `page` | `string` | 선택 / optional | 결과 페이지 1~10 (기본값 1) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_news_search","arguments":{"keyword":"<keyword>"}}}
```

<a id="google-shopping-search"></a>

### `google_shopping_search` — 구글 쇼핑 검색

Google Shopping search: return product results (title, price, shop, rating, link) for a keyword.

키워드의 구글 쇼핑 검색 결과(상품명·가격·판매처·평점·링크)를 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `keyword` | `string` | **필수 / required** | 검색어 (1~200자) |
| `page` | `string` | 선택 / optional | 결과 페이지 1~10 (기본값 1) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_shopping_search","arguments":{"keyword":"<keyword>"}}}
```

<a id="google-maps-search"></a>

### `google_maps_search` — 구글 지도 장소 검색

Google Maps place search: return up to 20 places (name, address, phone, rating, reviews, hours, coordinates) for a keyword.

키워드의 구글 지도 장소(상호·주소·전화·평점·리뷰 수·영업시간·좌표)를 최대 20곳 조회합니다. 처리에 보통 30~60초가 걸립니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `keyword` | `string` | **필수 / required** | 장소 검색어 (예: 강남역 카페, 1~200자) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_maps_search","arguments":{"keyword":"<keyword>"}}}
```

<a id="google-rank-check"></a>

### `google_rank_check` — 구글 검색 순위 확인

Google rank check: find where a domain ranks (1-100) in Google results for a keyword.

키워드로 구글을 검색했을 때 지정한 도메인이 1~100위 중 몇 위에 노출되는지 확인합니다. 일부 구간을 확인하지 못하면 complete:false·unchecked_ranks 와 함께 확인한 구간 비율만큼만 과금됩니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `keyword` | `string` | **필수 / required** | 검색어 (1~200자) |
| `domain` | `string` | **필수 / required** | 순위를 확인할 도메인 (예: apick.app). 하위 도메인도 함께 찾습니다 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_rank_check","arguments":{"keyword":"<keyword>","domain":"<domain>"}}}
```

<a id="google-lens-search"></a>

### `google_lens_search` — 구글 렌즈 검색(이미지로 검색)

Reverse image search: upload an image and get visually matching web pages and labels.

이미지 파일을 업로드해 해당 이미지와 관련된 웹 페이지(링크·이미지·텍스트)와 라벨을 조회합니다. 이미지 형식 파일만 허용됩니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, image/webp, image/gif, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_lens_search","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="crawl-youtube"></a>

### `crawl_youtube` — 유튜브 계정 정보 수집

Collect a YouTube channel profile and its latest uploaded videos.

유튜브 계정(채널) 정보와 최근 게시한 동영상 정보를 수집해 반환합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `user_id` | `string` | **필수 / required** | 수집할 유튜브 사용자(채널) 아이디 (예: CNN) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"crawl_youtube","arguments":{"user_id":"<user_id>"}}}
```

<a id="download-youtube-video"></a>

### `download_youtube_video` — 유튜브 동영상 다운로드

Download a publicly available YouTube video and return it as an MP4 file.

유튜브에 공개된 동영상을 MP4 파일로 다운로드해 반환합니다. 비공개·차단된 게시글은 실패로 응답합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 유튜브 게시글 URL (예: https://www.youtube.com/watch?v=...) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"download_youtube_video","arguments":{"url":"<url>"}}}
```

---

<a id="youtube-metadata"></a>

### `youtube_metadata` — 유튜브 영상 정보 조회

Look up metadata of a public YouTube video: title, channel, duration, views, likes, upload date, description, tags, chapters and thumbnails. 20 points per call.

유튜브 공개 영상의 제목·채널·길이·조회수·좋아요·업로드일·설명·태그·챕터·썸네일 목록을 조회합니다. 호출당 20포인트.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 유튜브 영상 URL 또는 11자리 영상 ID (watch·youtu.be·shorts 주소 지원) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"youtube_metadata","arguments":{"url":"<url>"}}}
```

---

<a id="youtube-thumbnail"></a>

### `youtube_thumbnail` — 유튜브 썸네일 다운로드

Download the largest thumbnail of a public YouTube video as a JPG image. 20 points per call.

유튜브 공개 영상의 가장 큰 썸네일을 JPG 이미지로 내려받습니다. 호출당 20포인트.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 유튜브 영상 URL 또는 11자리 영상 ID (watch·youtu.be·shorts 주소 지원) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"youtube_thumbnail","arguments":{"url":"<url>"}}}
```

---

<a id="youtube-subtitle-list"></a>

### `youtube_subtitle_list` — 유튜브 자막 목록 조회

List the manual and auto-generated subtitle languages available for a public YouTube video. 20 points per call.

유튜브 공개 영상의 수동 자막과 자동 생성 자막 언어 목록을 조회합니다. 자동 번역 자막은 `translated: true`로 표시됩니다. 호출당 20포인트.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 유튜브 영상 URL 또는 11자리 영상 ID (watch·youtu.be·shorts 주소 지원) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"youtube_subtitle_list","arguments":{"url":"<url>"}}}
```

---

<a id="youtube-subtitle"></a>

### `youtube_subtitle` — 유튜브 자막 다운로드

Download the subtitles of a public YouTube video in one language as VTT, SRT or plain text. Check available languages with `youtube_subtitle_list` first. 30 points per call.

유튜브 공개 영상의 자막을 언어별로 VTT·SRT·텍스트 파일로 내려받습니다. 제공 언어는 `youtube_subtitle_list`로 먼저 확인하고, 영상 원어 자막 사용을 권장합니다. 호출당 30포인트.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 유튜브 영상 URL 또는 11자리 영상 ID (watch·youtu.be·shorts 주소 지원) |
| `lang` | `string` | **필수 / required** | 자막 언어 코드 (예: ko, en, en-US, en-orig). 자막 목록 조회 결과의 lang 값 |
| `format` | `string` | 선택 / optional | `vtt`(기본)·`srt`·`txt`. `txt`는 시간 정보를 뺀 본문만 반환 |
| `type` | `string` | 선택 / optional | `any`(기본: 수동 자막 우선)·`manual`·`auto` |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"youtube_subtitle","arguments":{"url":"<url>","lang":"en","format":"srt"}}}
```

---

<a id="instagram-profile"></a>

### `instagram_profile` — 인스타그램 프로필 조회

Instagram public profile: followers, following, posts count, bio, verification and the 12 latest posts.

인스타그램 공개 계정의 팔로워·팔로잉·게시물 수·소개·인증 여부와 최근 게시물 12개를 조회합니다. 처리에 보통 40~60초가 걸립니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `username` | `string` | 선택 / optional | 인스타그램 사용자명 (username 또는 url 중 하나 필수) |
| `url` | `string` | 선택 / optional | 인스타그램 프로필 주소 (예: https://www.instagram.com/natgeo/) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"instagram_profile","arguments":{"username":"<username>"}}}
```

<a id="instagram-post"></a>

### `instagram_post` — 인스타그램 게시물·릴스 조회

Instagram post or reel by URL: likes, comments count, views, caption, hashtags and media URLs.

인스타그램 게시물·릴스 주소로 좋아요·댓글 수·조회수·캡션·해시태그·미디어 주소를 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `url` | `string` | **필수 / required** | 인스타그램 게시물·릴스 주소 (예: https://www.instagram.com/p/코드/ 또는 /reel/코드/) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"instagram_post","arguments":{"url":"<url>"}}}
```

<a id="tiktok-profile"></a>

### `tiktok_profile` — 틱톡 프로필 조회

TikTok public profile: followers, likes, videos count, bio and recent popular videos with view and engagement counts.

틱톡 공개 계정의 팔로워·좋아요·영상 수·소개와 최근 인기 영상의 조회수·반응 지표를 조회합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `web`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `username` | `string` | 선택 / optional | 틱톡 사용자명 (@ 없이도 가능, username 또는 url 중 하나 필수) |
| `url` | `string` | 선택 / optional | 틱톡 프로필 주소 (예: https://www.tiktok.com/@tiktok) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"tiktok_profile","arguments":{"username":"<username>"}}}
```

<a id="convert"></a>

## File Conversion · 파일 변환 · 워터마크

`https://apick.app/mcp/convert` — 25 tools

PDF, DOCX, Excel, speech-to-text, asynchronous TTS jobs, and watermarking.

PDF·DOCX·엑셀 변환, 음성인식(STT), 비동기 TTS, 워터마크.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`stt`](#stt) | 오디오 텍스트 변환(STT) | `audio_url` |
| [`tts_jobs_create`](#tts-jobs-create) | TTS 작업 접수 | `voice_id`, `text` |
| [`tts_jobs_status`](#tts-jobs-status) | TTS 작업 상태 조회 | `job_id` |
| [`tts_jobs_cancel`](#tts-jobs-cancel) | TTS 대기·생성 중 작업 취소 | `job_id` |
| [`tts_jobs_result`](#tts-jobs-result) | TTS 결과 1회 다운로드 | `job_id` |
| [`tts_jobs_subtitles`](#tts-jobs-subtitles) | TTS ASS 자막 1회 다운로드 | `job_id` |
| [`voice_change`](#voice-change) | 음성 변조 | `type`, `media_url` |
| [`face_blur`](#face-blur) | 얼굴 모자이크 처리 | `image_url` |
| [`pdf_to_docx`](#pdf-to-docx) | PDF 파일 DOCX 변환 | `pdf_url` |
| [`pdf_to_image`](#pdf-to-image) | PDF 파일 이미지 변환 | `pdf_url` |
| [`pdf_merge`](#pdf-merge) | PDF 파일 합치기 | `pdf_url_1`, `pdf_url_2` |
| [`html_to_pdf`](#html-to-pdf) | HTML PDF 변환 | `html` |
| [`docx_to_pdf`](#docx-to-pdf) | DOCX 파일을 PDF 파일로 변환 | `docx_url` |
| [`json_to_excel`](#json-to-excel) | JSON 데이터 EXCEL 파일 변환 | `data_list` |
| [`base64_to_image`](#base64-to-image) | base64 이미지 변환 | `base64` |
| [`set_watermark`](#set-watermark) | 비가시성 워터마크 삽입 | `code`, `image_url` |
| [`get_watermark`](#get-watermark) | 비가시성 워터마크 조회 | `image_url` |
| [`draw_watermark_pdf`](#draw-watermark-pdf) | PDF 워터마크 삽입 | `wm`, `pdf_url` |
| [`draw_watermark_image`](#draw-watermark-image) | Image 워터마크 삽입 | `wm`, `image_url` |

<a id="stt"></a>

### `stt` — 오디오 텍스트 변환(STT)

Convert a speech audio file to text (STT).

음성 파일을 텍스트로 변환합니다. MP3, WAV, M4A, AAC, OGG, FLAC, WEBM 등 일반적인 오디오 포맷을 지원하며, 변환된 텍스트를 JSON으로 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `language` | `string` | 선택 / optional | 추출 언어 코드 (예: ko, en, ja). 기본값 ko |
| `artifact_filter` | `string` | 선택 / optional | 무음·잡음 구간에서 생긴 비음성 문구 처리: `flag`=구간에 `suspect` 표시, `remove`=제거 후 `text` 재구성. 생략 시 기존과 동일. `flag`, `remove` |
| `audio_url` | `string` (file) | **필수 / required** | https URL, audio/mpeg, audio/mp3, audio/wav, audio/x-wav, audio/mp4, audio/aac, audio/ogg, audio/flac, audio/webm, 최대 200MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"stt","arguments":{"audio_url":"https://example.com/file"}}}
```

```json
{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"stt","arguments":{"audio_url":"https://example.com/file","language":"ko","artifact_filter":"flag"}}}
```

**Non-speech phrases / 비음성 문구 처리 (`artifact_filter`)**

Silence, music or background noise can produce phrases nobody actually said (for example sign-off greetings, subscribe requests, caption credits, repeated lines or sound-effect labels). `artifact_filter` finds these segments and either marks or removes them. Context around each segment is considered, so a speaker who really greets or asks to subscribe is kept. `remove` drops only clear cases; `flag` marks suspected segments a little more broadly. No extra charge.

무음·음악·잡음 구간에서 실제로 말하지 않은 문구(예: 시청 인사, 구독 요청, 자막 제작 안내, 같은 말의 반복, 효과음 표기)가 결과에 섞이는 경우를 찾아 표시하거나 제거합니다. 앞뒤 문맥을 함께 보므로 화자가 실제로 인사하거나 구독을 요청한 구간은 유지됩니다. `remove`는 비음성으로 판단이 확실한 구간만 제거하고, `flag`는 의심 구간을 조금 더 넓게 표시합니다. 추가 요금은 없습니다.

Response additions when `artifact_filter` is sent / `artifact_filter` 요청 시 추가되는 응답 필드:

| Field | Type | Description 설명 |
| --- | --- | --- |
| `segments[].suspect` | `boolean` | 비음성 문구로 추정되는 구간 여부. `flag` 요청 시에만 포함 / suspected non-speech segment, `flag` only |
| `artifact_filter.mode` | `string` | `flag` 또는 `remove` / the requested mode |
| `artifact_filter.applied` | `boolean` | 처리 적용 여부. `false`면 처리 없이 원래 결과를 그대로 반환 / `false` means the original result is returned unchanged |
| `artifact_filter.suspect_count` | `integer` | 표시된 구간 수 (`flag`) / number of flagged segments |
| `artifact_filter.removed` | `integer` | 제거된 구간 수 (`remove`). 남은 구간의 `id`는 그대로이며 `text`는 남은 구간으로 다시 구성 / removed segments; remaining segment ids are kept and `text` is rebuilt from them |

<a id="tts-jobs-create"></a>

### `tts_jobs_create` — Gemini 기본 접수

`text` 또는 `utterances`를 전달합니다. `voice_id`는 선택이며 기본 Kore입니다. 정규화 기본 사용·추가 과금, 최대 2,000자(정규화 없이 8,000자)입니다. 같은 입력과 `idempotency_key`로 중복 접수를 방지합니다. `style` 및 공통 표현·화자 옵션을 받습니다.

Default Gemini submission accepts text or utterances and an optional voice ID. See the Gemini·ChatGPT TTS section for shared options, pricing and downloads.

### `tts_jobs_status` — TTS 작업 상태 조회

작업의 `waiting`, `processing`, `completed`, `cancelled`, `failed` 공개 상태와 결과 준비 여부를 조회합니다. 추가 과금은 없습니다.

> 읽기 전용 / read-only · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | 작업 접수에서 받은 32자리 ID |

```json
{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"tts_jobs_status","arguments":{"job_id":"<job_id>"}}}
```

<a id="tts-jobs-cancel"></a>

### `tts_jobs_cancel` — TTS 대기·생성 중 작업 취소

`waiting` 또는 `processing` 상태에서 취소를 요청할 수 있습니다. 이미 수행한 유료 처리분만 정산하고 미사용 예약금은 해제합니다. / Already performed paid work is settled; unused reservations are released.

> **부작용 있음 / has side effects** · 수행분 정산 / settles performed work · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | 취소할 32자리 ID |

```json
{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"tts_jobs_cancel","arguments":{"job_id":"<job_id>"}}}
```

<a id="tts-jobs-result"></a>

### `tts_jobs_result` — TTS 결과 1회 다운로드

완료된 MP3(`audio/mpeg`) 결과를 base64로 반환합니다. 완료된 다운로드는 파일별 1회이며 완료 후 재다운로드할 수 없습니다. 전송 중단은 24시간 안에 복구할 수 있습니다. 결과를 받을 준비가 된 클라이언트에서 한 번만 호출하세요.

> **파괴적 부작용 / destructive side effect** · 재실행 불가 / not idempotent · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | `completed` 상태인 32자리 ID |

```json
{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"tts_jobs_result","arguments":{"job_id":"<job_id>"}}}
```

<a id="tts-jobs-subtitles"></a>

### `tts_jobs_subtitles` — TTS ASS 자막 1회 다운로드

완료된 ASS 타이밍 자막(`text/x-ass`)을 base64로 반환합니다. MP3와 별도의 1회용 원본이므로 MP3를 먼저 다운로드해도 자막을 한 번 받을 수 있습니다. 완료된 자막 다운로드는 1회이며 완료 후 재다운로드할 수 없습니다. 전송 중단은 24시간 안에 복구할 수 있습니다.

자막은 보낸 원문 표기로 제공됩니다. / Subtitles keep the text as you sent it.

> **파괴적 부작용 / destructive side effect** · 재실행 불가 / not idempotent · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | `completed` 상태인 32자리 ID |

```json
{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"tts_jobs_subtitles","arguments":{"job_id":"<job_id>"}}}
```

### `tts_gemini_create` — Gemini 음성 제작 / Gemini speech

`voice_id`, `style`, `text` 또는 `utterances`, `normalize_text`(기본 true), `idempotency_key`를 받습니다. 정규화 사용 시 합계 2,000자, 끄면 8,000자입니다. / Accepts a voice, style, text or utterances; normalization defaults on. Limits are 2,000 characters with normalization and 8,000 without it.

> 부작용 있음 / has side effects · 최대 요금 예약 후 실제 정산 / reserves then settles usage · server `convert`

### `tts_gemini_voices` — 모든 공개 목소리 / All public voices

기본·확장 라이브러리 목소리와 공식 성별·음색, 연령 검증 여부를 반환합니다. / Lists all basic and extended voices with official gender/tone and age verification status.

> 읽기 전용 / read-only · server `convert`

### `tts_openai_create` — ChatGPT 음성 제작 / ChatGPT speech

`voice_id`, `style`, `text` 또는 `utterances`, `normalize_text`(기본 true), `idempotency_key`를 받습니다. 목소리는 `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, `verse` 중 하나이며 기본값은 `alloy`입니다. / Accepts a voice, style, text or utterances; normalization defaults on. Voices are alloy, ash, ballad, coral, echo, fable, onyx, nova, sage, shimmer and verse, with alloy as the default.

> 부작용 있음 / has side effects · 최대 요금 예약 후 실제 정산 / reserves then settles usage · server `convert`

### `tts_openai_voices` — ChatGPT 목소리 목록 / ChatGPT voices

ChatGPT TTS 목소리와 음색 특성을 반환합니다. / Lists the ChatGPT TTS voices and their tone.

> 읽기 전용 / read-only · server `convert`

### `tts_options` — 표현 옵션 조회 / Expression options

무료 GET 조회이며 입력은 없습니다. Gemini·ChatGPT의 표현 옵션과 화자 수 제한을 반환합니다. No input; returns supported expression options and speaker limits.

### `tts_quote` — 예상 요금 / Price estimate

제작 입력과 `engine: apick | gemini`를 받아 합성·정규화 예상 금액과 최대 예약금을 반환합니다. 실제 호출은 하지 않습니다. / Accepts synthesis input plus the engine and returns estimates and the maximum reservation without generating audio.

> 읽기 전용 / read-only · server `convert`

## Gemini·ChatGPT TTS

`tts_jobs_create`와 `tts_gemini_create`는 Gemini(기본 Kore), `tts_openai_create`는 ChatGPT(기본 alloy)를 사용합니다. `tts_gemini_voices`, `tts_openai_voices`, `tts_options`, `tts_quote`로 목소리·옵션·요금을 조회합니다.

Use `tts_jobs_create` or `tts_gemini_create` for Gemini (default Kore), and `tts_openai_create` for ChatGPT (default alloy). Query voices, options and estimates with the corresponding tools. Legacy APICK voices and automatic fallback have retired.

`style`, `emotion`, `tone`, `accent`, `pace`(0.5–2), `pitch`(-12–12), `volume_gain_db`(-12–12)는 최상위·화자·발화에 지정할 수 있습니다. `speakers`는 화자 이름별 설정이고 `multi_speaker: true`는 Gemini 최대 2명, ChatGPT 최대 8명입니다. 엔진에 따라 표현 효과가 달라지며 정확한 속도 배율·반음·dB 적용을 보장하지 않습니다. 특히 ChatGPT는 수치의 방향을 낭독 지시로 전달합니다.

Style, emotion, tone, accent, pace, pitch and volume options can be set per request, speaker or utterance. Gemini supports up to two native speakers; ChatGPT supports up to eight speakers across utterances. Numeric acoustic adjustments are not guaranteed: ChatGPT receives directional instructions rather than precise rate, semitone or decibel controls.

정규화는 기본 켜짐이며 추가 스킬 요금이 합산됩니다. `normalize_text: false`(SDK 문자열 호출은 `normalizeText: false`)로 끌 수 있습니다. 정규화 입력은 발화 사이 줄바꿈을 포함해 최대 2,000자, 정규화 없이 최대 8,000자입니다. 견적은 `tts_quote`, 현재 목소리는 엔진별 목록, 옵션은 `tts_options`로 조회합니다.

Normalization is enabled by default and costs extra. Disable it with `normalize_text: false` (`normalizeText: false` for the string SDK helper). Input limits are 2,000 characters including utterance separators with normalization, or 8,000 without it. Query a quote, engine-specific voices and supported options before submitting.

실제 AI 원가 × 고정된 환율 × 1.4에 정규화 요금을 더해 정산합니다. Gemini 프로모션 입력/출력 단가는 2026-12-31까지 백만 토큰당 $0.50/$6.00이며 2027-01-01 00:00 UTC부터 $1.00/$12.00입니다. 약 $0.54/시간은 참고값이며 시간 단위 청구가 아닙니다. 엔진별 요금이 다릅니다.

AI usage is charged at verified cost × the pinned exchange rate × 1.4, plus normalization. Gemini promotional input/output rates are $0.50/$6.00 per million tokens through 2026-12-31, then $1.00/$12.00 from 2027-01-01 00:00 UTC. The approximate hourly figure is informational; billing uses actual usage and differs by engine.

두 엔진은 같은 작업 조회·취소·MP3·원문 ASS 계약을 사용합니다. `billing`의 예약·해제·확정·환불을 확인하세요. MP3는 24kHz 모노 48kbps, 결과는 완료 후 24시간 보관합니다. MP3와 ASS는 각각 완료된 다운로드 1회만 허용하며 전송 중단은 재시도할 수 있습니다. 접수 응답 유실 시 같은 입력과 멱등 키를 재사용하세요. 서버·공급자 최종 실패는 정규화까지 환불하며, 연결 종료는 작업 취소가 아닙니다. 취소 시 이미 수행된 작업분을 정산합니다.

Both engines share job status, cancellation, MP3 and original-text ASS downloads. Check reserved, released, captured and refunded amounts in `billing`. MP3 is 24 kHz mono at 48 kbps. Files are kept for 24 hours; each permits one completed download, and interrupted transfers can be retried. Reuse the same input and idempotency key after a lost response. Final server/provider failures refund synthesis and normalization; disconnecting does not cancel work. Explicit cancellation settles work already performed.

### `voice_change` — 음성 변조

Modulate the voice in a video or audio file to a lower or higher pitch.

동영상 또는 오디오 파일의 음성을 저음 또는 고음으로 변조합니다. MP3, WAV 등 오디오와 MP4, MOV 등 동영상 포맷을 지원하며, 변조된 파일을 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `type` | `string` | **필수 / required** | 변조음 타입 (1: 저음, 2: 고음) |
| `media_url` | `string` (file) | **필수 / required** | https URL, audio/mpeg, audio/mp3, audio/wav, audio/x-wav, audio/mp4, audio/aac, audio/ogg, video/mp4, video/quicktime, video/x-msvideo, video/x-matroska, video/webm, 최대 200MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"voice_change","arguments":{"type":"<type>","media_url":"https://example.com/file"}}}
```

<a id="face-blur"></a>

### `face_blur` — 얼굴 모자이크 처리

Detect faces in an image and blur (mosaic) them.

이미지 파일에서 얼굴을 인식해 해당 영역을 모자이크 처리한 이미지(JPEG)를 반환합니다. PNG, JPEG 등 일반 이미지 포맷을 지원합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `threshold` | `number` | 선택 / optional | 얼굴 추출 민감도 (0 ~ 0.9, 기본값 0.5, 작을수록 민감하게 추출) |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"face_blur","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="pdf-to-docx"></a>

### `pdf_to_docx` — PDF 파일 DOCX 변환

Convert a PDF file to a DOCX (Word) file.

PDF 파일을 DOCX 파일로 변환해 반환합니다. PDF 형식의 파일만 허용됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `pdf_url` | `string` (file) | **필수 / required** | https URL, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"pdf_to_docx","arguments":{"pdf_url":"https://example.com/file"}}}
```

<a id="pdf-to-image"></a>

### `pdf_to_image` — PDF 파일 이미지 변환

Convert each page of a PDF file to PNG images, returned as a ZIP archive.

PDF 파일의 각 페이지를 PNG 이미지로 변환하고 ZIP 파일로 묶어 반환합니다. PDF 형식의 파일만 허용됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `pdf_url` | `string` (file) | **필수 / required** | https URL, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"pdf_to_image","arguments":{"pdf_url":"https://example.com/file"}}}
```

<a id="pdf-merge"></a>

### `pdf_merge` — PDF 파일 합치기

Merge two PDF files into one.

두 개의 PDF 파일을 순서대로 하나의 PDF 파일로 합쳐 반환합니다. PDF 형식의 파일만 허용됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `pdf_url_1` | `string` (file) | **필수 / required** | https URL, application/pdf, 최대 25MB |
| `pdf_url_2` | `string` (file) | **필수 / required** | https URL, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"pdf_merge","arguments":{"pdf_url_1":"https://example.com/file","pdf_url_2":"https://example.com/file"}}}
```

<a id="html-to-pdf"></a>

### `html_to_pdf` — HTML PDF 변환

Render HTML code into a PDF file.

HTML 코드를 렌더링해 PDF 파일로 변환합니다. HTML 문자열을 입력하면 변환된 PDF 파일을 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `html` | `string` | **필수 / required** | 변환할 HTML 코드 |
| `pagination` | `integer` | 선택 / optional | 페이지 번호 표시 여부 (0: 없음(기본값), 1: 표시) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"html_to_pdf","arguments":{"html":"<html>"}}}
```

<a id="docx-to-pdf"></a>

### `docx_to_pdf` — DOCX 파일을 PDF 파일로 변환

Convert a DOCX (Word) file to a PDF file.

DOCX 파일을 PDF 파일로 변환해 반환합니다. DOCX 형식의 파일만 허용됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `docx_url` | `string` (file) | **필수 / required** | https URL, application/vnd.openxmlformats-officedocument.wordprocessingml.document, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"docx_to_pdf","arguments":{"docx_url":"https://example.com/file"}}}
```

<a id="json-to-excel"></a>

### `json_to_excel` — JSON 데이터 EXCEL 파일 변환

Convert JSON data into an Excel (XLSX) file.

JSON 데이터를 EXCEL(XLSX) 파일로 변환해 반환합니다. data_list 는 객체 배열([{"컬럼":"값", ...}, ...]) 또는 2차원 배열([[...], ...]) 형식을 지원합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `data_list` | `array` | **필수 / required** | 변환할 데이터 목록. 객체 배열 또는 2차원 배열 (2차원 배열은 모든 행의 열 개수가 같아야 함) |
| `sheet_name` | `string` | 선택 / optional | 엑셀 시트 이름 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"json_to_excel","arguments":{"data_list":"<data_list>"}}}
```

<a id="base64-to-image"></a>

### `base64_to_image` — base64 이미지 변환

Decode a base64-encoded image string back into an image file.

base64 로 인코딩된 이미지 문자열을 원본 이미지 파일로 디코딩해 반환합니다. "data:image/타입;base64," 접두어가 붙은 문자열도 허용됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `base64` | `string` | **필수 / required** | 이미지 base64 문자열 (data:image/타입;base64, 접두어 허용) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"base64_to_image","arguments":{"base64":"<base64>"}}}
```

<a id="set-watermark"></a>

### `set_watermark` — 비가시성 워터마크 삽입

Embed an invisible watermark code into an image.

원본 이미지에 보이지 않는 워터마크 코드를 삽입한 PNG 이미지를 반환합니다. 이미지가 일부 변형되어도 높은 확률로 워터마크를 확인할 수 있습니다. PNG, JPEG 등 일반 이미지 포맷을 지원합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `code` | `integer` | **필수 / required** | 삽입할 워터마크 코드 (1 ~ 21,767,823,359 사이의 숫자) |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"set_watermark","arguments":{"code":1,"image_url":"https://example.com/file"}}}
```

<a id="get-watermark"></a>

### `get_watermark` — 비가시성 워터마크 조회

Read the invisible watermark code embedded in an image.

이미지에 삽입된 비가시성 워터마크 코드를 조회해 JSON 으로 반환합니다. 이미지가 일부 변형되어도 높은 확률로 워터마크를 확인할 수 있습니다. PNG, JPEG 등 일반 이미지 포맷을 지원합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_watermark","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="draw-watermark-pdf"></a>

### `draw_watermark_pdf` — PDF 워터마크 삽입

Draw a visible text watermark across every page of a PDF file.

PDF 파일 전체 페이지에 텍스트 워터마크를 삽입한 PDF 를 반환합니다. 글자 크기·색상·투명도·각도·밀집도·적용 영역을 조절할 수 있으며, PDF 형식의 파일만 허용됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `wm` | `string` | **필수 / required** | 워터마크 문자열 (최대 30자) |
| `font_size` | `integer` | 선택 / optional | 워터마크 글자 크기 (8 ~ 30, 기본값 10) |
| `color` | `string` | 선택 / optional | 워터마크 색상 HEX (000000 ~ FFFFFF, 기본값 EEEEEE) |
| `opacity` | `number` | 선택 / optional | 워터마크 투명도 (0 ~ 1, 기본값 0.05) |
| `angle` | `integer` | 선택 / optional | 워터마크 각도 (0 ~ 360, 기본값 35) |
| `density` | `integer` | 선택 / optional | 워터마크 글자 밀집도 (100 ~ 200, 기본값 150) |
| `width` | `integer` | 선택 / optional | 워터마크 적용 너비 (0 ~ 2000, 기본값 550, A4 기준) |
| `height` | `integer` | 선택 / optional | 워터마크 적용 높이 (0 ~ 2000, 기본값 800, A4 기준) |
| `pdf_url` | `string` (file) | **필수 / required** | https URL, application/pdf, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"draw_watermark_pdf","arguments":{"wm":"<wm>","pdf_url":"https://example.com/file"}}}
```

<a id="draw-watermark-image"></a>

### `draw_watermark_image` — Image 워터마크 삽입

Draw a visible text watermark across an image.

이미지 파일에 텍스트 워터마크를 삽입한 PNG 이미지를 반환합니다. 글자 크기·색상·투명도·밀집도를 조절할 수 있으며, PNG, JPEG 등 일반 이미지 포맷을 지원합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `wm` | `string` | **필수 / required** | 워터마크 문자열 (최대 30자) |
| `font_size` | `integer` | 선택 / optional | 워터마크 글자 크기 (10 ~ 100, 기본값 10) |
| `color` | `string` | 선택 / optional | 워터마크 색상 HEX (000000 ~ FFFFFF, 기본값 EEEEEE) |
| `opacity` | `number` | 선택 / optional | 워터마크 투명도 (0 ~ 1, 기본값 0.5) |
| `density` | `integer` | 선택 / optional | 워터마크 글자 밀집도 (5 ~ 15, 기본값 10) |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/png, image/jpeg, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"draw_watermark_image","arguments":{"wm":"<wm>","image_url":"https://example.com/file"}}}
```

---

<a id="vision"></a>

## Vision · 이미지 · 영상 분석

`https://apick.app/mcp/vision` — 6 tools

Face detection, image similarity, NSFW detection, and video extraction.

얼굴 검출, 이미지 유사도, 유해이미지 판별, 영상 추출.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`nsfw_detection`](#nsfw-detection) | 선정적인 컨텐츠(NSFW) 탐지 | `image_url` |
| [`image_similarity`](#image-similarity) | 이미지 유사도 비교 | `image_url`, `compare_image_url` |
| [`video_to_mp3`](#video-to-mp3) | 동영상 MP3 추출 | `video_url` |
| [`extract_video_thumbnail`](#extract-video-thumbnail) | 동영상 미리보기 이미지 추출 | `video_url` |
| [`word_cloud`](#word-cloud) | 워드클라우드 생성 | `text` |
| [`face_detection`](#face-detection) | 이미지 얼굴 인식 | `image_url` |

<a id="nsfw-detection"></a>

### `nsfw_detection` — 선정적인 컨텐츠(NSFW) 탐지

Detect whether an image contains NSFW (violent or sexually explicit) content and return an nsfw_score.

이미지가 NSFW(폭력적·선정적) 콘텐츠인지 탐지해 nsfw_score 를 반환합니다. detail=1 입력 시 세부 판정 결과를 함께 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `vision`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `detail` | `string` | 선택 / optional | 세부 판정 결과 포함 여부 (포함: 1, 미포함: 0, 기본값 0) |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"nsfw_detection","arguments":{"image_url":"https://example.com/file"}}}
```

<a id="image-similarity"></a>

### `image_similarity` — 이미지 유사도 비교

Compare a base image with another image and return a similarity score.

기준 이미지와 비교 대상 이미지의 유사도를 분석해 점수를 반환합니다. 원본 검증, 중복 이미지 탐지 등에 사용합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `vision`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, image/webp, image/bmp, 최대 25MB |
| `compare_image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"image_similarity","arguments":{"image_url":"https://example.com/file","compare_image_url":"https://example.com/file"}}}
```

<a id="video-to-mp3"></a>

### `video_to_mp3` — 동영상 MP3 추출

Extract the audio track of a video file as an MP3 file.

동영상 파일에서 오디오를 추출해 MP3 파일로 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `vision`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `video_url` | `string` (file) | **필수 / required** | https URL, video/mp4, video/quicktime, video/x-msvideo, video/webm, video/x-matroska, 최대 200MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"video_to_mp3","arguments":{"video_url":"https://example.com/file"}}}
```

<a id="extract-video-thumbnail"></a>

### `extract_video_thumbnail` — 동영상 미리보기 이미지 추출

Extract preview thumbnail images from a video at regular intervals and return them as a ZIP file.

동영상에서 일정 구간마다 미리보기 이미지를 추출해 ZIP 파일로 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `vision`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `width` | `string` | 선택 / optional | 이미지 가로 길이 (범위: 100 ~ 2000, 기본값 480). 세로 길이는 가로 비율에 따라 자동 계산 |
| `count` | `string` | 선택 / optional | 추출할 이미지 개수 (범위: 0 ~ 200, 기본값 100) |
| `video_url` | `string` (file) | **필수 / required** | https URL, video/mp4, video/quicktime, video/x-msvideo, video/webm, video/x-matroska, 최대 200MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"extract_video_thumbnail","arguments":{"video_url":"https://example.com/file"}}}
```

<a id="word-cloud"></a>

### `word_cloud` — 워드클라우드 생성

Generate a word cloud image (JPEG) from input text, sizing each word by frequency.

입력 텍스트를 구성하는 단어의 중요도(빈도수)에 따라 서로 다른 크기의 단어로 이루어진 워드클라우드 이미지(JPEG)를 생성해 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `vision`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `text` | `string` | **필수 / required** | 워드클라우드를 생성할 텍스트 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"word_cloud","arguments":{"text":"<text>"}}}
```

<a id="face-detection"></a>

### `face_detection` — 이미지 얼굴 인식

Detect faces in an image and return their coordinates.

이미지 파일에서 얼굴을 인식해 해당 좌표를 반환합니다. use_feature=1 입력 시 얼굴 특징 정보를 함께 반환합니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `vision`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `threshold` | `string` | 선택 / optional | 얼굴 추출 민감도 (범위: 0 ~ 0.9, 기본값 0.5, 높을수록 정확한 얼굴만 추출) |
| `use_feature` | `string` | 선택 / optional | 얼굴 특징 정보 포함 여부 (포함: 1, 미포함: 0, 기본값 0) |
| `image_url` | `string` (file) | **필수 / required** | https URL, image/jpeg, image/png, image/webp, image/bmp, 최대 25MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"face_detection","arguments":{"image_url":"https://example.com/file"}}}
```

---

<a id="ai"></a>

## AI & LLM · AI · LLM

`https://apick.app/mcp/ai` — 15 tools

LLM chat across multiple models, text summarization and polishing, and asynchronous AI video generation.

LLM 챗(다중 모델), 텍스트 요약·교정, 비동기 AI 영상 생성.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`llm_models`](#llm-models) | LLM 모델 카탈로그 | — |
| [`llm_chat`](#llm-chat) | LLM 채팅 | `model` |
| [`text_summary`](#text-summary) | 텍스트 요약 AI | `text` |
| [`text_polish`](#text-polish) | 텍스트 다듬기 AI | `text` |
| `image_generate` | 텍스트 또는 참고 이미지와 텍스트로 이미지 한 장 생성 | `prompt`, `reference_image_url?`, `quality?`, `size?`, `output_format?`, `background?` |
| `image_edit` | 이미지 한 장 편집 | `image_url`, `prompt`, `quality?` 및 출력 옵션 |
| `image_batch_create` | 이미지 대량 작업 생성 | `mode`, `prompt`, `image_count`, `quality?`, 참고·편집 파일 및 출력 옵션 |
| `image_batch_status` | 대량 작업 상태 조회 | `job_id` |
| `image_batch_result` | 대량 작업 개별 결과 | `job_id`, `index` |
| [`seedance_jobs_create`](#seedance-jobs-create) | Seedance 영상 작업 접수 | `prompt` |
| [`seedance_jobs_status`](#seedance-jobs-status) | Seedance 영상 작업 상태 | `job_id` |
| [`veo_jobs_create`](#veo-jobs-create) | Veo 영상 작업 접수 | `prompt` |
| [`veo_jobs_status`](#veo-jobs-status) | Veo 영상 작업 상태 | `job_id` |
| [`kling_jobs_create`](#kling-jobs-create) | Kling 영상 작업 접수 | `prompt` |
| [`kling_jobs_status`](#kling-jobs-status) | Kling 영상 작업 상태 | `job_id` |

이미지 생성·편집 요금은 `quality`별 장당 고정가입니다. `basic`(기본) 40P, `advanced`(고급) 350P, `premium`(최고급) 1,400P이며 크기와 관계없이 같습니다. 접수 시 장수만큼 먼저 차감하고 실패한 장은 환급합니다. 같은 요청을 다시 보내도 결과를 재사용하지 않고 매번 새로 생성·과금합니다. 접수된 작업은 취소할 수 없습니다. `image_generate`에 `reference_image_url`을 더하면 참고 이미지의 구도·색감·제품 형태와 프롬프트를 함께 반영할 수 있습니다. 편집은 원본 이미지 한 장과 프롬프트만 받으며 마스크 파일은 지원하지 않습니다. 동기 Tool은 응답 크기를 위해 한 장만 반환하며, 대량 작업은 `image_count`에 1~50을 지정한 뒤 `image_batch_result`로 한 장씩 가져옵니다. 크기는 `1024x1024`, `1536x1024`, `1024x1536`, `1152x864`, `864x1152` 중에서 고릅니다. PNG·JPEG·WebP와 PNG/WebP 투명 배경 미리보기를 지원합니다. 프롬프트는 최대 28,000자이고 완료 결과는 24시간 동안 반복 조회할 수 있습니다.

Image generation and editing use a fixed per-image price by `quality`: `basic` (default) 40 points, `advanced` 350 points and `premium` 1,400 points, regardless of size. The total is deducted on acceptance and failed images are refunded. Repeated requests are never reused; each request is generated and charged again.

예: `흰색 대리석 테이블 위의 무광 검정 텀블러, 부드러운 아침 자연광, 제품 전체가 프레임 안에 보이게, 이미지 안 글자 없음`처럼 피사체·배경·조명·구도·금지 요소를 구체적으로 적습니다. 글자를 넣을 때는 `상단 중앙에 '가을 산책'을 또렷한 짙은 남색 한글로, 다른 글자 없음`처럼 실제 문구와 위치를 함께 지정합니다.

<a id="llm-models"></a>

### `llm_models` — LLM 모델 카탈로그

List available text-generation LLM models with per-token pricing and max context.

텍스트 생성 모델 카탈로그를 반환합니다. 각 모델의 1M 토큰당 input/output 단가(포인트), 계열·크기·멀티모달 여부·태그·추천 용도(use_cases)·max_context 를 한 응답에 포함합니다. llm_chat Tool의 model 입력값을 찾을 때 사용합니다. 무료입니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `family` | `string` | 선택 / optional | 모델 계열 필터 (deepseek, qwen, glm, google, nvidia, llama, mistral, gpt-oss, moonshot, seed, mimo, phi) |
| `tag` | `string` | 선택 / optional | 특수 태그 필터 — 'reasoning'(추론 특화) \| 'coder'(코딩 특화) |
| `use_case` | `string` | 선택 / optional | 추천 용도 필터 — 'general' \| 'reasoning' \| 'coding' \| 'multimodal' \| 'economy' |
| `multimodal` | `boolean` | 선택 / optional | 멀티모달(이미지 이해) 지원 여부 필터 (true/false) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"llm_models","arguments":{}}}
```

<a id="llm-chat"></a>

### `llm_chat` — LLM 채팅

Send a chat request to a selected LLM model and receive the assistant reply.

선택한 LLM 모델에 대화를 보내고 assistant 응답을 받습니다. 서버는 대화 히스토리를 보관하지 않는 stateless 방식 — 매 호출마다 전체 히스토리를 messages 로 전송하고, 응답의 compacted_messages 를 다음 턴의 messages 로 그대로 재사용합니다. 사용 가능한 모델은 llm_models Tool로 조회합니다. 토큰 사용량에 비례해 포인트가 차감됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `model` | `string` | **필수 / required** | 모델 id (`llm_models` Tool로 조회) |
| `messages` | `array` | 선택 / optional | 채팅 메시지 [{role, content}] 배열. role 은 'system'\|'user'\|'assistant'. content 와 둘 중 하나는 필수, 동시 지정 시 messages 우선. 멀티턴 대화는 응답의 compacted_messages 를 다음 턴에 그대로 전송 |
| `content` | `string` | 선택 / optional | 단발 입력 — 사용자 메시지 한 건만 보내는 간편 형태. messages 와 둘 중 하나는 필수 |
| `system` | `string` | 선택 / optional | system 프롬프트 (역할·페르소나·정책·배경지식). 미지정 시 기본 한국어 어시스턴트 프롬프트가 적용됩니다 |
| `compact` | `object` | 선택 / optional | 히스토리 압축 옵션 { strategy: 'none'(기본) \| 'sliding_window' \| 'relevance', window_pairs: 유지할 user/assistant 페어 수 (기본 10, 최소 1) }. relevance 는 최근 대화와 함께 최신 질문에 필요한 이전 대화를 골라 남긴다. 긴 대화의 input 토큰 누적 방지 |
| `temperature` | `number` | 선택 / optional | 출력 다양성 0.0~2.0. 낮을수록 재현성, 높을수록 창의성 (미지정 시 모델 기본값) |
| `max_tokens` | `integer` | 선택 / optional | 응답 최대 토큰. 미지정 시 모델 컨텍스트 기반 안전 상한으로 자동 설정, 상한 초과 지정 시 자동 조정 |
| `speed` | `string` | 선택 / optional | 응답 속도/추론 깊이 — 'fast'(얕게, 빠름) \| 'medium' \| 'slow'(깊게, 느림). 한글 '빠름'\|'중간'\|'느림' 허용. 추론 특화 모델에서 효과가 큽니다 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"llm_chat","arguments":{"model":"<model>"}}}
```

```json
{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"llm_chat","arguments":{"model":"<model>","messages":[{"role":"user","content":"<question>"}],"compact":{"strategy":"relevance","window_pairs":6}}}}
```

**History compaction / 히스토리 압축 (`compact.strategy`)**

- `sliding_window` keeps only the most recent `window_pairs` user/assistant pairs. `sliding_window`는 최근 N 페어만 모델에 보냅니다.
- `relevance` sends the 2 most recent pairs plus earlier pairs needed to answer the latest question, `window_pairs` in total. Pairs that are not needed are left out, so input tokens go down. `compacted_messages` keeps up to the last 50 pairs so the next turn can select again.
- `relevance`는 최근 2페어와, 마지막 질문에 답하는 데 필요한 이전 페어를 골라 모두 `window_pairs` 페어 이내로 모델에 보냅니다. 필요 없는 페어는 보내지 않아 input 토큰이 줄어듭니다. `compacted_messages`에는 다음 질문에서 다시 고를 수 있도록 최근 50페어까지 남습니다.

<a id="text-summary"></a>

### `text_summary` — 텍스트 요약 AI

Summarize a long text (up to 100,000 characters) into a concise Korean summary.

입력 텍스트(최대 10만 자)의 핵심 내용을 간결하고 정확하게 요약합니다. 모델·파라미터는 서버가 고정하며 빠른 응답에 최적화되어 있습니다. 토큰 수와 무관하게 요청당 고정 포인트가 차감됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `text` | `string` | **필수 / required** | 요약할 원문 텍스트 (최대 100,000자) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"text_summary","arguments":{"text":"<text>"}}}
```

<a id="text-polish"></a>

### `text_polish` — 텍스트 다듬기 AI

Polish a text (up to 100,000 characters) by fixing grammar, spelling, and awkward phrasing.

입력 텍스트(최대 10만 자)의 문법 오류, 맞춤법·오타, 어색한 표현, 문장 순서를 의미를 유지한 채 자연스럽게 다듬습니다. 모델·파라미터는 서버가 고정하며 빠른 응답에 최적화되어 있습니다. 토큰 수와 무관하게 요청당 고정 포인트가 차감됩니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `text` | `string` | **필수 / required** | 다듬을 원문 텍스트 (최대 100,000자) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"text_polish","arguments":{"text":"<text>"}}}
```

영상 생성 3종(`seedance_jobs_create`, `veo_jobs_create`, `kling_jobs_create`)은 모두 **비동기**입니다 — 접수하면 `job_id`와 함께 `waiting` 상태를 받고, 각 `*_jobs_status` Tool로 폴링하다가 `completed`가 되면 응답의 `result_url`(REST 다운로드 주소, 완료 후 7일 이내 유효)로 내려받습니다. 영상 파일 자체는 Tool 응답 크기 제한 때문에 MCP로 직접 전달하지 않습니다. 과금은 `duration × 초당 포인트`가 접수 시 예약 차감되고 완료 시 그대로 확정되며, 실패하거나 처리 시간이 초과되면 전액 환불됩니다. Seedance는 기본적으로 오디오를 함께 생성하는데(`audio: true`), 생성된 오디오가 저작권 등 정책 검수에서 거부되면 작업이 실패로 끝나고 예약 포인트가 전액 환불됩니다 — 이 거부를 피하려면 `audio: false`로 접수하세요.

<a id="seedance-jobs-create"></a>

### `seedance_jobs_create` — Seedance 영상 작업 접수

Submit an asynchronous Seedance video generation job. Select version and tier; supported modes, durations and prices depend on the selected version. Seedance 영상 생성 작업을 비동기로 접수합니다. text/image/reference 세 가지 mode를 지원하며, seedance_jobs_status Tool로 상태를 조회하고 완료되면 응답의 result_url(REST 다운로드 주소, 7일 이내 유효)로 다운로드합니다. 접수 시 duration × 초당 포인트(해상도별로 다름, resolution 참고)가 예약 차감되고 완료 시 확정, 실패·시간 초과 시 전액 환불됩니다.

기본 버전 기준: 초당 480p 560P·720p 1,250P·1080p 2,810P × duration(초). 다른 버전은 개발가이드의 버전별 요금표 참고.

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `version` | `string` | 선택 / optional | 영상 모델 버전. 생략 시 2.5. 등급·해상도·길이·오디오·파일 제약과 요금은 선택 버전별 개발가이드 표를 확인하세요. `2.5`, `2.0`, `1.5`, `1.0` |
| `prompt` | `string` | 필수 / required | 영상 생성 프롬프트, 최대 2,000자 |
| `mode` | `string` | 선택 / optional | 입력 방식 — 'text'(텍스트만) \| 'image'(첫 프레임 이미지 지정) \| 'reference'(참조 이미지·영상으로 주체 지정). 기본 text `text`, `image`, `reference` |
| `duration` | `integer` | 선택 / optional | 영상 길이(초), 전체 버전 범위 2~30. 허용 값과 기본값은 버전·등급별로 다릅니다. |
| `aspect_ratio` | `string` | 선택 / optional | 출력 화면 비율. 선택 버전·등급·모드에서 허용하는 값만 사용하세요. `16:9`, `4:3`, `1:1`, `3:4`, `9:16`, `21:9`, `adaptive` |
| `resolution` | `string` | 선택 / optional | 출력 해상도. 전체 버전의 값 목록이며 허용 조합·기본값·요금은 버전별 개발가이드를 따릅니다. `480p`, `720p`, `1080p` |
| `audio` | `boolean` | 선택 / optional | 오디오 생성 여부. 선택 가능한 버전은 기본 true, 무음 전용 버전은 false, 오디오 필수 버전은 true만 허용합니다. |
| `tier` | `string` | 선택 / optional | 품질·속도 등급. 지원 등급과 생략 시 기본값은 version과 mode에 따라 다릅니다. `standard`, `fast`, `mini`, `pro` |
| `seed` | `integer` | 선택 / optional | 재현성을 위한 시드 값 |
| `idempotency_key` | `string` | 선택 / optional | 같은 요청의 재전송으로 인한 중복 접수·과금을 막는 고유 키 |
| `image_url` | `string (file)` | 선택 / optional | image 모드에서 사용할 첫 프레임 이미지 URL |
| `last_image_url` | `string (file)` | 선택 / optional | image 모드에서 사용할 마지막 프레임 이미지 URL(선택) |
| `reference_image_url` | `string (file)` | 선택 / optional | reference 모드에서 주체를 지정할 참조 이미지 URL |
| `reference_image_url_2` | `string (file)` | 선택 / optional | reference 모드 참조 이미지 URL(2번째) |
| `reference_image_url_3` | `string (file)` | 선택 / optional | reference 모드 참조 이미지 URL(3번째) |
| `reference_video_url` | `string (file)` | 선택 / optional | reference 모드에서 동작을 참조할 영상 URL |
| `reference_image_url_4` | `string (file)` | 선택 / optional | 참조 이미지 URL(4번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_5` | `string (file)` | 선택 / optional | 참조 이미지 URL(5번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_6` | `string (file)` | 선택 / optional | 참조 이미지 URL(6번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_7` | `string (file)` | 선택 / optional | 참조 이미지 URL(7번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_8` | `string (file)` | 선택 / optional | 참조 이미지 URL(8번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_9` | `string (file)` | 선택 / optional | 참조 이미지 URL(9번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_10` | `string (file)` | 선택 / optional | 참조 이미지 URL(10번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_11` | `string (file)` | 선택 / optional | 참조 이미지 URL(11번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_12` | `string (file)` | 선택 / optional | 참조 이미지 URL(12번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_13` | `string (file)` | 선택 / optional | 참조 이미지 URL(13번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_14` | `string (file)` | 선택 / optional | 참조 이미지 URL(14번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_15` | `string (file)` | 선택 / optional | 참조 이미지 URL(15번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_16` | `string (file)` | 선택 / optional | 참조 이미지 URL(16번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_17` | `string (file)` | 선택 / optional | 참조 이미지 URL(17번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_18` | `string (file)` | 선택 / optional | 참조 이미지 URL(18번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_19` | `string (file)` | 선택 / optional | 참조 이미지 URL(19번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_20` | `string (file)` | 선택 / optional | 참조 이미지 URL(20번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_21` | `string (file)` | 선택 / optional | 참조 이미지 URL(21번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_22` | `string (file)` | 선택 / optional | 참조 이미지 URL(22번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_23` | `string (file)` | 선택 / optional | 참조 이미지 URL(23번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_24` | `string (file)` | 선택 / optional | 참조 이미지 URL(24번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_25` | `string (file)` | 선택 / optional | 참조 이미지 URL(25번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_26` | `string (file)` | 선택 / optional | 참조 이미지 URL(26번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_27` | `string (file)` | 선택 / optional | 참조 이미지 URL(27번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_28` | `string (file)` | 선택 / optional | 참조 이미지 URL(28번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_29` | `string (file)` | 선택 / optional | 참조 이미지 URL(29번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_30` | `string (file)` | 선택 / optional | 참조 이미지 URL(30번째). 버전별 최대 개수를 확인하세요. |
| `reference_video_url_2` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_3` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_4` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_5` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_6` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_7` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_8` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_9` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_10` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_2` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_3` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_4` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_5` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_6` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_7` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_8` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_9` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_audio_url_10` | `string (file)` | 선택 / optional | 참조 오디오 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"seedance_jobs_create","arguments":{"prompt":"A red sports car racing through a rainy city","version":"2.0","tier":"mini","duration":4,"resolution":"480p"}}}
```

<a id="seedance-jobs-status"></a>

### `seedance_jobs_status` — Seedance 영상 작업 상태

Check the status of a Seedance video generation job submitted via `seedance_jobs_create`.

Seedance 영상 작업의 진행 상태를 조회합니다. 완료되면 응답의 `result_url`(REST 다운로드 주소)로 안내하며, 결과는 완료 후 7일간 유효합니다. 무료입니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | 작업 ID |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"seedance_jobs_status","arguments":{"job_id":"<job_id>"}}}
```

<a id="veo-jobs-create"></a>

### `veo_jobs_create` — Veo 영상 작업 접수

Submit an asynchronous Veo video generation job. Select version and tier; supported modes, durations and prices depend on the selected version. Veo 영상 생성 작업을 비동기로 접수합니다. text/image/reference 세 가지 mode를 지원하며, veo_jobs_status Tool로 상태를 조회하고 완료되면 응답의 result_url(REST 다운로드 주소, 7일 이내 유효)로 다운로드합니다. 접수 시 duration × 초당 900포인트가 예약 차감되고 완료 시 확정, 실패·시간 초과 시 전액 환불됩니다.

기본 버전 기준: 초당 900포인트 × duration(초). 다른 버전은 개발가이드의 버전별 요금표 참고.

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `version` | `string` | 선택 / optional | 영상 모델 버전. 생략 시 3.1. 등급·해상도·길이·오디오·파일 제약과 요금은 선택 버전별 개발가이드 표를 확인하세요. `3.1` |
| `prompt` | `string` | 필수 / required | 영상 생성 프롬프트, 최대 2,000자 |
| `mode` | `string` | 선택 / optional | 입력 방식 — 'text'(텍스트만) \| 'image'(첫 프레임 이미지 지정) \| 'reference'(참조 이미지·영상으로 주체 지정). 기본 text `text`, `image`, `reference` |
| `duration` | `integer` | 선택 / optional | 영상 길이(초), 전체 버전 범위 4~8. 허용 값과 기본값은 버전·등급별로 다릅니다. |
| `aspect_ratio` | `string` | 선택 / optional | 출력 화면 비율. 선택 버전·등급·모드에서 허용하는 값만 사용하세요. `16:9`, `9:16` |
| `resolution` | `string` | 선택 / optional | 출력 해상도. 전체 버전의 값 목록이며 허용 조합·기본값·요금은 버전별 개발가이드를 따릅니다. `720p`, `1080p`, `4k` |
| `audio` | `boolean` | 선택 / optional | 오디오 생성 여부. 선택 가능한 버전은 기본 true, 무음 전용 버전은 false, 오디오 필수 버전은 true만 허용합니다. |
| `tier` | `string` | 선택 / optional | 품질·속도 등급. 지원 등급과 생략 시 기본값은 version과 mode에 따라 다릅니다. `standard`, `fast`, `lite` |
| `negative_prompt` | `string` | 선택 / optional | 제외할 요소를 설명하는 텍스트 |
| `seed` | `integer` | 선택 / optional | 재현성을 위한 시드 값 |
| `idempotency_key` | `string` | 선택 / optional | 같은 요청의 재전송으로 인한 중복 접수·과금을 막는 고유 키 |
| `image_url` | `string (file)` | 선택 / optional | image 모드에서 사용할 첫 프레임 이미지 URL |
| `last_image_url` | `string (file)` | 선택 / optional | image 모드에서 사용할 마지막 프레임 이미지 URL(선택) |
| `reference_image_url` | `string (file)` | 선택 / optional | reference 모드에서 주체를 지정할 참조 이미지 URL |
| `reference_image_url_2` | `string (file)` | 선택 / optional | reference 모드 참조 이미지 URL(2번째) |
| `reference_image_url_3` | `string (file)` | 선택 / optional | reference 모드 참조 이미지 URL(3번째) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"veo_jobs_create","arguments":{"prompt":"A boat crossing the sea","version":"3.1"}}}
```

<a id="veo-jobs-status"></a>

### `veo_jobs_status` — Veo 영상 작업 상태

Check the status of a Veo video generation job submitted via `veo_jobs_create`.

Veo 영상 작업의 진행 상태를 조회합니다. 완료되면 응답의 `result_url`(REST 다운로드 주소)로 안내하며, 결과는 완료 후 7일간 유효합니다. 무료입니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | 작업 ID |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"veo_jobs_status","arguments":{"job_id":"<job_id>"}}}
```

<a id="kling-jobs-create"></a>

### `kling_jobs_create` — Kling 영상 작업 접수

Submit an asynchronous Kling video generation job. Select version and tier; supported modes, durations and prices depend on the selected version. Kling 영상 생성 작업을 비동기로 접수합니다. text/image/reference 세 가지 mode를 지원하며, kling_jobs_status Tool로 상태를 조회하고 완료되면 응답의 result_url(REST 다운로드 주소, 7일 이내 유효)로 다운로드합니다. 접수 시 duration × 초당 410포인트가 예약 차감되고 완료 시 확정, 실패·시간 초과 시 전액 환불됩니다.

기본 버전 기준: 초당 410포인트 × duration(초). 다른 버전은 개발가이드의 버전별 요금표 참고.

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `version` | `string` | 선택 / optional | 영상 모델 버전. 생략 시 3.0. 등급·해상도·길이·오디오·파일 제약과 요금은 선택 버전별 개발가이드 표를 확인하세요. `3.0`, `o3`, `o1`, `2.6`, `2.5`, `2.1`, `2.0`, `1.6` |
| `prompt` | `string` | 필수 / required | 영상 생성 프롬프트, 최대 2,000자 |
| `mode` | `string` | 선택 / optional | 입력 방식 — 'text'(텍스트만) \| 'image'(첫 프레임 이미지 지정) \| 'reference'(참조 이미지·영상으로 주체 지정). 기본 text `text`, `image`, `reference` |
| `duration` | `integer` | 선택 / optional | 영상 길이(초), 전체 버전 범위 3~15. 허용 값과 기본값은 버전·등급별로 다릅니다. |
| `aspect_ratio` | `string` | 선택 / optional | 출력 화면 비율. 선택 버전·등급·모드에서 허용하는 값만 사용하세요. `16:9`, `9:16`, `1:1` |
| `resolution` | `string` | 선택 / optional | 출력 해상도. 전체 버전의 값 목록이며 허용 조합·기본값·요금은 버전별 개발가이드를 따릅니다. `720p`, `1080p`, `720P`, `1080P-SR`, `1440P-SR`, `1080P` |
| `audio` | `boolean` | 선택 / optional | 오디오 생성 여부. 선택 가능한 버전은 기본 true, 무음 전용 버전은 false, 오디오 필수 버전은 true만 허용합니다. |
| `tier` | `string` | 선택 / optional | 품질·속도 등급. 지원 등급과 생략 시 기본값은 version과 mode에 따라 다릅니다. `std`, `pro`, `turbo`, `4k`, `standard`, `master` |
| `negative_prompt` | `string` | 선택 / optional | 제외할 요소를 설명하는 텍스트 |
| `cfg_scale` | `number` | 선택 / optional | 프롬프트 반영 강도(0~1), 기본 0.5 |
| `idempotency_key` | `string` | 선택 / optional | 같은 요청의 재전송으로 인한 중복 접수·과금을 막는 고유 키 |
| `image_url` | `string (file)` | 선택 / optional | image 모드에서 사용할 첫 프레임 이미지 URL |
| `last_image_url` | `string (file)` | 선택 / optional | image 모드에서 사용할 마지막 프레임 이미지 URL(선택) |
| `reference_image_url` | `string (file)` | 선택 / optional | reference 모드에서 주체를 지정할 참조 이미지 URL |
| `reference_image_url_2` | `string (file)` | 선택 / optional | reference 모드 참조 이미지 URL(2번째) |
| `reference_image_url_3` | `string (file)` | 선택 / optional | reference 모드 참조 이미지 URL(3번째) |
| `reference_image_url_4` | `string (file)` | 선택 / optional | 참조 이미지 URL(4번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_5` | `string (file)` | 선택 / optional | 참조 이미지 URL(5번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_6` | `string (file)` | 선택 / optional | 참조 이미지 URL(6번째). 버전별 최대 개수를 확인하세요. |
| `reference_image_url_7` | `string (file)` | 선택 / optional | 참조 이미지 URL(7번째). 버전별 최대 개수를 확인하세요. |
| `reference_video_url` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_2` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_3` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |
| `reference_video_url_4` | `string (file)` | 선택 / optional | 참조 영상 URL. 지원 버전과 개수 제한은 개발가이드를 확인하세요. |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"kling_jobs_create","arguments":{"prompt":"A boat crossing the sea","version":"3.0"}}}
```

<a id="kling-jobs-status"></a>

### `kling_jobs_status` — Kling 영상 작업 상태

Check the status of a Kling video generation job submitted via `kling_jobs_create`.

Kling 영상 작업의 진행 상태를 조회합니다. 완료되면 응답의 `result_url`(REST 다운로드 주소)로 안내하며, 결과는 완료 후 7일간 유효합니다. 무료입니다.

> 읽기 전용 / read-only · 입력 변환 / transforms your input · server `ai`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | 작업 ID |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"kling_jobs_status","arguments":{"job_id":"<job_id>"}}}
```

---

## Pricing / 요금

Prepaid points, charged per call, identical to the APICK REST API rate. No subscription, no per-seat fee. **Failed calls are not charged.** Each tool's live price is appended to its description in `tools/list`, so an agent sees the current cost before it calls.

포인트 선불, 호출당 차감이며 단가는 에이픽 REST API와 동일합니다. 구독료·좌석당 요금 없음. **실패한 호출은 과금되지 않습니다.** 각 Tool의 현재 단가는 `tools/list` 응답의 설명에 자동으로 붙으므로 AI가 호출 전에 비용을 보고 판단합니다.

Current rates 단가표: <https://apick.app/dev_guide/mcp> · Sign up for 1,000 free points 가입 시 1,000포인트 무료: <https://apick.app>

`tools/list`는 API Key와 허용 IP를 검사하지 않으며 실제 검증은 `tools/call`에서 수행됩니다. 마이페이지의 허용 IP 목록이 공란이면 IP 제한이 없고, 제한하려면 APICK에 도착하는 공인 IPv4를 단일 주소 또는 CIDR(`/32` 등)로 등록하세요. 저장 즉시 반영되며 별도 동기화나 대기시간은 없습니다.

Video generation is billed per second of output (`duration × per-second points`), not per call — the rate above is per second, not per video.
영상 생성은 호출당이 아니라 초당 과금입니다(`duration × 초당 포인트`) — 아래 단가는 1초당 포인트입니다.

| Model 모델 | Tier·Resolution 등급·해상도 | Points/sec 초당 포인트 |
| --- | --- | --- |
| Seedance | standard · 480p | 560P |
| Seedance | standard · 720p | 1,250P |
| Seedance | standard · 1080p | 2,810P |
| Veo | standard | 900P |
| Veo | fast | 360P |
| Kling | std | 410P |
| Kling | pro | 550P |

## TTS 폐기 기능 / Retired TTS features

Legacy quality, retry and candidate-audio tools are no longer supported. 기존 품질 검수·발화 재개·후보 음원 도구는 지원하지 않습니다.

## Video model versions

Omitting `version` preserves Seedance 2.5, Veo 3.1 and Kling 3.0. Set `version` and `tier` explicitly to select a generation; jobs are never silently switched to another version. Submission and status responses include `version`.

Available generations: Seedance 1.0/1.5/2.0/2.5, including Seedance 2.0 Standard/Fast/Mini; Veo 3.1 (Standard/Fast/Lite); Kling 1.6/2.0/2.1/2.5/2.6/3.0/O1/O3. Veo 3.0 is unavailable. Seedance 2.0 Mini supports 480p/720p and 4–15 seconds. Modes, tiers, resolutions, durations, audio, file limits and prices vary by combination. See the [Seedance](https://apick.app/dev_guide/seedancejobs), [Veo](https://apick.app/dev_guide/veojobs) and [Kling](https://apick.app/dev_guide/klingjobs) version tables. Unsupported combinations are rejected before submission.

## 영상 모델 버전 선택

`version`을 생략하면 Seedance 2.5, Veo 3.1, Kling 3.0을 사용합니다. 버전과 등급을 명시하면 해당 조합으로 생성하며 다른 모델로 자동 대체하지 않습니다. 생성과 상태 응답의 `version`으로 확인할 수 있습니다.

| 제품 | 제공 버전 | 제약과 요금 |
|---|---|---|
| Seedance | 2.5, 2.0(Standard·Fast·Mini), 1.5, 1.0 | [버전별 지원표](https://apick.app/dev_guide/seedancejobs) |
| Veo | 3.1 (Standard, Fast, Lite) | [버전별 지원표](https://apick.app/dev_guide/veojobs) |
| Kling | 3.0, O3, O1, 2.6, 2.5, 2.1, 2.0, 1.6 | [버전별 지원표](https://apick.app/dev_guide/klingjobs) |

등급·해상도·길이·오디오·파일 개수와 초당 포인트는 선택 조합별로 다릅니다. Seedance 2.0은 Standard·Fast·Mini를 제공하며 Mini는 480p·720p와 4~15초를 지원합니다. 무음 전용 모델은 `audio=false`, 오디오 필수 모델은 `audio=true`만 허용합니다. Veo 3.0은 현재 제공하지 않습니다. 지원하지 않는 조합은 접수 전에 거절됩니다.

---

<a id="skills"></a>

## Skills · 검수된 Skill 실행

`https://apick.app/mcp/skills` — 6 tools. A separate server; these tools are not part of `all`.

A Skill is an execution product registered by a seller and published after APICK review. Each Skill fixes its input format, output format, base amount and limits. For Skills that use generative AI the actual usage of each run is added, so the charge varies per run. Running it from the web, REST or MCP uses the same run ID and the same charging rule.

Skill 은 판매자가 등록하고 에이픽이 심사해 게시한 실행 상품입니다. 입력 형식·결과 형식·기본 금액·처리 상한이 Skill 마다 정해져 있고, 생성형 AI 를 쓰는 Skill 은 실행마다 실제 사용량이 더해져 금액이 달라집니다. 또 웹·REST·MCP 어디에서 실행해도 같은 실행 번호와 같은 과금 규칙을 씁니다. `all` 서버와 별도이며 119개에는 포함되지 않습니다.

| Rule 규칙 | Detail 내용 |
| --- | --- |
| Charging 과금 | 결과가 약속한 형식으로 반환된 실행만 차감합니다. 실패·시간초과·취소는 차감하지 않습니다. 차감 금액은 기본 금액에 그 실행의 실제 AI 사용량을 더한 값이며 `billing.charged_points` 로 알려 줍니다. / Charged only when a result in the promised format is returned. The charge is the base amount plus the actual AI usage of that run, reported in `billing.charged_points`. |
| Estimate 예상 금액 | `quote_skill` 이 예상 금액(`estimated_points`)과 최대 금액(`max_points`)을 알려 줍니다. 실제 차감액은 최대 금액을 넘지 않습니다. / `quote_skill` returns the estimated and maximum amount; the charge never exceeds the maximum. |
| Reservation 예약 | 접수할 때 최대 금액을 예약하고, 끝나면 실제 금액만 차감한 뒤 나머지를 돌려줍니다. 실패하면 전부 돌려줍니다. 잔액이 부족하면 접수되지 않습니다. / Points are reserved on acceptance, then captured or released. |
| Eligibility 이용 조건 | 1회 이상 결제한 계정에서 실행할 수 있습니다. 한 계정의 동시 실행은 5건입니다. / Requires an account with at least one payment; 5 concurrent runs per account. |
| Retention 결과 보관 | 결과는 실행 뒤 7일 동안 조회할 수 있습니다. / Results stay readable for 7 days. |
| Generative AI 생성형 AI | `uses_generative_ai` 가 true 인 Skill 은 생성형 AI 로 결과를 만듭니다. 중요한 판단에 쓰기 전에 확인하세요. / Verify results before relying on them. |

Typical flow / 사용 순서: `search_skills` → `get_skill` → (`quote_skill`) → `run_skill` → `get_skill_run`.

```bash
npx -y apick-mcp --server skills
```

### `search_skills` — Skill 검색

Search Skills that fit a task. Returns name, summary, category, base amount and estimated amount in points, plus a usage tier (`usage_label`), `like_count`, `review_count` and `rating_average`. Use `sort` to order by recommendation, popularity or usage.

하려는 작업에 맞는 Skill 을 검색합니다. 이름·요약·분류와 기본 금액·예상 금액(포인트), 사용 건수 구간(`usage_label`: `1,000회 미만`, `1,000+`, `1만+` …)·좋아요 수(`like_count`)·리뷰 수(`review_count`)·평점(`rating_average`)을 돌려줍니다. `sort` 로 추천·인기·많이 쓴 순서를 고를 수 있습니다.

> 읽기 전용 / read-only · 무료 / free · server `skills`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `query` | `string` | 선택 / optional | 찾으려는 작업을 나타내는 검색어, 60자 이내 |
| `category` | `string` | 선택 / optional | `data` · `ai` · `dev` · `document` · `marketing` · `finance` · `productivity` · `video` · `etc` |
| `sort` | `string` | 선택 / optional | `recommended` 추천 · `popular` 인기 · `used` 많이 사용 · `likes` 좋아요순 · `rating` 평점순 · `new` 최신 · `mine` 내가 자주 쓴 · `liked` 내가 좋아요한. 생략하면 등록 순 / registration order when omitted |
| `cursor` | `string` | 선택 / optional | 다음 페이지 커서 |
| `limit` | `integer` | 선택 / optional | 한 번에 받을 개수, 1~20 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"search_skills","arguments":{"query":"상품명","sort":"popular","limit":5}}}
```

### `get_skill` — Skill 상세

Read a Skill's input and output formats, base and estimated amount, limits and examples before running it. The response also carries `usage_label`, `like_count`, `review_count` and `rating_average`.

Skill 의 입력·출력 형식, 기본 금액과 예상 금액, 처리 상한, 예제를 확인합니다. 실행 전에 입력 형식을 맞추는 데 씁니다. 사용 건수 구간(`usage_label`)·좋아요 수·리뷰 수·평점도 함께 옵니다.

> 읽기 전용 / read-only · 무료 / free · server `skills`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `skill_id` | `string` | **필수 / required** | `search_skills` 결과의 `skill_id` |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_skill","arguments":{"skill_id":"sk_example"}}}
```

### `quote_skill` — 실행 전 예상 금액 조회

Validate the input and report the estimated amount (`estimated_points`) and the maximum amount (`max_points`) for this input. Nothing is executed or charged. A quote is valid for 5 minutes.

입력을 검사하고 이 입력으로 실행했을 때의 예상 금액(`estimated_points`)과 최대 금액(`max_points`)을 알려 줍니다. 실행하지 않으며 과금되지 않습니다. 견적은 5분 동안, 같은 계정·같은 입력에만 쓸 수 있습니다.

> 읽기 전용 / read-only · 무료 / free · server `skills`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `skill_id` | `string` | **필수 / required** | `search_skills` 결과의 `skill_id` |
| `input` | `object` | **필수 / required** | Skill 의 `input_schema` 에 맞는 입력 객체 |
| `version` | `string` | 선택 / optional | 버전. 생략하면 현재 게시 버전 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"quote_skill","arguments":{"skill_id":"sk_example","input":{"product_name":"튼튼한 접이식 우산"}}}}
```

### `run_skill` — Skill 실행

Run a Skill. Points are charged only when a validated result is returned; the charge is the base amount plus the actual AI usage of the run, reported in `billing.charged_points`. Sending the same `idempotency_key` again returns the same run instead of starting a new one. If the run does not finish within 20 seconds, only `run_id` is returned; read it with `get_skill_run`.

Skill 을 실행합니다. 결과가 검증되어 반환될 때만 차감되고, 실패·시간초과·취소는 차감되지 않습니다. 차감 금액은 기본 금액에 실제 AI 사용량을 더한 값이며 `billing.charged_points` 로 알려 줍니다. 같은 `idempotency_key` 로 다시 보내면 새로 실행하지 않고 같은 실행을 돌려줍니다. 20초 안에 끝나지 않으면 `run_id` 만 돌려주므로 `get_skill_run` 으로 확인합니다.

> 상태 변경 / non-read-only (`readOnlyHint: false`, `idempotentHint: true`) · 실제 사용한 만큼 포인트 차감 / charges actual usage · server `skills`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `skill_id` | `string` | **필수 / required** | `search_skills` 결과의 `skill_id` |
| `input` | `object` | **필수 / required** | Skill 의 `input_schema` 에 맞는 입력 객체. 정의되지 않은 항목은 거부됩니다 |
| `idempotency_key` | `string` | **필수 / required** | 이 실행을 구분하는 고유 값. 영문·숫자와 `. _ : -` 로 1~128자. 재시도할 때 같은 값을 씁니다 |
| `max_cost_points` | `integer` | 선택 / optional | 최대 금액이 이 값보다 높으면 실행하지 않습니다. 실제 차감액은 이 값을 넘지 않습니다. 자동 호출에는 `quote_skill` 의 `max_points` 를 넣는 것을 권합니다 |
| `version` | `string` | 선택 / optional | 버전. 생략하면 현재 게시 버전 |
| `quote_id` | `string` | 선택 / optional | `quote_skill` 이 돌려준 견적 번호 |
| `wait_seconds` | `integer` | 선택 / optional | 결과를 기다릴 시간, 0~20초 (기본 20) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"run_skill","arguments":{"skill_id":"sk_example","input":{"product_name":"튼튼한 접이식 우산"},"idempotency_key":"order-20261002-0001","max_cost_points":64}}}
```

Response / 응답 (`structuredContent`):

| Field | Type | Description 설명 |
| --- | --- | --- |
| `run_id` | `string` | 실행 번호 / run ID |
| `status` | `string` | `queued` · `running` · `completing` · `succeeded` · `failed` · `timed_out` · `cancelled` |
| `skill` | `object` | 실행한 Skill 의 `id`, `version`, `title` |
| `result` | `object` | `status` 가 `succeeded` 일 때만. Skill 의 `output_schema` 형식 / only when succeeded |
| `billing.status` | `string` | `reserved` · `captured` · `released` · `partially_refunded` · `refunded` |
| `billing.reserved_points` | `integer` | 예약 중인 포인트 / reserved points |
| `billing.charged_points` | `integer` | 차감된 포인트 / charged points |
| `billing.refunded_points` | `integer` | 환불된 포인트 / refunded points |
| `failure_code` | `string` | 실패한 실행의 사유: `EXECUTION_FAILED` · `OUTPUT_INVALID` · `TIMED_OUT` · `CANCELLED` · `UPSTREAM_UNAVAILABLE` |
| `result_expires_at` | `string` | 결과 보관 기한 (ISO 8601) |

Requests rejected before acceptance return an error text that starts with the code in brackets, for example `[INSUFFICIENT_POINTS]`, `[INVALID_INPUT]`, `[IDEMPOTENCY_CONFLICT]`, `[PRICE_EXCEEDS_LIMIT]`, `[RATE_LIMITED]`. No points are reserved for them.

접수 전에 거절된 요청은 대괄호 안의 코드로 시작하는 오류 문구를 돌려주며 포인트를 예약하지 않습니다. 같은 키에 다른 입력을 보내면 `[IDEMPOTENCY_CONFLICT]` 로 거부되므로 새 실행에는 새 키를 쓰세요.

### `get_skill_run` — Skill 실행 조회

Read the run status and billing status. A succeeded run includes its result.

실행 상태와 과금 상태를 확인합니다. 성공한 실행은 결과를 함께 돌려줍니다.

> 읽기 전용 / read-only · 무료 / free · server `skills`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `run_id` | `string` | **필수 / required** | `run_skill` 이 돌려준 `run_id` |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_skill_run","arguments":{"run_id":"run_3f2a9c0d8e7b4a61b5c4d3e2f1a09b8c"}}}
```

### `cancel_skill_run` — Skill 실행 취소

Cancel a run that has not finished. A cancelled run is not charged. A finished run cannot be cancelled.

아직 끝나지 않은 실행을 취소합니다. 취소된 실행은 과금되지 않습니다. 이미 끝난 실행은 취소할 수 없습니다.

> 상태 변경 / non-read-only (`readOnlyHint: false`, `idempotentHint: true`) · 무료 / free · server `skills`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `run_id` | `string` | **필수 / required** | `run_skill` 이 돌려준 `run_id` |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"cancel_skill_run","arguments":{"run_id":"run_3f2a9c0d8e7b4a61b5c4d3e2f1a09b8c"}}}
```

### 실행 정보와 결과 파일 / Execution information and artifacts

`get_skill`과 `quote_skill`의 `execution_info`에서 가격·시간 범위, 도구별 예상 호출 수를 확인합니다. `get_skill_run`의 성공 결과에는 `artifacts`가 포함될 수 있으며 인증 다운로드 방법은 README의 스킬 파일 안내를 참고하세요.

Read price/duration ranges and expected tool calls from `execution_info` in `get_skill` and `quote_skill`. A successful `get_skill_run` may contain `artifacts`; see the README for authenticated downloads.

## 상품별 조회 가이드

상품별 간편인증 조회 가이드에는 조회 데이터, 출처 기관, 활용 사례와 자주 묻는 질문이 있습니다. 인증 요청은 해당 상품의 자료를 조회하기 위한 단계이며 결과 조회용 transactionId를 반환합니다. 요청·응답 계약과 인증 방식은 동일합니다. [공통 인증 흐름](https://apick.app/dev_guide/data)에서 절차와 오류 처리를 확인하세요.

Product-specific authenticated-data guides describe returned fields, source institutions, use cases, and FAQs. An authentication request starts access to the selected product and returns a transactionId for result polling. Request and response contracts and authentication are unchanged. See the [shared authentication guide](https://apick.app/dev_guide/data) for the flow and error handling.

## 서브에이전트 / Subagent (`subagent`)

| 도구 / Tool | 기능 / Purpose |
|---|---|
| apick_status | 상태와 잔액 / Status and balance |
| apick_dispatch | 멱등 접수 / Idempotent submission |
| apick_collect | 결과 페이지 / Result pages |
| apick_evidence | 인용·해시 / Quotes and hashes |
| apick_review | 검수 기록 / Record review |
| apick_cancel | 취소 / Cancel |
| apick_usage | 사용량·비용 / Usage and cost |

Bearer 인증이 필요합니다. Requires Bearer authentication. 업로드·REST 계약은 [가이드](https://apick.app/dev_guide/subagent)를 확인하세요. See the guide for upload and REST contracts.

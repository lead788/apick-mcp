# APICK MCP — Full Tool Catalog / 전체 Tool 목록

**89 tools** across **8 domain servers**, plus the combined `all` server.
**Tool 89개**, 분야별 서버 8개와 통합 서버 `all`.

Official site 공식 사이트: **<https://apick.app>** · Docs 연동 가이드: **<https://apick.app/dev_guide/mcp>**

Endpoint pattern: `https://apick.app/mcp/{server}` — connect to `all` for everything, or to one server to keep the tool list short.
엔드포인트: `https://apick.app/mcp/{server}` — 전부 쓰려면 `all`, 특정 분야만 쓰려면 해당 서버에 연결하면 Tool 목록이 짧아집니다.

## Index / 목차

| Server 서버 | Endpoint | Tools | Coverage 범위 |
| --- | --- | --- | --- |
| [Business & Commerce · 사업자 · 커머스](#business) | `/mcp/business` | 16 | 사업자·법인 조회, 택배 배송조회, 부동산 실거래가, 차량 이력, 유효성 검사. |
| [Identity Verification · 신분증 진위확인 · 마스킹](#identity) | `/mcp/identity` | 16 | 주민등록증·운전면허증·여권·외국인등록증 진위확인, 실명확인, 개인정보 마스킹. |
| [OCR · OCR 문자인식](#ocr) | `/mcp/ocr` | 6 | 이미지 텍스트 추출과 신분증 항목 추출. |
| [Finance · 금융 · 계좌확인](#finance) | `/mcp/finance` | 3 | 계좌 예금주 실명조회와 1원 인증. |
| [Web & Search · 웹 · 검색](#web) | `/mcp/web` | 13 | 도메인·IP 조회, WHOIS, 웹페이지 수집, 구글 검색, 유튜브. |
| [File Conversion · 파일 변환 · 워터마크](#convert) | `/mcp/convert` | 19 | PDF·DOCX·엑셀 변환, 음성인식(STT), 비동기 TTS, 워터마크. |
| [Vision · 이미지 · 영상 분석](#vision) | `/mcp/vision` | 6 | 얼굴 검출, 이미지 유사도, 유해이미지 판별, 영상 추출. |
| [AI & LLM · AI · LLM](#ai) | `/mcp/ai` | 10 | LLM 챗, 텍스트 도구, 이미지 생성·편집·대량 작업. |
| **All 통합** | `/mcp/all` | **89** | 아래 전부 |

<details><summary><b>All 89 tool names / 전체 Tool 이름</b></summary>

`biz_detail` · `venture_biz_info` · `land_rt_price` · `req_pccc` · `get_pccc` · `check_pccc` · `get_car_flooding` · `get_car_scrap` · `parcel_tracking` · `parcel_tracking_auto` · `check_email_valid` · `check_phone_valid` · `check_spam_number` · `holiday_info` · `search_juso` · `info`

`identi_card1` · `identi_card2` · `identi_card3` · `identi_card4` · `identi_card5` · `identi_card_image1` · `identi_card_image2` · `identi_card_image3` · `identi_card_image4` · `identi_card_image5` · `name_rrn_auth` · `hide_rrn` · `identity_document_residence_card` · `identity_document_passport` · `identity_document_id_card` · `identity_document_driver_license`

`ocr` · `ocr_identi1` · `ocr_identi2` · `ocr_identi3` · `ocr_identi4` · `ocr_identi5`

`transfer_1won` · `account_realname` · `bank_code`

`nslookup` · `reverse_ip` · `location` · `ip_history` · `whois` · `url_html` · `url_screenshot` · `url_similarity` · `google_search` · `google_image_search` · `google_lens_search` · `crawl_youtube` · `download_youtube_video`

`stt` · `tts_jobs_create` · `tts_jobs_status` · `tts_jobs_cancel` · `tts_jobs_result` · `tts_jobs_subtitles` · `voice_change` · `face_blur` · `pdf_to_docx` · `pdf_to_image` · `pdf_merge` · `html_to_pdf` · `docx_to_pdf` · `json_to_excel` · `base64_to_image` · `set_watermark` · `get_watermark` · `draw_watermark_pdf` · `draw_watermark_image`

`nsfw_detection` · `image_similarity` · `video_to_mp3` · `extract_video_thumbnail` · `word_cloud` · `face_detection`

`llm_models` · `llm_chat` · `text_summary` · `text_polish` · `image_generate` · `image_edit` · `image_batch_create` · `image_batch_status` · `image_batch_cancel` · `image_batch_result`

</details>

---

<a id="business"></a>

## Business & Commerce · 사업자 · 커머스

`https://apick.app/mcp/business` — 16 tools

Korean business registry, corporate credit, parcel tracking, real-estate prices, vehicle history, and input validation.

사업자·법인 조회, 택배 배송조회, 부동산 실거래가, 차량 이력, 유효성 검사.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`biz_detail`](#biz-detail) | 사업자 정보 조회 | `biz_no` |
| [`venture_biz_info`](#venture-biz-info) | 벤처기업 정보조회 | `biz_no` |
| [`land_rt_price`](#land-rt-price) | 부동산 실거래가 조회 | `addr1`, `addr2`, `type`, `year` |
| [`req_pccc`](#req-pccc) | 개인통관고유부호 인증 요청 | `name`, `rrn1`, `rrn2`, `phone` |
| [`get_pccc`](#get-pccc) | 개인통관고유부호 조회 | `auth_key`, `answer` |
| [`check_pccc`](#check-pccc) | 개인통관부호 검증 | `name`, `pccc`, `zip`, `phone` |
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

Request SMS verification to retrieve a Korean Personal Customs Clearance Code (PCCC).

개인통관고유부호 조회를 위한 본인 인증을 요청합니다. 인증번호 6자리가 문자(SMS)로 발송되며, 응답의 auth_key와 수신한 인증번호를 get_pccc Tool에 입력해 부호를 조회합니다.

> **부작용 있음 / has side effects** · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `name` | `string` | **필수 / required** | 이름 |
| `rrn1` | `string` | **필수 / required** | 주민등록번호 앞 6자리 |
| `rrn2` | `string` | **필수 / required** | 주민등록번호 뒤 7자리 |
| `phone` | `string` | **필수 / required** | 휴대전화 번호 (본인 명의, 숫자만) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"req_pccc","arguments":{"name":"<name>","rrn1":"<rrn1>","rrn2":"<rrn2>","phone":"<phone>"}}}
```

<a id="get-pccc"></a>

### `get_pccc` — 개인통관고유부호 조회

Retrieve a Korean Personal Customs Clearance Code (PCCC) using the auth key and SMS verification code.

req_pccc Tool 호출로 받은 auth_key와 문자(SMS)로 수신한 인증번호 6자리를 입력해 개인통관고유부호를 조회합니다.

> **부작용 있음 / has side effects** · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `auth_key` | `string` | **필수 / required** | req_pccc(개인통관고유부호 인증 요청) 응답의 인증 키 |
| `answer` | `string` | **필수 / required** | 문자(SMS)로 발송된 인증번호 6자리 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_pccc","arguments":{"auth_key":"<auth_key>","answer":"<answer>"}}}
```

<a id="check-pccc"></a>

### `check_pccc` — 개인통관부호 검증

Verify that a Korean Personal Customs Clearance Code (PCCC) matches the given name, zip code, and phone number.

이름, 개인통관고유부호, 우편번호, 전화번호를 입력하여 개인통관부호 일치 여부를 검증합니다. 해외직구 주문 정보 검증 등에 사용합니다.

> 읽기 전용 / read-only · 외부 데이터 조회 / external lookup · server `business`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `name` | `string` | **필수 / required** | 이름 |
| `pccc` | `string` | **필수 / required** | 개인통관고유부호 (P + 숫자 12자리, 예: P123456789012) |
| `zip` | `string` | **필수 / required** | 우편번호 (5자리, 예: 12345) |
| `phone` | `string` | **필수 / required** | 전화번호 (숫자만, 예: 01012341234) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"check_pccc","arguments":{"name":"<name>","pccc":"<pccc>","zip":"<zip>","phone":"<phone>"}}}
```

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

Verify the authenticity of a Korean driver license using text input.

운전면허증의 기재 정보를 입력해 진위 여부를 확인합니다. birth_y, birth_m, birth_d, name과 면허번호 4구획(licen_no0~licen_no3)은 모두 필수이며, ghost_num(식별번호)과 rrn1, rrn2는 선택 입력입니다. 정보주체의 동의 등 적법한 처리 근거를 확보한 경우에만 사용하십시오.

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
| `ghost_num` | `string` | 선택 / optional | 식별번호 (면허증 우측 표기, 예: 8H1X3Y) |
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

`https://apick.app/mcp/web` — 13 tools

Domain and IP intelligence, WHOIS, page capture, Google search, and YouTube.

도메인·IP 조회, WHOIS, 웹페이지 수집, 구글 검색, 유튜브.

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
| [`google_lens_search`](#google-lens-search) | 구글 렌즈 검색(이미지로 검색) | `image_url` |
| [`crawl_youtube`](#crawl-youtube) | 유튜브 계정 정보 수집 | `user_id` |
| [`download_youtube_video`](#download-youtube-video) | 유튜브 동영상 다운로드 | `url` |

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
| `page` | `string` | 선택 / optional | 검색 결과 조회 페이지 (기본값 1) |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"google_image_search","arguments":{"keyword":"<keyword>"}}}
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

<a id="convert"></a>

## File Conversion · 파일 변환 · 워터마크

`https://apick.app/mcp/convert` — 19 tools

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
| `audio_url` | `string` (file) | **필수 / required** | https URL, audio/mpeg, audio/mp3, audio/wav, audio/x-wav, audio/mp4, audio/aac, audio/ogg, audio/flac, audio/webm, 최대 200MB |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"stt","arguments":{"audio_url":"https://example.com/file"}}}
```

<a id="tts-jobs-create"></a>

### `tts_jobs_create` — TTS 작업 접수

17개 중립 내레이션 목소리 중 하나로 유료 비동기 TTS 작업을 접수합니다. 접수 성공 시 즉시 과금되며 취소해도 환불되지 않습니다. `text`는 최대 800자입니다.

표시 이름: `narrator_m_01` 태준, `narrator_m_02` 민석, `narrator_m_03` 도현, `narrator_m_04` 강우, `narrator_m_05` 성훈, `narrator_f_10s_01` 서아, `narrator_f_10s_02` 하린, `narrator_f_10s_03` 예린, `narrator_m_20s_01` 도윤, `narrator_f_20s_01` 지안, `narrator_f_20s_02` 서윤, `narrator_f_20s_03` 소연, `narrator_f_20s_04` 유나, `narrator_m_30s_01` 현우, `narrator_m_30s_02` 준혁, `narrator_m_40s_01` 정우, `narrator_m_80s_01` 영수.

> **부작용 있음 / has side effects** · 접수 시 과금 / charged on acceptance · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `voice_id` | `string` | **필수 / required** | 지원 `voice_id`. `narrator_m_01`–`05`, `narrator_f_10s_01`–`03`, `narrator_m_20s_01`, `narrator_f_20s_01`–`04`, `narrator_m_30s_01`–`02`, `narrator_m_40s_01`, `narrator_m_80s_01` |
| `text` | `string` | **필수 / required** | 합성할 한국어 텍스트, 최대 800자 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"tts_jobs_create","arguments":{"voice_id":"narrator_m_03","text":"오늘의 이야기를 시작합니다."}}}
```

<a id="tts-jobs-status"></a>

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

`waiting` 또는 `processing` 상태에서 취소할 수 있으며 접수 시 과금된 금액은 환불되지 않습니다.

> **부작용 있음 / has side effects** · 환불 없음 / no refund · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | 취소할 32자리 ID |

```json
{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"tts_jobs_cancel","arguments":{"job_id":"<job_id>"}}}
```

<a id="tts-jobs-result"></a>

### `tts_jobs_result` — TTS 결과 1회 다운로드

완료된 MP3(`audio/mpeg`) 결과를 base64로 반환합니다. Tool 호출로 다운로드가 시작되는 즉시 서버 원본이 폐기되므로, 호출 실패나 전송 중단을 포함해 재다운로드할 수 없습니다. 결과를 받을 준비가 된 클라이언트에서 한 번만 호출하세요.

> **파괴적 부작용 / destructive side effect** · 재실행 불가 / not idempotent · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | `completed` 상태인 32자리 ID |

```json
{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"tts_jobs_result","arguments":{"job_id":"<job_id>"}}}
```

<a id="tts-jobs-subtitles"></a>

### `tts_jobs_subtitles` — TTS ASS 자막 1회 다운로드

완료된 ASS 타이밍 자막(`text/x-ass`)을 base64로 반환합니다. MP3와 별도의 1회용 원본이므로 MP3를 먼저 다운로드해도 자막을 한 번 받을 수 있습니다. Tool 호출로 자막 다운로드가 시작되는 즉시 자막 원본이 폐기되므로, 호출 실패나 전송 중단을 포함해 재다운로드할 수 없습니다.

> **파괴적 부작용 / destructive side effect** · 재실행 불가 / not idempotent · server `convert`

| Parameter | Type | Required | Description 설명 |
| --- | --- | --- | --- |
| `job_id` | `string` | **필수 / required** | `completed` 상태인 32자리 ID |

```json
{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"tts_jobs_subtitles","arguments":{"job_id":"<job_id>"}}}
```

<a id="voice-change"></a>

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

`https://apick.app/mcp/ai` — 10 tools

LLM chat across multiple models, text summarization, and polishing.

LLM 챗(다중 모델), 텍스트 요약·교정.

| Tool | 기능 | Required 필수 |
| --- | --- | --- |
| [`llm_models`](#llm-models) | LLM 모델 카탈로그 | — |
| [`llm_chat`](#llm-chat) | LLM 채팅 | `model` |
| [`text_summary`](#text-summary) | 텍스트 요약 AI | `text` |
| [`text_polish`](#text-polish) | 텍스트 다듬기 AI | `text` |
| `image_generate` | 이미지 한 장 생성 | `prompt`, `size?`, `output_format?`, `background?`, `output_compression?`, `idempotency_key?` |
| `image_edit` | 이미지 한 장 편집 | `image_url`, `prompt` 및 출력 옵션 |
| `image_batch_create` | 이미지 대량 작업 생성 | `mode`, `prompt`, `count`, 편집 파일 및 출력 옵션 |
| `image_batch_status` | 대량 작업 상태 조회 | `job_id` |
| `image_batch_cancel` | 대량 작업 취소 | `job_id` |
| `image_batch_result` | 대량 작업 개별 결과 | `job_id`, `index` |

이미지 생성·편집은 성공 결과 한 장당 25포인트입니다. 편집은 원본 이미지 한 장과 프롬프트만 받으며 마스크 파일은 지원하지 않습니다. 동기 Tool은 응답 크기를 위해 한 장만 반환하며, 대량 작업은 최대 50장 접수 후 `image_batch_result`로 한 장씩 가져옵니다. PNG·JPEG·WebP, 다양한 비율, PNG/WebP 투명 배경 미리보기를 지원합니다. 프롬프트는 최대 6,000자이고 완료 결과는 24시간 동안 반복 조회할 수 있습니다.

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
| `compact` | `object` | 선택 / optional | 히스토리 압축 옵션 { strategy: 'none'(기본) \| 'sliding_window', window_pairs: 유지할 user/assistant 페어 수 (기본 10, 최소 1) }. 긴 대화의 input 토큰 누적 방지 |
| `temperature` | `number` | 선택 / optional | 출력 다양성 0.0~2.0. 낮을수록 재현성, 높을수록 창의성 (미지정 시 모델 기본값) |
| `max_tokens` | `integer` | 선택 / optional | 응답 최대 토큰. 미지정 시 모델 컨텍스트 기반 안전 상한으로 자동 설정, 상한 초과 지정 시 자동 조정 |
| `speed` | `string` | 선택 / optional | 응답 속도/추론 깊이 — 'fast'(얕게, 빠름) \| 'medium' \| 'slow'(깊게, 느림). 한글 '빠름'\|'중간'\|'느림' 허용. 추론 특화 모델에서 효과가 큽니다 |

```json
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"llm_chat","arguments":{"model":"<model>"}}}
```

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

---

## Pricing / 요금

Prepaid points, charged per call, identical to the APICK REST API rate. No subscription, no per-seat fee. **Failed calls are not charged.** Each tool's live price is appended to its description in `tools/list`, so an agent sees the current cost before it calls.

포인트 선불, 호출당 차감이며 단가는 에이픽 REST API와 동일합니다. 구독료·좌석당 요금 없음. **실패한 호출은 과금되지 않습니다.** 각 Tool의 현재 단가는 `tools/list` 응답의 설명에 자동으로 붙으므로 AI가 호출 전에 비용을 보고 판단합니다.

Current rates 단가표: <https://apick.app/dev_guide/mcp> · Sign up for 1,000 free points 가입 시 1,000포인트 무료: <https://apick.app>

`tools/list`는 API Key와 허용 IP를 검사하지 않으며 실제 검증은 `tools/call`에서 수행됩니다. 마이페이지의 허용 IP 목록이 공란이면 IP 제한이 없고, 제한하려면 APICK에 도착하는 공인 IPv4를 단일 주소 또는 CIDR(`/32` 등)로 등록하세요. 저장 즉시 반영되며 별도 동기화나 대기시간은 없습니다.

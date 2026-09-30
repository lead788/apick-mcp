# 변경 기록

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

- 간편인증 데이터 조회 5종의 접수·결과 Tool 10개 계약을 추가했습니다. 전체 106개, Business 25개, 상태 변경 Tool 24개입니다. 원격 서버의 대응 패치 배포가 필요합니다.
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

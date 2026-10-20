# qdRx 레드와인비니거 앰플 상세페이지

기획안 「(NEW) 레와비 앰플 상페기획안」을 레퍼런스(dexcanic 무드, parodex 구성) 톤으로 구현한 860px 상세페이지.

- `index.html`: 원본. 섹션 하나가 `<section data-name>` 하나이며, 내보내기 단위와 같음
- `out/sections/*.png`: 섹션별로 분리한 이미지 (기획안의 "분리 이미지" 요청)
- `out/full_preview.jpg`: 전체 이어 붙인 미리보기
- 다시 내보내기: `node export.mjs` (2배 해상도는 `node export.mjs 2`)

FAQ, 하단 가격 배너, 전성분은 기획안 지시에 따라 제외함.

## 교체가 필요한 자리 (점선 박스 / [대괄호] 표시)
- 07 저자극 테스트: 임상결과 이미지
- 08 체험 후기: 전후 사진
- 09 4주 인체적용시험: 수치·사진·시험기관 (레이아웃만 dermacaps 참고, 값은 비워 둠)
- 11 입점 문의 이메일
- 13 실구매 후기: 실제 qdRx 후기 3건
- 20 안끈적이는 연출컷 (지금은 임시 제형 이미지)

## 이미지 출처
- 제품컷: qdrx.kr 자사몰 상품 이미지
- 증명서, 유튜브 썸네일, 시중 제품 캡처, 09 섹션 흉상: 기획안 슬라이드에서 잘라낸 이미지
- 무드컷과 성분 이미지(`assets/img/` 중 hero_paris, vineyard, wine_swirl, molecule, texture, clinic, lab, grape_crush, skin_*, ing_*): AI 생성 이미지

# 티티왁싱 웹사이트

GitHub → Cloudflare Pages용 **순수 HTML/CSS/JS 정적 5페이지 사이트**입니다.

**npm, Node.js, 프레임워크, 패키지 설치, 빌드 과정이 전혀 없습니다.** 저장소의 파일 자체가 최종 배포 파일입니다.

## 페이지 구성
1. `index.html` — 신림왁싱 메인
2. `brazilian-waxing.html` — 브라질리언 왁싱 / 남성·여성
3. `pregnancy-waxing.html` — 임산부 왁싱
4. `sugaring.html` — 슈가링
5. `about-booking.html` — 티티왁싱 소개 / 예약 안내

## Cloudflare Pages 배포 — 빌드 커맨드 없음
1. GitHub에서 새 저장소를 만들고 이 폴더 안의 파일을 **저장소 루트**에 그대로 올립니다.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git로 이동합니다.
3. GitHub 저장소를 선택합니다.
4. Framework preset은 `None`으로 선택합니다.
5. **Build command는 빈칸으로 둡니다. 아무 명령도 입력하지 않습니다.**
6. Build output directory는 저장소 루트를 사용합니다. UI에서 값이 필요한 경우 `/` 또는 `.` 등 “repository root”에 해당하는 값을 선택/입력하세요.
7. 환경변수나 패키지 설치 설정은 필요 없습니다.
8. Deploy 합니다.

> 핵심: `package.json`, npm build, Vite, Next.js 같은 빌드 도구를 사용하지 않습니다.

## 모바일 최적화
- 360px~900px 반응형 레이아웃
- 모바일 내비게이션 + 접근성 `aria-expanded`
- 44~48px 이상 터치 영역
- 모바일 타이포/버튼/FAQ/카드 여백 조정
- 작은 화면의 가로 스크롤 방지
- 이미지 반응형 + 후순위 이미지 lazy loading
- iPhone safe-area 대응
- `prefers-reduced-motion` 접근성 대응

## 배포 전 꼭 바꿀 실제 업체 정보
허위 로컬 정보를 넣지 않기 위해 아래 값은 임의로 만들지 않았습니다.

- 실제 도로명 주소 / 건물명 / 층수
- 전화번호
- 실제 영업시간 / 휴무일
- 네이버 예약·카카오채널 등 실제 예약 URL
- 최종 도메인

### 도메인 변경
현재 기본 도메인은 `https://ttwaxing.pages.dev`입니다. 실제 Pages 주소나 커스텀 도메인이 정해지면 프로젝트 전체에서 이 주소를 검색해 실제 도메인으로 일괄 변경하세요.

수정 대상:
- 5개 HTML의 canonical / Open Graph / JSON-LD
- `robots.txt`
- `sitemap.xml`

## SEO 구성
- 페이지별 고유 `<title>`, meta description, H1
- `신림왁싱` 메인 검색 의도 + 서비스별 세부 검색 의도 분리
- canonical URL
- Open Graph
- `robots.txt`, `sitemap.xml`
- 홈페이지 `BeautySalon` + `WebSite` JSON-LD
- 세부페이지 `Service` + `BreadcrumbList` JSON-LD
- 내부링크
- 이미지 alt 텍스트
- 모바일 반응형 및 가벼운 정적 구조

## Local SEO 추가 완성
실제 주소, 전화번호, 영업시간이 준비되면 홈페이지와 안내 페이지의 `BeautySalon` JSON-LD에 실제 데이터만 추가하세요.

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "실제 도로명 주소",
  "addressLocality": "관악구",
  "addressRegion": "서울특별시",
  "postalCode": "실제 우편번호",
  "addressCountry": "KR"
},
"telephone": "+82-2-실제번호",
"openingHoursSpecification": []
```

배포 후 Google Search Console에서 sitemap을 제출하고, Google Business Profile의 업체명·주소·전화번호와 사이트 정보가 일치하도록 관리하는 것을 권장합니다.

## Sitemap / RSS

- Sitemap: `https://ttwaxing.pages.dev/sitemap.xml`
- RSS: `https://ttwaxing.pages.dev/rss.xml`
- 실제 커스텀 도메인을 연결하면 두 XML 파일과 HTML의 canonical/OG URL도 해당 도메인으로 변경하세요.

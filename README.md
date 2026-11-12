# welaw manager

변호사용 백오피스(매니저 콘솔) UI. 레퍼런스 서비스의 캡처 6장을 픽셀 단위로 측정해 동일한 레이아웃·간격·색상·타이포 체계로 재구성한 Next.js 앱입니다.
울픽부스터 맥스의 버티컬 서비스(법률) 테스트 베드로 사용합니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000 → /manager/dashboard 로 리다이렉트
npm run build && npm start
```

## 라우트

| 화면 | 경로 |
| --- | --- |
| 홈(대시보드) | `/manager/dashboard` |
| 유료 상담 | `/manager/advices/index/counsels` |
| 내용증명 설정 | `/manager/certified-letter/settings` |
| 광고 상품 | `/manager/ad-products` |
| 포스트 | `/manager/posts` |
| 동영상 | `/manager/videos` |

사이드바의 나머지 메뉴(간편 문의, 온라인 상담, 공지사항, 내용증명 의뢰 목록/이력)는 헤더만 있는 빈 페이지입니다.

## 구조

```
app/
  layout.tsx            # 루트(폰트, 글로벌 CSS)
  globals.css           # Tailwind v4 테마 토큰(색상/폰트) + Pretendard @font-face
  manager/layout.tsx    # 고정 사이드바(200px) + 메인 영역
  manager/**/page.tsx   # 각 화면
components/             # Sidebar, PageHeader, Footer, Toggle, Tag, RepMark, Icons, AdIllustrations
lib/mock.ts             # 화면에 뿌리는 더미 데이터(실 API 연동 시 교체 지점)
public/fonts/           # Pretendard Variable (self-hosted)
```

## 측정된 디자인 토큰

캡처(DPR 2, 1898px 뷰포트)에서 픽셀 샘플링으로 추출한 값입니다. `app/globals.css`의 `@theme`에 정의되어 있습니다.

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `side` / `side-active` / `side-btn` | `#1f2225` / `#3a3e40` / `#464c53` | 사이드바 배경 / 활성 메뉴 / 버튼 |
| `page` / `page-ad` | `#f5f7f9` / `#f4f7fa` | 본문 배경 |
| `ink` / `body` / `muted` / `light` / `faint` | `#33383e` / `#464c53` / `#6e757c` / `#90969d` / `#bbbfc4` | 텍스트 단계 |
| `brand` / `brand-soft` / `brand-tint` | `#fa5e02` / `#fff7f4` / `#fef3eb` | 포인트 오렌지 |
| `tag` / `toggle` / `link` / `search` | `#566d9f` / `#67b2ef` / `#337ab7` / `#337de6` | 태그 칩 / 토글 / 링크 / 검색 버튼 |
| `line` / `line-soft` / `line-card` / `fill` / `fill-btn` | `#e8e8e8` / `#eef1f4` / `#eceff2` / `#f1f1f1` / `#dce0e4` | 구분선·필터 배경·보조 버튼 |

레이아웃 상수: 사이드바 200px, 콘텐츠 컨테이너 944px(유료 상담만 940px), 페이지 헤더 60px(+탭 48px), 메뉴 아이템 32px/피치 36px, 테이블 행 61~62px, 태그 칩 28px.

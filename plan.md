# Heavaa.com 인터랙티브 이력서 — 구현 계획

> 작성일: 2026-03-06 | 작성자: Penny 📋

---

## 0. 현재 상태 분석

| 항목 | 상태 |
|------|------|
| Next.js 16 + App Router | ✅ 설치됨 |
| Tailwind CSS v4 | ✅ 설치됨 |
| Framer Motion 12 | ✅ 설치됨 |
| GSAP + @gsap/react | ✅ 설치됨 |
| TypeScript | ✅ 설정됨 (`@/*` path alias) |
| `src/app/page.tsx` | ⚠️ create-next-app 기본 템플릿 — 전면 교체 필요 |
| `src/app/layout.tsx` | ⚠️ 기본 레이아웃 — 다크모드, 네비게이션, 메타데이터 추가 필요 |
| `src/components/` | 🔴 빈 디렉토리 |
| `src/data/` | 🔴 빈 디렉토리 |
| `src/lib/` | 🔴 빈 디렉토리 |
| `src/styles/` | 🔴 빈 디렉토리 |
| `/resume`, `/career`, `/contact` | 🔴 미구현 |

**결론**: 기본 인프라(빌드, 의존성)는 준비됨. UI/데이터/라우팅은 전부 새로 만들어야 함.

---

## 1. 파일 구조 (변경/생성 목록)

```
src/
├── app/
│   ├── layout.tsx              # [수정] 루트 레이아웃 — 다크모드, 폰트, 네비게이션, 메타데이터
│   ├── page.tsx                # [수정] 랜딩 페이지 — 전면 교체
│   ├── globals.css             # [수정] 글로벌 스타일 — CSS 변수, 다크모드 토글, 스크롤 관련
│   ├── resume/
│   │   └── page.tsx            # [신규] 인터랙티브 타임라인 이력서
│   ├── career/
│   │   └── page.tsx            # [신규] 경력기술서 상세
│   └── contact/
│       └── page.tsx            # [신규] 연락처
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # [신규] 네비게이션 바 + 다크모드 토글
│   │   ├── Footer.tsx          # [신규] 사이트 푸터
│   │   ├── MobileMenu.tsx      # [신규] 모바일 햄버거 메뉴
│   │   └── PageTransition.tsx  # [신규] 페이지 전환 애니메이션 래퍼
│   │
│   ├── landing/
│   │   ├── HeroSection.tsx     # [신규] 히어로 — 스크롤 줌인/패럴랙스
│   │   ├── StatsCounter.tsx    # [신규] 숫자 카운트업 (경력 연수, 프로젝트 수)
│   │   └── ProjectCards.tsx    # [신규] 헤바 유니버스 프로젝트 카드 그리드
│   │
│   ├── resume/
│   │   ├── Timeline.tsx        # [신규] 인터랙티브 타임라인 컨테이너
│   │   ├── TimelineItem.tsx    # [신규] 타임라인 개별 항목 (스크롤 줌인/줌아웃)
│   │   ├── SkillCloud.tsx      # [신규] 스킬 태그 pop-in 애니메이션
│   │   └── Education.tsx       # [신규] 학력 섹션
│   │
│   ├── career/
│   │   ├── CompanySection.tsx  # [신규] 회사별 섹션 컨테이너
│   │   ├── ProjectCard.tsx     # [신규] 프로젝트 카드 (펼치기/접기)
│   │   └── InsightBlock.tsx    # [신규] Insight/Growth 블록
│   │
│   └── ui/
│       ├── ThemeToggle.tsx     # [신규] 다크/라이트 모드 토글 버튼
│       ├── ScrollProgress.tsx  # [신규] 스크롤 진행률 표시기
│       ├── AnimatedText.tsx    # [신규] 텍스트 등장 애니메이션 (fade-up, reveal)
│       ├── Section.tsx         # [신규] 공통 섹션 래퍼 (scroll-triggered)
│       └── Tag.tsx             # [신규] 스킬/기술 태그 컴포넌트
│
├── data/
│   ├── resume.ts               # [신규] 경력/학력/스킬 데이터
│   ├── career.ts               # [신규] 경력기술서 상세 데이터 (문제→가설→액션→성과→인사이트)
│   ├── projects.ts             # [신규] 프로젝트 목록 데이터 (랜딩용)
│   └── site.ts                 # [신규] 사이트 메타데이터, 네비게이션, 연락처 정보
│
├── lib/
│   ├── hooks/
│   │   ├── useScrollAnimation.ts  # [신규] 스크롤 기반 애니메이션 커스텀 훅
│   │   ├── useCountUp.ts          # [신규] 숫자 카운트업 훅
│   │   └── useTheme.ts            # [신규] 다크모드 토글 훅 + localStorage 저장
│   └── utils/
│       ├── cn.ts                  # [신규] className 병합 유틸 (clsx + twMerge 대체 간단 버전)
│       └── animations.ts         # [신규] GSAP/Framer Motion 프리셋 설정값
│
└── styles/
    └── fonts.ts                # [신규] 폰트 설정 (Pretendard 또는 Noto Sans KR)
```

### 파일별 변경 이유

| 파일 | 이유 |
|------|------|
| `layout.tsx` | 메타데이터(`heavaa.com`), 한국어 lang, 네비게이션 통합, 다크모드 Provider, 한글 폰트 적용 |
| `page.tsx` | 기본 템플릿 → 히어로 + 스탯 + 프로젝트 카드 랜딩으로 전면 교체 |
| `globals.css` | 다크모드 CSS 변수, smooth scroll, 글로벌 타이포그래피 |
| `resume/page.tsx` | 핵심 페이지 — SPEC.md의 경력 5개사 + 학력 + 스킬을 타임라인으로 표현 |
| `career/page.tsx` | 경력기술서 상세 — RESUME_DATA.md의 문제→가설→액션→성과→인사이트 구조 |
| `contact/page.tsx` | 연락처 — 이메일, 전화, 소셜 링크 |
| `data/*.ts` | 콘텐츠를 컴포넌트에서 분리하여 CMS 전환 대비 |

---

## 2. 데이터 모델 (TypeScript 타입)

```typescript
// src/data/resume.ts

export interface Career {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string | '현재' };
  description?: string;
  projects: CareerProject[];
}

export interface CareerProject {
  id: string;
  name: string;          // e.g. "장사왕", "퀵셀"
  summary: string;       // 한줄 설명
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: { start: string; end: string };
}

export interface Skill {
  category: string;      // e.g. "Product", "Tech", "Data"
  items: string[];
}

// src/data/career.ts

export interface CareerDetail {
  id: string;            // CareerProject.id와 매칭
  companyName: string;
  projectName: string;
  problem: string;       // 문제 정의
  hypothesis?: string;   // 가설 (없는 프로젝트도 있음)
  actions: Action[];     // 액션 목록
  results: string[];     // 성과
  insights: string[];    // Insights / Growth
}

export interface Action {
  title: string;         // e.g. "아키텍처 설계 및 개발"
  details: string[];     // 세부 항목들
}

// src/data/projects.ts

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  status: 'active' | 'completed' | 'paused';
}

// src/data/site.ts

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
  };
  nav: NavItem[];
}

export interface NavItem {
  label: string;
  href: string;
}
```

### 데이터 포함 범위

경력 데이터 (5개사):
1. **(주)뭉클랩** — PO, 선임연구원 (2025.12~2026.03): 장사왕
2. **헤바** — CEO / Product Builder (2025.03~현재): Corti, Popilot, Agent Earth, 몰디브매치, 내마음속씨앗, 외주
3. **비엘큐** — BA / PO (2020.11~2024.07): 퀵셀, 테스트밸리
4. **큐브인텔리전스** — 서비스기획 (2017.11~2020.10): 파파택시, CubeBox, ICO
5. **딜리버리러쉬** — 서비스기획 (2016.12~2018.07): 퀵퀵, 원룸이사

경력기술서 상세 (RESUME_DATA.md):
- 뭉클랩: 장사왕 (프로세스 체계화, AI 워크플로우)
- 헤바: Corti, Popilot, Agent Earth (+ 기존 몰디브매치, 내마음속씨앗)
- 비엘큐, 큐브인텔리전스, 딜리버리러쉬: SPEC.md에 언급되어 있으므로 기존 PDF 기반 데이터 필요 → **빌더에게 내용 요청하거나 placeholder로 처리**

---

## 3. 컴포넌트 구조 & 의존관계

```
layout.tsx
├── Header (layout/Header.tsx)
│   ├── Nav links (data/site.ts → nav[])
│   ├── ThemeToggle (ui/ThemeToggle.tsx)
│   └── MobileMenu (layout/MobileMenu.tsx)
├── ScrollProgress (ui/ScrollProgress.tsx)
├── PageTransition (layout/PageTransition.tsx)
│   └── {children} ← 각 page.tsx
└── Footer (layout/Footer.tsx)

/ (page.tsx)
├── HeroSection (landing/HeroSection.tsx)
│   └── AnimatedText (ui/AnimatedText.tsx)
├── StatsCounter (landing/StatsCounter.tsx)
│   └── useCountUp (lib/hooks/useCountUp.ts)
└── ProjectCards (landing/ProjectCards.tsx)
    └── data/projects.ts

/resume (resume/page.tsx)
├── Timeline (resume/Timeline.tsx)
│   └── TimelineItem × N (resume/TimelineItem.tsx)
│       └── Section (ui/Section.tsx)
├── SkillCloud (resume/SkillCloud.tsx)
│   └── Tag × N (ui/Tag.tsx)
└── Education (resume/Education.tsx)
    └── data/resume.ts

/career (career/page.tsx)
├── CompanySection × N (career/CompanySection.tsx)
│   └── ProjectCard × N (career/ProjectCard.tsx)
│       ├── InsightBlock (career/InsightBlock.tsx)
│       └── data/career.ts
└── Section (ui/Section.tsx)

/contact (contact/page.tsx)
└── data/site.ts → contact
```

### 컴포넌트 설계 원칙

1. **데이터와 표현 분리**: `src/data/`의 타입 객체를 props로 받음. 컴포넌트 내 하드코딩 금지.
2. **클라이언트/서버 경계 명확히**:
   - 서버 컴포넌트(기본): 페이지(`page.tsx`), 레이아웃, 데이터 로딩
   - 클라이언트 컴포넌트(`'use client'`): 애니메이션 필요한 것만 — `HeroSection`, `Timeline`, `TimelineItem`, `SkillCloud`, `ProjectCard`, `StatsCounter`, `ThemeToggle`, `MobileMenu`, `PageTransition`, `ScrollProgress`
3. **재사용성**: `Section`, `AnimatedText`, `Tag`는 여러 페이지에서 공용

---

## 4. 페이지별 구현 상세

### 4.1 랜딩 (`/`)

**히어로 섹션**
- 전체 viewport 높이 (100vh)
- 중앙 정렬: 이름 "송윤재", 부제 "문제를 구조화하고, 검증가능한 제품을 만드는 Product Builder"
- 프로필 이미지: 원형, placeholder (gradient avatar)
- **스크롤 애니메이션**:
  - Framer Motion `useScroll` + `useTransform`으로 구현
  - 스크롤 시 텍스트 `scale: 1 → 1.5`, `opacity: 1 → 0`
  - 배경 parallax: `translateY` 반비례
- CTA 버튼 3개: 이력서 보기(`/resume`), 경력기술서(`/career`), 연락하기(`/contact`)

**스탯 카운터 섹션**
- 3~4개 숫자: 경력 연수(9+), 프로젝트 수(15+), 출시 제품 수 등
- `useCountUp` 훅: IntersectionObserver 기반 viewport 진입 시 0→목표값 카운트
- GSAP `gsap.to()` 또는 Framer Motion `animate`

**프로젝트 카드 섹션 (헤바 유니버스)**
- 2×2 그리드 (모바일 1열)
- 내마음속씨앗, 몰디브매치, Corti, Agent Earth
- **스크롤 애니메이션**: `perspective(1000px) rotateY()` + `translateZ()` → 카드가 3D로 등장
- hover: scale 1.02, shadow 강화

### 4.2 이력서 (`/resume`)

**인터랙티브 타임라인**
- 세로 타임라인 라인 (좌측 또는 중앙)
- 각 `TimelineItem`:
  - 회사명, 역할, 기간
  - 소속 프로젝트 리스트 (클릭 시 `/career#project-id`로 이동 가능)
  - **스크롤 애니메이션**: GSAP ScrollTrigger
    - 뷰포트 진입 시: `scale: 0.8 → 1`, `opacity: 0 → 1`, `translateY: 50px → 0`
    - 뷰포트 이탈 시: `scale: 1 → 0.9`, `opacity: 1 → 0.5`
    - "지나간 경력은 줌아웃되고, 현재 보고있는 경력이 줌인" 효과
- 경력 순서: 최신→과거 (위→아래)

**스킬 클라우드**
- 카테고리별 그룹: Product, Tech, Data, Tools
- 각 태그가 스크롤에 따라 stagger 방식으로 pop-in (`scale: 0 → 1`, `opacity: 0 → 1`)
- Framer Motion `staggerChildren` 활용

**학력**
- 심플한 카드 2개 (석사, 학사)
- fade-up 애니메이션

### 4.3 경력기술서 (`/career`)

**회사별 섹션**
- 각 회사가 하나의 `CompanySection`: 회사명, 역할, 기간을 헤더로
- 내부에 `ProjectCard` 여러 개

**프로젝트 카드 (펼치기/접기)**
- 기본 상태: 프로젝트명 + 한줄 요약만 표시
- 펼치면: 문제정의 → 가설 → 액션 → 성과 → Insight 전체 표시
- Framer Motion `AnimatePresence` + `layout` 애니메이션으로 부드러운 펼치기
- **스크롤 애니메이션**: 카드 진입 시 `translateX: -30px → 0`, `opacity: 0 → 1`

**인사이트 블록**
- 별도 스타일링: 인용문 느낌 (좌측 border accent, 이탤릭)

### 4.4 연락처 (`/contact`)

- 미니멀 레이아웃
- 이메일: `iamyoonjae@gmail.com` (클릭 → mailto)
- 전화: `010-3141-9940` (클릭 → tel)
- GitHub, LinkedIn 아이콘 링크 (있으면)
- 간단한 fade-in 애니메이션

---

## 5. 다크/라이트 모드 구현

**전략**: CSS 변수 + `class` 기반 토글 (Tailwind `darkMode: 'class'`)

- `useTheme` 훅:
  1. `localStorage`에서 사용자 선호 읽기
  2. 없으면 `prefers-color-scheme` 미디어 쿼리 폴백
  3. `<html>` 태그에 `class="dark"` 토글
  4. hydration mismatch 방지: 초기 렌더 시 `suppressHydrationWarning` + script 삽입

- **주의**: Tailwind v4는 `@theme` 디렉티브 사용. `darkMode` 설정이 v3와 다름.
  - v4에서는 CSS 기반 `@media (prefers-color-scheme: dark)` 가 기본
  - class 기반 토글을 위해 `globals.css`에서 `.dark` 선택자로 CSS 변수 재정의
  - 또는 `next-themes` 라이브러리 도입 검토 (hydration 문제 해결 기성품)

**추가 의존성 후보**: `next-themes` (다크모드 hydration 처리 검증된 솔루션)

---

## 6. 스크롤 애니메이션 전략

### GSAP vs Framer Motion 역할 분리

| 용도 | 라이브러리 | 이유 |
|------|-----------|------|
| 스크롤 기반 줌인/줌아웃 (Timeline) | GSAP + ScrollTrigger | `scrub`, `pin`, `snap` 등 세밀한 스크롤 제어에 강점 |
| 요소 등장 애니메이션 (fade-up, pop-in) | Framer Motion | `whileInView`, `staggerChildren` 등 React 친화적 |
| 페이지 전환 | Framer Motion | `AnimatePresence` + Next.js App Router 통합 |
| 숫자 카운트업 | Framer Motion `animate` | 간단한 값 보간 |
| 카드 3D 등장 | Framer Motion | `useScroll` + `useTransform`으로 충분 |

### GSAP ScrollTrigger 등록 방법

```typescript
// 컴포넌트 내에서
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// useGSAP(() => { ... }, { scope: containerRef });
```

**주의**: GSAP ScrollTrigger는 GSAP 3.x 무료 버전에 포함. 단, `gsap` npm 패키지에서 직접 import 가능.

---

## 7. 추가 의존성

| 패키지 | 용도 | 필수 여부 |
|--------|------|----------|
| `next-themes` | 다크모드 hydration-safe 토글 | 권장 (직접 구현 대비 안정성) |
| `clsx` | className 조건부 병합 | 권장 (작지만 편리) |

**설치하지 않는 것**: 아이콘 라이브러리 — SVG 인라인 또는 Heroicons CDN으로 최소화. 무거운 UI 라이브러리(Radix, shadcn 등) 불필요 — 커스텀 컴포넌트로 충분.

---

## 8. 구현 순서 (스프린트)

### Sprint 1: 기반 설정 + 데이터
1. `src/data/site.ts` — 사이트 설정, 네비게이션
2. `src/data/resume.ts` — 경력/학력/스킬 데이터 입력
3. `src/data/career.ts` — 경력기술서 상세 데이터 입력
4. `src/data/projects.ts` — 프로젝트 카드 데이터
5. `src/lib/utils/cn.ts` — className 유틸
6. `src/styles/fonts.ts` — 한글 폰트 설정
7. `globals.css` 수정 — 다크모드 변수, smooth scroll
8. `next-themes`, `clsx` 설치

### Sprint 2: 레이아웃 + 공통 컴포넌트
1. `layout.tsx` — 루트 레이아웃 재작성 (ThemeProvider, 폰트, 메타데이터)
2. `Header.tsx` + `MobileMenu.tsx` — 네비게이션
3. `Footer.tsx` — 푸터
4. `ThemeToggle.tsx` — 다크모드 토글
5. `ScrollProgress.tsx` — 스크롤 진행률
6. `Section.tsx`, `AnimatedText.tsx`, `Tag.tsx` — 공용 UI
7. `useTheme.ts` (next-themes 사용 시 불필요), `useScrollAnimation.ts`, `useCountUp.ts`

### Sprint 3: 랜딩 페이지
1. `HeroSection.tsx` — 스크롤 줌인 + parallax
2. `StatsCounter.tsx` — 카운트업
3. `ProjectCards.tsx` — 3D 카드
4. `page.tsx` (/) — 조립
5. `PageTransition.tsx` — 페이지 전환

### Sprint 4: 이력서 페이지
1. `Timeline.tsx` + `TimelineItem.tsx` — GSAP ScrollTrigger 줌인/줌아웃
2. `SkillCloud.tsx` — 태그 pop-in
3. `Education.tsx` — 학력
4. `resume/page.tsx` — 조립

### Sprint 5: 경력기술서 + 연락처
1. `CompanySection.tsx` + `ProjectCard.tsx` + `InsightBlock.tsx`
2. `career/page.tsx` — 조립
3. `contact/page.tsx` — 연락처

### Sprint 6: 통합 + 마무리
1. 전체 빌드 확인 (`npm run build`)
2. 반응형 검수 (모바일, 태블릿, 데스크톱)
3. 다크/라이트 모드 전환 검수
4. 애니메이션 성능 검수 (60fps 유지)
5. SEO 메타데이터 확인
6. Vercel 배포 테스트

---

## 9. 테스트 전략

### 빌드 테스트 (필수)
- 매 Sprint 완료 시 `npm run build` 통과 확인
- TypeScript strict 모드 — 타입 에러 0

### 수동 검증 체크리스트
- [ ] 모든 페이지 정상 렌더링 (/, /resume, /career, /contact)
- [ ] 다크/라이트 모드 전환 정상
- [ ] 모바일(375px), 태블릿(768px), 데스크톱(1280px) 레이아웃
- [ ] 스크롤 애니메이션 60fps 유지 (Chrome DevTools Performance)
- [ ] 네비게이션 링크 정상 동작
- [ ] `/career` 프로젝트 카드 펼치기/접기
- [ ] hydration mismatch 경고 없음 (console)
- [ ] 404 없는 이미지/리소스

### Lint
- `npm run lint` — ESLint 통과

---

## 10. 리스크 + 대응

| # | 리스크 | 영향 | 대응 |
|---|--------|------|------|
| 1 | **GSAP ScrollTrigger + Next.js SSR 충돌** — ScrollTrigger는 DOM에 의존하므로 서버 사이드에서 에러 발생 가능 | 빌드 실패 | `'use client'` 디렉티브 필수. `useGSAP` 훅 내에서만 사용. dynamic import + `ssr: false` 폴백 준비 |
| 2 | **Tailwind v4 다크모드 class 기반 토글** — v4는 CSS-first 설계라 v3의 `darkMode: 'class'` 설정 방식이 다름 | 다크모드 미작동 | `next-themes`가 v4와 호환되는지 사전 검증. 미호환 시 CSS `@media` 기반 + 수동 `.dark` 클래스 토글로 구현 |
| 3 | **Framer Motion + React 19 호환성** — framer-motion 12.x + React 19.x 조합이 최신이라 이슈 가능 | 런타임 에러 | 이미 설치된 버전(12.35.0 + React 19.2.3) 조합을 검증. 문제 시 `motion/react` import path 사용 (framer-motion v12 공식 지원) |
| 4 | **Next.js 16 + App Router 페이지 전환** — `AnimatePresence`가 App Router의 레이아웃 시스템과 완벽 호환 안 될 수 있음 | 페이지 전환 애니메이션 미작동 | 복잡한 전환 대신 `whileInView` 기반 섹션 등장 애니메이션에 집중. 페이지 전환은 단순 fade로 최소화 |
| 5 | **비엘큐/큐브인텔리전스/딜리버리러쉬 경력기술서 상세 데이터 부재** — RESUME_DATA.md에 뭉클랩+헤바만 있음 | `/career` 페이지 불완전 | SPEC.md의 프로젝트명 기반으로 placeholder 구조 생성. 이후 데이터 추가 가능하도록 `career.ts` 설계. 빌더에게 데이터 요청 필요 |
| 6 | **한글 폰트 로딩 지연** — 한글 웹폰트(Pretendard, Noto Sans KR)는 파일 사이즈가 큼 | FCP/LCP 저하 | `next/font/google`로 Noto Sans KR subset 로딩. 또는 `next/font/local`로 Pretendard Variable 사용. `font-display: swap` |
| 7 | **과도한 애니메이션으로 접근성/성능 저하** | UX 부정적 | `prefers-reduced-motion` 미디어 쿼리 존중. 애니메이션 비활성화 폴백 제공 |

### 롤백 전략

- Git 기반: 각 Sprint 완료 시 커밋. 문제 발생 시 해당 Sprint 전 커밋으로 `git reset`
- 컴포넌트 독립성: 각 컴포넌트가 독립적이므로, 특정 컴포넌트 문제 시 해당 파일만 롤백/제거 가능
- 애니메이션 폴백: GSAP/Framer Motion 관련 이슈 시, 애니메이션을 제거하고 정적 렌더링으로 전환 가능 (데이터와 레이아웃은 독립)

---

## 11. 인터페이스 변경

기존 코드가 create-next-app 기본 템플릿이므로, 보존할 인터페이스가 없음. 전면 신규 개발.

- `layout.tsx`의 `RootLayout` 시그니처 유지 (Next.js 규약)
- `page.tsx`의 default export 규약 유지 (Next.js App Router)
- 그 외 모든 컴포넌트/타입/훅은 신규 생성

---

## 12. 미래 확장 고려

1. **다국어 (i18n)**: 데이터 파일에 `locale` 키 추가 → Next.js middleware 기반 라우팅. 현재는 한국어 only이지만 데이터 구조에서 확장 가능하도록 문자열을 객체의 value로 관리
2. **CMS 연동**: `src/data/*.ts` → API 호출로 교체. 타입은 그대로 유지
3. **블로그**: `/blog` 라우트 추가 (MDX 기반). 현재 스코프 밖
4. **Analytics**: Vercel Analytics 또는 GA4. 배포 시 추가

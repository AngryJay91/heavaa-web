# Heavaa.com 검증 보고서

> 작성일: 2026-03-06 | 작성자: Quinn 🧪 (QA/검증)  
> 대상: `~/heavaa/dev/heavaa-web`  
> 결론: **REQUEST_CHANGES**

---

## 판정 요약

| 영역 | 상태 | 비고 |
|------|------|------|
| 파일 완전성 | ✅ PASS | useTheme.ts 생략은 허용 가능 |
| 데이터 완전성 | ⚠️ PARTIAL | ID 불일치, 임의 데이터 추가 발견 |
| 컴포넌트 품질 | 🔴 FAIL | Tailwind 변수 매핑 누락 — 스타일 미적용 |
| 스크롤 애니메이션 | ⚠️ PARTIAL | GSAP 미사용, Framer Motion 대체 |
| 잠재 문제 | 🔴 FAIL | HIGH 심각도 2건 포함 총 8건 발견 |
| 빌드 | ✅ PASS | TypeScript 에러 0, 빌드 성공 |

---

## 1. 파일 완전성

### plan.md 대비 실제 파일 1:1 매칭

| 계획 파일 | 존재 여부 |
|-----------|----------|
| `src/app/layout.tsx` | ✅ |
| `src/app/page.tsx` | ✅ |
| `src/app/globals.css` | ✅ |
| `src/app/resume/page.tsx` | ✅ |
| `src/app/career/page.tsx` | ✅ |
| `src/app/contact/page.tsx` | ✅ |
| `src/components/layout/Header.tsx` | ✅ |
| `src/components/layout/Footer.tsx` | ✅ |
| `src/components/layout/MobileMenu.tsx` | ✅ |
| `src/components/layout/PageTransition.tsx` | ✅ |
| `src/components/landing/HeroSection.tsx` | ✅ |
| `src/components/landing/StatsCounter.tsx` | ✅ |
| `src/components/landing/ProjectCards.tsx` | ✅ |
| `src/components/resume/Timeline.tsx` | ✅ |
| `src/components/resume/TimelineItem.tsx` | ✅ |
| `src/components/resume/SkillCloud.tsx` | ✅ |
| `src/components/resume/Education.tsx` | ✅ |
| `src/components/career/CompanySection.tsx` | ✅ |
| `src/components/career/ProjectCard.tsx` | ✅ |
| `src/components/career/InsightBlock.tsx` | ✅ |
| `src/components/ui/ThemeToggle.tsx` | ✅ |
| `src/components/ui/ScrollProgress.tsx` | ✅ |
| `src/components/ui/AnimatedText.tsx` | ✅ |
| `src/components/ui/Section.tsx` | ✅ |
| `src/components/ui/Tag.tsx` | ✅ |
| `src/data/resume.ts` | ✅ |
| `src/data/career.ts` | ✅ |
| `src/data/projects.ts` | ✅ |
| `src/data/site.ts` | ✅ |
| `src/lib/hooks/useScrollAnimation.ts` | ✅ |
| `src/lib/hooks/useCountUp.ts` | ✅ |
| `src/lib/hooks/useTheme.ts` | ✅ 생략 허용 (next-themes 사용으로 불필요, plan.md §5 명시) |
| `src/lib/utils/cn.ts` | ✅ |
| `src/lib/utils/animations.ts` | ✅ |
| `src/styles/fonts.ts` | ✅ |

**불필요한 파일**: 없음.

---

## 2. 데이터 완전성

### 2-1. resume.ts — 5개 회사 경력

| 회사 | ID | 포함 여부 |
|------|-----|----------|
| (주)뭉클랩 | `moongklab` | ✅ |
| 헤바 (Heavaa) | `heavaa` | ✅ |
| 주식회사 비엘큐 | `blq` | ✅ |
| 주식회사 큐브인텔리전스 | `cube` | ✅ |
| 주식회사 딜리버리러쉬 | `delivery-rush` | ✅ |

### 2-2. resume.ts — 프로젝트 목록 정확성

| 회사 | 프로젝트 ID | 이름 | 포함 |
|------|------------|------|------|
| 뭉클랩 | `jangsawang` | 장사왕 | ✅ |
| 헤바 | `corti` | Corti | ✅ |
| 헤바 | `popilot` | Popilot | ✅ |
| 헤바 | `agent-earth` | Agent Earth | ✅ |
| 헤바 | `maldives-match` | 몰디브매치 | ✅ |
| 헤바 | `inner-seed` | 내마음속씨앗 | ✅ |
| 비엘큐 | `quicksel` | 퀵셀 | ✅ (1개로 통합, 경매·AI 구분 없음) |
| 비엘큐 | `testvalley` | 테스트밸리 | ✅ (1개로 통합) |
| 큐브 | `papa-taxi` | 파파택시 | ✅ |
| 큐브 | `cubebox` | CubeBox | ✅ |
| 큐브 | `ico` | ICO | ✅ |
| 딜리버리러쉬 | `quickquick` | 퀵퀵 | ✅ |
| 딜리버리러쉬 | `one-room-move` | 원룸이사 | ✅ |

### 2-3. career.ts — 프로젝트 상세 데이터 (RESUME_DATA.md 대조)

| 프로젝트 | 문제정의 | 가설 | 액션 | 성과 | 인사이트 | 비고 |
|----------|---------|------|------|------|---------|------|
| 장사왕 | ✅ | — (원본 없음) | ✅ | ✅ | ✅ | |
| Corti | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Popilot | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Agent Earth | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 퀵셀 경매 | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 퀵셀 AI매입 | ✅ | ✅ | ✅ | ✅ | ⚠️ | 인사이트에 원본 없는 항목 추가 |
| 테스트밸리 BM전환 | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 테스트밸리 DW | ✅ | ✅ | ✅ | ✅ | ⚠️ | 인사이트 2개 항목이 원본에 없음 |
| 큐브인텔리전스 | ✅ | ⚠️ | ✅ | ✅ | ✅ | `cube-projects` 1개로 병합됨 |
| 딜리버리러쉬 | ✅ | ⚠️ | ✅ | ✅ | ✅ | `delivery-projects` 1개로 병합됨 |

**⚠️ 임의 데이터 추가 발견:**

- `quicksel-ai` → insights에 RESUME_DATA.md 원본에 없는 항목 추가:
  > `'사용자 입력 부담 감소가 전환율 개선의 핵심 레버임을 확인'`
- `testvalley-dw` → insights에 RESUME_DATA.md 원본에 없는 2개 항목 추가:
  > `'Kafka + Airflow를 통해 대규모 데이터 파이프라인 설계 역량 확보'`  
  > `'데이터 웨어하우스는 기술이 아니라 "팀의 언어 통일"이 핵심임을 체감'`

### 2-4. site.ts — 연락처 정확성

| 항목 | 기대값 | 실제값 | 상태 |
|------|--------|--------|------|
| 이메일 | `iamyoonjae@gmail.com` | `iamyoonjae@gmail.com` | ✅ |
| 전화 | `010-3141-9940` | `010-3141-9940` | ✅ |

---

## 3. 컴포넌트 품질

### 3-1. 'use client' 디렉티브

**적용 컴포넌트 (총 18개):**
- layout: Header, MobileMenu, PageTransition ✅
- landing: HeroSection, StatsCounter, ProjectCards ✅
- resume: Timeline, TimelineItem, SkillCloud, Education ✅
- career: CompanySection, ProjectCard ✅
- ui: ThemeToggle, ScrollProgress, AnimatedText, Section ✅
- hooks: useScrollAnimation, useCountUp ✅

서버 컴포넌트: page.tsx들, layout.tsx, InsightBlock, Footer, Tag, cn.ts, animations.ts, data/*.ts

**판단**: 'use client'는 Framer Motion을 사용하는 컴포넌트에 올바르게 적용됨. ✅

### 3-2. TypeScript 타입 안전성

- `any` 사용: **0건** ✅
- 모든 props에 인터페이스 정의 ✅
- 빌드 시 TypeScript 에러 0 ✅

### 3-3. GSAP ScrollTrigger

- **계획**: Timeline/TimelineItem에 GSAP ScrollTrigger 사용
- **실제**: GSAP + @gsap/react 설치되어 있으나 **단 한 곳에서도 import되지 않음**
- TimelineItem은 Framer Motion `useScroll + useTransform`으로 구현됨
- **기능적으로는 유사하나 spec 불일치**

### 3-4. next-themes 다크모드

- layout.tsx에서 `ThemeProvider attribute="class" defaultTheme="system" enableSystem` 적용 ✅
- globals.css에 `.dark` 선택자로 CSS 변수 재정의 ✅
- `html` 태그에 `suppressHydrationWarning` 적용 ✅

---

## 4. 스크롤 애니메이션 구현

| 항목 | 계획 | 실제 구현 | 상태 |
|------|------|----------|------|
| 히어로 줌인/패럴랙스 | Framer Motion useScroll+useTransform | useScroll + useTransform (scale 1→1.15, opacity 1→0, 배경 translateY) | ✅ |
| 타임라인 줌인/줌아웃 | GSAP ScrollTrigger | Framer Motion useScroll+useTransform (scale 0.88→1→0.93) | ⚠️ 기능 동일, 라이브러리 다름 |
| 스킬 stagger pop-in | Framer Motion staggerChildren | staggerChildren 0.08s + tagPopIn (scale 0→1) | ✅ |
| 프로젝트카드 3D 등장 | perspective transform | rotateX + transformPerspective 1000 + y 60→0 | ✅ |

---

## 5. 발견된 잠재 문제 (8건)

---

### 🔴 [HIGH] #1 — Tailwind CSS 변수-유틸리티 매핑 누락

**위치**: `globals.css`, `ProjectCards.tsx`, `SkillCloud.tsx`, `Education.tsx`

**현상**: `globals.css`에 `@import "tailwindcss"` 만 있고 `@theme {}` 선언이 없음.  
아래 Tailwind 유틸리티 클래스들이 CSS 변수와 연결되지 않아 **스타일이 전혀 적용되지 않음**:

```
bg-surface, bg-surface-2, text-muted, text-foreground, text-accent,
border-border, hover:border-accent, hover:text-accent, hover:bg-accent-light
```

**영향**: ProjectCards (전체 카드 배경/텍스트 색상), SkillCloud (태그 스타일), Education (학력 카드) — 3개 컴포넌트에서 색상/배경이 누락된 채로 렌더링됨. 빌드는 통과하지만 시각적으로 망가진 UI.

**수정 방법**:
```css
/* globals.css에 추가 */
@theme {
  --color-surface: var(--card);
  --color-muted: var(--muted);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-light: var(--accent-light);
  --color-border: var(--border);
}
```
또는 해당 컴포넌트에서 `bg-surface` → `bg-[var(--card)]` 방식으로 통일.

---

### 🔴 [HIGH] #2 — resume.ts ↔ career.ts Project ID 불일치 (딥링크 브레이크)

**위치**: `src/data/resume.ts`, `src/data/career.ts`

**현상**: TimelineItem은 `/career#project-id`로 딥링크를 생성하는데, ID가 일치하지 않음:

| resume.ts ID | career.ts ID | 링크 동작 |
|-------------|-------------|----------|
| `papa-taxi` | `cube-projects` (통합) | ❌ 404 스크롤 |
| `cubebox` | `cube-projects` (통합) | ❌ 404 스크롤 |
| `ico` | `cube-projects` (통합) | ❌ 404 스크롤 |
| `quickquick` | `delivery-projects` (통합) | ❌ 404 스크롤 |
| `one-room-move` | `delivery-projects` (통합) | ❌ 404 스크롤 |
| `quicksel` | `quicksel-auction` + `quicksel-ai` (분리) | ❌ 부분 불일치 |
| `testvalley` | `testvalley-bm` + `testvalley-dw` (분리) | ❌ 부분 불일치 |

**수정 방법**: resume.ts의 project ID를 career.ts ID와 맞추거나, career.ts의 ProjectCard `id` prop을 resume.ts ID로 연결.

---

### 🟡 [MEDIUM] #3 — GSAP 설치 후 미사용 (번들 사이즈 낭비)

**위치**: `package.json`

**현상**: `gsap@3.14.2` + `@gsap/react@2.1.2` 설치됨 (약 150KB+ minified gzip), 어떤 컴포넌트에서도 import 없음.  
Timeline GSAP ScrollTrigger 구현이 Framer Motion으로 대체됨.

**수정 방법**: 두 가지 중 선택:
- (A) GSAP 제거: `npm uninstall gsap @gsap/react` → 번들 경량화
- (B) GSAP 활용: TimelineItem을 plan.md 원안대로 GSAP ScrollTrigger로 재구현

---

### 🟡 [MEDIUM] #4 — career.ts 임의 데이터 추가 (RESUME_DATA.md와 불일치)

**위치**: `src/data/career.ts`

- `quicksel-ai.insights[1]`: `'사용자 입력 부담 감소가 전환율 개선의 핵심 레버임을 확인'` → 원본 없음
- `testvalley-dw.insights[0]`: `'Kafka + Airflow를 통해 대규모 데이터 파이프라인 설계 역량 확보'` → 원본 없음
- `testvalley-dw.insights[1]`: `'데이터 웨어하우스는 기술이 아니라 "팀의 언어 통일"이 핵심임을 체감'` → 원본 없음

이력서 데이터는 정확성이 최우선. 원본에 없는 내용은 작성자 확인 없이 추가 불가.

---

### 🟡 [MEDIUM] #5 — 접근성 미흡 (키보드/스크린리더)

**위치**: 여러 컴포넌트

- `ProjectCard` 버튼: `aria-expanded={isOpen}`만 있고 `aria-label` 없음 → 스크린리더가 "버튼, 확장됨 아니오"만 읽음
- SVG 아이콘 (`<svg>` in ProjectCard, ThemeToggle)에 `aria-hidden="true"` 미적용 → 스크린리더가 빈 SVG를 읽음
- `MobileMenu` 닫기 버튼에 aria-label 불완전
- 타임라인 링크 (`href="/career#project-id"`) 앵커가 실제 DOM에 없어 스크린리더 포커스 점프 실패 (Issue #2 연관)

---

### 🟡 [MEDIUM] #6 — `bg-surface-2` CSS 변수 미정의

**위치**: `Education.tsx:26`, `globals.css`

```tsx
<span className="text-xs text-muted bg-surface-2 ...">
```

`--surface-2` CSS 변수가 globals.css에 **정의되지 않음** (Issue #1의 파생 문제이기도 하나, 독립적으로도 빈 CSS 변수로 폴백 없음).

---

### 🟢 [LOW] #7 — HeroSection 중첩 useTransform 훅 패턴

**위치**: `HeroSection.tsx`

```tsx
// 스크롤 힌트에서 인라인 useTransform 호출
style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
```

`motion.div`의 `style` prop 내에서 직접 `useTransform`을 호출하는 것은 React hooks 규칙 위반 위험 소지가 있음 (조건부 렌더링과 함께 사용 시). 별도 변수로 분리 권장:

```tsx
const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
// ...
<motion.div style={{ opacity: scrollHintOpacity }}>
```

---

### 🟢 [LOW] #8 — Section.tsx가 모든 페이지 서브트리를 클라이언트 번들에 포함

**위치**: `Section.tsx`

`Section` 컴포넌트는 `'use client'`이고 `motion.section`을 사용함. 이 컴포넌트가 서버 컴포넌트 page.tsx에서 import되면, 해당 섹션의 모든 children도 클라이언트 번들에 포함됨 (React 클라이언트 경계 전파).  
성능 임계치는 아니나, 순수 정적 섹션은 서버 컴포넌트로 유지하는 것이 Next.js 최적화 원칙에 부합.

---

## 6. 데이터 누락 목록

| 항목 | 심각도 | 설명 |
|------|--------|------|
| `bg-surface`, `text-muted` 등 Tailwind 매핑 | 🔴 HIGH | 3개 컴포넌트 스타일 완전 누락 |
| resume.ts ↔ career.ts ID 불일치 | 🔴 HIGH | 5개 딥링크 브레이크 |
| testvalley-dw.insights (2개 미확인 항목) | 🟡 MEDIUM | 원본 RESUME_DATA.md에 없음 |
| quicksel-ai.insights (1개 미확인 항목) | 🟡 MEDIUM | 원본 RESUME_DATA.md에 없음 |
| `--surface-2` CSS 변수 | 🟡 MEDIUM | Education.tsx에서 참조하나 미정의 |

---

## 7. 수정 우선순위

| 순위 | 수정 항목 | 예상 작업량 |
|------|----------|-----------|
| 1️⃣ | `globals.css`에 `@theme {}` 추가 (Tailwind 변수 매핑) | 15분 |
| 2️⃣ | resume.ts ↔ career.ts project ID 통일 + 딥링크 앵커 추가 | 30분 |
| 3️⃣ | 임의 추가된 insights 항목 윤재님 확인 후 제거 또는 유지 결정 | 확인 후 5분 |
| 4️⃣ | `bg-surface-2` → `bg-[var(--border)]` 등 대체 정의 | 5분 |
| 5️⃣ | GSAP 사용 여부 결정 (제거 또는 활용) | 결정 후 30~60분 |
| 6️⃣ | 접근성 aria 속성 보완 | 20분 |
| 7️⃣ | HeroSection useTransform 분리 | 5분 |

---

*Quinn 🧪 — 검증 완료. 위 HIGH 이슈 2건 수정 후 재검증 요청.*

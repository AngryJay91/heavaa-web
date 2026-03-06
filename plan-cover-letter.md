# 자기소개서 페이지 추가 — 구현 계획

> 작성일: 2026-03-06 | 작성자: Oscar (Plan)

---

## 0. 현재 상태

- 기존 자기소개서는 Notion 페이지 (https://www.heavaa.com/cover-letter)
- heavaa-web에는 `/cover-letter` 라우트 없음
- 자기소개서 원본 텍스트: 4개 섹션 (아래 참조)

---

## 1. 데이터 원본 (Notion에서 추출)

### 섹션 1: 문제를 구조화하고, 원인을 찾아 해결하고자 하는 Product Builder입니다
- 핵심: "사용자가 겪는 불편의 근본 원인은 무엇인가?" 질문 중심
- 사례: 내마음속씨앗 — 성경 읽기 어려움의 근본 원인 분석 → 팟캐스트 솔루션
- 포인트: 문제의 정의가 바뀌면 해결도 달라진다

### 섹션 2: 기술은 목적이 아니라, 검증을 빠르고 정확하게 하기 위한 도구입니다
- 핵심: 개발자가 아닌 Product Builder — 기술은 가설 검증 도구
- 사례: 몰디브매치 — 230개 리조트 데이터 → 6개 결정 요인 발견 → 가중치 추천
- 포인트: 기술은 사용자가 더 나은 결정을 할 수 있게 만드는 장치

### 섹션 3: 기능이 아니라 구조를 설계하고자 합니다
- 핵심: 시스템 단위 문제 재정의
- 사례: 비엘큐 테스트밸리/퀵셀 — 반품 구조의 모순 → 매입 구조로 전환
- 포인트: 기능이 아니라 시스템 단위로 문제를 재정의하고 설계

### 섹션 4: 문제를 해결하는 사람이 되고자 합니다
- 핵심: AI 제품의 성공 = 문제 정의 → 실험 설계 → 검증 정확도
- 포인트: 비즈니스 문제를 AI가 풀 수 있는 형태로 구조화하는 사람

---

## 2. 파일 변경 목록

### 신규 생성 (3개)
| 파일 | 설명 |
|------|------|
| `src/app/cover-letter/page.tsx` | 자기소개서 페이지 (서버 컴포넌트) |
| `src/components/cover-letter/CoverSection.tsx` | 각 섹션 렌더링 (클라이언트 — 스크롤 애니메이션) |
| `src/data/coverLetter.ts` | 자기소개서 텍스트 데이터 |

### 수정 (2개)
| 파일 | 변경 내용 |
|------|----------|
| `src/components/layout/Header.tsx` | 네비게이션에 '자기소개서' 링크 추가 |
| `src/components/layout/MobileMenu.tsx` | 모바일 메뉴에 '자기소개서' 링크 추가 |

---

## 3. 데이터 모델

```typescript
// src/data/coverLetter.ts
export interface CoverSection {
  id: string;
  heading: string;           // 섹션 제목 ([] 안의 텍스트)
  paragraphs: string[];      // 본문 문단들
}

export const coverSections: CoverSection[] = [
  // Notion 원본 텍스트 그대로 4개 섹션
];
```

---

## 4. 디자인 방향

- **레이아웃**: 깔끔한 장문 읽기 UX — max-w-3xl, 충분한 line-height
- **타이포그래피**: 섹션 제목은 h2 bold, 본문은 text-base/lg with text-[var(--muted)]
- **애니메이션**: 각 섹션 fadeUp on scroll (기존 Section 컴포넌트 활용 가능)
- **인터랙션**: 좌측에 섹션 네비게이션 (데스크톱), 스크롤 시 현재 섹션 하이라이트
- **반응형**: 모바일에서는 섹션 네비게이션 숨김, 순차 스크롤

---

## 5. 구현 스프린트

### Sprint 1: 데이터 + 페이지 라우트
1. `src/data/coverLetter.ts` — Notion 원본 텍스트 그대로 입력
2. `src/app/cover-letter/page.tsx` — 기본 페이지 구조
3. Header/MobileMenu에 링크 추가

### Sprint 2: CoverSection 컴포넌트 + 애니메이션
1. `src/components/cover-letter/CoverSection.tsx` — fadeUp 애니메이션
2. 섹션 간 구분선 또는 여백 처리
3. 데스크톱 섹션 네비게이션 (optional — 4개 섹션이라 없어도 됨)

### Sprint 3: 빌드 + 검증
1. `npm run build` 통과 확인
2. 텍스트 원본 대조 검증

---

## 6. 리스크

| 리스크 | 대응 |
|--------|------|
| 장문 텍스트 가독성 | 충분한 여백 + line-height 1.8 + 문단 간 spacing |
| 기존 페이지 스타일 불일치 | globals.css 변수 + 기존 Section/AnimatedText 재활용 |

---

## 7. 완료 조건
- [ ] `/cover-letter` 라우트에서 4개 섹션 전문 렌더링
- [ ] 네비게이션에 자기소개서 링크
- [ ] 텍스트가 Notion 원본과 100% 일치
- [ ] `npm run build` 통과
- [ ] 다크모드 정상 작동

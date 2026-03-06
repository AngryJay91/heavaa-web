# Heavaa.com — Interactive Resume & Portfolio

## 프로젝트 개요
송윤재(Jay)의 개인 이력서/경력기술서/포트폴리오를 인터랙티브 웹사이트로 만든다.
기존 Notion 기반 heavaa.com을 Next.js + Vercel로 전환.

## 기술 스택
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (애니메이션)
- Vercel 배포

## 디자인 방향
- **미니멀 + 프로페셔널** — Product Builder에 어울리는 깔끔한 디자인
- **다크/라이트 모드** 지원
- **한국어 기본** (추후 영어 전환 가능하도록 구조화)
- **모바일 퍼스트** 반응형

## 페이지 구조

### 1. 랜딩 (`/`)
- 히어로 섹션: 이름, 한줄 소개, 프로필 사진
- "문제를 구조화하고, 검증가능한 제품을 만드는 Product Builder"
- CTA: 이력서 보기, 경력기술서 보기, 연락하기
- 헤바 유니버스 섹션: 프로젝트 카드 (내마음속씨앗, 몰디브매치, Corti, Agent Earth)

### 2. 이력서 (`/resume`)
- 인터랙티브 타임라인 형태의 경력 표시
- 경력:
  - (주)뭉클랩 — PO, 선임연구원 (2025.12-2026.03)
    - [장사왕] 쿠팡, 네이버스마트스토어 셀러 순이익·광고 분석 SaaS
    - 스프린트 프로세스 체계화, AI 네이티브 워크플로우 실험
  - 헤바 — CEO / Product Builder (2025.03-현재)
    - [Corti] 팀 의사결정 자동 추출·검색 AI 플랫폼
    - [Popilot] PO/PM 멀티에이전트 시스템
    - [Agent Earth] AI 에이전트 소셜 플랫폼
    - [몰디브매치] 몰디브 리조트 추천
    - [내마음속씨앗] AI 성경 팟캐스트
    - 외주 프로젝트
  - 비엘큐 — BA / PO (2020.11-2024.07)
    - [퀵셀] 라이브 경매, AI 매입
    - [테스트밸리] BM 전환, 데이터 웨어하우스
  - 큐브인텔리전스 — 서비스기획 (2017.11-2020.10)
    - 파파 택시, CubeBox, ICO
  - 딜리버리러쉬 — 서비스기획 (2016.12-2018.07)
    - 퀵퀵, 원룸이사
- 학력: 성균관대 석사(빅데이터), 성균관대 학사(독문/국통)
- 스킬 섹션: 태그 클라우드 또는 카테고리별 정리

### 3. 경력기술서 (`/career`)
- 프로젝트별 상세 카드 (펼치기/접기)
- 각 프로젝트: 문제정의 → 가설 → 액션 → 성과 → Insight 구조
- RESUME_DATA.md 참고 (새 프로젝트 3개 포함)
- 기존 PDF 경력기술서의 비엘큐, 큐브인텔리전스, 딜리버리러쉬 내용도 포함

### 4. 연락처 (`/contact`)
- 이메일: iamyoonjae@gmail.com
- 전화: 010-3141-9940
- GitHub, LinkedIn 링크 (있으면)

## 데이터 구조
- 모든 경력/프로젝트 데이터를 `src/data/` 폴더에 TypeScript 객체로 관리
- 나중에 CMS 연동 가능하도록 구조화

## 인터랙티브 요소
- 스크롤 애니메이션 (Framer Motion)
- 경력 타임라인 호버/클릭 인터랙션
- 경력기술서 프로젝트 카드 아코디언
- 스킬 태그 애니메이션
- 부드러운 페이지 전환

## 연락처 정보
- 📧 iamyoonjae@gmail.com
- ☎️ 010-3141-9940

## 참고
- 기존 사이트: https://www.heavaa.com (Notion)
- 이력서 PDF: 프로젝트 내 RESUME_DATA.md 참조
- 프로필 사진은 placeholder로 처리 (나중에 교체)

## 중요
- `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir` 로 시작
- 완성 후 `npm run build`가 성공해야 함
- Vercel 배포 가능한 상태로 만들기

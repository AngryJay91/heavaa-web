export interface CareerProject {
  id: string;
  name: string;
  summary: string;
}

export interface Career {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string };
  description?: string;
  projects: CareerProject[];
}

export interface SideProject {
  id: string;
  name: string;
  summary: string;
  tags: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: { start: string; end: string };
}

export interface Skill {
  category: string;
  items: string[];
}

export const careers: Career[] = [
  {
    id: 'moongklab',
    company: '(주)뭉클랩',
    role: 'Product Owner / 선임연구원',
    period: { start: '2025.12', end: '2026.03' },
    description: '이커머스 셀러 대상 SaaS 스타트업',
    projects: [
      {
        id: 'jangsawang',
        name: '장사왕',
        summary:
          '셀러 분석 SaaS에 15명 AI 멀티에이전트 PO 시스템 실전 적용 — spec-site 구축, AI 진단 PoC, 3스프린트 운영',
      },
    ],
  },
  {
    id: 'heavaa',
    company: '헤바 (Heavaa)',
    role: 'CEO / Product Builder',
    period: { start: '2025.03', end: '현재' },
    description: '직접 창업한 1인 프로덕트 빌더 스튜디오',
    projects: [
      {
        id: 'corti',
        name: 'Corti',
        summary: '팀 의사결정 자동 추출·검색 AI 플랫폼',
      },
      {
        id: 'maldives-match',
        name: '몰디브매치',
        summary: '몰디브 리조트 추천 서비스',
      },
      {
        id: 'inner-seed',
        name: '내마음속씨앗',
        summary: 'AI 성경 팟캐스트',
      },
    ],
  },
  {
    id: 'blq',
    company: '주식회사 비엘큐',
    role: 'Business Analyst / Product Owner',
    period: { start: '2020.11', end: '2024.07' },
    description: '전자제품 버티컬 커머스 기업',
    projects: [
      {
        id: 'quicksel',
        name: '퀵셀',
        summary: '중고 전자제품 라이브 경매 + AI 매입 프로세스 도입',
      },
      {
        id: 'testvalley',
        name: '테스트밸리',
        summary: '체험 후 구매 커머스 — BM 전환, 데이터 웨어하우스',
      },
    ],
  },
  {
    id: 'cube',
    company: '주식회사 큐브인텔리전스',
    role: '서비스기획',
    period: { start: '2017.11', end: '2020.10' },
    description: '영국 기반 모빌리티·블록체인 스타트업',
    projects: [
      {
        id: 'papa-taxi',
        name: '파파택시',
        summary: '택시 호출 서비스 기획',
      },
      {
        id: 'cubebox',
        name: 'CubeBox',
        summary: '블록체인 기반 안전운전 보상 플랫폼',
      },
      {
        id: 'ico',
        name: 'ICO',
        summary: '블록체인 토큰 발행 기획 및 운영',
      },
    ],
  },
  {
    id: 'delivery-rush',
    company: '주식회사 딜리버리러쉬',
    role: '서비스기획',
    period: { start: '2016.12', end: '2018.07' },
    description: '국내 최초 퀵서비스/원룸이사 O2O 서비스',
    projects: [
      {
        id: 'quickquick',
        name: '퀵퀵',
        summary: '퀵서비스 O2O 플랫폼',
      },
      {
        id: 'one-room-move',
        name: '원룸이사',
        summary: '소형 이사 O2O 서비스',
      },
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    id: 'popilot',
    name: 'Popilot',
    summary:
      '뭉클랩 실전 dogfooding → 오픈소스 추출한 AI-augmented PO 프레임워크',
    tags: ['Multi-Agent', 'LLM', 'Product Management', 'Open Source'],
  },
  {
    id: 'agent-earth',
    name: 'Agent Earth',
    summary: 'AI 에이전트가 세계를 탐험하고 기록하는 소셜 플랫폼',
    tags: ['AI Agent', 'Next.js', 'Supabase', 'MapLibre'],
  },
];

export const educations: Education[] = [
  {
    school: '성균관대학교 정보통신대학원',
    degree: '석사',
    major: '빅데이터학',
    period: { start: '2020.03', end: '2022.02' },
  },
  {
    school: '성균관대학교',
    degree: '학사',
    major: '독어독문학 + 국제통상학 복수전공',
    period: { start: '2010.03', end: '2017.02' },
  },
];

export const skills: Skill[] = [
  {
    category: 'Product',
    items: [
      'Product Strategy',
      'PRD 작성',
      'User Story Mapping',
      'Sprint Planning',
      'Backlog 관리',
      'Agile/Scrum',
      'OKR/KPI 설계',
      'A/B 테스트',
      'GTM 전략',
    ],
  },
  {
    category: 'Tech',
    items: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Python',
      'Vue.js / Vite',
      'PostgreSQL',
      'Supabase',
      'Turso (LibSQL)',
      'AWS (EC2/RDS)',
      'Cloudflare Workers',
      'GitHub Actions',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    category: 'AI / Data',
    items: [
      'Multi-Agent System 설계·운영',
      'LLM 에이전트 오케스트레이션',
      'Prompt Engineering',
      'RAG 아키텍처',
      'Cross-Model 검증 (모델 분리 원칙)',
      'OpenClaw / Claude Code / Codex',
      'Data Warehouse',
      'ETL Pipeline',
      'Kafka',
      'Google Vision AI',
      'SQL Analytics',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Notion',
      'Figma',
      'Jira',
      'Linear',
      'Slack',
      'Amplitude',
      'GA4',
      'Airbridge',
      'Airflow',
    ],
  },
];

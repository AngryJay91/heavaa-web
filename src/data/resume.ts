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

export interface EducationExtra {
  label: string;
  value: string;
}

// 커리어 하이라이트 (정본: RESUME_CORE.md 2026-09-07)
export const highlights: string[] = [
  '문제를 구조화해 바라봅니다. AI 에이전트에게 무엇을 만들어 보자고 하면 바로 코드부터 작성하는 문제, 그리고 동작하는지 여부만 확인하고 다 했다고 선언하는 문제를 발견했고, 이것은 프롬프트의 문제라기보다 LLM 동작 방식의 한계라고 이해했습니다. 그래서 워크플로우를 에이전트에게 주입하고, 워크플로우를 지키면서 동작하는 제품이 아니라 사용자의 문제가 제품으로 해결되었는지를 확인하는 제품(Sprintable)을 만들고 있습니다.',
  '도입보다 왜를 먼저 묻습니다. 쿠팡과 스마트스토어 셀러의 매출과 순이익을 분석하는 SaaS를 만들면서, 셀러의 문제는 데이터를 해석하지 못하는 것이라고 봤습니다. 그들의 업의 본질은 물건을 싸게 사서 마진을 남겨 파는 것인데, 당시 제품은 많은 데이터를 나열한 대시보드에 불과했습니다. 필요한 것은 이 데이터에 어떤 문제가 있는지를 빠르게 보여주는 것이지 화려하게 나열하는 것이 아니라고 판단해, AI를 바로 넣는 대신 문제점을 도출해 알려주는 룰베이스 엔진을 먼저 기획해 내보내 셀러의 반응을 테스트했고, 그 다음에 셀러의 데이터를 AI가 분석해 문제를 알려주고 바르게 성장하도록 돕는 제품을 설계해 출시했습니다.',
  '사업 모델도 같은 방식으로 다룹니다. 전자제품을 먼저 써 보고 사는 서비스에서 후불 결제를 노려 써 보고 돌려주지 않거나 갚지 않는 손실이 커지자, 단속을 강화하는 대신 전액을 먼저 결제하고 반납하면 환불하는 구조로 바꿔 서비스 중단 없이 어뷰징을 없애면서 객단가를 2.4배로 올렸습니다. 그 뒤 분리 출시한 중고 전자제품 커머스에서 신규 입고에 비해 재고 회전이 느려지고 도매 단가 경쟁으로 마진이 줄어들 때는, 앱 안에서 정해진 시간에 여러 구매자가 입찰하는 라이브 경매를 설계해 재고를 시장가 근처에서 빠르게 소화하게 했고 재고 회전율이 140% 올랐습니다. 이런 실험을 숫자로 확인할 수 있게 팀의 지표 체계도 직접 세웠습니다.',
  '직접 만들고 운영합니다. 백엔드, 앱, 데이터베이스 마이그레이션, CI와 배포까지 제 손으로 하며 개발과 데이터 팀과 코드 수준에서 이야기합니다.',
];

export const careers: Career[] = [
  {
    id: 'heavaa',
    company: '헤바 (Heavaa)',
    role: '대표 · 프로덕트 총괄',
    period: { start: '2025.03', end: '현재' },
    description:
      '1인 프로덕트 스튜디오입니다. 문제를 발견하면 AI 에이전트 팀과 함께 직접 만들어 출시합니다.',
    projects: [
      {
        id: 'agent-team',
        name: '에이전트 팀 다섯 게이트 운영',
        summary:
          '기획, 개발, QA 역할을 나눈 에이전트 팀을 계획에서 머지까지 다섯 게이트로 운영해, 제품 개발 전 과정을 한 사람이 완주하는 체계로 만들었습니다. 제 제품들을 매일 이 위에서 개발합니다.',
      },
      {
        id: 'lingrow',
        name: 'Lingrow',
        summary:
          '아이가 저처럼 외국어로 영어를 배우는 게 아니라 바이링구얼에 가깝게 자연스럽게 익숙해지길 바랐지만, 저 자신이 영어를 외국어로 배운 사람이라 아이에게 어떤 영어를 들려줘야 하는지 몰랐습니다. 그래서 세계관과 이야기로 가르치는 대신 영어권 가정에서 실제로 들리는 말과 소리를 백색소음처럼 흘려보내는 실시간 라디오 Lingrow를 만들고 있습니다. 골라서 틀어주는 앱이 아니라 시간대와 상황에 따라 편성이 흘러가는 가상 방송국 구조를 설계했고, 생성 비용이 통제 밖으로 나가지 않도록 지출 상한과 자동 차단을 갖춘 비용 거버넌스를 세웠습니다.',
      },
      {
        id: 'inner-seed',
        name: '내마음속씨앗',
        summary:
          '읽고 싶은 마음은 있는데 시간을 내지 못하는 사람을 위해 성경을 읽는 것에서 듣는 것으로 다시 설계한 오디오 성경 앱 내마음속씨앗을 출시했습니다. 장과 절 대신 지금 내 상황에 맞는 테마 단위로 말씀을 다시 구조화했습니다.',
      },
      {
        id: 'corti',
        name: 'Corti',
        summary:
          '일은 점점 AI가 하는데 팀원 각자의 의사결정 기록은 개발자는 Git과 Slack에, 기획자는 Linear와 Notion에, 디자이너는 Figma에 흩어져 있는 문제를 한 곳에 모으려고 Corti(corti.wiki)를 만들었습니다. 지금은 운영하지 않지만, 이 문제의식은 그 도구들 자체를 한 보드 안에 두는 Sprintable로 이어졌습니다.',
      },
      {
        id: 'sprintable',
        name: 'Sprintable',
        summary:
          '사람과 AI 에이전트가 같은 보드에서 일하는 팀 OS Sprintable을 만들고 있습니다. 조건을 채우지 못하면 다음 단계로 넘어갈 수 없게 워크플로우 계약으로 강제합니다.',
      },
    ],
  },
  {
    id: 'moongklab',
    company: '(주)뭉클랩',
    role: 'Product Owner · Scrum Master (선임연구원)',
    period: { start: '2025.12', end: '2026.03' },
    description: '쿠팡과 스마트스토어 셀러의 광고와 순이익을 분석하는 SaaS 장사왕을 만들었습니다.',
    projects: [
      {
        id: 'jangsawang',
        name: '장사왕',
        summary:
          '셀러의 업의 본질은 물건을 싸게 사서 마진을 남겨 파는 것인데, 당시 제품은 많은 데이터를 나열한 대시보드에 불과했습니다. 셀러는 광고비를 쓰면서도 효율이 왜 나빠지는지 몰랐고, 지표를 봐도 무엇을 해야 할지로 이어지지 않았습니다. 필요한 것은 데이터에 어떤 문제가 있는지를 빠르게 보여주는 것이지 화려하게 나열하는 것이 아니라고 판단했습니다.',
      },
      {
        id: 'jangsawang-ai',
        name: 'AI 광고 진단 출시',
        summary:
          'AI를 바로 넣는 대신, ROAS가 낮은 키워드나 클릭 대비 전환이 부진한 광고를 찾아 알려주는 룰베이스 진단을 먼저 기획해 내보내 셀러의 반응을 확인했습니다. 그 다음에 셀러의 데이터를 AI가 분석해 문제를 알려주고 바르게 성장하도록 돕는 AI 광고 진단을 설계, 기획해 프로덕션에 출시했습니다. 두 접근은 비교 실험으로 골랐습니다.',
      },
      {
        id: 'moongklab-sprint',
        name: '스프린트 체계',
        summary:
          '없던 스프린트, 백로그, 회고와 기획 문서 체계를 세워 개발 사이클의 예측 가능성을 만들었습니다.',
      },
      {
        id: 'moongklab-agent',
        name: 'AI 에이전트 실무 실험',
        summary:
          'PO 업무에 AI 에이전트를 넣어 본 첫 실무 실험이었습니다. 에이전트가 계획 없이 코드부터 짜고 검증 없이 머지로 가려 하는 것을 보며 도구가 조건을 강제하지 않는다는 문제를 발견했고, 이 경험이 Sprintable의 출발점이 됐습니다.',
      },
    ],
  },
  {
    id: 'blq',
    company: '(주)비엘큐',
    role: 'Product Owner · Business Analyst · Data Engineer',
    period: { start: '2020.11', end: '2024.07' },
    description:
      '환불이 어려운 전자제품을 구매하기 전에 사용해 보고 최종 구매 의사를 결정할 수 있는 테스트밸리와, 중고 전자제품 전문 커머스인 퀵셀을 만들었습니다.',
    projects: [
      {
        id: 'testvalley-bm',
        name: '테스트밸리 사업 모델 전환',
        summary:
          '초기 모델은 체험비를 먼저 내고 써 본 뒤 반납하거나 구매 비용을 후불로 내는 구조였습니다. 써 보고 돌려주지 않거나 갚지 않는 손실이 커지자, 제품가를 전액 선결제하고 반납하면 환불하는 구조로 바꿨습니다. 서비스 중단 없이 9일 만에 전환을 마쳤고, 어뷰징이 사라진 데다 판매 객단가가 2.4배로 올라 건전한 성장에 기여했습니다.',
      },
      {
        id: 'buyback',
        name: '중고 매입 서비스',
        summary:
          '사업 모델이 바뀌면서 현금흐름 구조도 바뀌어, 새 제품을 마진 경쟁을 하며 팔 이유가 없어졌습니다. 새 제품은 소폭 역마진이라도 계도가만 지키며 팔고, 구매하지 않아 반납된 제품을 리퍼비싱해 중고로 팔면서 마진을 거기서 남기는 방향으로 바꿨습니다. 문제는 반납되는 수량이 적다는 것이었고, 이를 풀기 위해 우리에게서 사지 않은 제품도 중고로 직접 매입하는 서비스를 테스트밸리 안에서 먼저 출시했습니다.',
      },
      {
        id: 'quicksel-launch',
        name: '퀵셀 분리 출시',
        summary:
          '매입 서비스로 중고 전자제품을 많이 확보했지만, 새 제품을 써 보고 반납할 수 있는 서비스로 이미 자리 잡은 테스트밸리를 중고 판매로 다시 포지셔닝하는 것은 비용 효율이 낮다고 판단해, 중고 전자제품 전문 서비스 퀵셀을 분리해 출시했습니다.',
      },
      {
        id: 'quicksel-ai',
        name: '퀵셀 매입 이미지 인식',
        summary:
          '중고 기기를 팔러 온 사용자가 모델명을 직접 입력하다 이탈했고, 입력한 제품과 실제 받은 제품이 다른 문제도 있었습니다. 사진으로 모델명을 추론하는 이미지 인식 엔진을 직접 개발해 넣었습니다. 퀵셀 앱은 PO로서 만들었지만 이 인식 모델 개발은 단독으로 수행했습니다. 추론 정확도 92%, 등록 시간 45% 단축, 매입 전환율 27% 상승, 매입 수량 전년 대비 120% 상승.',
      },
      {
        id: 'quicksel-auction',
        name: '퀵셀 라이브 경매',
        summary:
          '퀵셀에서 신규 입고 대비 회전율이 떨어지는 것을 보고, 앱 안에서 정해진 시간에 여러 구매자가 입찰하는 라이브 경매를 도입해 런칭했습니다. 동시접속 300명, 입찰 참여율 32%, 낙찰 후 구매 전환율 16%, 재고 회전율 140% 상승, 평균 매각 단가 8% 상승.',
      },
      {
        id: 'testvalley-dw',
        name: '데이터 웨어하우스와 자체 BI',
        summary:
          '팀마다 다른 숫자를 보던 상태를 통합 기준과 데이터 웨어하우스를 직접 구축해 정리했습니다. 슬랙 봇 슬래시 커맨드로 실시간 자동 리포팅을 제공하고 자체 데이터 BI를 구축해, 경영진과 실무가 같은 숫자로 결정하게 했습니다.',
      },
    ],
  },
  {
    id: 'cube',
    company: '(주)큐브인텔리전스 / Cube Intelligence LTD',
    role: '과장 · 서비스 기획 (2020.01 – 2020.10) / Development Manager · 서비스 기획 (2017.11 – 2019.12)',
    period: { start: '2017.11', end: '2020.10' },
    description:
      '블록체인 기반 모빌리티 스타트업. 영국 법인 소속으로 한국에서 근무하다 한국 법인으로 소속이 바뀌었습니다.',
    projects: [
      {
        id: 'papa',
        name: '파파',
        summary:
          '차량 호출 서비스 파파의 초기 기획과 운영 데이터 분석, 인도 진출을 위한 현지 운영 모델 기획을 맡았습니다.',
      },
      {
        id: 'cubebox-ico',
        name: 'CubeBox · CubeCar · ICO',
        summary:
          '안전운전 데이터를 보상하는 CubeBox의 토크노믹스와 암호화폐 결제 카셰어링 CubeCar를 기획했고, ICO 전 과정에 참여했습니다.',
      },
    ],
  },
  {
    id: 'bolt',
    company: '주식회사 볼트테크놀로지',
    role: '서비스 기획',
    period: { start: '2016.12', end: '2018.07' },
    description:
      '퀵서비스와 원룸이사 O2O 플랫폼 퀵퀵. 첫 커리어였고, 고객과 기사와 관리자가 한 서비스 안에서 어떻게 맞물리는지를 여기서 배웠습니다. 이후 큐브인텔리전스와 동일 오너 체계로 운영되어 소속이 바뀌었습니다 (재직 기간 일부 겹침).',
    projects: [
      {
        id: 'one-room-move',
        name: '원룸이사',
        summary:
          '원룸이사 서비스의 고객 앱, 기사 앱, 관리자 어드민 전체 구조와 짐 부피 기반 차량 산정, 서비스 타입별 견적 로직을 설계했습니다.',
      },
      {
        id: 'quickquick',
        name: '퀵서비스',
        summary:
          '퀵서비스의 기업 주문 웹, 개인 간편 주문, 인터넷 전화 접수, 콜센터 프로그램 연동 프로젝트를 관리했습니다.',
      },
    ],
  },
];

// 정본(RESUME_CORE.md)에 사이드 프로젝트 절이 없어 비워 둡니다.
export const sideProjects: SideProject[] = [];

export const educations: Education[] = [
  {
    school: '성균관대학교 정보통신대학원',
    degree: '공학석사',
    major: '빅데이터학과',
    period: { start: '2020.03', end: '2023.02' },
  },
  {
    school: '성균관대학교',
    degree: '학사',
    major: '독어독문학 · 국제통상학 복수전공',
    period: { start: '2010.03', end: '2018.02' },
  },
];

export const educationExtras: EducationExtra[] = [
  { label: '영어', value: '비즈니스 커뮤니케이션 가능' },
  { label: '병역', value: '면제' },
];

export const skills: Skill[] = [
  {
    category: '개발',
    items: [
      'TypeScript',
      'Python',
      'Node.js',
      'FastAPI',
      'Next.js',
      'React Native(Expo)',
      'SQLAlchemy',
      'Alembic',
      'pytest',
      'GitHub Actions',
    ],
  },
  {
    category: '데이터',
    items: [
      'SQL',
      'PostgreSQL',
      'BigQuery',
      'Supabase',
      'Kafka ETL',
      'Airflow',
      'GA4',
      'Amplitude',
      'Airbridge',
    ],
  },
  {
    category: 'AI',
    items: [
      '멀티에이전트 시스템 설계와 운영',
      'MCP',
      'Claude API',
      'OpenAI API',
      'LLM 서비스 구축',
      'RAG',
      '프롬프트 엔지니어링',
      'AI 호출 비용 거버넌스 설계',
    ],
  },
  {
    category: '인프라',
    items: [
      'GCP(Cloud Run, Cloud SQL, GCS)',
      'AWS(EC2, RDS)',
      'Cloudflare(R2, Tunnel)',
      'launchd 기반 서비스 운영',
      '배포 스크립트와 마이그레이션 게이트',
    ],
  },
  {
    category: '제품',
    items: [
      'PRD',
      'User Story Mapping',
      'Sprint/Scrum',
      'OKR/KPI',
      'A/B 테스트',
      '퍼널 분석',
      'BM 설계',
    ],
  },
  {
    category: '협업 도구',
    items: ['Notion', 'Figma', 'Jira', 'Slack'],
  },
];

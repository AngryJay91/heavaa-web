export interface Action {
  title: string;
  details: string[];
}

export interface CareerDetail {
  id: string;
  additionalIds?: string[];
  companyId: string;
  companyName: string;
  projectName: string;
  summary: string;
  problem: string;
  hypothesis?: string;
  actions: Action[];
  results: string[];
  insights: string[];
}

export const careerDetails: CareerDetail[] = [
  // ── 뭉클랩 ──────────────────────────────────────────────────────
  {
    id: 'jangsawang',
    companyId: 'moongklab',
    companyName: '(주)뭉클랩',
    projectName: '장사왕 — 셀러 분석 SaaS PO',
    summary: '쿠팡·네이버스마트스토어 셀러 순이익·광고 분석 SaaS 제품 PO',
    problem:
      '팀 내 스프린트 관리 체계가 부재하여 개발 우선순위와 일정이 불명확하고, 기능 단위의 기획-개발-검증 사이클이 정립되지 않은 상태였음.',
    actions: [
      {
        title: '프로세스 체계화',
        details: [
          '스프린트 플래닝, 백로그 우선순위 관리, 회고 프로세스 도입',
          'Agile 기반 개발 사이클 정립',
        ],
      },
      {
        title: '제품 기획',
        details: [
          '셀러 순이익 분석, 광고 ROI 대시보드 등 핵심 기능 기획',
          '요구사항 정의 및 개발 핸드오프',
        ],
      },
      {
        title: 'AI 네이티브 워크플로우 실험',
        details: [
          'PO 업무(리서치, 기획, 검증)에 LLM 에이전트를 활용한 워크플로우 설계',
          '실무 적용 및 효과 검증',
        ],
      },
    ],
    results: [
      '기존에 부재했던 스프린트 프로세스를 체계화하여 팀의 개발 사이클 예측 가능성 확보',
      'AI 에이전트 기반 PO 워크플로우 프로토타입 → 이후 개인 프로젝트 Popilot으로 발전',
    ],
    insights: [
      '짧은 기간이라도 "프로세스의 부재"를 구조화하는 것 자체가 팀에 기여할 수 있음을 확인',
      'AI를 단순 도구로 쓰는 것과, 워크플로우 자체를 AI 네이티브로 설계하는 것은 본질적으로 다른 접근임을 체득 → Popilot의 출발점',
    ],
  },

  // ── 헤바 ────────────────────────────────────────────────────────
  {
    id: 'corti',
    companyId: 'heavaa',
    companyName: '헤바 (Heavaa)',
    projectName: 'Corti — 팀 의사결정 AI 플랫폼',
    summary: '팀 커뮤니케이션에서 의사결정을 자동 추출·검색하는 AI 플랫폼',
    problem:
      '팀의 중요한 의사결정은 Slack 스레드, GitHub PR 코멘트, Notion 페이지 등에 흩어져 있고, 시간이 지나면 맥락이 유실됨. "그때 왜 그렇게 결정했지?"라는 질문에 답하기 어려운 것이 반복적인 문제였음.',
    hypothesis:
      '팀 커뮤니케이션 소스에서 의사결정을 자동 추출하고, 에이전트가 자연어로 검색할 수 있는 인터페이스(MCP)를 제공하면, 팀의 의사결정 이력이 자산으로 축적되고 일관성 있는 후속 결정을 유도할 수 있을 것이다.',
    actions: [
      {
        title: '아키텍처 설계 및 개발',
        details: [
          'FastAPI + PostgreSQL 백엔드, Next.js 프론트엔드 풀스택 개발',
          'Slack, GitHub, Notion, Jira 등 다중 커넥터 기반 데이터 수집 파이프라인 구축',
          'BM25 + Vector + Reranking 하이브리드 검색 엔진 설계',
          'MCP(Model Context Protocol) 서버 구현 — AI 에이전트가 팀 의사결정을 도구로 검색 가능',
        ],
      },
      {
        title: 'AI 에이전트 협업 개발 프로세스 구축',
        details: [
          'Claude 기반 AI 에이전트 2대와 협업하여 개발',
          '계획→구현→검증→리뷰→머지 5단계 게이트 시스템 설계',
          '서로 다른 AI 모델 간 크로스 검증을 통한 코드 품질 확보 (모델 분리 원칙)',
        ],
      },
      {
        title: '인프라',
        details: [
          'AWS (EC2 + RDS) 배포',
          'GitHub Actions CI/CD 파이프라인 구축',
        ],
      },
    ],
    results: [
      'MCP 서버를 통해 AI 에이전트가 팀 의사결정을 실시간 검색 가능한 프로덕트 출시 (corti.wiki)',
      '커넥터 4종(Slack, GitHub, Notion, Jira) 연동 완료',
      'AI 에이전트 2대가 자율적으로 이슈 분석 → PR 생성 → 코드 리뷰 → 머지까지 수행하는 개발 파이프라인 구축',
      'API Key 관리, 하이브리드 검색, Context Tree 등 지속적 기능 확장 중',
    ],
    insights: [
      'AI 에이전트는 "코드를 대신 짜는 도구"가 아니라, "서로 다른 관점으로 검증하는 팀원"으로 설계할 때 품질이 올라감을 확인',
      'MCP라는 새로운 프로토콜이 AI와 데이터 소스를 연결하는 표준이 될 가능성 — 초기에 구현 경험을 확보한 것이 기술적 자산',
    ],
  },
  {
    id: 'popilot',
    companyId: 'side',
    companyName: '사이드 프로젝트',
    projectName: 'Popilot — PO/PM 멀티에이전트 시스템',
    summary: 'PO/PM 업무를 12개 역할로 분해한 AI 멀티에이전트 시스템',
    problem:
      'Product Owner의 업무(시장 조사, PRD 작성, 스프린트 계획, 핸드오프 문서 작성 등)는 반복적이면서도 고도의 판단이 필요한 영역이 혼재되어 있음. 기존 AI 도구들은 단일 태스크에는 유용하나, PO 워크플로우 전체를 커버하지 못함.',
    hypothesis:
      'PO 업무를 역할별로 분리하고, 각 역할에 특화된 AI 에이전트를 설계하면 — 전략 수립부터 개발 핸드오프까지 — PO의 생산성을 구조적으로 높일 수 있을 것이다. "Developers have Copilot. Product Owners have Popilot."',
    actions: [
      {
        title: '에이전트 아키텍처 설계',
        details: [
          'PO 업무를 12개 역할로 분해: 전략(Simon), 시장조사(Marco), 스프린트(Penny), 핸드오프(Hank), VOC(Rita), 데이터(Danny), 트래킹(Tara), 마케팅(Mia), 운영(Nora), 구현(Derek), QA(Quinn), 복합판단(Sage)',
          '역할별 페르소나 + 모델 분리 원칙 설계 (Opus=전략/판단, Sonnet=실행, Codex=검증)',
        ],
      },
      {
        title: '게이트 시스템 설계',
        details: [
          'PLAN → CODE → VERIFY → REVIEW → MERGE 5단계 품질 관문',
          '파일 기반 크로스모델 통신 — 에이전트 간 "의도" 전달 금지, 산출물만 참조',
        ],
      },
      {
        title: '실무 적용',
        details: [
          '뭉클랩 PO 업무에서 프로토타입 실험 → Corti 개발에 정식 도입',
          'OpenClaw 플랫폼 위에서 동작하도록 이식',
        ],
      },
    ],
    results: [
      'Corti 프로젝트에서 실제 이슈 → PR → 머지까지 에이전트 루프로 완수하는 사례 다수 축적',
      '계획 없이 구현하는 실수 방지 — PREFLIGHT 게이트로 "plan.md 없이 coder spawn 금지" 규칙 시행',
      'PO 워크플로우의 구조화된 자동화 가능성 검증',
    ],
    insights: [
      '같은 모델이 역할만 바꿔가며 수행하는 것 ≠ 진짜 멀티에이전트. 서로 다른 모델의 blind spot을 교차 활용하는 것이 핵심',
      '에이전트 시스템 설계는 결국 "사람이 일하는 방식의 구조화" — PO 경험이 직접적으로 에이전트 설계 역량으로 전환됨',
    ],
  },
  {
    id: 'agent-earth',
    companyId: 'side',
    companyName: '사이드 프로젝트',
    projectName: 'Agent Earth — AI 에이전트 소셜 플랫폼',
    summary: 'AI 에이전트가 세계를 탐험하고 기록을 공유하는 소셜 플랫폼',
    problem:
      'AI 에이전트는 대부분 도구 연동이나 자동화에 활용되지만, 에이전트가 "경험"을 기록하고 공유하는 소셜 플랫폼은 존재하지 않음. 에이전트 간 상호작용의 가능성이 탐색되지 않은 영역이었음.',
    hypothesis:
      'AI 에이전트가 세계 각지를 가상으로 탐험하고, 그 기록을 지도 위에 공유하는 플랫폼을 만들면 — 에이전트 오퍼레이터와 일반 사용자 모두에게 새로운 형태의 콘텐츠 경험을 제공할 수 있을 것이다.',
    actions: [
      {
        title: '제품 설계 및 개발',
        details: [
          'Next.js + Supabase + MapLibre 기반 웹 플랫폼 풀스택 개발',
          '에이전트 등록 → 산책 생성 → Waypoint별 이미지 소싱(Google Street View / Wikimedia Commons 자동 폴백) API 설계',
        ],
      },
      {
        title: '에이전트 스킬 개발',
        details: [
          'OpenClaw 스킬로 패키징 — AI 에이전트가 API를 통해 자동으로 산책 콘텐츠 생성 가능',
          '입력 검증 스크립트(validate.js) 포함, 8개 테스트 케이스 통과',
        ],
      },
      {
        title: '오픈소스 배포',
        details: [
          'ClawHub 퍼블리시 완료',
          '외부 에이전트 참여 확보',
        ],
      },
    ],
    results: [
      'v2 배포 완료 — 에이전트 등록, 산책 생성, 지도 시각화 전체 플로우 동작',
      '첫 외부 에이전트(Ralph 🧭) 참여 확보 — 도쿄 시부야, 시모키타자와 산책 기록',
      'ClawHub 퍼블리시 완료 — OpenClaw 생태계 내 최초의 "에이전트 소셜" 스킬',
    ],
    insights: [
      'AI 에이전트의 활용 범위는 "생산성 도구"를 넘어 "경험의 기록과 공유"까지 확장 가능',
      '에이전트 오퍼레이터 vs 일반 사용자 타겟 미확정 → 저비용으로 양쪽 실험 후 반응 기반 결정이라는 GTM 원칙 적용',
    ],
  },

  // ── 비엘큐 ──────────────────────────────────────────────────────
  {
    id: 'quicksel-auction',
    additionalIds: ['quicksel'],
    companyId: 'blq',
    companyName: '주식회사 비엘큐',
    projectName: '퀵셀 — 실시간 라이브 경매 서비스',
    summary: '중고 전자제품 재고를 실시간 경매로 유통하는 신규 BM 구축',
    problem:
      '자사 중고 전자제품 재고가 장기체류하며 회전율이 낮고, B2B 파트너 간 거래 단가 경쟁이 심화되어 수익성이 저하되고 있었음.',
    hypothesis:
      '실시간 경매 방식으로 재고를 시장가에 가깝게 유통시켜, 재고 회전율을 높이면서도 증가된 트래픽을 통해 매입하는 수량까지 늘일 수 있을 것이다.',
    actions: [
      {
        title: '실시간 경매 UX 기획 및 Funnel 설계',
        details: [
          '재고 경매 등록 → 입찰 및 낙찰 → 미낙찰자에게 같은 제품 할인 쿠폰 지급하여 구매전환 유도 → 재고 회전율 제고 구조 설계',
          '낙찰자에게 보유 전자제품 판매 시 추가 할인 쿠폰 지급하여 재고 회전 유도 구조 설계',
        ],
      },
      {
        title: 'B2B 파트너 참여 모델 검증',
        details: [
          '자체 재고를 경매 상품으로 PoC',
          'B2B 파트너가 직접 자사 재고를 경매 아이템으로 참여하는 의향 검증 및 거래 조건 표준화',
        ],
      },
      {
        title: '데이터 추적 구조 설계',
        details: [
          '경매 참여 데이터 기반 실시간 지표 추적 구조 설계',
        ],
      },
    ],
    results: [
      '동시접속자 300명, 경매 입찰 참여율 32%, 낙찰 후 구매 전환율 16% 달성',
      'Funnel 작동으로 재고회전율이 이전 대비 +140% 향상',
      '규모의 경제 실현으로 평균 매각 단가 평균 8% 개선',
    ],
    insights: [
      '단기적인 마진을 포기하면서 경매로 물건을 판매 시 발생하는 유저 참여 행동이 장기적으로 가치 있음을 확인',
      '향후 개인간 거래로 확장 시 핵심 거래모델로 사용할 수 있을 가능성을 검증',
    ],
  },
  {
    id: 'quicksel-ai',
    companyId: 'blq',
    companyName: '주식회사 비엘큐',
    projectName: '퀵셀 — 중고 매입 프로세스 AI 도입',
    summary: 'Google Vision AI 기반 제품 인식으로 매입 전환율 27% 향상',
    problem:
      '기존 중고 상품 매입 시스템은 사용자의 입력 부담이 높고, 프로세스가 복잡하여 이탈률이 높음. 또한 매입 프로세스의 효율은 낮은데, 광고 예산만 확대되고 있는 상황.',
    hypothesis:
      '매입 과정에서 가장 시간이 많이 소요되는 퍼널을 단순화하면 전환율을 높일 수 있을 것이다. 더 많은 양의 매입이 결국 재고 순환율의 개선과 마진율 상승을 견인할 것이다.',
    actions: [
      {
        title: 'AI Layer 개발',
        details: [
          'Google Vision AI 기반 전자제품 모델명 추론하는 AI Layer 개발',
        ],
      },
      {
        title: '성과 측정 체계 구축',
        details: [
          '앱 내 Funnel 별 행동 로그 기반 전환율 추적 시스템 설계',
        ],
      },
    ],
    results: [
      'Vision AI Layer의 추론 정확도 92% → 제품 등록까지 걸리는 시간 45% 단축',
      '매입 전환율 +27%, 매입 수량은 전년 대비 +120%',
      '재고 회전율 1.8배 개선',
    ],
    insights: [
      'B2B 비즈니스 모델의 성장 원리를 배울 수 있었음',
    ],
  },
  {
    id: 'testvalley-bm',
    additionalIds: ['testvalley'],
    companyId: 'blq',
    companyName: '주식회사 비엘큐',
    projectName: '테스트밸리 — BM 전환 프로젝트',
    summary: '체험비 선불 구조로 BM 전환, 어뷰징 제거 + 객단가 2.4배 상승',
    problem:
      'BNPL 기반의 "체험 후 구매" 비즈니스 모델로 단기적으로 폭발적인 성장세는 있었으나, 어뷰징, 체험 후 제품 미회수 등의 문제 증가로 손실 리스크가 급격히 상승하였음.',
    hypothesis:
      '서비스의 핵심가치인 "체험 중심 구매의사 결정"을 유지하면서도, 리스크 기반 과금 구조와 구매 전환 유도 로직을 병행하면 수익성과 지속가능성을 동시에 확보할 수 있을 것이다.',
    actions: [
      {
        title: 'BM 전환 설계',
        details: [
          '기존: 체험비 지불 후 체험 → 구매 결정 시 잔여 제품가액 납부 (리스크 높음)',
          '전환: 제품 가액 전액 지불 → 체험 후 반납 시 체험비 제외 환불 구조로 변경',
        ],
      },
      {
        title: '단기 프로젝트 리드',
        details: [
          '서비스 중단 없이 BM 변경이 이루어져야 했기 때문에 9일 간의 단기 프로젝트로 완성',
        ],
      },
    ],
    results: [
      '어뷰징 케이스 완전 제거',
      '재구매율 하락을 방어하면서도 객단가는 2.4배 상승',
      '매출액은 BM 전환 후 오히려 상승',
    ],
    insights: [
      '단기 매출 중심 모델보다 지속가능한 장기적 관점에서의 비즈니스 모델 설계의 중요성을 깨달음',
      '서비스 아이덴티티를 훼손하지 않으면서도 피보팅이 충분히 가능하다는 점을 학습',
    ],
  },
  {
    id: 'testvalley-dw',
    companyId: 'blq',
    companyName: '주식회사 비엘큐',
    projectName: '테스트밸리 — 데이터 웨어하우스 구축',
    summary: 'Kafka ETL + 자체 대시보드로 팀 KPI 일원화',
    problem:
      '팀 내 데이터 출처의 불일치로 인해 KPI 해석이 상이하고, 경영진의 의사결정이 지연되고 있음. 보고자 하는 데이터는 있으나, 규격 정의가 통일되지 않음.',
    hypothesis:
      '통합된 ETL 파이프라인과 실시간 대시보드를 구축하면 데이터 신뢰성을 확보하고, 의사결정 리드타임을 단축할 수 있을 것이다.',
    actions: [
      {
        title: '기획 및 설계',
        details: [
          'GA, Amplitude, Airbridge 등 여러 툴에서 팀 별로 확인하고자 하는 데이터의 형태를 파악',
          '통합 데이터 규격 정의',
        ],
      },
      {
        title: '구현',
        details: [
          'Kafka 기반 ETL Pipeline 및 Data Warehouse 구현',
          'Next.js + TypeScript + FastAPI 기반의 자체 대시보드 개발',
          'Python Airflow 활용한 자동 리포팅 프로세스 도입',
        ],
      },
    ],
    results: [
      'BA의 역할은 리포트 작성자가 아닌 의사결정의 촉매자임을 학습',
      '데이터의 해석도 중요하지만, 데이터의 일관성이 선행될 때 데이터의 해석이 유의미함을 학습',
    ],
    insights: [],
  },

  // ── 큐브인텔리전스 ──────────────────────────────────────────────
  {
    id: 'cube-projects',
    additionalIds: ['papa-taxi', 'cubebox', 'ico'],
    companyId: 'cube',
    companyName: '주식회사 큐브인텔리전스',
    projectName: '파파택시 / CubeBox / ICO',
    summary: '모빌리티 서비스 기획 및 블록체인 ICO 전 과정 참여',
    problem:
      '모빌리티, 블록체인이라는 새로운 도메인에서 서비스 기획부터 운영까지 전 과정을 경험해야 하는 상황.',
    actions: [
      {
        title: '모빌리티 서비스 기획',
        details: [
          '파파 택시: 국내 차량 호출 서비스 초기 기획 및 운영 데이터 분석',
          'Papa India: 카니발 택시 서비스의 인도 지역 진출을 위한 현지 사용성, 운영 모델 기획',
          'CubeBox: OBD-II 동글 연동 APP을 통한 안전운전 데이터 보상 토크노믹스, 리워드 시스템 설계',
          'CubeCar: 암호화폐 결제 기반 개인간 카셰어링 서비스 기획',
        ],
      },
      {
        title: 'ICO 기획 및 운영',
        details: [
          '모빌리티 보안 블록체인 레이어 기반 ICO 전 과정 참여',
          'Token 마케팅, Community 관리',
        ],
      },
    ],
    results: [
      '파파택시 초기 서비스 운영 및 데이터 분석 경험 축적',
      '블록체인 ICO 전 과정 참여를 통한 토크노믹스 이해',
      '해외(인도) 시장 진출 기획 경험',
    ],
    insights: [
      '데이터 기반 서비스 개선 사이클에 대한 경험 및 이해',
      '복잡한 실물 기반 서비스의 엔드투엔드 플로우 설계 경험',
      '새로운 도메인에 대해 빠르게 학습하고 흡수하는 문제 정의 및 구조화 능력',
    ],
  },

  // ── 딜리버리러쉬 ────────────────────────────────────────────────
  {
    id: 'delivery-projects',
    additionalIds: ['quickquick', 'one-room-move'],
    companyId: 'delivery-rush',
    companyName: '주식회사 딜리버리러쉬',
    projectName: '퀵퀵 / 원룸이사 O2O 서비스 기획',
    summary: '국내 최초 퀵서비스·원룸이사 O2O 서비스 기획 전담',
    problem:
      '퀵서비스와 소형 이사 시장에서 기사·고객·관리자 전체를 연결하는 O2O 플랫폼 설계가 필요한 상황. 배차 로직, 견적 알고리즘, 어드민 시스템까지 전체 플로우를 처음부터 설계해야 했음.',
    actions: [
      {
        title: '원룸이사 서비스 기획',
        details: [
          '고객용 앱 / 기사용 앱 / 관리자 어드민의 전체 구조 설계',
          '짐 부피, 유형 기반 차량 산정 로직 기획',
          '포장이사, 반포장이사, 운반 등 이사 서비스 타입별 견적 알고리즘 설계',
        ],
      },
      {
        title: '퀵서비스 기획 및 운영',
        details: [
          '기업 고객 주문용 웹 커스터마이즈 프로젝트 매니징',
          '개인 고객 주문용 간편 퀵서비스 웹/앱 기획',
          '어드민과 인터넷 전화 기기 연동, 전화 접수 시스템 기획 및 개발 프로젝트 매니징',
          '기존 퀵서비스 콜센터 프로그램과의 주문 연동 개발 프로젝트 매니징',
        ],
      },
    ],
    results: [
      '국내 최초 원룸이사 O2O 서비스 론칭 기여',
      '고객·기사·관리자 3자 플로우 완전 설계 및 운영',
    ],
    insights: [
      '프로덕트의 전 과정(고객/기사/관리자)의 복합 운영 플로우 구축 경험을 통해 입체적인 사고 경험',
      '실물 기반 O2O 서비스를 구성하는 물류, 배차, 운영 알고리즘 설계 능력',
      '사업 운영에 직접 영향을 주는 핵심 지표 기반의 기능 개선 경험',
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  urls?: { label: string; href: string }[];
  status: 'active' | 'completed' | 'paused';
  emoji: string;
}

export const projects: Project[] = [
  {
    id: 'corti',
    name: 'Corti',
    tagline: '팀의 결정을 기억합니다',
    description:
      'Slack, GitHub, Notion에 흩어진 팀 의사결정을 AI가 자동 추출하고, MCP를 통해 에이전트가 검색 가능한 지식으로 변환합니다.',
    tags: ['AI', 'MCP', 'FastAPI', 'Next.js', 'PostgreSQL'],
    url: 'https://corti.wiki',
    status: 'active',
    emoji: '🧠',
  },
  {
    id: 'agent-earth',
    name: 'Agent Earth',
    tagline: 'AI 에이전트가 세계를 탐험합니다',
    description:
      'AI 에이전트가 세계 각지를 가상으로 탐험하고 그 기록을 지도 위에 공유하는 소셜 플랫폼. 첫 외부 에이전트 Ralph 🧭가 도쿄를 산책 중입니다.',
    tags: ['AI Agent', 'Next.js', 'Supabase', 'MapLibre'],
    url: 'https://agent-earth-oscar.vercel.app/',
    status: 'active',
    emoji: '🌍',
  },
  {
    id: 'popilot',
    name: 'Popilot',
    tagline: 'PO를 위한 Copilot',
    description:
      'Product Owner 업무를 12개 역할의 AI 에이전트로 분해. 전략부터 개발 핸드오프까지 자동화. "Developers have Copilot. Product Owners have Popilot."',
    tags: ['Multi-Agent', 'LLM', 'Product Management'],
    url: 'https://github.com/AngryJay91/popilot',
    status: 'active',
    emoji: '🤖',
  },
  {
    id: 'maldives-match',
    name: '몰디브매치',
    tagline: '나에게 맞는 몰디브 리조트',
    description:
      '수백 개의 몰디브 리조트 중 내 취향과 예산에 맞는 곳을 추천해주는 큐레이션 서비스.',
    tags: ['Recommendation', 'Travel', 'Curation'],
    url: 'https://maldivesmatch.com',
    status: 'completed',
    emoji: '🏖️',
  },
  {
    id: 'inner-seed',
    name: '내마음속씨앗',
    tagline: 'AI가 만드는 성경 팟캐스트',
    description:
      '매일 성경 말씀을 AI가 큐레이션하고 TTS로 변환하여 팟캐스트로 제공. 바쁜 현대인을 위한 말씀 묵상.',
    tags: ['AI', 'TTS', 'Podcast', 'Faith'],
    urls: [
      { label: 'App Store', href: 'https://apps.apple.com/kr/app/%EB%82%B4%EB%A7%88%EC%9D%8C%EC%86%8D%EC%94%A8%EC%95%97-%EC%98%A4%EB%94%94%EC%98%A4-%EC%84%B1%EA%B2%BD-%EB%AC%B5%EC%83%81-%EC%84%B1%EA%B2%BD-%EB%A7%90%EC%94%80-%EC%9D%BD%EA%B8%B0/id6746428008' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.seedinmyheart.app' },
    ],
    status: 'active',
    emoji: '🌱',
  },
];

export interface NavItem {
  label: string;
  href: string;
}

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

export const siteConfig: SiteConfig = {
  name: 'Heavaa',
  title: 'Heavaa — AI Native 프로덕트 스튜디오',
  description:
    '문제를 발견하고, 가설을 세우고, 제품으로 검증합니다. Lingrow·Corti·Sprintable·내마음속씨앗을 만드는 1인 AI Native 프로덕트 스튜디오.',
  url: 'https://www.heavaa.com',
  contact: {
    email: 'iamyoonjae@gmail.com',
    phone: '010-3141-9940',
    github: 'https://github.com/AngryJay91',
  },
  nav: [
    { label: '홈', href: '/' },
    { label: 'About', href: '/about' },
    { label: '연락처', href: '/contact' },
  ],
};

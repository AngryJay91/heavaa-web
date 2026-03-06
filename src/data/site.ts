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
  name: '송윤재',
  title: '송윤재 — Product Builder',
  description: '문제를 구조화하고, 검증가능한 제품을 만드는 Product Builder. Heavaa CEO.',
  url: 'https://www.heavaa.com',
  contact: {
    email: 'iamyoonjae@gmail.com',
    phone: '010-3141-9940',
    github: 'https://github.com/AngryJay91',
  },
  nav: [
    { label: '홈', href: '/' },
    { label: '이력서', href: '/resume' },
    { label: '경력기술서', href: '/career' },
    { label: '자기소개서', href: '/cover-letter' },
    { label: '연락처', href: '/contact' },
  ],
};

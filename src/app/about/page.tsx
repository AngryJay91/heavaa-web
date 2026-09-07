import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: '헤바를 만드는 사람, 송윤재. Product Builder · AI-native Engineer',
};

const docs = [
  { label: '이력서', href: '/resume', desc: '커리어 하이라이트 · 경력 · 스킬 · 학력' },
  { label: '경력기술서', href: '/career', desc: '프로젝트별로 왜 시작했는지, 무엇을 했는지, 결과와 배운 것' },
  { label: '자기소개서', href: '/cover-letter', desc: '일하는 방식과 가치관' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* 프로필 */}
        <div className="text-center mb-14">
          <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-white/20">
            <Image
              src="/images/profile.jpg"
              alt="송윤재 프로필"
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">송윤재</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
            Product Builder · AI-native Engineer. 1인 프로덕트 스튜디오{' '}
            <span className="text-[var(--foreground)] font-semibold">헤바(Heavaa)</span>를
            운영하며, 문제를 발견하면 AI 에이전트 팀과 함께 직접 만들어 출시합니다.
          </p>
        </div>

        {/* 소개 */}
        <div className="mb-14 text-[var(--muted)] leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
          <p>
            물류, 블록체인, 모빌리티, 커머스, SaaS 등 다양한 도메인에서 10년 가까이 제품을 만들고
            있습니다. 서비스 기획자로 출발해 프로젝트 매니징과 데이터 분석을 거쳐, 지금은 1인
            스튜디오 헤바에서 AI 네이티브 환경으로 제품을 직접 개발하고 그것을 만드는 생산 체계
            자체를 설계해 운영합니다. 증상을 손보는 대신 구조적인 문제가 없는지를 다시 돌아보고,
            바꿨다는 것을 숫자로 확인합니다.
          </p>
        </div>

        {/* 이력서 / 경력기술서 / 자기소개서 링크 */}
        <div className="grid sm:grid-cols-3 gap-4">
          {docs.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="block p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] transition-colors text-center group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                {d.label}
              </h3>
              <p className="text-sm text-[var(--muted)]">{d.desc}</p>
            </Link>
          ))}
        </div>

        {/* 연락 CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:iamyoonjae@gmail.com"
            className="inline-block px-8 py-4 bg-[var(--accent)] text-white rounded-2xl font-bold hover:bg-[var(--accent-light)] transition-colors shadow-lg shadow-indigo-500/25"
          >
            이메일로 연락하기
          </a>
        </div>
      </div>
    </div>
  );
}

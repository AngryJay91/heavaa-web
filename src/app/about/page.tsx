import type { Metadata } from 'next';
import Image from 'next/image';
import RecipientLink from '@/components/ui/RecipientLink';

export const metadata: Metadata = {
  title: 'About',
  description: '헤바를 만드는 사람 — 송윤재, Product Builder',
};

const docs = [
  { label: '이력서', href: '/resume', desc: '경력 요약 · 스킬 · 학력' },
  { label: '경력기술서', href: '/career', desc: '프로젝트별 문제 · 가설 · 액션 · 성과' },
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
            문제를 구조화하고, 검증 가능한 제품을 만드는 Product Builder.{' '}
            <span className="text-[var(--foreground)] font-semibold">헤바(Heavaa)</span>를
            운영하며 AI Native 제품을 직접 기획·설계·개발합니다.
          </p>
        </div>

        {/* 소개 */}
        <div className="mb-14 text-[var(--muted)] leading-relaxed space-y-4 text-center max-w-2xl mx-auto">
          <p>
            9년+ 동안 커머스·모빌리티·블록체인 도메인에서 Product Owner로 일하며, 문제를
            정의하고 가설을 세워 제품으로 검증해 왔습니다. 지금은 1인 프로덕트 스튜디오 헤바에서
            AI 에이전트를 팀처럼 운영하며 제품을 만듭니다.
          </p>
        </div>

        {/* 이력서 / 경력기술서 / 자기소개서 링크 */}
        <div className="grid sm:grid-cols-3 gap-4">
          {docs.map((d) => (
            <RecipientLink
              key={d.href}
              href={d.href}
              className="block p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] transition-colors text-center group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                {d.label}
              </h3>
              <p className="text-sm text-[var(--muted)]">{d.desc}</p>
            </RecipientLink>
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

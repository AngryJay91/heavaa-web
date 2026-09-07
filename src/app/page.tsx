import HeroSection from '@/components/landing/HeroSection';
import StatsCounter from '@/components/landing/StatsCounter';
import ProjectCards from '@/components/landing/ProjectCards';
import Section from '@/components/ui/Section';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 스탯 섹션 */}
      <Section className="bg-[var(--card)] border-y border-[var(--border)]">
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl font-bold text-[var(--muted)] uppercase tracking-widest text-sm mb-2">
            Numbers
          </h2>
        </div>
        <StatsCounter />
      </Section>

      {/* 헤바 유니버스 */}
      <Section>
        <div className="max-w-5xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">헤바 유니버스</h2>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
            문제를 발견하고, 가설을 세우고, 제품으로 검증합니다.
          </p>
        </div>
        <ProjectCards />
      </Section>

      {/* 헤바를 만드는 사람 → About */}
      <Section className="text-center bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black mb-4">헤바를 만드는 사람</h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            9년+ Product Owner 경험으로 AI 에이전트를 팀처럼 운영하며 제품을 만듭니다.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 border border-[var(--border)] rounded-xl font-semibold hover:bg-[var(--background)] transition-colors"
          >
            About 보기 →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            함께 만들고 싶은 문제가 있으신가요?
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            헤바와 새로운 제품을 함께 검증해보세요.
          </p>
          <a
            href="mailto:iamyoonjae@gmail.com"
            className="inline-block px-8 py-4 bg-[var(--accent)] text-white rounded-2xl font-bold text-lg hover:bg-[var(--accent-light)] transition-colors shadow-lg shadow-indigo-500/25"
          >
            이메일 보내기
          </a>
        </div>
      </Section>
    </>
  );
}

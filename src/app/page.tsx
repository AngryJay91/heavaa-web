import HeroSection from '@/components/landing/HeroSection';
import StatsCounter from '@/components/landing/StatsCounter';
import ProjectCards from '@/components/landing/ProjectCards';
import Section from '@/components/ui/Section';

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

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            함께 일하고 싶으신가요?
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            경력 9년+의 Product Builder와 새로운 문제를 함께 풀어보세요.
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

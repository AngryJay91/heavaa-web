import type { Metadata } from 'next';
import RecipientLink from '@/components/ui/RecipientLink';
import Timeline from '@/components/resume/Timeline';
import SkillCloud from '@/components/resume/SkillCloud';
import Education from '@/components/resume/Education';
import { highlights, educationExtras } from '@/data/resume';

export const metadata: Metadata = {
  title: '이력서',
  description: '송윤재의 커리어 하이라이트, 경력, 스킬, 학력',
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 페이지 헤더 */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            Resume
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">이력서</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
            송윤재 (Yoonjae Song) · Product Builder · AI-native Engineer
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <RecipientLink
              href="/career"
              className="text-sm text-[var(--accent)] hover:underline font-medium"
            >
              경력기술서 보기 →
            </RecipientLink>
            <span className="text-[var(--border)]">|</span>
            <RecipientLink
              href="/cover-letter"
              className="text-sm text-[var(--accent)] hover:underline font-medium"
            >
              자기소개서 보기 →
            </RecipientLink>
          </div>
        </div>

        {/* 커리어 하이라이트 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8">커리어 하이라이트</h2>
          <ul className="list-disc pl-5 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="text-[var(--muted)] leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 타임라인 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-12">경력</h2>
          <Timeline />
        </section>

        {/* 스킬 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8">스킬</h2>
          <SkillCloud />
        </section>

        {/* 학력 · 어학 */}
        <section>
          <h2 className="text-2xl font-bold mb-8">학력 · 어학</h2>
          <Education />
          <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
            {educationExtras.map((item) => (
              <li key={item.label}>
                {item.label}: {item.value}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

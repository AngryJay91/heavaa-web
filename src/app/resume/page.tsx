import type { Metadata } from 'next';
import RecipientLink from '@/components/ui/RecipientLink';
import Timeline from '@/components/resume/Timeline';
import SkillCloud from '@/components/resume/SkillCloud';
import Education from '@/components/resume/Education';
import SideProjects from '@/components/resume/SideProjects';
import { getRecipientData } from '@/lib/recipient';

export const metadata: Metadata = {
  title: '이력서',
  description: '송윤재의 경력 타임라인, 스킬, 학력 정보',
};

interface ResumePageProps {
  searchParams: Promise<{ recipient?: string }>;
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const { recipient } = await searchParams;
  const recipientData = getRecipientData(recipient);

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 페이지 헤더 */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            Resume
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">경력 이력서</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
            9년간의 서비스 기획 & Product Owner 경력
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

        {/* 타임라인 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-12">경력</h2>
          <Timeline />
        </section>

        {/* 사이드 프로젝트 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8">사이드 프로젝트</h2>
          <SideProjects filter={recipientData?.sideProjectFilter} />
        </section>

        {/* 스킬 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8">스킬</h2>
          <SkillCloud />
        </section>

        {/* 학력 */}
        <section>
          <h2 className="text-2xl font-bold mb-8">학력</h2>
          <Education />
        </section>
      </div>
    </div>
  );
}

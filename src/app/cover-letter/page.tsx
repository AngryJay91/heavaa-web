import type { Metadata } from 'next';
import CoverSection from '@/components/cover-letter/CoverSection';
import { coverSections as defaultCoverSections } from '@/data/coverLetter';
import { getRecipientData } from '@/lib/recipient';

export const metadata: Metadata = {
  title: '자기소개서',
  description: '송윤재의 자기소개서',
};

interface CoverLetterPageProps {
  searchParams: Promise<{ recipient?: string }>;
}

export default async function CoverLetterPage({ searchParams }: CoverLetterPageProps) {
  const { recipient } = await searchParams;
  const recipientData = getRecipientData(recipient);

  const coverSections = recipientData?.coverSections ?? defaultCoverSections;

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* 페이지 헤더 */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            Cover Letter
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">자기소개서</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
            문제를 구조화하고, 검증가능한 제품을 만드는 Product Builder
          </p>
        </div>

        {/* 섹션 목록 */}
        <div>
          {coverSections.map((section) => (
            <CoverSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

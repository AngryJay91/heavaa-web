import type { Metadata } from 'next';
import { careerDetails } from '@/data/career';
import CompanySection from '@/components/career/CompanySection';
import { getRecipientData } from '@/lib/recipient';

export const metadata: Metadata = {
  title: '경력기술서',
  description: '송윤재의 프로젝트별 경력기술서 — 문제 정의, 가설, 액션, 성과, 인사이트',
};

// 회사별로 그룹핑
const companyOrder = ['moongklab', 'heavaa', 'blq', 'cube', 'delivery-rush'];

interface CareerPageProps {
  searchParams: Promise<{ recipient?: string }>;
}

export default async function CareerPage({ searchParams }: CareerPageProps) {
  const { recipient } = await searchParams;
  const recipientData = getRecipientData(recipient);

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* 페이지 헤더 */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            Career Detail
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">경력기술서</h1>
          <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
            각 프로젝트에서 정의한 문제, 세운 가설, 취한 액션, 그리고 결과
          </p>
        </div>

        {/* 범례 */}
        <div className="mb-12 p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--muted)] text-center">
          카드를 클릭하면 상세 내용을 볼 수 있습니다 ↓
        </div>

        {/* 회사별 섹션 */}
        {companyOrder.map((companyId) => {
          const details = careerDetails.filter((d) => d.companyId === companyId);
          return (
            <CompanySection
              key={companyId}
              companyId={companyId}
              details={details}
              highlights={recipientData?.careerHighlights}
            />
          );
        })}
      </div>
    </div>
  );
}

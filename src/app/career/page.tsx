import type { Metadata } from 'next';
import { careerDetails } from '@/data/career';
import CompanySection from '@/components/career/CompanySection';

export const metadata: Metadata = {
  title: '경력기술서',
  description: '송윤재의 프로젝트별 경력기술서. 왜 시작했는지, 무엇을 했는지, 결과와 배운 것',
};

// 회사는 최신순 (정본 RESUME_CORE.md 경력기술서와 같은 순서)
const companyOrder = ['heavaa', 'moongklab', 'blq'];

export default function CareerPage() {
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
            프로젝트 단위입니다. 회사는 최신순, 한 회사 안에서는 일이 일어난 순서로 적었습니다. 각
            항목은 왜 시작했는지에서 출발합니다.
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
            <CompanySection key={companyId} companyId={companyId} details={details} />
          );
        })}
      </div>
    </div>
  );
}

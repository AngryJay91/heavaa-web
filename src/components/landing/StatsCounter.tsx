'use client';

import { useCountUp } from '@/lib/hooks/useCountUp';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const stats: StatItem[] = [
  { label: '경력', value: 9, suffix: '년+', description: '서비스 기획 & PO 경력' },
  { label: '프로젝트', value: 15, suffix: '+', description: '기획·출시한 프로젝트' },
  { label: '출시 제품', value: 10, suffix: '+', description: '직접 출시한 프로덕트' },
  { label: '회사', value: 5, suffix: '개사', description: '다양한 도메인 경험' },
];

function StatCard({ stat }: { stat: StatItem }) {
  const { count, ref } = useCountUp({ end: stat.value, duration: 1800 });

  return (
    <div className="text-center p-6">
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="text-4xl md:text-5xl font-black text-[var(--accent)] mb-1"
      >
        {count}
        <span className="text-2xl md:text-3xl">{stat.suffix}</span>
      </p>
      <p className="font-semibold text-lg mb-1">{stat.label}</p>
      <p className="text-sm text-[var(--muted)]">{stat.description}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto px-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

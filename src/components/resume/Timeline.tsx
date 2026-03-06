'use client';

import { careers } from '@/data/resume';
import TimelineItem from './TimelineItem';

export default function Timeline() {
  return (
    <div className="relative">
      {/* 세로 라인 */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-40 md:-translate-x-px" />

      {/* 타임라인 아이템들 */}
      <div className="space-y-12 md:space-y-16">
        {careers.map((career, index) => (
          <TimelineItem key={career.id} career={career} index={index} />
        ))}
      </div>
    </div>
  );
}

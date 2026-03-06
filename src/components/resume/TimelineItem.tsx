'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type Career } from '@/data/resume';

interface TimelineItemProps {
  career: Career;
  index: number;
}

export default function TimelineItem({ career, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.93]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="relative flex items-start gap-6 md:gap-12"
    >
      {/* 타임라인 도트 */}
      <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 md:-translate-x-2 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] shadow-lg z-10" />

      {/* 카드 */}
      <div
        className={`ml-8 md:ml-0 w-full md:w-5/12 ${
          isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        }`}
      >
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--accent)] transition-colors duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5">
          {/* 기간 배지 */}
          <span className="inline-block text-xs font-mono text-[var(--muted)] bg-[var(--background)] border border-[var(--border)] px-3 py-1 rounded-full mb-3">
            {career.period.start} — {career.period.end}
          </span>

          {/* 회사명 & 역할 */}
          <h3 className="text-xl font-bold mb-1">{career.company}</h3>
          <p className="text-[var(--accent)] font-semibold mb-2">{career.role}</p>

          {career.description && (
            <p className="text-sm text-[var(--muted)] mb-4">{career.description}</p>
          )}

          {/* 프로젝트 리스트 */}
          {career.projects.length > 0 && (
            <ul className="space-y-2">
              {career.projects.map((project) => (
                <li key={project.id} className="flex items-start gap-2">
                  <span className="text-[var(--accent)] mt-1 flex-shrink-0">▸</span>
                  <div>
                    <Link
                      href={`/career#${project.id}`}
                      className="font-medium hover:text-[var(--accent)] transition-colors"
                    >
                      {project.name}
                    </Link>
                    <p className="text-sm text-[var(--muted)]">{project.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

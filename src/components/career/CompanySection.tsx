'use client';

import { motion } from 'framer-motion';
import { type CareerDetail } from '@/data/career';
import { careers } from '@/data/resume';
import ProjectCard from './ProjectCard';

interface CompanySectionProps {
  companyId: string;
  details: CareerDetail[];
}

export default function CompanySection({ companyId, details }: CompanySectionProps) {
  const career = careers.find((c) => c.id === companyId);
  if (!career || details.length === 0) return null;

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 회사 헤더 */}
      <div className="mb-6 pb-4 border-b border-[var(--border)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl font-black">{career.company}</h2>
            <p className="text-[var(--accent)] font-semibold">{career.role}</p>
          </div>
          <span className="text-sm font-mono text-[var(--muted)] bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-full self-start sm:self-auto">
            {career.period.start} — {career.period.end}
          </span>
        </div>
        {career.description && (
          <p className="mt-2 text-sm text-[var(--muted)]">{career.description}</p>
        )}
      </div>

      {/* 프로젝트 카드들 */}
      <div className="space-y-4">
        {details.map((detail) => (
          <ProjectCard key={detail.id} detail={detail} />
        ))}
      </div>
    </motion.div>
  );
}

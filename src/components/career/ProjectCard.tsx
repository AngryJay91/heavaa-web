'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type CareerDetail } from '@/data/career';
import InsightBlock from './InsightBlock';

interface ProjectCardProps {
  detail: CareerDetail;
}

export default function ProjectCard({ detail }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 추가 앵커 ID — resume.ts 딥링크 호환 */}
      {detail.additionalIds?.map((id) => (
        <span key={id} id={id} aria-hidden="true" />
      ))}
      <motion.div
        id={detail.id}
        className="border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-[var(--accent)] transition-colors duration-300"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        layout
      >
      {/* 카드 헤더 (항상 표시) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-[var(--card)] transition-colors"
        aria-expanded={isOpen}
        aria-label={`${detail.projectName} 상세 내용 ${isOpen ? '접기' : '펼치기'}`}
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">{detail.projectName}</h3>
          <p className="text-sm text-[var(--muted)]">{detail.summary}</p>
        </div>
        <motion.span
          className="text-[var(--muted)] flex-shrink-0 mt-1"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      {/* 펼쳐지는 상세 내용 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-5 border-t border-[var(--border)] pt-5">
              {/* 문제 정의 */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
                  🎯 문제 정의
                </h4>
                <p className="text-sm leading-relaxed">{detail.problem}</p>
              </div>

              {/* 가설 */}
              {detail.hypothesis && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
                    💭 가설
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{detail.hypothesis}</p>
                </div>
              )}

              {/* 액션 */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-3">
                  ⚡ 액션
                </h4>
                <div className="space-y-3">
                  {detail.actions.map((action, i) => (
                    <div key={i}>
                      <p className="font-semibold text-sm mb-1">• {action.title}</p>
                      <ul className="pl-4 space-y-1">
                        {action.details.map((detail, j) => (
                          <li key={j} className="text-sm text-[var(--muted)] leading-relaxed">
                            — {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 성과 */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-2">
                  📊 성과
                </h4>
                <ul className="space-y-1">
                  {detail.results.map((result, i) => (
                    <li key={i} className="text-sm leading-relaxed flex gap-2">
                      <span className="text-[var(--accent)] flex-shrink-0">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 인사이트 */}
              <InsightBlock insights={detail.insights} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </>
  );
}

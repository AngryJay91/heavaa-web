'use client';

import { motion } from 'framer-motion';
import { CoverSection as CoverSectionType } from '@/data/coverLetter';

const QUOTE_PREFIX = '"AI 제품의 성공은';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

interface Props {
  section: CoverSectionType;
}

export default function CoverSection({ section }: Props) {
  return (
    <motion.article
      className="mb-16 md:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
    >
      <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug">
        {section.heading}
      </h2>
      <div className="space-y-4">
        {section.paragraphs.map((para, idx) => {
          const isQuote = para.startsWith(QUOTE_PREFIX);
          if (isQuote) {
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-[var(--accent)] pl-4 py-1 my-6 text-base font-semibold text-[var(--foreground)] leading-relaxed"
              >
                {para}
              </blockquote>
            );
          }
          return (
            <p
              key={idx}
              className="text-base leading-relaxed text-[var(--muted)]"
            >
              {para}
            </p>
          );
        })}
      </div>
    </motion.article>
  );
}

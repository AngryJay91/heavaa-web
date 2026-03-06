'use client';

import { motion } from 'framer-motion';
import { educations } from '@/data/resume';

export default function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {educations.map((edu, index) => (
        <motion.div
          key={edu.school}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-muted font-medium uppercase tracking-wide mb-1">
                {edu.degree}
              </p>
              <h3 className="font-bold text-foreground">{edu.school}</h3>
              <p className="text-sm text-accent mt-1">{edu.major}</p>
            </div>
            <span className="text-xs text-muted bg-surface-2 px-3 py-1 rounded-full shrink-0">
              {edu.period.start} ~ {edu.period.end}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

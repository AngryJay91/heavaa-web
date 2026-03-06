'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/resume';
import { staggerContainer, tagPopIn } from '@/lib/utils/animations';

export default function SkillCloud() {
  return (
    <div className="space-y-8">
      {skills.map((skillGroup) => (
        <div key={skillGroup.category}>
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            {skillGroup.category}
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="flex flex-wrap gap-2"
          >
            {skillGroup.items.map((skill) => (
              <motion.span
                key={skill}
                variants={tagPopIn}
                className="px-4 py-2 rounded-xl bg-surface border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

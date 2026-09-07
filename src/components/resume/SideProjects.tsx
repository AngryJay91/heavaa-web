'use client';

import { motion } from 'framer-motion';
import { sideProjects } from '@/data/resume';
import Tag from '@/components/ui/Tag';
import { staggerContainer, fadeUp } from '@/lib/utils/animations';
import Link from 'next/link';

export default function SideProjects() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid gap-4 sm:grid-cols-2"
    >
      {sideProjects.map((project) => (
        <motion.div key={project.id} variants={fadeUp}>
          <Link
            href={`/career#${project.id}`}
            className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]"
          >
            <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-[var(--muted)] mb-4">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

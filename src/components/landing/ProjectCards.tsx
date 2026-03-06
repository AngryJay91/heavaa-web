'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import Tag from '@/components/ui/Tag';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, rotateX, transformPerspective: 1000 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors duration-300 group cursor-pointer"
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isEven
            ? 'bg-gradient-to-br from-accent/5 to-transparent'
            : 'bg-gradient-to-br from-purple-500/5 to-transparent'
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-3xl">{project.emoji}</span>
            <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-accent font-medium mt-1">{project.tagline}</p>
          </div>
          {project.status === 'active' && (
            <span className="flex items-center gap-1.5 text-xs text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              운영중
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} variant="default">
              {tag}
            </Tag>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            {project.url.includes('github.com') ? 'GitHub →' : '사이트 방문 →'}
          </a>
        )}
        {project.urls && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.urls.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectCards() {
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            헤바 유니버스 🌌
          </h2>
          <p className="mt-3 text-muted">
            직접 기획하고 만든 프로덕트들
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

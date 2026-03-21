'use client';

import { useRef } from 'react';
import Image from 'next/image';
import RecipientLink from '@/components/ui/RecipientLink';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroSectionProps {
  tagline?: string;
  subtitle?: string;
}

export default function HeroSection({ tagline, subtitle }: HeroSectionProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.15]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 배경 그라디언트 (parallax) */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 dark:from-indigo-900/20 dark:to-purple-900/20" />
        {/* 배경 블러 원 */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* 메인 컨텐츠 */}
      <motion.div
        className="text-center px-4 max-w-4xl mx-auto"
        style={{ opacity, scale }}
      >
        {/* 프로필 사진 */}
        <motion.div
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 rounded-full overflow-hidden shadow-xl ring-4 ring-white/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/profile.jpg"
            alt="송윤재 프로필"
            width={144}
            height={144}
            className="w-full h-full object-cover object-top"
            priority
          />
        </motion.div>

        {/* 이름 */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          송윤재
        </motion.h1>

        {/* 부제 */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {tagline && subtitle ? (
            <>
              {subtitle}{' '}
              <span className="text-[var(--accent)] font-semibold">{tagline}</span>
            </>
          ) : (
            <>
              데이터로 문제를 정의하고,{' '}
              <span className="text-[var(--accent)] font-semibold">팀과 함께 해결하는</span>{' '}
              Product Owner
            </>
          )}
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <RecipientLink
            href="/resume"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-semibold hover:bg-[var(--accent-light)] transition-colors shadow-lg shadow-indigo-500/25"
          >
            이력서 보기
          </RecipientLink>
          <a
            href="#projects"
            className="px-6 py-3 border border-[var(--border)] rounded-xl font-semibold hover:bg-[var(--card)] transition-colors"
          >
            프로덕트 보기 ↓
          </a>
          <RecipientLink
            href="/contact"
            className="px-6 py-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            연락하기 →
          </RecipientLink>
        </motion.div>
      </motion.div>

      {/* 스크롤 힌트 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: scrollHintOpacity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[var(--muted)] rounded-full flex justify-center"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="w-1 h-2 bg-[var(--muted)] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

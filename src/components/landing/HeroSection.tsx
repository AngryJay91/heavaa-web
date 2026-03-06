'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
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
        {/* 프로필 아바타 */}
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          송
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
          문제를 구조화하고,{' '}
          <span className="text-[var(--accent)] font-semibold">검증가능한 제품을 만드는</span>{' '}
          Product Builder
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/resume"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-semibold hover:bg-[var(--accent-light)] transition-colors shadow-lg shadow-indigo-500/25"
          >
            이력서 보기
          </Link>
          <Link
            href="/career"
            className="px-6 py-3 border border-[var(--border)] rounded-xl font-semibold hover:bg-[var(--card)] transition-colors"
          >
            경력기술서
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            연락하기 →
          </Link>
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

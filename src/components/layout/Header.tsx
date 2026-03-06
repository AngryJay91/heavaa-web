'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { siteConfig } from '@/data/site';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          {siteConfig.name}
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[var(--accent)]',
                pathname === item.href
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--muted)]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 버튼들 */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import RecipientLink from '@/components/ui/RecipientLink';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { siteConfig } from '@/data/site';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-16 bg-[var(--background)]/95 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {siteConfig.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <RecipientLink
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-2xl font-semibold transition-colors hover:text-[var(--accent)]',
                    pathname === item.href ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'
                  )}
                >
                  {item.label}
                </RecipientLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

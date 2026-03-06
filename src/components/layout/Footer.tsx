import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {siteConfig.nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">
          Built with Next.js + Framer Motion
        </p>
      </div>
    </footer>
  );
}

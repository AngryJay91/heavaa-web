import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: '연락처',
  description: '송윤재에게 연락하세요',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 w-full">
        {/* 페이지 헤더 */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">연락하기</h1>
          <p className="text-[var(--muted)] text-lg">
            새로운 기회, 협업 제안, 그냥 안부 인사도 환영합니다
          </p>
        </div>

        {/* 연락처 카드들 */}
        <div className="space-y-4">
          {/* 이메일 */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-5 p-6 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5 group"
          >
            <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--accent)]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">이메일</p>
              <p className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                {siteConfig.contact.email}
              </p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* 전화 */}
          <a
            href={`tel:${siteConfig.contact.phone?.replace(/-/g, '')}`}
            className="flex items-center gap-5 p-6 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5 group"
          >
            <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--accent)]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">전화</p>
              <p className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                {siteConfig.contact.phone}
              </p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* GitHub */}
          {siteConfig.contact.github && (
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5 group"
            >
              <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--accent)]">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">GitHub</p>
                <p className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  github.com/AngryJay91
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}
        </div>

        {/* 메시지 */}
        <div className="mt-12 text-center">
          <p className="text-[var(--muted)] text-sm">
            보통 24시간 이내에 답장드립니다 📮
          </p>
        </div>
      </div>
    </div>
  );
}

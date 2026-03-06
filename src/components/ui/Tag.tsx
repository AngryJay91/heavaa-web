import { cn } from '@/lib/utils/cn';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export default function Tag({ children, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        variant === 'default'
          ? 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)]'
          : 'bg-[var(--accent)] text-white',
        className
      )}
    >
      {children}
    </span>
  );
}

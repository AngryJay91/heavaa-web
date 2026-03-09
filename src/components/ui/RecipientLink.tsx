'use client';

import { Suspense, type ComponentProps } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type LinkProps = ComponentProps<typeof Link>;

function RecipientLinkInner({ href, ...props }: LinkProps) {
  const searchParams = useSearchParams();
  const recipient = searchParams.get('recipient');

  const hrefStr = href.toString();
  const isExternal =
    hrefStr.startsWith('http://') ||
    hrefStr.startsWith('https://') ||
    hrefStr.startsWith('mailto:') ||
    hrefStr.startsWith('tel:');
  const isAnchorOnly = hrefStr.startsWith('#');

  let finalHref: LinkProps['href'] = href;
  if (recipient && !isExternal && !isAnchorOnly) {
    const separator = hrefStr.includes('?') ? '&' : '?';
    finalHref = `${hrefStr}${separator}recipient=${encodeURIComponent(recipient)}`;
  }

  return <Link href={finalHref} {...props} />;
}

/**
 * Next.js Link 래퍼 — 현재 URL의 `recipient` 쿼리 파라미터를 내부 링크에 자동 전파.
 * - 외부 링크(http/https/mailto/tel), 앵커 전용(`#xxx`)은 건드리지 않음.
 * - recipient가 없으면 일반 Link와 동일하게 동작.
 * - Suspense 경계 내장 → 서버 컴포넌트에서도 직접 사용 가능.
 */
export default function RecipientLink(props: LinkProps) {
  return (
    <Suspense fallback={<Link {...props} />}>
      <RecipientLinkInner {...props} />
    </Suspense>
  );
}

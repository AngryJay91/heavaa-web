/**
 * recipient 유틸리티
 *
 * ?recipient=paytalab 같은 쿼리 파라미터를 받아
 * 해당 오버라이드 데이터를 반환합니다.
 *
 * 동적 import 대신 정적 매핑으로 빌드 안정성 확보.
 */

import type { CoverSection } from '@/data/coverLetter';

export interface RecipientData {
  heroOverride?: {
    tagline: string;
    subtitle: string;
  };
  sideProjectFilter?: string[];
  careerHighlights?: string[];
  coverSections?: CoverSection[];
  motivationText?: string;
  workStyleText?: string;
}

// ── 정적 매핑 (새 recipient 추가 시 여기에만 추가) ──────────────────
type RecipientKey = 'paytalab';

const recipientMap: Record<RecipientKey, () => RecipientData> = {
  paytalab: () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const m = require('@/data/recipients/paytalab');
    return {
      heroOverride: m.heroOverride,
      sideProjectFilter: m.sideProjectFilter,
      careerHighlights: m.careerHighlights,
      coverSections: m.coverSections,
      motivationText: m.motivationText,
      workStyleText: m.workStyleText,
    };
  },
};

/**
 * recipient 파라미터에 해당하는 오버라이드 데이터를 반환합니다.
 * 알 수 없는 recipient이거나 파라미터가 없으면 null을 반환합니다.
 */
export function getRecipientData(recipient?: string): RecipientData | null {
  if (!recipient) return null;

  const loader = recipientMap[recipient as RecipientKey];
  if (!loader) return null;

  try {
    return loader();
  } catch {
    return null;
  }
}

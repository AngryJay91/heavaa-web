/**
 * Product Builder 톤 오버라이드
 *
 * ?recipient=product-builder 파라미터로 활성화
 * 0→1 빌더 톤 — 기존 default에서 보존된 Product Builder 포지셔닝
 */

// ── 히어로 오버라이드 ──────────────────────────────────────────────
export const heroOverride = {
  tagline: 'Product Builder',
  subtitle: '문제를 구조화하고, 검증가능한 제품을 만드는',
};

// ── 사이드 프로젝트 필터 (노출할 ID만) ─────────────────────────────
export const sideProjectFilter = ['popilot', 'agent-earth'];
// 빌더 톤에 맞는 프로젝트만 노출

// ── 경력기술서 하이라이트 (전부 노출) ──────────────────────────────
// undefined → 기본값 사용 (전체 노출)
export const careerHighlights = undefined;

// ── 자기소개서 (없음) ──────────────────────────────────────────────
export const coverSections = undefined;
export const motivationText = undefined;
export const workStyleText = undefined;

/** Produktions-Origin für Canonicals (immer absolut, ohne Trailing Slash, ohne Query). */
export const SITE_ORIGIN = 'https://seomuenchen.com'

/**
 * Selbstreferenzierendes Canonical, zeichengleich zur Sitemap.
 * Root → https://seomuenchen.com (ohne Slash).
 */
export function absoluteCanonical(path: string = '/'): string {
  const clean = path.split('?')[0].split('#')[0].replace(/\/+$/, '')
  if (!clean || clean === '/') return SITE_ORIGIN
  return `${SITE_ORIGIN}${clean.startsWith('/') ? clean : `/${clean}`}`
}

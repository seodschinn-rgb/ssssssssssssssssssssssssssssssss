/**
 * Berechnet die Lesezeit eines Artikels anhand des HTML-Inhalts.
 * Basis: ~200 Wörter/Minute (deutsche Texte).
 */
const WORDS_PER_MINUTE = 200

export function getReadingTimeMinutes(htmlContent: string): number {
  const text = htmlContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
  return minutes
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) return '1 Min. Lesezeit'
  return `${minutes} Min. Lesezeit`
}

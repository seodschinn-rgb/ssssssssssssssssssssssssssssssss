/**
 * JSON-LD für <script type="application/ld+json"> — verhindert, dass Zeichenfolgen
 * mit "</script>" o. Ä. das Script-Tag vorzeitig beenden (Parser-Fehler / weiße Seite).
 */
export function jsonLdStringify(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

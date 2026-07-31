/**
 * Texte für PreiseTeaserBox auf /leistungen/* (Dev-Bundle canonical-preise-links).
 * Wortlaut 1:1 aus dem Bundle — bei Paketpreis-Änderungen 990 / 2.990 mit /preise syncen.
 */
export const LEISTUNG_PREISE_TEASER: Record<
  string,
  { lead: string; text: string; anchor: string }
> = {
  'seo-audit': {
    lead: 'Was kostet das?',
    text: 'Das SEO-Audit ist in jedem unserer SEO-Pakete enthalten. Was die komplette Betreuung kostet, siehst du auf einen Blick: 5 Pakete mit festen Monatspreisen von 990 bis 2.990 EUR.',
    anchor: 'Alle SEO-Pakete und Preise ansehen',
  },
  'keyword-recherche': {
    lead: 'Und was kostet das?',
    text: 'Die Keyword-Recherche ist fester Teil unserer laufenden SEO-Betreuung. Was dich die monatlichen Pakete kosten, zeigen wir dir transparent und ohne Blackbox.',
    anchor: 'Was kostet SEO? Zu den Preisen',
  },
  'local-seo': {
    lead: 'Transparente Preise:',
    text: 'Local SEO wirkt am stärksten als kontinuierliche Betreuung. Alle 5 Pakete mit ihrem Leistungsumfang und festen Monatspreisen findest du auf unserer Preisseite.',
    anchor: 'SEO-Betreuung ab 990 EUR im Monat: alle Pakete',
  },
  'technisches-seo': {
    lead: 'Feste Monatspreise:',
    text: 'Technisches SEO ist ein Kernbaustein jeder SEO-Betreuung bei uns. Statt offener Stundensätze zahlst du einen festen Monatspreis, je nach Paket zwischen 990 und 2.990 EUR.',
    anchor: 'Zu den Paketen mit Festpreisen',
  },
  'reporting-kpis': {
    lead: 'Alles inklusive:',
    text: 'Monatliches Reporting ist in jedem SEO-Paket enthalten, ohne Aufpreis. Was die Betreuung insgesamt kostet, steht transparent auf unserer Preisseite.',
    anchor: 'SEO-Preise im Überblick ansehen',
  },
  linkaufbau: {
    lead: 'Preise auf einen Blick:',
    text: 'Seriöser Linkaufbau braucht Kontinuität und ist deshalb Teil unserer laufenden SEO-Betreuung. Welches Paket zu deinem Budget passt, siehst du im direkten Vergleich.',
    anchor: 'Pakete und Preise vergleichen',
  },
  'onpage-optimierung': {
    lead: 'Und die Kosten?',
    text: 'Die OnPage-Optimierung läuft in unserer SEO-Betreuung Monat für Monat mit. Auf der Preisseite siehst du alle 5 Pakete mit Leistungsumfang und festen Monatspreisen.',
    anchor: 'Monatspreise und Leistungsumfang ansehen',
  },
  'geo-agentur': {
    lead: 'Transparent kalkuliert:',
    text: 'Sichtbarkeit in KI-Suchen denken wir in der SEO-Betreuung direkt mit. Unsere Pakete kosten feste Monatspreise von 990 bis 2.990 EUR, ohne versteckte Extras.',
    anchor: 'Zur Preisübersicht mit allen Paketen',
  },
}

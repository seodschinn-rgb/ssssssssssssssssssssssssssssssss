/** One source for the visible pricing page and its structured offers. */
export const PREISE_PACKAGES = [
  { id: 'starter', name: 'Starter', price: 990, label: 'Die Basis aufbauen',
    target: 'Für lokale Unternehmen und Startups.',
    features: ['SEO-Audit und Setup zum Start', 'Keyword-Recherche für deine wichtigsten Themen', 'Local SEO und Google-Unternehmensprofil', 'OnPage-Optimierung deiner Top-Seiten', 'Monatliches Reporting'] },
  { id: 'growth', name: 'Growth', price: 1590, label: 'Kontinuierlich optimieren',
    target: 'Für wachsende KMU mit mehr Umsetzungsbedarf.',
    features: ['Alles aus Starter, mit mehr Umsetzung pro Monat', 'Erweiterte Keyword-Recherche mit Wettbewerbsblick', 'Technisches SEO: Crawling, Indexierung, Ladezeit', 'Laufende OnPage-Optimierung', 'Strategie-Call pro Quartal'] },
  { id: 'business', name: 'Business', price: 2390, label: 'Mehr Leistungsbereiche',
    target: 'Für etablierte Mittelständler mit klaren Geschäftszielen.',
    features: ['Alles aus Growth, mit höherem Umsetzungsumfang', 'Technisches SEO inklusive strukturierter Daten', 'Linkaufbau', 'SEO-Beratung zu Content, Struktur und Conversion', 'KPI-Reporting für die Geschäftsführung'] },
  { id: 'professional', name: 'Professional', price: 2590, label: 'SEO und KI-Suche verbinden',
    target: 'Für ambitionierte Unternehmen in umkämpften Märkten.',
    features: ['Alles aus Business, plus Fokus auf KI-Suche', 'GEO: ChatGPT, Perplexity und AI Overviews', 'Priorisierter Linkaufbau', 'Engmaschiges Ranking- und Wettbewerbs-Monitoring', 'Monatliche Strategie-Termine'] },
  { id: 'enterprise', name: 'Enterprise', price: 2990, label: 'Komplexe Projekte begleiten',
    target: 'Für große Websites und komplexe Anforderungen.',
    features: ['Alles aus Professional, an die Komplexität angepasst', 'Große Websites, mehrere Standorte oder Relaunches', 'Individuelle SEO-Roadmap mit Meilensteinen', 'Workshops für dein internes Team', 'Enge Abstimmung mit Marketing und IT'] },
] as const

export function formatPreis(price: number): string {
  return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(price)
}

// Owner clarification requested; do not infer net/gross or a VAT exemption.
export const PREISE_TAX_NOTE = ''

export const PREISE_COMPARISON: { name: string; href?: string; values: readonly (string | boolean)[] }[] = [
  { name: 'SEO-Audit & Setup zum Start', href: '/leistungen/seo-audit', values: [true, true, true, true, true] },
  { name: 'Keyword-Recherche', href: '/leistungen/keyword-recherche', values: ['Basis', 'Erweitert', 'Umfassend', 'Umfassend', 'Umfassend'] },
  { name: 'OnPage-Optimierung', href: '/leistungen/onpage-optimierung', values: ['Top-Seiten', 'Laufend', 'Laufend', 'Laufend', 'Laufend'] },
  { name: 'Local SEO', href: '/leistungen/local-seo', values: [true, true, true, true, 'Mehrere Standorte'] },
  { name: 'Technisches SEO', href: '/leistungen/technisches-seo', values: ['Basis-Check', true, 'Inkl. Schema', 'Inkl. Schema', 'Inkl. Schema'] },
  { name: 'Linkaufbau', href: '/leistungen/linkaufbau', values: [false, false, true, 'Priorisiert', 'Priorisiert'] },
  { name: 'GEO · KI-Suche', href: '/leistungen/geo-agentur', values: [false, false, false, true, true] },
  { name: 'Monitoring & Reporting', href: '/leistungen/reporting-kpis', values: ['Monatlich', 'Monatlich', 'KPI-Reporting', 'KPI-Reporting', 'KPI-Reporting'] },
  { name: 'Fester Ansprechpartner', values: [true, true, true, true, true] },
  { name: 'Strategie-Termine', values: ['Im Reporting', 'Quartalsweise', 'Quartalsweise', 'Monatlich', 'Monatlich + Workshops'] },
]

export const PREISE_FAQS = [
  { question: 'Gibt es eine Mindestlaufzeit?',
    answer: 'Laufzeit, Kündigungsfrist und genauer Umfang werden im individuellen Angebot vereinbart. Das kostenlose Erstgespräch verpflichtet dich nicht zur Buchung. Eine längere Zusammenarbeit kann für die Umsetzung sinnvoll sein; eine Empfehlung ist jedoch keine Vertragslaufzeit.' },
  { question: 'Was klären wir im Erstgespräch?',
    answer: 'Wir besprechen deine Website, Ziele und Ausgangslage und ordnen ein, welcher Leistungsumfang dazu passt. Das Erstgespräch ist kostenlos und unverbindlich und kann telefonisch oder per Video stattfinden.' },
  { question: 'Kann ich mein Paket später wechseln?',
    answer: 'Ja, ein größerer oder kleinerer Umfang kann mit deinem Ansprechpartner abgestimmt werden. Die geänderten Leistungen, den Preis und den Zeitpunkt des Wechsels vereinbaren wir gemeinsam.' },
  { question: 'Ist der Paketumfang fest vorgegeben?',
    answer: 'Die Karten und der Vergleich zeigen den typischen Zuschnitt. Welche Seiten, Themen und Aufgaben wir konkret bearbeiten, legen wir für deine Website fest. Individuelle Abweichungen werden vor dem Start abgestimmt.' },
  { question: 'Sind bestimmte Rankings garantiert?',
    answer: 'Nein. Wir vereinbaren konkrete Arbeitsschritte und dokumentieren die Entwicklung. Eine bestimmte Google-Position, zusätzliche Anfragen oder ein festes Ergebnisdatum lassen sich daraus nicht garantieren.' },
  { question: 'Wann lässt sich die Entwicklung beurteilen?',
    answer: 'Das hängt unter anderem vom bisherigen Zustand deiner Website, der Nachfrage, dem Wettbewerb und den umgesetzten Maßnahmen ab. Wir betrachten passende Kennzahlen über vergleichbare Zeiträume. Ein einzelner Monatswert genügt nicht immer für eine belastbare Aussage.' },
  { question: 'Kann ich auch ein einzelnes Projekt anfragen?',
    answer: 'Ja. Ein abgegrenztes Audit, eine technische Prüfung oder die Überarbeitung bestimmter Seiten kann separat angeboten werden. Die hier gezeigten Monatspreise gelten für laufende Betreuung und sind keine Einzelpreise für solche Projekte.' },
] as const

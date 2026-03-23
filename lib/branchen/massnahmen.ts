import type { BrancheMassnahme } from './types'

/** Die fünf Kernmaßnahmen — Texte leicht an Branche angepasst */
export function buildStandardMassnahmen(
  branchePlural: string,
  brancheKontext: string,
  contentHint: string
): BrancheMassnahme[] {
  return [
    {
      title: 'Google Business Profile optimieren',
      body: `Für ${branchePlural} in München ist das Unternehmensprofil oft der schnellste Hebel: Kategorien, Attribute, Öffnungszeiten und hochwertige Bilder — abgestimmt auf Suchanfragen wie „${brancheKontext} München“. So wirst du in der lokalen Pack und auf Maps sichtbar.`,
    },
    {
      title: 'Lokale Keywords gezielt einsetzen',
      body: `Wir strukturieren Website, Landingpages und interne Verlinkung so, dass du für Stadtteile, Services und typische Patienten-/Kundenanfragen aus der Region rankst — ohne Keyword-Stuffing, dafür mit klarer Suchintention.`,
    },
    {
      title: 'Bewertungen aktiv managen',
      body: `Vertrauen entscheidet bei ${branchePlural} oft über den Klick. Wir helfen dir, Prozesse für echte Google-Rezensionen aufzusetzen, professionell zu antworten und Signale zu nutzen, die auch außerhalb von Google wirken.`,
    },
    {
      title: `Branchenspezifische Inhalte: ${contentHint}`,
      body: `Google belohnt Expertise. Wir planen Themen-Cluster, FAQs und Unterseiten, die genau die Fragen beantworten, die deine Zielgruppe in München und Bayern sucht — inklusive E-E-A-T und strukturierter Daten wo sinnvoll.`,
    },
    {
      title: 'Technisches SEO & Ladezeiten',
      body: `Core Web Vitals, saubere Indexierung, Crawl-Budget und fehlerfreie Mobile-Darstellung — besonders wichtig, wenn Nutzer unterwegs nach dir suchen. Technik ist das Fundament, damit Inhalte und Local SEO wirken können.`,
    },
  ]
}

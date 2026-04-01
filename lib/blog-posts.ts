/**
 * Blog-Posts – Metadaten und Zuordnung zu Kategorien
 */

import { keywordMappingAnleitungContent } from './blog-posts/keyword-mapping-anleitung-content'
import { schemaMarkupAnleitungContent } from './blog-posts/schema-markup-anleitung-content'
import { interneVerlinkungAnleitungContent } from './blog-posts/interne-verlinkung-anleitung-content'
import { onpageSeoChecklisteContent } from './blog-posts/onpage-seo-checkliste-content'
import { keywordRechercheAnleitungContent } from './blog-posts/keyword-recherche-anleitung-content'
import { backlinkAufbauGrundlagenContent } from './blog-posts/backlink-aufbau-grundlagen-content'
import { seoToolsAnfaengerContent } from './blog-posts/seo-tools-anfaenger-content'
import { seoKosten2026Content } from './blog-posts/seo-kosten-2026-content'
import { seoAuditChecklisteContent } from './blog-posts/seo-audit-checkliste-content'
import { localSeoGuide2026Content } from './blog-posts/local-seo-guide-2026-content'
import { googleBusinessProfileOptimieren2026Content } from './blog-posts/google-business-profile-optimieren-2026-content'
import { seoFuerKleineUnternehmen2026Content } from './blog-posts/seo-fuer-kleine-unternehmen-2026-content'
import { googleRankingVerbessern2026Content } from './blog-posts/google-ranking-verbessern-2026-content'
import { googlePenalty2026Content } from './blog-posts/google-penalty-2026-content'

export interface BlogPostFAQ {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  /** Optional: Fokus-Keyword für Meta keywords */
  focusKeyword?: string
  category: string
  content: string
  /** Optional: Pfad zum Thumbnail (z. B. /images/blog/slug.png) */
  image?: string
  /** Alt-Text für das Thumbnail (für Barrierefreiheit & SEO) */
  imageAlt?: string
  /** Optional: FAQs für FAQPage-Schema (Rich Snippets) */
  faqs?: BlogPostFAQ[]
  /** Optional: Anzeigename in der BlogAuthorBox (Standard: Joel Siebert) */
  authorName?: string
}

const POSTS: BlogPost[] = [
  {
    slug: 'seo-fuer-kleine-unternehmen',
    title: 'SEO für kleine Unternehmen: Der komplette Leitfaden (2026)',
    metaTitle: 'SEO für kleine Unternehmen: Der komplette Leitfaden (2026)',
    metaDescription:
      'SEO für kleine Unternehmen: Leitfaden mit Strategie, Budget-Tipps, Checkliste und Local SEO. So positionierst du dein KMU sichtbar bei Google.',
    focusKeyword: 'SEO für kleine Unternehmen',
    authorName: 'Julian Schäfer',
    category: 'seo-grundlagen',
    content: seoFuerKleineUnternehmen2026Content,
    image: '/images/blog/seo-fuer-kleine-unternehmen-thumbnail.webp',
    imageAlt:
      'SEO für kleine Unternehmen 2026: Local SEO, Kosten und ROI für KMU — Leitfaden',
    faqs: [
      {
        question: 'Lohnt sich SEO für kleine Unternehmen?',
        answer:
          'Ja, in den meisten Fällen lohnt sich SEO für kleine Unternehmen. Die organische Suche ist laut BrightEdge für über 53 Prozent des gesamten Website-Traffics verantwortlich. SEO-Leads haben eine deutlich höhere Abschlussrate als Leads aus anderen Kanälen. Besonders Local SEO bietet KMU die Möglichkeit, in ihrer Region gezielt sichtbar zu werden, ohne mit großen Konzernen direkt konkurrieren zu müssen.',
      },
      {
        question: 'Was kostet SEO für ein kleines Unternehmen pro Monat?',
        answer:
          'Die monatlichen SEO Kosten KMU variieren je nach Umfang und Wettbewerb. Für rein lokales SEO solltest du mit 500 bis 1.500 EUR pro Monat rechnen. Ein breiteres KMU-Paket (lokal plus überregional) liegt typischerweise bei 1.000 bis 3.000 EUR pro Monat. Ein einmaliges SEO-Audit kostet zwischen 800 und 3.000 EUR. Über die BAFA-Förderung kannst du unter Umständen bis zu 50 Prozent der Beratungskosten erstattet bekommen (in bestimmten Fällen bis zu 80 Prozent).',
      },
      {
        question: 'Wie lange dauert es, bis SEO Ergebnisse zeigt?',
        answer:
          'Erfahrungsgemäß dauert es drei bis sechs Monate, bis erste messbare Ergebnisse sichtbar werden. Bei starkem Wettbewerb können auch neun bis zwölf Monate nötig sein. Local SEO zeigt in der Regel schneller Wirkung als überregionale SEO-Maßnahmen. Der Break-even wird typischerweise nach sieben bis neun Monaten erreicht.',
      },
      {
        question: 'Kann ich SEO als kleines Unternehmen selber machen?',
        answer:
          'Die Grundlagen von SEO sind erlernbar. Google Business Profile optimieren, einfache OnPage-Anpassungen und Bewertungsmanagement kannst du selbst übernehmen. Plane dafür 5 bis 10 Stunden pro Woche ein. Für technische Optimierungen, Content-Strategien und den Aufbau in umkämpften Märkten wie München ist professionelle Unterstützung in der Regel empfehlenswert.',
      },
      {
        question: 'Was ist wichtiger: Local SEO oder "normales" SEO?',
        answer:
          'Für die meisten kleinen Unternehmen mit physischem Standort oder regionaler Zielgruppe ist Local SEO der wichtigste Startpunkt. 46 Prozent aller Google-Suchen haben einen lokalen Intent. Wenn du einen Laden, eine Praxis oder ein Büro in München hast, sollte Local SEO deine erste Priorität sein. "Normales" SEO (also die Optimierung für überregionale Suchbegriffe) wird wichtig, wenn du über deine Region hinaus wachsen willst oder ein Online-Geschäft betreibst.',
      },
      {
        question: 'Brauche ich SEO, wenn ich schon Google Ads nutze?',
        answer:
          'Ja. SEO und Google Ads ergänzen sich, ersetzen sich aber nicht. Google Ads liefern sofortigen Traffic, kosten aber bei jedem Klick Geld. SEO baut langfristig organische Sichtbarkeit auf, die auch ohne laufende Werbeausgaben bestehen bleibt. Studien zeigen zudem, dass Websites, die sowohl organisch als auch über Anzeigen sichtbar sind, insgesamt mehr Klicks erhalten. Für Münchner KMU empfehlen wir: Google Ads für kurzfristige Ergebnisse, SEO für nachhaltiges Wachstum.',
      },
      {
        question: 'Wie finde ich eine gute SEO-Agentur für mein kleines Unternehmen?',
        answer:
          'Achte auf folgende Kriterien: nachweisbare Ergebnisse (Case Studies, Referenzen), transparente Kommunikation (monatliche Reports, klare Erklärungen), faire Vertragskonditionen (keine langen Knebelverträge), realistische Erwartungshaltung (keine Ranking-Garantien) und Branchenerfahrung. Eine gute Agentur nimmt sich Zeit für ein ausführliches, kostenloses Erstgespräch (ohne Bindung), bevor sie ein Angebot macht. Regionale Agenturen, die den Münchner Markt kennen, sind für lokale Unternehmen oft die bessere Wahl als große überregionale Anbieter.',
      },
      {
        question: 'Ist SEO noch relevant mit KI wie ChatGPT?',
        answer:
          'Ja, SEO ist weiterhin relevant. Zwar verändern KI-Suchfunktionen (Google AI Overviews, ChatGPT, Perplexity) die Art, wie Nutzer Informationen finden. Aber die Grundprinzipien bleiben gleich: hochwertige Inhalte, technisch saubere Websites und lokale Relevanz. KI-Suchmaschinen brauchen Quellen, und diese Quellen sind Websites, die gut optimiert sind. Wer jetzt in SEO investiert, stellt sich auch für die KI-gestützte Suche der Zukunft auf.',
      },
      {
        question: 'Gibt es Fördermittel für SEO-Beratung?',
        answer:
          'Ja. Die BAFA fördert Unternehmensberatungen für KMU mit bis zu 50 Prozent der Beratungskosten (in Bayern für etablierte Unternehmen), in bestimmten Fällen sogar bis zu 80 Prozent (maximal 3.200 EUR Zuschuss). SEO-Beratung kann im Rahmen einer Marketingberatung förderfähig sein. Voraussetzung ist, dass die Beratung durch einen zugelassenen Berater erfolgt. Gerade für Münchner Unternehmen, die zum ersten Mal professionelle SEO-Beratung in Anspruch nehmen, ist die BAFA-Förderung eine attraktive Möglichkeit. Die aktuellen Konditionen findest du auf der BAFA-Website.',
      },
      {
        question: 'Was ist der schnellste SEO-Erfolg für kleine Unternehmen?',
        answer:
          'Der schnellste und gleichzeitig wirkungsvollste Einstieg ist die Optimierung deines Google Business Profiles. Ein vollständig ausgefülltes Profil mit Fotos, korrekten Öffnungszeiten, der richtigen Kategorie und einigen positiven Bewertungen kann die lokale Sichtbarkeit innerhalb weniger Wochen deutlich verbessern. Als zweiten Schritt empfehlen wir die Optimierung der Title Tags und Meta Descriptions auf deinen wichtigsten Seiten, da Google diese Änderungen relativ schnell verarbeitet.',
      },
    ],
  },
  {
    slug: 'google-penalty-erkennen-beheben',
    title: 'Google Penalty erkennen und beheben: Der komplette Leitfaden (2026)',
    metaTitle: 'Google Penalty erkennen und beheben: Kompletter Leitfaden 2026',
    metaDescription:
      'Google Penalty erkennen und beheben: Manuelle Maßnahmen, algorithmische Abstufungen und Recovery-Prozess. Schritt-für-Schritt für KMU in München.',
    focusKeyword: 'Google Penalty erkennen',
    authorName: 'Julian Schäfer',
    category: 'seo-grundlagen',
    content: googlePenalty2026Content,
    image: '/images/blog/google-penalty-thumbnail.webp',
    imageAlt:
      'Google Penalty erkennen und beheben: Leitfaden mit Ursachen, Diagnose und Recovery-Prozess',
    faqs: [
      {
        question: 'Was ist eine Google Penalty?',
        answer:
          'Eine Google Penalty ist eine Herabstufung deiner Website in den Suchergebnissen. Sie kann als manuelle Maßnahme (durch einen Google-Mitarbeiter) oder als algorithmische Abstufung (durch ein Algorithmus-Update) erfolgen. Die Folge ist in beiden Fällen ein Verlust von Rankings und organischem Traffic.',
      },
      {
        question: 'Wie erkenne ich, ob meine Website abgestraft wurde?',
        answer:
          'Prüfe zuerst die Google Search Console unter Sicherheit & manuelle Maßnahmen auf direkte Benachrichtigungen. Analysiere dann deine Traffic-Daten in Google Analytics 4 auf plötzliche Einbrüche. Vergleiche den Zeitpunkt eines Einbruchs mit bekannten Google Updates.',
      },
      {
        question: 'Wie lange dauert die Recovery?',
        answer:
          'Bei manuellen Maßnahmen dauert die Behebung erfahrungsgemäß mehrere Wochen bis einige Monate nach Einreichung des Überprüfungsantrags. Algorithmische Recoveries benötigen typischerweise 4 bis 6 Monate. In schweren Fällen kann es bis zu zwei Jahre dauern.',
      },
      {
        question: 'Kann KI-generierter Content zu einer Penalty führen?',
        answer:
          'Ja. Google geht seit 2025 verstärkt gegen Scaled Content Abuse vor. Das betrifft massenhaft veröffentlichte KI-Texte ohne redaktionellen Mehrwert. KI als Schreibwerkzeug ist nicht das Problem — fehlende Qualitätskontrolle und das Veröffentlichen ohne menschliche Überarbeitung sind das Risiko.',
      },
      {
        question: 'Kostet eine Penalty Recovery extra?',
        answer:
          'Das hängt vom Umfang ab. Eine einfache manuelle Maßnahme lässt sich oft im Rahmen einer normalen SEO-Betreuung lösen. Komplexe Fälle mit umfangreicher Backlink-Bereinigung oder Content-Überarbeitung erfordern zusätzlichen Aufwand.',
      },
      {
        question: 'Was ist der Unterschied zwischen manueller Maßnahme und Algorithmus-Update?',
        answer:
          'Eine manuelle Maßnahme wird von einem Google-Mitarbeiter verhängt und in der Search Console angezeigt. Du musst das Problem beheben und einen Überprüfungsantrag stellen. Eine algorithmische Abstufung erfolgt automatisch durch ein Update, ohne Benachrichtigung.',
      },
      {
        question: 'Kann ich eine Google Penalty selbst beheben?',
        answer:
          'Bei einfachen Fällen ja. Spam-Kommentare, einzelne schlechte Links oder offensichtliche Content-Probleme lassen sich eigenständig lösen. Bei komplexen Link-Profilen oder algorithmischen Abstufungen ist professionelle Hilfe erfahrungsgemäß deutlich effektiver.',
      },
      {
        question: 'Wie verhindere ich zukünftige Penalties?',
        answer:
          'Befolge die Google Search Essentials, kaufe keine Links, veröffentliche nur qualitativ hochwertigen Content, führe regelmäßig technische SEO-Audits durch und arbeite mit seriösen SEO-Partnern. Prävention ist deutlich günstiger und effektiver als Recovery.',
      },
    ],
  },
  {
    slug: 'google-ranking-verbessern',
    title: 'Google Ranking verbessern: 15 bewährte Tipps für 2026',
    metaTitle: 'Google Ranking verbessern: 15 Tipps für mehr Sichtbarkeit (2026)',
    metaDescription:
      'Google Ranking verbessern mit 15 praxiserprobten Tipps für 2026. Von Quick Wins bis Profi-Strategien für Münchner Unternehmen. Jetzt Sichtbarkeit steigern.',
    focusKeyword: 'Google Ranking verbessern',
    authorName: 'Julian Schäfer',
    category: 'seo-grundlagen',
    content: googleRankingVerbessern2026Content,
    image: '/images/blog/google-ranking-verbessern-thumbnail.webp',
    imageAlt:
      'Google Ranking verbessern 2026: Tipps, Ranking-Faktoren und Zeitrahmen für mehr Sichtbarkeit',
    faqs: [
      {
        question: 'Wie kann ich mein Google Ranking kostenlos verbessern?',
        answer:
          'Die wichtigsten kostenlosen Maßnahmen sind: Google Search Console einrichten und auswerten, Google Business Profile vollständig pflegen, Title Tags und Meta Descriptions optimieren, bestehende Inhalte aktualisieren und eine saubere interne Verlinkung aufbauen. Besonders für lokale Unternehmen in München ist ein gepflegtes Google Business Profile der schnellste kostenlose Hebel.',
      },
      {
        question: 'Wie lange dauert es, bei Google auf Seite 1 zu kommen?',
        answer:
          'Für bestehende Websites mit gezielter Optimierung sind 3 bis 6 Monate realistisch. Neue Websites brauchen typischerweise 6 bis 12 Monate. Quick Wins wie Title-Tag-Optimierungen können bereits nach Tagen oder Wochen Wirkung zeigen.',
      },
      {
        question: 'Was sind die wichtigsten Google Ranking Faktoren 2026?',
        answer:
          'Die wichtigsten SEO Ranking Faktoren 2026 sind: hochwertige, relevante Inhalte, Backlinks von vertrauenswürdigen Quellen, technische Qualität (Core Web Vitals, Mobile-Optimierung), Nutzererfahrung, E-E-A-T-Signale und die Optimierung für KI-Suchergebnisse (GEO).',
      },
      {
        question: 'Kann man ein Google Ranking kaufen?',
        answer:
          'Nein, organische Rankings können nicht direkt gekauft werden. Google Ads erscheinen über den organischen Ergebnissen, verschwinden aber sobald das Budget aufgebraucht ist. Nachhaltige Rankings entstehen nur durch kontinuierliche SEO-Arbeit.',
      },
      {
        question: 'Was kostet es, das Google Ranking zu verbessern?',
        answer:
          'DIY-SEO mit kostenlosen Tools kostet nur deine Zeit. Professionelle SEO-Betreuung beginnt typischerweise bei 800 bis 1.500 EUR monatlich für kleine Unternehmen. Einmalige SEO-Audits liegen zwischen 1.500 und 5.000 EUR.',
      },
      {
        question: 'Warum rankt meine Website nicht bei Google?',
        answer:
          'Die häufigsten Ursachen: Die Website ist technisch nicht sauber indexierbar, der Inhalt passt nicht zur Suchintention, es fehlen Backlinks als Vertrauenssignal, die Seite lädt zu langsam oder die Website ist zu neu und hat noch nicht genügend Autorität aufgebaut.',
      },
    ],
  },
  {
    slug: 'google-business-profile-optimieren',
    title: 'Google Business Profile optimieren 2026: Der komplette Leitfaden',
    metaTitle: 'Google Business Profile optimieren 2026 | Kompletter Leitfaden',
    metaDescription:
      'Google Business Profile optimieren 2026: Einrichtung, 10 Profi-Tipps, Bewertungsstrategie (DSGVO), Ranking-Faktoren & KI-Suche. Jetzt GBP perfekt aufstellen!',
    focusKeyword: 'Google Business Profile optimieren',
    category: 'local-seo',
    content: googleBusinessProfileOptimieren2026Content,
    image: '/images/blog/gbp-guide-thumbnail.webp',
    imageAlt: 'Google Business Profile optimieren 2026: Leitfaden und Tipps',
    faqs: [
      {
        question: 'Was kostet Google Business Profile?',
        answer:
          'Google Business Profile ist komplett kostenlos. Du zahlst nichts für die Erstellung, Verwaltung oder Optimierung deines Profils. Kosten entstehen nur, wenn du zusätzlich Google Ads oder professionelle Optimierungshilfe durch eine Local-SEO-Agentur in Anspruch nimmst.',
      },
      {
        question: 'Wie lange dauert es, bis GBP-Optimierungen wirken?',
        answer:
          'Erste Verbesserungen sind häufig schon nach 2–4 Wochen sichtbar, besonders bei Grundlagen wie Kategorieanpassung und vollständigem Profil. Nachhaltige Ranking-Verbesserungen durch Bewertungsaufbau und lokale Backlinks benötigen typischerweise 3–6 Monate.',
      },
      {
        question: 'Wie wichtig sind Bewertungen für das Google-Maps-Ranking?',
        answer:
          'Bewertungen machen laut Whitespark 2026 rund 20 % des lokalen Rankings aus — der zweitstärkste Faktor nach dem GBP selbst. Entscheidend sind Anzahl, Durchschnittsbewertung, Aktualität, Antwortrate und der inhaltliche Kontext.',
      },
      {
        question: 'Was ist der Unterschied zwischen Google Business Profile und Google My Business?',
        answer:
          'Es gibt keinen inhaltlichen Unterschied — Google hat den Dienst 2022 von „Google My Business“ in „Google Business Profile“ umbenannt. Die Funktionen sind identisch, nur der Name und die Verwaltungsoberfläche haben sich geändert.',
      },
      {
        question: 'Kann ich Google Business Profile ohne physischen Standort nutzen?',
        answer:
          'Ja, über die Option „Einzugsgebiet“ (Service Area Business). Du definierst die Regionen, die du bedienst, ohne eine öffentliche Adresse anzuzeigen. Allerdings haben SABs einen strukturellen Ranking-Nachteil gegenüber Geschäften mit physischem Standort.',
      },
      {
        question: 'Wie kann ich Fake-Bewertungen entfernen lassen?',
        answer:
          'Melde die Bewertung über die drei Punkte neben dem Eintrag als „unangemessen“. Bei eindeutig falschen Bewertungen kontaktiere den Google-Support direkt. Google prüft den Fall und entfernt die Bewertung innerhalb von ca. 5–20 Werktagen, wenn ein Verstoß vorliegt.',
      },
      {
        question: 'Wie oft sollte ich mein GBP aktualisieren?',
        answer:
          'Mindestens wöchentlich durch neue Posts und Fotos. Öffnungszeiten und Stammdaten solltest du sofort aktualisieren, wenn sich etwas ändert. Sonderöffnungszeiten für Feiertage trägst du idealerweise quartalsweise im Voraus ein.',
      },
      {
        question: 'Was bringt GBP-Optimierung für meine Branche konkret?',
        answer:
          'Das hängt von deiner Branche und dem lokalen Wettbewerb ab. In den meisten Fällen ist GBP-Optimierung die effizienteste Local-SEO-Maßnahme mit dem besten Kosten-Nutzen-Verhältnis. Spezifische Strategien gibt es für Zahnärzte, Ärzte, Handwerker, Anwälte, Steuerberater, Immobilienmakler, Restaurants, Physiotherapeuten, Hotels und Kfz-Werkstätten.',
      },
    ],
  },
  {
    slug: 'local-seo-guide',
    title: 'Local SEO Guide 2026: So wirst du lokal bei Google gefunden',
    metaTitle: 'Local SEO Guide 2026 – Lokal bei Google gefunden',
    metaDescription:
      'Local SEO Guide 2026: Google Business Profile, Bewertungen, Citations & KI-Suche optimieren. Mit Checkliste und Ranking-Faktoren. Jetzt lokal durchstarten!',
    focusKeyword: 'Local SEO Guide 2026',
    category: 'local-seo',
    content: localSeoGuide2026Content,
    image: '/images/blog/local-seo-guide-thumbnail.webp',
    imageAlt: 'Local SEO Guide 2026: Lokal bei Google gefunden',
    faqs: [
      {
        question: 'Was kostet Local SEO?',
        answer:
          'Die Kosten für Local SEO variieren je nach Umfang und Wettbewerb. Für kleine lokale Unternehmen beginnen professionelle Pakete ab ca. 500–1.000 EUR pro Monat. Mittelständler mit mehreren Standorten investieren typischerweise 1.500–3.000 EUR monatlich.',
      },
      {
        question: 'Wie lange dauert es, bis Local SEO Ergebnisse zeigt?',
        answer:
          'Erste Verbesserungen im Local Pack sind oft schon nach 4–8 Wochen sichtbar, besonders durch GBP-Optimierung und Bewertungsaufbau. Nachhaltige Top-3-Platzierungen in umkämpften Märkten erfordern in der Regel 3–6 Monate systematischer Arbeit.',
      },
      {
        question: 'Brauche ich Local SEO, wenn ich kein physisches Geschäft habe?',
        answer:
          "Ja, wenn du Kunden in einer bestimmten Region bedienst. Google bietet für Unternehmen ohne öffentlichen Standort die Option 'Einzugsgebiet' im GBP. Handwerker, Berater, mobile Dienstleister und Agenturen profitieren davon, auch ohne Laufkundschaft lokal sichtbar zu sein.",
      },
      {
        question: 'Was ist der Unterschied zwischen Local SEO und normalem SEO?',
        answer:
          'Klassische SEO zielt auf landesweite oder internationale Rankings. Local SEO fokussiert sich auf Sichtbarkeit in einem bestimmten geografischen Gebiet – im Local Pack (Google Maps), in den lokalen organischen Ergebnissen und seit 2025 auch in KI-generierten lokalen Antworten.',
      },
      {
        question: 'Wie wichtig sind Bewertungen für das lokale Ranking?',
        answer:
          'Bewertungen machen laut Whitespark 2026 rund 16 % des lokalen Rankings aus – der zweitstärkste Faktor nach dem GBP selbst. Dabei zählen nicht nur die Sternezahl, sondern auch die Anzahl, Aktualität, Antwortrate und der Inhalt der Bewertungen.',
      },
      {
        question: 'Kann ich Local SEO selbst machen oder brauche ich eine Agentur?',
        answer:
          'Die Grundlagen (GBP-Profil pflegen, um Bewertungen bitten, NAP-Daten konsistent halten) kannst du selbst umsetzen. Sobald es um technische Optimierung, Wettbewerbsanalyse, strukturierte Daten oder die Skalierung auf mehrere Standorte geht, lohnt sich professionelle Unterstützung.',
      },
      {
        question: 'Was ändert sich durch KI-Suche für lokale Unternehmen?',
        answer:
          'AI Local Packs zeigen nur noch 32 % so viele Unternehmen wie das traditionelle 3-Pack. Das bedeutet weniger Plätze und härterer Wettbewerb. Gleichzeitig werden Citations, strukturierte Daten und Bewertungsinhalte wichtiger, weil KI-Systeme diese als Vertrauensquellen nutzen.',
      },
      {
        question: 'Welche Branchen profitieren am meisten von Local SEO?',
        answer:
          'Grundsätzlich profitiert jedes Unternehmen mit lokalem Kundenbezug. Besonders stark ist der Effekt bei Gastronomie, Handwerk, ärztlichen Praxen, Rechtsanwälten, Steuerberatern, Immobilienmaklern, Fitness-Studios, Einzelhandel und Dienstleistern aller Art.',
      },
    ],
  },
  {
    slug: 'seo-audit-checkliste',
    title: 'SEO Audit 2026: Der komplette Leitfaden mit Checkliste',
    metaTitle: 'SEO Audit 2026: Checkliste, Kosten & Anleitung | SEO München',
    metaDescription:
      'SEO Audit 2026: Was wird geprüft, was kostet es und wie führst du es selbst durch? Komplette Checkliste mit Schritt-für-Schritt-Anleitung für KMU in München.',
    category: 'technisches-seo',
    content: seoAuditChecklisteContent,
    image: '/images/blog/seo-audit-thumbnail.webp',
    imageAlt:
      'SEO Audit 2026: Dashboard mit Health Score, Checkliste und Ranking-Faktoren',
    faqs: [
      {
        question: 'Was kostet ein SEO Audit?',
        answer:
          'Ein professionelles SEO Audit kostet je nach Umfang zwischen 300 und 10.000 EUR. Für ein mittelständisches Unternehmen mit 50-500 Seiten liegt der typische Preis bei 1.000-3.000 EUR. DIY-Audits mit kostenlosen Tools wie der Google Search Console sind kostenlos, decken aber nur einen Teil der relevanten Faktoren ab.',
      },
      {
        question: 'Wie lange dauert ein SEO Audit?',
        answer:
          'Ein professionelles Audit dauert typischerweise 3-10 Arbeitstage, abhängig von der Websitegröße. Ein Quick-Check ist in wenigen Stunden erledigt, ein Enterprise-Audit für große Websites mit tausenden Seiten kann 2-3 Wochen beanspruchen.',
      },
      {
        question: 'Wie oft sollte man ein SEO Audit machen?',
        answer:
          'Wir empfehlen mindestens ein vollständiges Audit pro Jahr und einen Quick-Check alle 3-6 Monate. Nach großen Google-Updates, einem Website-Relaunch oder einem Agenturwechsel ist ein zusätzliches Audit sinnvoll.',
      },
      {
        question: 'Kann man ein SEO Audit selber machen?',
        answer:
          'Ja, mit kostenlosen Tools wie der Google Search Console, Screaming Frog und PageSpeed Insights kannst du ein Basis-Audit selbst durchführen. Für eine vollständige Analyse mit Wettbewerbsvergleich, strategischer Priorisierung und Backlink-Audit ist jedoch SEO-Fachwissen erforderlich.',
      },
      {
        question: 'Was beinhaltet ein technisches SEO Audit?',
        answer:
          'Ein technisches SEO Audit prüft Crawlbarkeit, Indexierung, Core Web Vitals, HTTPS-Konfiguration, Redirect-Ketten, Canonical Tags, Structured Data, Mobile-Friendliness und Server-Performance. Es bildet das Fundament jedes vollständigen SEO Audits.',
      },
      {
        question: 'Lohnt sich ein SEO Audit für kleine Unternehmen?',
        answer:
          'Absolut. Gerade für kleine Unternehmen in München und Bayern kann ein SEO Audit den entscheidenden Unterschied machen — denn oft sind es wenige technische Fehler, die das Ranking blockieren. Ein Audit ab 300-500 EUR kann sich durch gewonnene Kunden schnell amortisieren.',
      },
      {
        question: 'Was ist der Unterschied zwischen SEO Audit und SEO-Beratung?',
        answer:
          'Das Audit ist die Diagnose — es analysiert den Ist-Zustand deiner Website. Die SEO-Beratung geht einen Schritt weiter und entwickelt eine Strategie zur Umsetzung der Empfehlungen. Viele Agenturen bieten beides als Paket an.',
      },
      {
        question: 'Was passiert nach dem SEO Audit?',
        answer:
          'Nach dem Audit erhältst du einen priorisierten Maßnahmenplan. Quick Wins (technische Fixes) werden in Woche 1-4 umgesetzt. Strategische Maßnahmen wie Content-Optimierung und Backlink-Aufbau folgen in den Monaten danach. Ein Follow-up Audit nach 3-6 Monaten misst den Fortschritt.',
      },
    ],
  },
  {
    slug: 'seo-kosten',
    title: 'SEO Kosten 2026 — Was kostet Suchmaschinenoptimierung wirklich?',
    metaTitle: 'SEO Kosten 2026: Was kostet SEO wirklich?',
    metaDescription:
      'Was kostet SEO 2026? Monatliche SEO Kosten, Stundensätze, Freelancer vs. Agentur und GEO-Aufschlag im Überblick. Jetzt mit Münchner Preiskontext planen.',
    category: 'branchen-praxis',
    content: seoKosten2026Content,
    image: '/images/blog/seo%20kosten%202026.webp',
    imageAlt: 'SEO Kosten 2026: Was kostet Suchmaschinenoptimierung – Preisüberblick für München und Bayern',
    faqs: [
      {
        question: 'Was kostet SEO im Monat für ein kleines Unternehmen?',
        answer:
          'Kleine Unternehmen sollten mit 500 bis 1.500 Euro pro Monat rechnen, je nach Branche und Wettbewerb. Für Local SEO in München liegt das Einstiegsbudget bei etwa 500 bis 1.000 Euro.',
      },
      {
        question: 'Ab welchem Budget lohnt sich professionelles SEO?',
        answer:
          'Branchenexperten empfehlen ein Mindestbudget von 1.500 bis 2.000 Euro pro Monat für professionelle, laufende SEO-Betreuung. Darunter reicht die Arbeitszeit schlicht nicht für messbare Ergebnisse.',
      },
      {
        question: 'Warum ist SEO so teuer?',
        answer:
          'SEO umfasst technische Optimierung, Content-Erstellung, interne Verlinkung, Backlink-Aufbau und laufende Analyse. Ein erfahrener SEO-Experte investiert leicht 15 bis 30 Stunden pro Monat in ein einziges Kundenprojekt.',
      },
      {
        question: 'Kann ich SEO auch selbst machen?',
        answer:
          'Grundlagen wie Google Business Profile und einfache OnPage-Optimierung kannst du selbst umsetzen. Für strategisches SEO — besonders Keyword-Recherche, Keyword-Mapping, Content-Strategie und Linkbuilding — fehlen den meisten Unternehmen Zeit und Expertise.',
      },
      {
        question: 'Wie lange dauert es, bis SEO-Maßnahmen wirken?',
        answer:
          'In der Regel 6 bis 12 Monate für signifikante Ergebnisse. Erste Verbesserungen sind oft nach 3-4 Monaten sichtbar. Die besten Ergebnisse erzielen Unternehmen, die SEO als langfristige Investition im zweiten und dritten Jahr weiterführen.',
      },
      {
        question: 'Was ist der Unterschied zwischen einmaligem SEO und laufender Betreuung?',
        answer:
          'Ein einmaliger SEO-Audit (500-3.500 EUR) identifiziert Probleme und Chancen. Laufende Betreuung (1.000+ EUR/Monat) setzt die Empfehlungen um, erstellt Content, baut Links auf und passt die Strategie laufend an. Beides ergänzt sich.',
      },
      {
        question: 'Kommen durch KI-SEO (GEO) 2026 neue Kosten auf mich zu?',
        answer:
          'Ja. Branchenexperten schätzen den Aufschlag für GEO auf 20 bis 35 Prozent über den klassischen SEO-Kosten. Die Mehrkosten entstehen durch neue Tools, höhere Content-Frequenz und zusätzliche Optimierungsanforderungen für KI-Suchmaschinen.',
      },
      {
        question: 'Lohnt sich SEO für lokale Unternehmen in München?',
        answer:
          'Gerade für lokale Unternehmen ist SEO oft der effizienteste Marketingkanal. Mit einem fokussierten Local-SEO-Ansatz ab 500 Euro monatlich erreichst du gezielt Kunden, die aktiv nach deinen Leistungen suchen.',
      },
    ],
  },
  {
    slug: 'seo-tools-anfaenger',
    title: 'SEO-Tools für Anfänger: Die besten Lösungen für Einsteiger (2026)',
    metaTitle: 'SEO-Tools für Anfänger: Die besten Lösungen für Einsteiger (2026)',
    metaDescription:
      'Die besten SEO-Tools für Anfänger: Von kostenlosen Essentials wie Google Search Console bis zu All-in-One Lösungen. Jetzt Sichtbarkeit in München steigern!',
    category: 'tipps-tools',
    content: seoToolsAnfaengerContent,
    image: '/images/blog/seo%20tools%20anf%C3%A4nger%20(1).webp',
    imageAlt: 'SEO-Tools für Anfänger: Die besten Lösungen für Einsteiger – Sichtbarkeit in München steigern',
    faqs: [
      {
        question: 'Was sind die besten kostenlosen SEO-Tools für den Einstieg?',
        answer:
          'Google Search Console (Indexierung & Leistung), Google Analytics (Traffic & Nutzerverhalten), Keyword Planner (Keyword-Recherche), Ubersuggest (Keyword- und Content-Ideen) und Seobility (technische Analyse) sind empfehlenswerte kostenlose Einstiegs-Tools.',
      },
      {
        question: 'Muss ich als Anfänger mehrere SEO-Tools gleichzeitig nutzen?',
        answer:
          'Als Anfänger ist eine Kombination sinnvoll, da jedes Tool andere Aspekte abdeckt. Die Google Search Console für technische Grundlagen und der Google Keyword Planner für die Keyword-Analyse sind oft unersetzlich. Konzentrieren Sie sich auf die wichtigsten Kennzahlen und nur auf Tools, die spezifische Fragen beantworten.',
      },
      {
        question: 'Wie erkenne ich, ob ein SEO-Tool-Vergleich neutral ist?',
        answer:
          'Neutrale Vergleiche zeichnen sich durch ausgewogene Vor- und Nachteile, transparente Preise und die Nennung von Alternativen aus. Seriöse Tests legen die Methodik offen. Affiliate-Hinweise können URL-Parameter wie ?ref=, ?aff= oder ?tag= beim Klick auf Tool-Links sein.',
      },
      {
        question: 'Kann ich KI-Tools als Ersatz für klassische SEO-Software nutzen?',
        answer:
          'KI-Tools eignen sich ergänzend für Content-Erstellung und Ideenfindung. Für präzises Local SEO, Echtzeitdaten, Backlink-Analyse und technische Audits bleiben klassische SEO-Tools unerlässlich. Ein kombinierter Ansatz ist am effektivsten.',
      },
      {
        question: 'Wie tracke ich Keyword-Rankings auf lokaler Ebene für München?',
        answer:
          'Dafür brauchen Sie Tools mit lokalem Ranking-Tracking. Das Google Unternehmensprofil ist für die lokale Sichtbarkeit zentral. Manuelle Prüfungen im Inkognito-Modus mit Standort können erste Eindrücke liefern, für umfassendes Monitoring reichen sie nicht aus.',
      },
      {
        question: 'Wie viel Zeit pro Woche sollte ein Anfänger einplanen?',
        answer:
          'Empfohlen sind etwa 5–10 Stunden pro Woche. Erste Fortschritte zeigen sich typischerweise nach 3–6 Monaten, signifikante Ergebnisse nach 6–12 Monaten. Diese Zeitinvestition legt den Grundstein für nachhaltige Sichtbarkeit und gute Rankings.',
      },
    ],
  },
  {
    slug: 'backlink-aufbau-grundlagen',
    title: 'Backlink-Aufbau Grundlagen: Der Guide für Top-Rankings 2026',
    metaTitle: 'Backlink Aufbau Grundlagen: Der Guide für bessere Rankings 2026',
    metaDescription:
      'Backlink-Aufbau-Grundlagen für Unternehmen in München: Erfahre alles über hochwertige Links, Linkbuilding-Strategien und wie du deine Google-Rankings verbesserst.',
    category: 'linkaufbau',
    content: backlinkAufbauGrundlagenContent,
    image: '/images/blog/backlink%20aufbau.webp',
    imageAlt: 'Backlink Aufbau Grundlagen: Guide für bessere Rankings 2026',
    faqs: [
      {
        question: 'Wie lange dauert es, bis neu aufgebaute Backlinks Wirkung zeigen?',
        answer:
          'Die Indexierung neuer Links dauert typischerweise 5–15 Tage, erste leichte Effekte zeigen sich nach 2–6 Wochen, signifikante Verbesserungen oft nach etwa 10 Wochen. Die Dauer hängt von der Autorität der verlinkenden Seite, dem Wettbewerb und der Verarbeitungsgeschwindigkeit des Google-Algorithmus ab.',
      },
      {
        question: 'Warum sollte man Backlinks auf keinen Fall kaufen?',
        answer:
          'Gekaufte Links bzw. Linksysteme, die PageRank künstlich manipulieren, verstoßen gegen die Google-Richtlinien und werden als Spam eingestuft. Sie können zu empfindlichen Abstrafungen, algorithmischen Herabstufungen oder bis zur vollständigen Deindexierung führen.',
      },
      {
        question: 'Was ist der Unterschied zwischen Domain-Autorität und Seiten-Autorität?',
        answer:
          'Domain-Autorität (DA) beschreibt die Stärke der gesamten Website (Skala 1–100), aufgebaut über die Zeit. Seiten-Autorität (PA) ist die Stärke einer einzelnen Unterseite – beides sind Moz-Metriken und dienen als Proxys für die Bewertung der Linkkraft, werden aber nicht direkt von Google verwendet.',
      },
      {
        question: 'Wie erkenne ich, ob eine Linkquelle von einem Spam-Update abgestraft wurde?',
        answer:
          'Typische Anzeichen: drastischer, plötzlicher Abfall des organischen Traffics, Verlust von Top-Rankings, Wegfall der Indexierung oder Warnungen in der Google Search Console unter „Manuelle Maßnahmen". Ein starker Rückgang über mehrere Tage oder das Verschwinden des Markennamens aus den Top-Ergebnissen sind deutliche Hinweise.',
      },
      {
        question: 'Gibt es einen Unterschied in der Linkkraft zwischen Text- und Bildlinks?',
        answer:
          'Textlinks liefern über den Ankertext direkte, relevante Informationen über das Linkziel und werden von Google in der Regel stärker gewichtet. Bei Bildlinks nutzt Google das alt-Attribut als Ankertext-Ersatz; Tests zeigen, dass Textlinks bei gleicher Zielseite bevorzugt werden.',
      },
      {
        question: 'Welche kostenlosen Tools bieten verlässliche Backlink-Daten?',
        answer:
          'Google Search Console (direkt von Google, unerlässlich), Ahrefs Free Checker für grundlegende Backlink-Profile, Moz Link Explorer für DA/PA-Metriken und Ubersuggest für die Konkurrenz-Analyse.',
      },
    ],
  },
  {
    slug: 'keyword-recherche-anleitung',
    title: 'Keyword-Recherche Anleitung: Strategien für Top-Rankings und regionale Sichtbarkeit',
    metaTitle: 'Keyword-Recherche Anleitung: Schritt für Schritt zum richtigen Suchbegriff',
    metaDescription:
      'Keyword-Recherche Anleitung: Lerne Schritt für Schritt, wie du die richtigen Keywords findest, Tools nutzt & deine Google-Rankings in München nachhaltig steigerst.',
    category: 'content-keywords',
    content: keywordRechercheAnleitungContent,
    image: '/images/blog/keyword%20recherche%20anleitung%20(1).webp',
    imageAlt: 'Keyword-Recherche Anleitung: Schritt für Schritt zum richtigen Suchbegriff für bessere Google-Rankings in München',
    faqs: [
      {
        question: 'Wie lange dauert eine professionelle Keyword-Recherche?',
        answer:
          'Die Dauer hängt stark vom Umfang ab: kleine Projekte oft Tage bis eine Woche, mittelgroße Websites mehrere Wochen, internationale Projekte mehrere Monate. Entscheidend ist, ausreichend Zeit für eine gründliche Analyse einzuplanen.',
      },
      {
        question: 'Was kostet eine Keyword-Recherche von einer Agentur?',
        answer:
          'Die Kosten variieren je nach Projektumfang: kleine Projekte ca. 599 €–800 €, Stundensätze typisch 90 €–200 €, monatliche SEO-Betreuung oft 1.000 €–5.000 €. Wettbewerbsintensität und Detailtiefe beeinflussen den Preis.',
      },
      {
        question: 'Wie oft sollte eine Keyword-Map aktualisiert werden?',
        answer:
          'Mindestens einmal jährlich eine umfassende Überprüfung. Zusätzlich bei Google-Updates, Änderungen im Suchverhalten, neuen Produkten oder Märkten sowie Verschiebungen im Wettbewerb. Kontinuierliche SERP- und Leistungsbeobachtung ist wichtig.',
      },
      {
        question: "Wie erkennt man 'Fake'-Suchvolumen durch Bots oder saisonale Anomalien?",
        answer:
          'Bot-Traffic zeigt sich durch unnatürlich hohe Spitzen, untypische Regionen und extrem kurze Verweildauer. Saisonale Muster sind vorhersehbar – Google Trends hilft. Daten über mehrere Jahre vergleichen und verschiedene Keyword-Tools cross-referenzieren.',
      },
      {
        question: 'Wie führt man eine Keyword-Recherche für internationale Märkte durch?',
        answer:
          'Lokale Sprachen und Dialekte berücksichtigen, idealerweise mit Muttersprachlern arbeiten. Lokale Suchgewohnheiten und kulturelle Nuancen einbeziehen, länderspezifische Tool-Versionen nutzen und Wettbewerber in den Zielländern analysieren.',
      },
    ],
  },
  {
    slug: 'onpage-seo-checkliste',
    title: 'OnPage SEO Checkliste 2026: Die vollständige Anleitung für Top-Rankings bei Google',
    metaTitle: 'OnPage SEO Checkliste 2026: Die vollständige Anleitung für Top-Rankings',
    metaDescription:
      'OnPage SEO Checkliste 2026: Alle Faktoren mit Prioritäts-Matrix, aktuellen Daten und Münchner Praxistipps. Jetzt Rankings systematisch verbessern.',
    category: 'content-keywords',
    content: onpageSeoChecklisteContent,
    image: '/images/blog/onpage-seo-checkliste-featured-image.webp',
    imageAlt: 'OnPage SEO Checkliste 2026: Die vollständige Anleitung für Top-Rankings bei Google',
    faqs: [
      {
        question: 'Was ist der häufigste OnPage-SEO-Fehler?',
        answer:
          'Content erstellen, der nicht zur Suchintention passt. Alle technischen Faktoren perfekt umsetzen bringt nichts, wenn dein Inhalt nicht beantwortet, was der Nutzer sucht.',
      },
      {
        question: 'Ist Keyword-Dichte noch relevant in 2026?',
        answer:
          'Nein, nicht als feste Prozentzahl. Google versteht Semantik und Kontext. Fokussiere dich auf natürliche Sprache, verwandte Begriffe und vollständige Themenabdeckung.',
      },
      {
        question: 'Wie oft sollte man OnPage SEO überprüfen?',
        answer:
          'Mindestens quartalsweise eine vollständige Prüfung. Title Tags und Meta Descriptions bei CTR-Problemen sofort anpassen. Content-Audits alle 6 Monate.',
      },
      {
        question: 'Wie lange dauert es, bis OnPage-Änderungen wirken?',
        answer:
          'Typischerweise 2 bis 8 Wochen. Title-Tag-Änderungen zeigen oft schon nach wenigen Tagen Wirkung in der CTR.',
      },
      {
        question: 'Kann man zu viel OnPage-Optimierung betreiben?',
        answer:
          'Ja — Überoptimierung. Keyword-Stuffing, unnatürliche Ankertexte und erzwungene Keywords schaden mehr als sie nutzen.',
      },
      {
        question: 'Braucht man ein SEO-Tool für die OnPage-Optimierung?',
        answer:
          'Die Google Search Console ist kostenlos und unverzichtbar. Screaming Frog eignet sich für technische Audits. Für tiefere Analysen: Ahrefs, Semrush oder SurferSEO.',
      },
      {
        question: 'Ist OnPage SEO alleine ausreichend?',
        answer:
          'OnPage SEO ist das Fundament, aber in umkämpften Branchen brauchst du zusätzlich OffPage-Signale und technisches SEO.',
      },
      {
        question: 'Was kostet professionelle OnPage-Optimierung?',
        answer:
          'Ein professioneller OnPage-Audit liegt bei 500 bis 3.500 EUR einmalig. Laufende Betreuung kostet 1.000 bis 3.000 EUR monatlich.',
      },
      {
        question: 'Welche OnPage-Faktoren haben 2026 am meisten Einfluss?',
        answer:
          'Content-Relevanz und Suchintention (Korrelation: 0,47), gefolgt von internen Links und Core Web Vitals.',
      },
      {
        question: 'Wie finde ich meine OnPage-Schwachstellen?',
        answer:
          'Google Search Console: Unter Leistung siehst du Seiten mit hohen Impressionen aber niedriger CTR. Unter Core Web Vitals findest du Performance-Probleme.',
      },
    ],
  },
  {
    slug: 'interne-verlinkung-anleitung',
    title: 'Interne Verlinkung Anleitung: Der Schlüssel zu mehr SEO-Sichtbarkeit für deine Website',
    metaTitle: 'Interne Verlinkung Anleitung: Der Schlüssel zu mehr SEO-Sichtbarkeit für deine Website',
    metaDescription:
      'Umfassende Anleitung zur internen Verlinkung: Erfahre, wie du interne Links strategisch setzt, Linkjuice optimal verteilst und deine Google-Rankings verbesserst – mit Praxis-Tipps und WordPress-Guide.',
    category: 'content-keywords',
    content: interneVerlinkungAnleitungContent,
    image: '/images/blog/interne%20verlinkung%20anleitung%20(1).webp',
    imageAlt: 'Interne Verlinkung Anleitung: Teaserbild – SEO-Sichtbarkeit und Linkstruktur mit Siloing und Onlineshop-Strategien optimieren',
    faqs: [
      {
        question: 'Wie viele interne Links sollte eine Website haben?',
        answer:
          'Es gibt keine feste ideale Anzahl. Google empfiehlt eine „angemessene Anzahl", um die Navigation zu erleichtern und den Linkjuice zu verteilen. Wichtiger als die Menge sind Relevanz und strategische Platzierung; übermäßige Verlinkung kann die Linkkraft verwässern.',
      },
      {
        question: 'Können Seiten auch ohne externe Links gut ranken?',
        answer:
          'Ja. Hochwertige Inhalte zusammen mit einer starken internen Verlinkungsstruktur können die Sichtbarkeit deutlich verbessern. Interne Links verteilen den Linkjuice und helfen Suchmaschinen, alle relevanten Seiten zu entdecken und Autorität von starken auf schwächere Seiten zu übertragen.',
      },
      {
        question: 'Was ist der Unterschied zwischen den Statuscodes 404 und 410?',
        answer:
          '404 Not Found bedeutet „Seite nicht gefunden" – oft temporär, die Seite kann später wieder existieren. 410 Gone bedeutet „dauerhaft entfernt" – die Ressource wird nicht wiederhergestellt; Google entfernt 410-Seiten in der Regel schneller aus dem Index.',
      },
      {
        question: 'Wie oft sollten interne Links überprüft und aktualisiert werden?',
        answer:
          'Idealerweise vierteljährlich, mindestens halbjährlich. Nach einem Relaunch oder größeren Strukturänderungen sollten Sie sofort prüfen. Broken Links (404/410) sollten umgehend behoben werden, damit die Linkkraft optimal verteilt bleibt.',
      },
      {
        question: 'Gibt es spezifische Metriken, um den Erfolg zu verfolgen?',
        answer:
          'Ja: Crawltiefe und -frequenz, organische Sichtbarkeit, Keyword-Rankings sowie Verweildauer und Absprungrate. Tools wie Google Search Console, SISTRIX oder Ahrefs liefern wertvolle Einblicke für die Erfolgsmessung interner Verlinkung.',
      },
    ],
  },
  {
    slug: 'schema-markup-anleitung',
    title: 'Schema Markup Anleitung: Strukturierte Daten für bessere Google Rankings',
    metaTitle: 'Schema Markup Anleitung: Strukturierte Daten für bessere Google Rankings',
    metaDescription:
      'Umfassende Schema-Markup-Anleitung: Lerne, wie du strukturierte Daten implementierst, testest und optimierst, um Rich Snippets zu erzielen und deine Google-Rankings zu verbessern. Für Unternehmen in München & Bayern.',
    category: 'technisches-seo',
    content: schemaMarkupAnleitungContent,
    image: '/images/blog/schema%20markup%20anleitung%20(1).webp',
    imageAlt: 'Schema Markup Anleitung: Strukturierte Daten und JSON-LD für bessere Google Rankings',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen strukturierten Daten und unstrukturierten Daten?',
        answer:
          'Strukturierte Daten folgen einem vordefinierten Datenmodell und sind leicht maschinenlesbar (z. B. Datenbanken, Tabellen, Schema Markup). Unstrukturierte Daten bestehen aus Rohdaten wie Textdokumenten, Bildern oder Videos – etwa 80 % der Unternehmensdaten.',
      },
      {
        question: 'Kann Schema Markup auch für Bilder und Videos verwendet werden?',
        answer:
          'Ja. Für Videos wird das VideoObject-Schema empfohlen (Titel, Beschreibung, Thumbnail-URL, Upload-Datum, Video-URL), um in Google-Videokarussells und als Rich Snippets zu erscheinen. ImageObject-Markup definiert Bilder präziser für Suchmaschinen.',
      },
      {
        question: 'Wie aktuell muss Schema Markup gehalten werden, um wirksam zu sein?',
        answer:
          'Die Aktualität ist entscheidend. Google nutzt strukturierte Daten für aktuelle Infos zu Preisen, Verfügbarkeit oder Bewertungen. Veraltete Daten können dazu führen, dass Rich Snippets nicht angezeigt werden. Schema Markup regelmäßig prüfen und bei Änderungen anpassen; dateModified für präzise Datumsangaben nutzen.',
      },
      {
        question: 'Verringert Schema Markup die Ladezeit meiner Website?',
        answer:
          'Nein. JSON-LD ist sehr leichtgewichtig und wird oft asynchron geladen, sodass es den Aufbau der Seite nicht blockiert. Schema Markup kann durch bessere Rich Snippets und höhere Klickrate indirekt zur SEO-Leistung beitragen.',
      },
      {
        question: 'Ist es möglich, Schema Markup manuell zu erstellen, oder brauche ich immer ein Tool?',
        answer:
          'Schema Markup lässt sich manuell erstellen, besonders mit JSON-LD – das bietet maximale Flexibilität für individuelle oder dynamische Strukturen. Tools wie der Merkle Generator oder Googles Markup-Hilfe sind effizienter und fehlerärmer, besonders für Einsteiger.',
      },
    ],
  },
  {
    slug: 'keyword-mapping-anleitung',
    title: 'Keyword Mapping Anleitung: In 5 Schritten zur optimalen SEO-Strategie',
    metaTitle: 'Keyword Mapping Anleitung: In 5 Schritten zur perfekten SEO-Strategie',
    metaDescription:
      'Erfahre in dieser umfassenden Keyword-Mapping-Anleitung, wie du deine Suchbegriffe strategisch organisierst, Duplicate Content vermeidest und deine Google-Rankings deutlich verbesserst.',
    category: 'content-keywords',
    content: keywordMappingAnleitungContent,
    image: '/images/blog/keyword%20mapping%20anleitung%20(1).webp',
    imageAlt: 'Keyword Mapping Anleitung: Suchbegriffe strategisch organisieren für bessere SEO-Ergebnisse',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Keyword Mapping und Keyword-Recherche?',
        answer: 'Die Keyword-Recherche ist der Prozess des Findens und Analysierens von Suchbegriffen, die Nutzer verwenden, um Informationen, Produkte oder Dienstleistungen zu finden. Hierbei werden Suchvolumen, Wettbewerb und die Suchintention ermittelt. Keyword Mapping hingegen ist der strategische Prozess, bei dem die gefundenen Keywords bestimmten Seiten Ihrer Website zugeordnet werden. Ziel ist es, eine klare Struktur zu schaffen, Keyword-Kannibalisierung zu vermeiden und sicherzustellen, dass jede Seite eine spezifische Suchintention bedient.',
      },
      {
        question: 'Kann ich Keyword Mapping auch ohne spezielle Tools durchführen?',
        answer: 'Grundsätzlich ist Keyword Mapping auch ohne kostenpflichtige Spezialtools möglich, insbesondere für kleinere Projekte. Man kann Tabellenkalkulationsprogramme wie Google Sheets oder Microsoft Excel nutzen, um Keywords zu organisieren und URLs zuzuordnen. Für die initiale Keyword-Recherche bieten kostenlose Optionen wie der Google Keyword Planner erste Anhaltspunkte. Allerdings wird der Prozess bei größeren Websites durch professionelle SEO-Tools wie SISTRIX oder Ahrefs erheblich effizienter und datengestützter.',
      },
      {
        question: 'Wie erkenne ich Keyword-Kannibalisierung durch falsches Mapping?',
        answer: 'Keyword-Kannibalisierung tritt auf, wenn mehrere Seiten Ihrer Website versuchen, für dasselbe oder ein sehr ähnliches Keyword zu ranken. Anzeichen dafür sind unter anderem der plötzliche Verlust von Rankings oder Traffic für ein bestimmtes Keyword, volatile Ranking-Positionen, bei denen unterschiedliche URLs erscheinen, oder wenn bei einer site:ihredomain.de "keyword"-Suche mehrere interne URLs angezeigt werden. Eine regelmäßige Überprüfung in der Google Search Console kann helfen, solche Konflikte frühzeitig zu identifizieren.',
      },
      {
        question: 'Wie oft sollte ich meine Keyword-Map überprüfen und anpassen?',
        answer: 'Die Häufigkeit hängt von der Dynamik Ihrer Branche, der Frequenz neuer Inhalte und Googles Algorithmus-Updates ab. Als Faustregel gilt: eine grundlegende Überprüfung mindestens ein- bis zweimal pro Jahr. Bei größeren Änderungen an der Website-Struktur, der Einführung neuer Produkte oder nach signifikanten Wettbewerbsentwicklungen sollte die Keyword-Map proaktiver angepasst werden.',
      },
      {
        question: 'Ist Keyword Mapping auch für kleinere Websites oder lokale Unternehmen relevant?',
        answer: 'Ja, absolut. Es hilft, die begrenzte Anzahl an Inhaltsseiten strategisch optimal zu nutzen, Keyword-Kannibalisierung zu vermeiden und sich auf die relevantesten Suchbegriffe zu konzentrieren. Insbesondere für lokale Unternehmen ermöglicht es die gezielte Ausrichtung auf regionale Suchanfragen wie „SEO Agentur München" oder „Friseur in Schwabing", um potenzielle Kunden in der Nähe effektiv zu erreichen. Eine klar definierte Keyword-Strategie ist unabhängig von der Größe der Website die Grundlage für nachhaltigen SEO-Erfolg.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getAllBlogPostSlugs(): string[] {
  return POSTS.map((p) => p.slug)
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return POSTS.filter((p) => p.category === categorySlug)
}

export function getAllPosts(): BlogPost[] {
  return [...POSTS]
}

/** Nur Metadaten für Startseiten-Slider — ohne schwere Content-Strings für andere Bundles duplizieren. */
export interface BlogTeaserItem {
  href: string
  title: string
  description: string
  image: string
  imageAlt: string
}

/** Startseiten-Slider: dieser Artikel zuerst (erste sichtbare Kachel). */
const TEASER_FIRST_SLUG = 'onpage-seo-checkliste'

export function getBlogTeaserItems(): BlogTeaserItem[] {
  const withImage = POSTS.filter((p): p is BlogPost & { image: string } => Boolean(p.image))
  const pinned = withImage.find((p) => p.slug === TEASER_FIRST_SLUG)
  const rest = withImage.filter((p) => p.slug !== TEASER_FIRST_SLUG)
  const ordered = pinned ? [pinned, ...rest] : withImage

  return ordered.map((p) => ({
    href: `/blog/${p.slug}`,
    title: p.title,
    description: p.metaDescription,
    image: p.image,
    imageAlt: p.imageAlt ?? p.title,
  }))
}

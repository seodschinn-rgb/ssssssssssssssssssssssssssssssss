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

export interface BlogPostFAQ {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  content: string
  /** Optional: Pfad zum Thumbnail (z. B. /images/blog/slug.png) */
  image?: string
  /** Alt-Text für das Thumbnail (für Barrierefreiheit & SEO) */
  imageAlt?: string
  /** Optional: FAQs für FAQPage-Schema (Rich Snippets) */
  faqs?: BlogPostFAQ[]
}

const POSTS: BlogPost[] = [
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

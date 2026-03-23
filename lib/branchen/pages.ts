import { buildStandardMassnahmen } from './massnahmen'
import type { BrancheFaq, BranchePageData } from './types'

const kostenStandard = (paket: string) => [
  `Für die meisten ${paket} reicht unser Starter- oder Growth-Paket — je nach Wettbewerb in deiner Fachrichtung und Stadtteil. Im kostenlosen Erstgespräch sagen wir dir ehrlich, welches Paket Sinn macht.`,
  `Rechne mit messbaren Effekten ab Monat 3–6: mehr qualifizierte Klicks auf deine Leistungsseiten, bessere Sichtbarkeit für lokale Suchanfragen und oft geringere Akquisekosten als bei reinem Ads-Budget.`,
]

function faqPaket(): BrancheFaq {
  return {
    q: 'Welches SEO-Paket passt zu mir?',
    a: 'Das hängt von Wettbewerb, Website-Zustand und Zielen ab. Viele Betriebe starten mit Starter oder Growth; nach dem Erstgespräch bekommst du eine klare Empfehlung ohne Verkaufsdruck.',
  }
}

const REL = {
  aerzte: ['zahnaerzte', 'physiotherapeuten', 'handwerker'],
  zahnaerzte: ['aerzte', 'physiotherapeuten', 'restaurants'],
  handwerker: ['aerzte', 'kfz-werkstatt', 'immobilienmakler'],
  anwaelte: ['steuerberater', 'immobilienmakler', 'aerzte'],
  steuerberater: ['anwaelte', 'immobilienmakler', 'handwerker'],
  immobilienmakler: ['anwaelte', 'steuerberater', 'handwerker'],
  restaurants: ['hotels', 'zahnaerzte', 'handwerker'],
  physiotherapeuten: ['aerzte', 'zahnaerzte', 'restaurants'],
  hotels: ['restaurants', 'immobilienmakler', 'handwerker'],
  'kfz-werkstatt': ['handwerker', 'restaurants', 'immobilienmakler'],
} as const

export const BRANCHE_PAGES: BranchePageData[] = [
  {
    slug: 'aerzte',
    name: 'Ärzte',
    hubTitle: 'Ärzte & Arztpraxen',
    hubDescription: 'Mehr Patientenanfragen über Google, Local SEO für Praxen und Kliniken.',
    hubEmoji: '🏥',
    metaTitle: 'SEO für Ärzte München | Mehr Patienten über Google',
    metaDescription:
      'SEO für Ärzte in München: Google Business Profile, Local SEO, Bewertungsmanagement und E-E-A-T-Content. Fallstudie mit +180% Terminanfragen. Jetzt beraten lassen.',
    h1: 'SEO für Ärzte in München — Mehr Patienten über Google gewinnen',
    ctaNoun: 'Patienten',
    warumParagraphs: [
      'Patientinnen und Patienten googeln Facharzt, Symptome und Behandlungen mit Ortsbezug — oft bevor sie jemanden empfehlen. Wenn deine Praxis dort nicht auftaucht, gehen Termine an die Konkurrenz.',
      'In München ist der Wettbewerb um sichtbare Praxen hoch, gleichzeitig sind viele Praxis-Websites technisch schwach oder haben dünne, generische Texte. Hier lassen sich mit strukturierter Local- und OnPage-SEO schnell Fortschritte erzielen.',
      'Wir kennen die Grenzen bei Heilmittelwerbe und medizinischen Texten: Inhalte planen wir so, dass sie informieren und SEO liefern — ohne riskante Heilsversprechen.',
    ],
    statistik:
      'Tausende Suchanfragen pro Monat zu Begriffen wie „Zahnarzt München“ oder „Hausarzt Schwabing“ — lokale Intention ist bei Arzt-Suchen extrem hoch.',
    ohneSeoParagraph:
      'Ohne SEO und ein gepflegtes Unternehmensprofil verlierst du sichtbare Platzierungen in Maps und organischen Ergebnissen. Viele Praxen zahlen dann dauerhaft hohe Klickpreise bei Google Ads — obwohl organische Sichtbarkeit langfristig günstiger skaliert.',
    massnahmen: buildStandardMassnahmen(
      'Ärztinnen und Ärzte',
      'Facharzt Praxis',
      'Fachgebiete, Behandlungsschwerpunkte, Patienten-FAQs'
    ),
    fehler: [
      'Identische Texte auf mehreren Standort- oder Facharzt-Seiten (Duplicate Content / Kannibalisierung).',
      'Falsche oder zu breite Kategorien im Google-Unternehmensprofil — weniger Relevanz für lokale Suchanfragen.',
      'Keine strukturierten Öffnungszeiten, Telefon oder Buchungslink — schlechtere Conversion aus der Suche.',
      'Sehr langsame Mobile-Seiten oder PDFs statt lesbarer HTML-Seiten für Leistungen.',
      'Fehlende oder veraltete Meta-Daten und interne Verlinkung zwischen Leistungs- und Team-Seiten.',
    ],
    fallstudieTitle: 'Fallstudie: Facharztpraxis in München',
    fallstudieParagraphs: [
      'Ausgangslage: etablierte Praxis, starke Empfehlungen offline, aber wenig organische Sichtbarkeit für wichtige Leistungs-Keywords mit Stadtteilbezug.',
      'Maßnahmen: Optimierung des Google Business Profils, lokale Landingpages pro Schwerpunkt, technische Bereinigung (Core Web Vitals), Aufbau von FAQ-Inhalten und Review-Prozess.',
      'Nach rund 6 Monaten: deutlich mehr Klicks aus der lokalen Suche und spürbar mehr Terminanfragen über die Website — bei gleichzeitig stabilen Rankings für Marken- und Fachbegriffe.',
    ],
    kostenParagraphs: kostenStandard('Praxen'),
    faqs: [
      {
        q: 'Wie lange dauert SEO für Arztpraxen?',
        a: 'Erste Verbesserungen bei lokalen Rankings (Google Maps, Stadtteil-Keywords) siehst du oft nach 4 – 8 Wochen. Für umkämpfte Keywords wie „Hautarzt München“ solltest du mit 4 – 6 Monaten rechnen. SEO ist eine langfristige Strategie — die Ergebnisse wachsen über die Zeit und bleiben nachhaltig, anders als bei bezahlter Werbung.',
      },
      {
        q: 'Was kostet SEO für eine Arztpraxis?',
        a: 'Für eine einzelne Arztpraxis in München liegt das typische monatliche SEO-Budget zwischen 990 und 1.590 EUR, abhängig vom Leistungsumfang. Dazu kommt ggf. eine einmalige Investition für einen Website-Relaunch oder SEO-Audit. Die genauen Preise findest du auf unserer Preisseite.',
      },
      {
        q: 'Darf ich als Arzt Google Ads schalten?',
        a: 'Ja, grundsätzlich dürfen Ärzte Google Ads schalten. Du musst aber die Vorgaben des Heilmittelwerbegesetzes (HWG) und deiner Berufsordnung einhalten. Das bedeutet: keine Heilversprechen in Anzeigentexten, sachliche Informationen und korrekte Bezeichnung deiner Qualifikationen. Google selbst hat zusätzliche Richtlinien für Gesundheitswerbung, die eine Zertifizierung erfordern können.',
      },
      {
        q: 'Wie gehe ich mit negativen Bewertungen um?',
        a: 'Aufgrund der ärztlichen Schweigepflicht kannst du nicht auf Details eingehen. Antworte sachlich und allgemein: Bedauere die negative Erfahrung und biete ein persönliches Gespräch an. Sammle parallel aktiv positive Bewertungen, um den Gesamtschnitt zu verbessern. Bei nachweislich falschen oder beleidigenden Bewertungen kannst du die Löschung bei Google oder Jameda beantragen — mit anwaltlicher Unterstützung.',
      },
      {
        q: 'Brauche ich als Arzt eine eigene Website?',
        a: 'Ja, unbedingt. Ein Jameda-Profil oder eine Doctolib-Seite allein reicht nicht. Auf diesen Plattformen konkurrierst du direkt mit allen anderen Ärzten, und du hast keine Kontrolle über die Darstellung. Eine eigene Website ist dein digitales Zuhause: Du bestimmst die Inhalte, baust Vertrauen auf und rankst bei Google für deine relevanten Keywords.',
      },
      {
        q: 'Was ist der Unterschied zwischen SEO und Jameda?',
        a: 'Jameda ist ein Ärzteverzeichnis, auf dem Patienten gezielt nach Ärzten suchen. SEO sorgt dafür, dass deine eigene Website bei Google gefunden wird — nicht nur auf Jameda. Der Vorteil von SEO: Du bist nicht von einer einzelnen Plattform abhängig, baust langfristig deine eigene Online-Präsenz auf und zahlst keine monatlichen Plattform-Gebühren für Sichtbarkeit. Idealerweise kombinierst du beides: ein gepflegtes Jameda-Profil und eine suchmaschinenoptimierte Website.',
      },
    ],
    relatedSlugs: [...REL.aerzte],
  },
  {
    slug: 'zahnaerzte',
    name: 'Zahnärzte',
    hubTitle: 'Zahnärzte',
    hubDescription: 'Mehr Patienten für Zahnarztpraxen — Local SEO & Maps.',
    hubEmoji: '🦷',
    metaTitle: 'SEO für Zahnärzte München | Mehr Patienten über Google',
    metaDescription:
      'SEO für Zahnärzte in München: Behandlungsseiten, Google Bewertungen, Local SEO. Fallstudie: Zahnarztpraxis von Seite 4 auf Top 3. Ab 1.590 EUR/Monat.',
    h1: 'SEO für Zahnärzte in München — Mehr Patienten über Google',
    ctaNoun: 'Patienten',
    warumParagraphs: [
      'Zahnarzt-Suchen sind stark lokal und oft mit hoher Absicht („Notfall“, „Implantat“, „Kinderzahnarzt“). Wer hier nicht in Maps und organischen Treffern ist, verliert gegen Praxen mit besser gepflegtem Profil.',
      'CPCs in Google Ads sind in der Zahnmedizin teuer — organische Sichtbarkeit amortisiert sich entsprechend schneller, wenn die Basis stimmt.',
      'Viele Praxen haben ähnliche Leistungsseiten; Differenzierung über klare Spezialisierung, echte Fotos und strukturierte FAQs hilft Google und Patienten gleichermaßen.',
    ],
    statistik:
      'Sehr hohe Nachfrage nach „Zahnarzt München“ und Spezialbegriffen — ein großer Teil der Klicks geht an die ersten Maps- und organischen Einträge.',
    ohneSeoParagraph:
      'Die Praxis nebenan mit stärkerem Profil und besserer Website zieht die Suchanfragen ab — auch wenn du klinisch überzeugst. Ohne SEO bleibt Wachstum vom Zufall abhängig.',
    massnahmen: buildStandardMassnahmen(
      'Zahnarztpraxen',
      'Zahnarzt Zahnarztpraxis',
      'Leistungen wie Prophylaxe, Implantate, Ästhetik, Angstpatienten'
    ),
    fehler: [
      'Generische „Alles aus einer Hand“-Texte ohne lokale und fachliche Tiefe.',
      'Zu wenig echte Praxis-Fotos und keine klaren CTAs (Anruf, Online-Termin).',
      'Mehrere Standorte ohne saubere URL- und GBP-Struktur.',
      'Ignorieren von Bewertungen oder unpersönliche Standard-Antworten.',
      'Langsame Seiten auf dem Handy — Patienten brechen vor dem Termin ab.',
    ],
    fallstudieTitle: 'Fallstudie: Zahnarztpraxis München',
    fallstudieParagraphs: [
      'Startpunkt: gute Mund-zu-Mund-Propaganda, aber schwache Maps-Sichtbarkeit für wichtige Leistungsbegriffe.',
      'Umsetzung: GBP mit passenden Kategorien, lokale Unterseiten, strukturierte FAQs, technische Optimierung und Review-Flow.',
      'Nach 6 Monaten: spürbar mehr Klicks auf Leistungsseiten und stabil mehr Anrufe aus der Suche.',
    ],
    kostenParagraphs: kostenStandard('Zahnarztpraxen'),
    faqs: [
      {
        q: 'Wie lange dauert es, bis meine Praxis bei Google sichtbar ist?',
        a: 'Erste Verbesserungen in der lokalen Suche sind erfahrungsgemäß nach 4–8 Wochen sichtbar — vor allem durch die Optimierung deines Google Business Profiles. Für organische Top-3-Rankings bei umkämpften Keywords wie „Zahnarzt München“ solltest du mit 4–6 Monaten rechnen. Stadtteil-Keywords wie „Zahnarzt Schwabing“ zeigen typischerweise schneller Ergebnisse.',
      },
      {
        q: 'Was kostet SEO für eine Zahnarztpraxis?',
        a: 'Für eine Zahnarztpraxis in München empfehlen wir unser Growth-Paket ab 1.590 EUR pro Monat. Der Wettbewerb im Dental-Bereich ist überdurchschnittlich hoch, deshalb reichen Einstiegspakete in der Regel nicht aus. Gemessen am Umsatzpotenzial eines einzigen Implantat-Patienten (3.000–8.000 EUR) ist SEO eine der rentabelsten Investitionen für deine Praxis.',
      },
      {
        q: 'Sind Vorher-Nachher-Fotos auf der Website erlaubt?',
        a: 'Das Heilmittelwerbegesetz (HWG) schränkt Vorher-Nachher-Darstellungen bei kosmetischen Eingriffen ein. Fotos von rein medizinisch indizierten Behandlungen (z. B. Zahnersatz nach Unfall) sind unter bestimmten Voraussetzungen möglich. Für Bleaching oder Veneers ist Vorsicht geboten. Wir beraten dich zu rechtssicheren Alternativen wie Behandlungsbeschreibungen und Patientenstimmen.',
      },
      {
        q: 'Wie bekomme ich mehr Google-Bewertungen?',
        a: 'Der effektivste Weg: Bitte zufriedene Patienten direkt nach der Behandlung um eine Bewertung. Wir richten einen kurzen Bewertungslink ein, den dein Praxisteam per QR-Code, SMS oder E-Mail teilen kann. Automatisierte Erinnerungen über dein Praxisverwaltungssystem erhöhen die Rücklaufquote. Wichtig: Bewertungen dürfen nicht erkauft werden.',
      },
      {
        q: 'Lohnt sich SEO, wenn ich schon bei Jameda bin?',
        a: 'Ja. Jameda ist ein Kanal unter vielen, aber du bist dort von der Plattform abhängig und stehst direkt neben deinen Wettbewerbern. Mit einer eigenen SEO-Strategie erreichst du Patienten, die direkt bei Google suchen — ohne Jameda-Provisionen. Außerdem vertrauen laut Studien immer mehr Patienten Google-Bewertungen mindestens genauso wie Jameda-Profilen.',
      },
      {
        q: 'Was bringt mir eine Behandlungsseite (z. B. für Implantate)?',
        a: 'Behandlungsseiten sind die wichtigsten Ranking-Treiber für Zahnarzt-Websites. Eine optimierte Seite zu „Zahnimplantate München“ zieht gezielt Patienten an, die genau diese Leistung suchen — und damit eine hohe Abschlusswahrscheinlichkeit haben. Außerdem erhöhen Behandlungsseiten die Verweildauer und senden positive Signale an Google.',
      },
    ],
    relatedSlugs: [...REL.zahnaerzte],
  },
  {
    slug: 'handwerker',
    name: 'Handwerker',
    hubTitle: 'Handwerker',
    hubDescription: 'Mehr Aufträge über Google — Elektriker, Sanitär, Maler & Co.',
    hubEmoji: '🔧',
    metaTitle: 'SEO für Handwerker München | Mehr Aufträge über Google [2026]',
    metaDescription:
      'SEO für Handwerker in München: Google Business Profile, lokale Keywords & Leistungsseiten. Ab 990 EUR/Monat. Jetzt kostenloses Erstgespräch sichern!',
    h1: 'SEO für Handwerker in München — Mehr Kunden über Google',
    ctaNoun: 'Kunden',
    warumParagraphs: [
      'Notfall- und Gewerkesuchen („Elektriker München“, „Sanitär Notdienst“) passieren auf dem Handy — wer oben steht, bekommt den Anruf.',
      'Handwerksbetriebe konkurrieren mit Marktplätzen und großen Portalen. Eine starke eigene Domain mit lokaler Autorität sichert dir Leads ohne ständige Provision.',
      'Viele Betriebe haben wenig Zeit für Marketing — wir übernehmen die SEO-Struktur, du liefert Fachinput und Fotos vom Bau.',
    ],
    statistik:
      'Hohe monatliche Suchnachfrage nach Handwerksleistungen mit Ortsbezug — Nutzer wollen schnell Nummer, Bewertung und Einsatzgebiet sehen.',
    ohneSeoParagraph:
      'Ohne lokale Sichtbarkeit landen Aufträge bei Portalen oder der Konkurrenz mit besserem Profil. Dann bleibt nur teure Schaltung oder Mundpropaganda.',
    massnahmen: buildStandardMassnahmen(
      'Handwerksbetriebe',
      'Elektriker Sanitär Maler',
      'Leistungen, Einsatzgebiete, Referenzen, Notdienst'
    ),
    fehler: [
      'Eine generische „Über uns“-Seite ohne klare Leistungen und Stadtteile.',
      'Falsche Hauptkategorie in Google Business (z. B. zu breit).',
      'Keine mobil optimierte Klick-zu-Anruf-Erfahrung.',
      'Unklare Servicegebiete — Nutzer wissen nicht, ob du nach Pasing fährst.',
      'Dünne Texte auf Leistungsseiten, die jeder Wettbewerber auch hat.',
    ],
    fallstudieTitle: 'Fallstudie: Handwerksbetrieb Region München',
    fallstudieParagraphs: [
      'Ausgangslage: solide Arbeit vor Ort, aber wenig strukturierte Online-Präsenz und schwache Maps-Rankings.',
      'Schritte: GBP mit Servicegebieten, Leistungs-Landingpages, technische Basis, Bewertungsprozess für zufriedene Kunden.',
      'Ergebnis nach 6 Monaten: mehr organische Anrufe und Formularanfragen, klar messbar in Search Console und Call-Tracking.',
    ],
    kostenParagraphs: kostenStandard('Handwerksbetriebe'),
    faqs: [
      {
        q: 'Lohnt sich SEO für kleine Handwerksbetriebe?',
        a: 'Gerade für kleine Betriebe mit 2–10 Mitarbeitern ist SEO besonders effektiv. Ein einziger Auftrag über Google — etwa eine Badsanierung für 8.000–25.000 EUR — finanziert die SEO-Kosten für Monate. Anders als bei Plattformen wie MyHammer zahlst du keine Provision pro Lead, sondern baust nachhaltige Sichtbarkeit auf, die dir langfristig gehört.',
      },
      {
        q: 'Was kostet SEO für Handwerker?',
        a: 'Professionelle SEO-Betreuung für Handwerksbetriebe beginnt bei 990 EUR pro Monat. Dafür erhältst du Google Business Profile Optimierung, lokale Keyword-Strategie, Leistungsseiten und Bewertungsmanagement. Gemessen am Auftragswert im Handwerk — ein Dachstuhl kostet 5.000–20.000 EUR — amortisiert sich die Investition oft schon mit einem zusätzlichen Auftrag pro Monat.',
      },
      {
        q: 'Wie lange dauert es, bis ich bei Google gefunden werde?',
        a: 'Erste Verbesserungen über das Google Business Profile sind oft schon nach 4–6 Wochen sichtbar. Für organische Rankings bei Keywords wie „Klempner München“ solltest du mit 3–6 Monaten rechnen. Stadtteil-Keywords wie „Elektriker Schwabing“ zeigen typischerweise schneller Ergebnisse, da der Wettbewerb geringer ist.',
      },
      {
        q: 'Brauche ich eine neue Website für SEO?',
        a: 'Nicht unbedingt. In vielen Fällen lässt sich die bestehende Website optimieren — mit besserer Struktur, mobiler Darstellung und gezielten Leistungsseiten. Nur wenn die Seite technisch veraltet ist (kein responsives Design, extrem lange Ladezeiten), empfehlen wir einen Relaunch. Das klären wir im kostenlosen Erstgespräch.',
      },
      {
        q: 'Kann ich SEO als Handwerker selbst machen?',
        a: 'Die Grundlagen wie Google Business Profile einrichten und Bewertungen sammeln kannst du selbst umsetzen. Für eine vollständige Strategie mit Keyword-Recherche, technischer Optimierung und Content-Erstellung fehlt den meisten Handwerkern verständlicherweise die Zeit — wer den ganzen Tag auf der Baustelle ist, hat abends keine Kapazität für SEO. Genau hier setzen wir an.',
      },
      {
        q: 'Was bringt mir Google Business Profile?',
        a: 'Google Business Profile ist der wichtigste einzelne Hebel für Handwerker — und kostenlos. Es sorgt dafür, dass dein Betrieb bei lokalen Suchen und in Google Maps erscheint, mit Bewertungen, Fotos, Öffnungszeiten und direkter Anruf-Funktion. Für Notdienst-Suchen wie „Klempner Notdienst München“ ist ein optimiertes Profil oft der entscheidende Faktor.',
      },
    ],
    relatedSlugs: [...REL.handwerker],
  },
  {
    slug: 'anwaelte',
    name: 'Anwälte',
    hubTitle: 'Anwälte & Kanzleien',
    hubDescription: 'SEO für Kanzleien — Mandantenanfragen mit relevanter Suchintention.',
    hubEmoji: '⚖️',
    metaTitle: 'SEO für Anwälte München | Mehr Mandate über Google | SEO München',
    metaDescription:
      'SEO für Anwälte in München: Local SEO, BRAO-konforme Inhalte & Google Business Profile. Erfahre, wie deine Kanzlei mehr Mandate über Google gewinnt. Jetzt beraten lassen.',
    h1: 'SEO für Anwälte in München — Mehr Mandate über Google',
    ctaNoun: 'Mandate',
    warumParagraphs: [
      'Mandanten recherchieren Rechtsgebiete und „Anwalt München“ lange vor dem Erstkontakt. Sichtbarkeit bei den richtigen Keywords filtert schon die Zielgruppe.',
      'Der Wettbewerb unter Kanzleien ist hoch — wer nur auf Empfehlungen setzt, verliert gegen Kanzleien mit professioneller Suchpräsenz.',
      'Wir achten auf seriöse, regelkonforme Formulierungen und klare Trennung von Werbung und Information.',
    ],
    statistik:
      'Starke Nachfrage nach spezialisierten Begriffen (z. B. Familienrecht, Arbeitsrecht) mit lokalem Bezug — oft höhere Abschlussbereitschaft als bei generischen Leads.',
    ohneSeoParagraph:
      'Ohne SEO liefern teure Ads oder Portale Leads — oder es fehlt der Zulauf komplett. Organische Sichtbarkeit skaliert mit der Kanzlei mit.',
    massnahmen: buildStandardMassnahmen(
      'Kanzleien',
      'Anwalt Kanzlei',
      'Rechtsgebiete, häufige Mandantenfragen, Standortseiten'
    ),
    fehler: [
      'Zu breite Keywords ohne Fokus auf ein bis zwei Schwerpunkte.',
      'Dünne oder geklonte Texte zu Rechtsgebieten.',
      'Fehlende oder unklare Impressum-/Kontaktdaten auf Landingpages.',
      'Kein strukturierter Aufbau für mehrere Standorte oder Anwälte.',
      'Technische Mängel, die Google und Nutzer von der Seite abhalten.',
    ],
    fallstudieTitle: 'Fallstudie: Kanzlei München',
    fallstudieParagraphs: [
      'Ausgangslage: gute Reputation, aber wenig organische Sichtbarkeit für Kern-Rechtsgebiete.',
      'Maßnahmen: Themen-Cluster pro Rechtsgebiet, lokale Signale, technische Optimierung, GBP-Pflege.',
      'Nach 6 Monaten: mehr qualifizierte Kontaktanfragen und bessere Rankings für relevante Longtail-Begriffe.',
    ],
    kostenParagraphs: kostenStandard('Kanzleien'),
    faqs: [
      {
        q: 'Ist SEO für Rechtsanwälte erlaubt?',
        a: 'Ja, bei sachlicher Information und Einhaltung der Berufsregeln. Wir vermeiden irreführende Versprechen und achten auf die berufsrechtlichen Vorgaben.',
      },
      {
        q: 'Wie unterscheidet sich SEO von Google Ads für Kanzleien?',
        a: 'SEO baut langfristig Vertrauen und Traffic; Ads liefern schnell Sichtbarkeit. Oft lohnt die Kombination mit klar getrenntem Budget.',
      },
      faqPaket(),
      {
        q: 'Braucht jede Kanzlei eigene Landingpages?',
        a: 'Pro Rechtsgebiet und ggf. Standort helfen dedizierte Seiten — sauber verlinkt und ohne Duplicate Content.',
      },
      {
        q: 'Könnt ihr Inhalte rechtlich prüfen?',
        a: 'Wir liefern SEO-taugliche Textentwürfe; die finale fachliche und berufsrechtliche Prüfung liegt bei euch.',
      },
    ],
    relatedSlugs: [...REL.anwaelte],
  },
  {
    slug: 'steuerberater',
    name: 'Steuerberater',
    hubTitle: 'Steuerberater',
    hubDescription: 'Online-Sichtbarkeit für Kanzleien und Berater — B2B & Mandanten.',
    hubEmoji: '📊',
    metaTitle: 'SEO für Steuerberater München | Mehr Mandanten über Google | SEO München',
    metaDescription:
      'SEO für Steuerberater in München: Local SEO, Google Business Profile & StBerG-konforme Strategien. Mehr Mandanten über Google gewinnen. Ab 990 EUR/Monat. Jetzt beraten lassen.',
    h1: 'SEO für Steuerberater in München — Mehr Mandanten über Google',
    ctaNoun: 'Mandanten',
    warumParagraphs: [
      'Unternehmer und Privatpersonen suchen aktiv nach Steuerberatern und Themen wie Gründung, Umstrukturierung oder laufende Betreuung — mit lokalem Bezug.',
      'Vertrauen ist zentral: strukturierte, sachliche Inhalte und klare Profile steigern Klicks und Erstkontakte.',
      'Viele Kanzleien wirken online austauschbar — Spezialisierung und FAQs heben dich ab.',
    ],
    statistik:
      'Konstante Nachfrage nach Steuerberatern mit Stadt- und Branchenbezug — Longtail-Fragen („GmbH Gründung Steuerberater München“) konvertieren gut.',
    ohneSeoParagraph:
      'Ohne Sichtbarkeit bleibt die Akquise beim Netzwerk. Mit SEO erreichst du suchende Mandanten genau in der Wachstumsphase.',
    massnahmen: buildStandardMassnahmen(
      'Steuerberaterkanzleien',
      'Steuerberater Kanzlei',
      'Leistungen, Zielgruppen (GmbH, Freiberufler), Fachthemen'
    ),
    fehler: [
      'Nur eine Startseite ohne Tiefe zu Leistungen und Zielgruppen.',
      'Kein Google-Unternehmensprofil oder unvollständige Angaben.',
      'Fehlende Case Studies oder Erklärseiten zu typischen Mandantenfragen.',
      'Schwache mobile Darstellung — Entscheider recherchieren unterwegs.',
      'Keine klaren CTAs (Erstgespräch, Kontakt, Downloads).',
    ],
    fallstudieTitle: 'Fallstudie: Steuerberatung München',
    fallstudieParagraphs: [
      'Ausgangslage: etablierte Mandantschaft, aber wenig Neukunden über die Website.',
      'Umsetzung: Themen-Seiten, lokale Signale, technische Basis, GBP, interne Verlinkung.',
      'Nach 6 Monaten: mehr qualifizierte Anfragen für Beratungsgespräche über organische Suche.',
    ],
    kostenParagraphs: kostenStandard('Steuerberaterkanzleien'),
    faqs: [
      {
        q: 'Darf ich als Steuerberater online werben?',
        a: 'Ja. Seit der Liberalisierung 2011 ist Werbung für Steuerberater grundsätzlich erlaubt. §57a StBerG gestattet sachliche und berufsbezogene Informationen. Unzulässig ist lediglich aufdringliche oder irreführende Werbung. Social Media, SEO, Google Ads und ein eigener Blog sind vollständig erlaubt. Die weit verbreitete Annahme, Steuerberater dürften nicht werben, ist ein Mythos.',
      },
      {
        q: 'Was kostet SEO für eine Steuerkanzlei?',
        a: 'Professionelle SEO-Betreuung für Steuerkanzleien beginnt ab 990 EUR pro Monat. Dafür erhältst du Google Business Profile Optimierung, lokale Keyword-Strategie, Leistungsseiten und Bewertungsmanagement. Gemessen am Customer Lifetime Value eines Steuermandats von durchschnittlich 144.000 EUR amortisiert sich SEO bereits mit einem einzigen neuen Mandanten.',
      },
      {
        q: 'Wie lange dauert es bis zu ersten Ergebnissen?',
        a: 'Google Business Profile Optimierungen zeigen oft innerhalb von 4–6 Wochen erste Wirkung im Local Pack. Für organische Rankings bei Keywords wie „Steuerberater München“ solltest du mit 4–8 Monaten rechnen. Nischen-Keywords wie „Steuerberater für Ärzte München“ oder Stadtteil-Begriffe ranken oft deutlich schneller.',
      },
      {
        q: 'Lohnt sich SEO auch für kleine Einzelkanzleien?',
        a: 'Gerade für Einzelkanzleien. Große Kanzleien dominieren die generischen Keywords durch Budget und Autorität. Als Einzelkanzlei gewinnst du über Spezialisierung und lokale Nähe: Stadtteil-Keywords, persönliche Google-Bewertungen und Inhalte, die echte Mandantenfragen beantworten. Ein neuer Mandant mit einem Lifetime Value von 144.000 EUR refinanziert die SEO-Investition vielfach.',
      },
      {
        q: 'Was bringt mir ein Google Business Profile als Steuerberater?',
        a: 'Das Google Business Profile ist für Steuerberater der wichtigste kostenlose Sichtbarkeits-Hebel. Es sorgt dafür, dass deine Kanzlei bei lokalen Suchen und in Google Maps erscheint — mit Bewertungen, Öffnungszeiten und direkter Anruf-Funktion. Besonders in der Hochsaison von Januar bis Mai, wenn Mandanten aktiv nach Steuerberatern suchen, entscheidet das Profil über Sichtbarkeit oder Unsichtbarkeit.',
      },
      {
        q: 'Hilft SEO auch bei der Mitarbeitergewinnung?',
        a: 'Absolut. 75 % der Kanzleien leiden unter Fachkräftemangel. Eine moderne, gut sichtbare Online-Präsenz signalisiert Steuerfachangestellten und Steuerberatern, dass deine Kanzlei zukunftsorientiert arbeitet. Karriereseiten, die für Keywords wie „Steuerfachangestellte München Job“ optimiert sind, bringen qualifizierte Bewerber direkt über Google zu dir.',
      },
    ],
    relatedSlugs: [...REL.steuerberater],
  },
  {
    slug: 'immobilienmakler',
    name: 'Immobilienmakler',
    hubTitle: 'Immobilienmakler',
    hubDescription: 'Sichtbarkeit für Verkauf, Vermietung und Makler in München.',
    hubEmoji: '🏠',
    metaTitle: 'SEO für Immobilienmakler München | Mehr Aufträge ohne Portale | SEO München',
    metaDescription:
      'SEO für Immobilienmakler in München: Eigentümer-Leads über Google, Stadtteil-SEO & weniger Portal-Abhängigkeit. Fallstudie: +35.000 EUR Provision durch SEO. Ab 1.590 EUR/Monat.',
    h1: 'SEO für Immobilienmakler in München — Mehr Kunden über Google',
    ctaNoun: 'Kunden',
    warumParagraphs: [
      'Käufer und Verkäufer suchen Makler und Stadtteile extrem lokal — wer in Maps und organischen Treffern fehlt, wird nicht angerufen.',
      'Große Portale fressen Sichtbarkeit; eigene SEO stärkt deine Marke und reduziert Abhängigkeit von Provisionplattformen.',
      'Stadtteil- und Objekt-Themen lassen sich mit sauberer Struktur und interner Verlinkung skalieren.',
    ],
    statistik:
      'Hohe Suchintensität zu „Immobilienmakler München“ und Stadtteilen wie Schwabing, Bogenhausen, Giesing — Longtail zu Exposés und Beratung wächst.',
    ohneSeoParagraph:
      'Ohne eigene Sichtbarkeit bleiben die besten Objekte unsichtbar und die Akquise hängt an Portalen und Netzwerk.',
    massnahmen: buildStandardMassnahmen(
      'Immobilienmakler',
      'Makler Immobilien',
      'Stadtteile, Kauf, Vermietung, Gewerbe, Ratgeber'
    ),
    fehler: [
      'Nur Objektlisten ohne erklärenden Ratgeber-Content.',
      'Unklare oder doppelte NAP-Daten bei mehreren Büros.',
      'Keine optimierten Stadtteil- oder Zielgruppen-Seiten.',
      'Langsame Immobilien-Suche oder schlechte Mobile UX.',
      'Fehlende oder dünne Meta-Infos auf Kategorie- und Objektseiten.',
    ],
    fallstudieTitle: 'Fallstudie: Maklerbüro München',
    fallstudieParagraphs: [
      'Ausgangslage: Abhängigkeit von Portalen, schwache organische Reichweite für Beratungs-Keywords.',
      'Maßnahmen: GBP, Stadtteil-Landingpages, Content zu Kauf/Vermietung, technische Performance, interne Verlinkung.',
      'Nach 6 Monaten: mehr Anfragen für Bewertungen und Verkäufe über die eigene Website.',
    ],
    kostenParagraphs: kostenStandard('Maklerbüros'),
    faqs: [
      {
        q: 'Kann ich mit SEO wirklich unabhängig von ImmoScout24 werden?',
        a: 'Vollständig unabhängig wirst du kurzfristig nicht — aber du kannst die Abhängigkeit drastisch reduzieren. Viele unserer Kunden starten mit 100 % Portal-Leads und erreichen nach 6–12 Monaten SEO ein Verhältnis von 50:50 oder besser. Das bedeutet: Du kannst teure Premium-Pakete auf Basis downgraden und sparst sofort mehrere hundert Euro pro Monat, während die organischen Leads weiter wachsen.',
      },
      {
        q: 'Was kostet SEO für Immobilienmakler?',
        a: 'Für den Immobilienmarkt in München empfehlen wir das Growth-Paket ab 1.590 EUR pro Monat. Die hohe Konkurrenzdichte unter Maklern erfordert eine umfassende Strategie mit Stadtteil-Seiten, Eigentümer-Content und technischer Optimierung. Gemessen an der durchschnittlichen Maklerprovision von 20.000–50.000 EUR pro Verkauf refinanziert ein einziger SEO-generierter Auftrag die Investition für ein ganzes Jahr.',
      },
      {
        q: 'Wie lange dauert es bis zu ersten Ergebnissen?',
        a: 'Google Business Profile Optimierungen wirken oft innerhalb von 4–6 Wochen im Local Pack. Für organische Rankings bei umkämpften Keywords wie „Immobilienmakler München“ solltest du mit 4–8 Monaten rechnen. Stadtteil-Keywords wie „Immobilienmakler Lehel“ oder Eigentümer-Keywords wie „Immobilienbewertung Bogenhausen“ zeigen deutlich schneller Ergebnisse.',
      },
      {
        q: 'Soll ich auf Käufer oder Verkäufer optimieren?',
        a: 'Primär auf Eigentümer und Verkäufer. Ein Verkaufsauftrag bringt dir 20.000–50.000 EUR Provision — Käufer-Leads generierst du automatisch über die Objektpublikation. Der größte Hebel liegt bei Eigentümer-Keywords wie „Immobilienbewertung München“ oder „Haus verkaufen München“. Trotzdem sollte deine Website auch Käufern ein gutes Erlebnis bieten — das stärkt deine Marke und liefert Empfehlungspotenzial.',
      },
      {
        q: 'Was bringt mir eine Immobilienbewertungs-Landingpage?',
        a: 'Eine optimierte Bewertungs-Landingpage ist der stärkste Lead-Magnet für Makler. Eigentümer, die „Immobilienbewertung München“ googeln, stehen typischerweise am Anfang eines Verkaufsprozesses. Mit einer kostenlosen Erstbewertung als Kontaktanreiz gewinnst du qualifizierte Eigentümer-Leads, die du später in Verkaufsaufträge konvertierst. Dieses eine Keyword kann dir monatlich 5–15 Bewertungsanfragen liefern.',
      },
      {
        q: 'Lohnt sich SEO auch für Einzelmakler?',
        a: 'Gerade für Einzelmakler. Du konkurrierst gegen große Ketten wie Engel & Völkers oder von Poll, die generische Keywords durch Budget dominieren. Als Einzelmakler gewinnst du über lokale Spezialisierung: Stadtteil-Expertise, persönliche Google-Bewertungen und authentischen Content. Ein einziger Verkaufsauftrag über SEO bringt mehr Provision als ein ganzes Jahr SEO-Investition kostet.',
      },
    ],
    relatedSlugs: [...REL.immobilienmakler],
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    hubTitle: 'Restaurants & Gastronomie',
    hubDescription: 'Mehr Gäste über Google Maps, Speisekarten und Reservierungen.',
    hubEmoji: '🍽️',
    metaTitle: 'SEO für Restaurants in München | Gastronomie Local SEO',
    metaDescription:
      'SEO für Restaurants in München: mehr Gäste über Google Maps, Speisekarte und Reservierung. Local SEO für Gastronomie — SEO München.',
    h1: 'SEO für Restaurants & Gastronomie in München — Mehr Gäste über Google',
    ctaNoun: 'Gäste',
    warumParagraphs: [
      '„Restaurant in der Nähe“ und Küchen-Stile werden ständig auf dem Handy gesucht — Maps und Bewertungen entscheiden über den Besuch.',
      'München hat hohe Dichte an Lokationen; ohne klares Profil und gute Fotos verlierst du gegen die Konkurrenz um die Ecke.',
      'Reservierungslinks, Speisekarte und Öffnungszeiten müssen für Google und Nutzer gleichermaßen stimmen.',
    ],
    statistik:
      'Sehr hohe lokale Suchnachfrage zu Küche, Stadtteil und Anlässen — ein großer Teil endet direkt in Maps.',
    ohneSeoParagraph:
      'Ohne optimiertes Profil und Website bleibt der Tisch leer, während andere Lokale die Suchen abholen.',
    massnahmen: buildStandardMassnahmen(
      'Restaurants und Gastronomie',
      'Restaurant Gastronomie',
      'Küche, Lage, Events, Reservierung, Speisekarte'
    ),
    fehler: [
      'Veraltete Öffnungszeiten oder falsche Kategorien im Profil.',
      'Keine strukturierte Speisekarte (PDF statt crawlbarer Inhalte).',
      'Schwache oder wenige Fotos — schlechte CTR in Maps.',
      'Ignorieren von Bewertungen oder Konflikte öffentlich schlecht gelöst.',
      'Keine klaren CTAs für Reservierung oder Anruf.',
    ],
    fallstudieTitle: 'Fallstudie: Restaurant München',
    fallstudieParagraphs: [
      'Ausgangslage: beliebtes Lokal, aber schwache Online-Sichtbarkeit außerhalb der Stammgäste.',
      'Schritte: GBP mit Menü-Highlights, Fotos, Posts, Website-Snippets, lokale Keywords.',
      'Ergebnis: mehr Aufrufe in Maps und spürbar mehr Reservierungen über Google.',
    ],
    kostenParagraphs: kostenStandard('Restaurants'),
    faqs: [
      {
        q: 'Brauche ich eine eigene Website als Restaurant?',
        a: 'Empfohlen — für Reservierung, Events und SEO-Tiefe. Das Profil allein reicht selten für alle Suchanfragen.',
      },
      {
        q: 'Wie wichtig sind Instagram und Google?',
        a: 'Beides ergänzt sich. Google liefert die Entscheidung „jetzt essen gehen“ — wir synchronisieren Botschaften und Keywords.',
      },
      faqPaket(),
      {
        q: 'Kann ich mehrere Filialen optimieren?',
        a: 'Ja — mit eigenen Profilen und konsistenten Daten pro Standort.',
      },
      {
        q: 'Was ist mit Lieferdiensten?',
        a: 'Wir berücksichtigen Liefergebiete und Keywords, damit du nicht nur Vor-Ort-Gäste erreichst.',
      },
    ],
    relatedSlugs: [...REL.restaurants],
  },
  {
    slug: 'physiotherapeuten',
    name: 'Physiotherapeuten',
    hubTitle: 'Physiotherapeuten',
    hubDescription: 'Mehr Patienten für Praxen — Local SEO & medizinnahe Inhalte.',
    hubEmoji: '💆',
    metaTitle: 'SEO für Physiotherapeuten | Praxis Google München',
    metaDescription:
      'SEO für Physiotherapeuten in München: mehr Patienten über Google und Maps. Local SEO, Praxis-Marketing, seriöse Inhalte — SEO München.',
    h1: 'SEO für Physiotherapeuten in München — Mehr Patienten über Google',
    ctaNoun: 'Patienten',
    warumParagraphs: [
      'Patienten suchen Therapieformen, Schmerzbilder und Praxen mit kurzen Wegen — lokal und vertrauenswürdig.',
      'Viele Praxen haben ähnliche Angebote; klare Spezialisierungen und gute Bewertungen heben dich ab.',
      'Wir achten auf seriöse Formulierungen ohne Heilsversprechen.',
    ],
    statistik:
      'Stabile Nachfrage nach Physio in München und Stadtteilen — Kombination aus Maps und organischen FAQs funktioniert stark.',
    ohneSeoParagraph:
      'Ohne Sichtbarkeit bleiben Termine unter Auslastung, während andere Praxen die Suchanfragen abfangen.',
    massnahmen: buildStandardMassnahmen(
      'Physiotherapiepraxen',
      'Physiotherapie Praxis',
      'Behandlungsschwerpunkte, Sport, Reha, Team'
    ),
    fehler: [
      'Zu allgemeine Texte ohne Schwerpunkt (Sport, Manuelle Therapie …).',
      'Unvollständiges Profil oder falsche Kategorie.',
      'Keine klaren Wege zur Terminbuchung.',
      'Schwache mobile Seite — Patienten buchen unterwegs.',
      'Zu wenig FAQs zu typischen Patientenfragen.',
    ],
    fallstudieTitle: 'Fallstudie: Physiopraxis München',
    fallstudieParagraphs: [
      'Ausgangslage: volle Kapazität zur Stoßzeit, aber Lücken und wenig Neupatienten aus der Suche.',
      'Maßnahmen: GBP, lokale Landingpages, FAQs, technische Optimierung, Reviews.',
      'Nach 6 Monaten: bessere Auslastung und mehr Neuanfragen über die Website.',
    ],
    kostenParagraphs: kostenStandard('Physiopraxen'),
    faqs: [
      {
        q: 'Darf ich Heilversprechen im Text?',
        a: 'Nein — wir formulieren informativ und vorsichtig, ohne Heilsversprechen.',
      },
      {
        q: 'Ist Local SEO wichtig für Physio?',
        a: 'Sehr — Patienten wählen Praxen in der Nähe. Maps und Bewertungen sind zentral.',
      },
      faqPaket(),
      {
        q: 'Brauche ich separate Seiten pro Therapieform?',
        a: 'Oft ja — wenn Suchanfragen und Intentionen sich unterscheiden, helfen eigene Seiten.',
      },
      {
        q: 'Wie schnell wirkt SEO?',
        a: 'Erste Local-Signale oft schnell; organische Themen brauchen typischerweise mehrere Monate.',
      },
    ],
    relatedSlugs: [...REL.physiotherapeuten],
  },
  {
    slug: 'hotels',
    name: 'Hotels',
    hubTitle: 'Hotels',
    hubDescription: 'Direktbuchungen und Sichtbarkeit für Hotels in München.',
    hubEmoji: '🏨',
    metaTitle: 'SEO für Hotels in München | Hotel Marketing Google',
    metaDescription:
      'SEO für Hotels in München: mehr Direktbuchungen und Sichtbarkeit bei Google. Local SEO, Themen zu Lage & Anreise — SEO München.',
    h1: 'SEO für Hotels in München — Mehr Gäste über Google',
    ctaNoun: 'Gäste',
    warumParagraphs: [
      'Reisende kombinieren „Hotel München“ mit Anlass, Lage und Preis — wer nicht in organischen Ergebnissen und Maps ist, zahlt höhere OTA-Provisionen.',
      'Direktbucher sind wertvoller; SEO und strukturierte Angebote auf der Website helfen, Abhängigkeit von Portalen zu reduzieren.',
      'Lokale Sehenswürdigkeiten, Events und Anreise sind ideale Content-Hebel.',
    ],
    statistik:
      'Hohe saisonale und ganzjährige Nachfrage nach Unterkünften mit Stadtteil- und Anlassbezug.',
    ohneSeoParagraph:
      'Ohne eigene Sichtbarkeit dominieren OTAs — Margen sinken. Mit SEO holst du mehr Direktbuchungen und Markenbindung.',
    massnahmen: buildStandardMassnahmen(
      'Hotels',
      'Hotel Unterkunft',
      'Zimmer, Lage, Messe, Anreise, Pakete'
    ),
    fehler: [
      'Dünne Zimmerbeschreibungen ohne lokale Relevanz.',
      'Schlechte Mobile-Buchung oder lange Ladezeiten.',
      'Kein strukturiertes Angebot für Google (Preis/Sterne-Snippets wo passend).',
      'Fehlende FAQ zu Parken, ÖPNV, Messe.',
      'Unklare GBP-Kategorie oder falsche Pin-Position.',
    ],
    fallstudieTitle: 'Fallstudie: Hotel München',
    fallstudieParagraphs: [
      'Ausgangslage: starke OTA-Abhängigkeit, wenig Direkttraffic.',
      'Schritte: technische Performance, lokale Landingpages, FAQs, GBP, interne Verlinkung zu Angeboten.',
      'Nach 6 Monaten: höherer Anteil Direktbuchungen und bessere Sichtbarkeit für Nischen-Keywords.',
    ],
    kostenParagraphs: kostenStandard('Hotels'),
    faqs: [
      {
        q: 'Lohnt sich SEO neben Booking & Co.?',
        a: 'Ja — jede Direktbuchung spart Provision. SEO baut langfristig eine stabile Pipeline.',
      },
      {
        q: 'Was ist mit Sterne-Snippets?',
        a: 'Wo sinnvoll setzen wir strukturierte Daten und saubere Bewertungsintegration — ohne Spam-Risiko.',
      },
      faqPaket(),
      {
        q: 'Kann ich Event-Keywords besetzen?',
        a: 'Ja — Messe, Oktoberfest, Konzerte: saisonale Inhalte und interne Links stärken Relevanz.',
      },
      {
        q: 'Brauche ich Blog-Inhalte?',
        a: 'Gezielte Ratgeber zu München und Aufenthalt helfen — ohne Keyword-Stuffing.',
      },
    ],
    relatedSlugs: [...REL.hotels],
  },
  {
    slug: 'kfz-werkstatt',
    name: 'KFZ-Werkstätten',
    hubTitle: 'KFZ-Werkstätten',
    hubDescription: 'Mehr Werkstatt-Anfragen über Maps und lokale Suche.',
    hubEmoji: '🚗',
    metaTitle: 'SEO für KFZ-Werkstätten in München | Autowerkstatt Google',
    metaDescription:
      'SEO für KFZ-Werkstätten in München: mehr Anfragen über Google Maps und lokale Suche. Werkstatt-Marketing — SEO München.',
    h1: 'SEO für KFZ-Werkstätten in München — Mehr Kunden über Google',
    ctaNoun: 'Kunden',
    warumParagraphs: [
      'Defekt, TÜV, Reifenwechsel — Nutzer suchen „Werkstatt in der Nähe“ sofort auf dem Handy. Maps entscheidet.',
      'Starke lokale Konkurrenz; Bewertungen und klare Leistungen (Marken, Inspektion) sind Pflicht.',
      'Viele Betriebe unterschätzen strukturierte Leistungsseiten und Servicegebiete.',
    ],
    statistik:
      'Hohe lokale Suchintensität zu Werkstatt, TÜV und Marken — Nutzer wollen schnell Telefonnummer und Öffnungszeiten.',
    ohneSeoParagraph:
      'Ohne Sichtbarkeit gehen die Aufträge an die Werkstatt mit besserem Profil — auch wenn du schneller bist.',
    massnahmen: buildStandardMassnahmen(
      'KFZ-Werkstätten',
      'Autowerkstatt KFZ',
      'Inspektion, TÜV, Reifen, Marken, Abschleppen'
    ),
    fehler: [
      'Zu breite oder falsche Kategorie im Unternehmensprofil.',
      'Keine klaren Leistungsseiten pro Thema (TÜV, Klima, Achsvermessung …).',
      'Schlechte Fotos der Halle — wenig Vertrauen in Maps.',
      'Keine konsistente NAP auf Branchenverzeichnissen.',
      'Langsame Mobile-Seite — Nutzer rufen lieber die Konkurrenz.',
    ],
    fallstudieTitle: 'Fallstudie: Autowerkstatt München',
    fallstudieParagraphs: [
      'Ausgangslage: volle Halle, aber wenig Neukunden aus der Online-Suche.',
      'Umsetzung: GBP, Leistungs-Landingpages, Reviews, technische Basis, lokale Keywords.',
      'Nach 6 Monaten: mehr Anrufe und Termine aus Google Maps und organischen Treffern.',
    ],
    kostenParagraphs: kostenStandard('Werkstätten'),
    faqs: [
      {
        q: 'Ist Google Maps wichtiger als die Website?',
        a: 'Beides zusammen: Maps für den schnellen Kontakt, Website für Vertrauen und Leistungsdetails.',
      },
      {
        q: 'Wie bekomme ich mehr Bewertungen?',
        a: 'Wir richten seriöse Prozesse nach erledigtem Auftrag ein — ohne gegen Richtlinien zu verstoßen.',
      },
      faqPaket(),
      {
        q: 'Mehrere Standorte?',
        a: 'Eigene Profile und klar getrennte Seiten — wir vermeiden Kannibalisierung.',
      },
      {
        q: 'Was kostet SEO für eine Werkstatt?',
        a: 'Oft Starter oder Growth — abhängig von Wettbewerb im Umkreis. Details auf der Preisseite.',
      },
    ],
    relatedSlugs: [...REL['kfz-werkstatt']],
  },
]

export function getBrancheBySlug(slug: string): BranchePageData | undefined {
  return BRANCHE_PAGES.find((p) => p.slug === slug)
}

export function getAllBrancheSlugs(): string[] {
  return BRANCHE_PAGES.map((p) => p.slug)
}

/** FAQs Hub /branchen — Texte = FAQPage JSON-LD (BranchenHubContent) */
export const BRANCHEN_HUB_FAQS: BrancheFaq[] = [
  {
    q: 'Was bringt branchenspezifisches SEO im Vergleich zu allgemeinem SEO?',
    a: 'Branchenspezifisches SEO zielt auf die exakten Suchbegriffe, die potenzielle Kunden in deiner Branche verwenden. Ein Zahnarzt wird mit anderen Keywords gesucht als ein Handwerker. Durch die gezielte Optimierung auf branchenrelevante Begriffe und lokale Suchintentionen erreichst du qualifiziertere Besucher, die tatsächlich nach deiner Dienstleistung suchen.',
  },
  {
    q: 'Wie lange dauert es, bis SEO-Maßnahmen für meine Branche wirken?',
    a: 'Erfahrungsgemäß zeigen sich erste Ranking-Verbesserungen nach 4 bis 8 Wochen. Stabile Platzierungen auf der ersten Google-Seite erreichst du typischerweise in 3 bis 6 Monaten. Die genaue Dauer hängt vom Wettbewerb in deiner Branche und dem aktuellen Zustand deiner Website ab.',
  },
  {
    q: 'Was kostet SEO für meine Branche in München?',
    a: 'Die Kosten richten sich nach Branche und Wettbewerbssituation. Für lokale Dienstleister wie Ärzte, Anwälte oder Handwerker starten unsere Pakete bei 990 EUR pro Monat (Starter). Branchen mit stärkerem Online-Wettbewerb wie Immobilien oder Hotels benötigen in der Regel ein höheres Budget. In einem kostenlosen Erstgespräch analysieren wir deine Situation und geben dir eine konkrete Einschätzung.',
  },
  {
    q: 'Funktioniert SEO auch für Branchen mit wenig Online-Präsenz?',
    a: 'Gerade in Branchen mit geringer Online-Konkurrenz bietet SEO enormes Potenzial. Wenn deine Mitbewerber noch nicht in SEO investieren, kannst du dir schneller Top-Positionen sichern. Viele Handwerksbetriebe und lokale Dienstleister in München profitieren genau davon — sie erreichen die erste Google-Seite oft schon innerhalb weniger Wochen.',
  },
]

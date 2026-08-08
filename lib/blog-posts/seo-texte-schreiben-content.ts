/**
 * Blog: SEO-Texte schreiben — sm-article Layout.
 *
 * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx
 * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).
 */
export const seoTexteSchreibenContent =
  '<div class="sm-article">' +
  `
  <h1>SEO-Texte schreiben: wie du Texte erstellst, die Google und Leser überzeugen</h1>

  <div class="meta-info">
    <span>Veröffentlicht: 8. August 2026</span>
    <span>Lesezeit: 12 Min.</span>
    <span>Ratgeber</span>
  </div>

  <div class="intro">
    <p>Ein guter SEO-Text ist keine Keyword-Sammlung mit Füllsätzen. Er beantwortet eine konkrete Suchanfrage besser als die Texte, die dafür heute ranken. Genau daran scheitern viele Unternehmens-Websites: Ihre Texte erzählen, was die Firma sagen möchte, statt zu liefern, wonach die Zielgruppe sucht.</p>
    <p>In dieser Anleitung bekommst du das komplette Handwerk: sieben Schritte von der Suchintention bis zur Messung in der Search Console, eine Checkliste zum Abhaken, zwei Vorher-Nachher-Beispiele und einen ehrlichen Blick darauf, was KI beim Schreiben leisten kann und wo sie dich Rankings kostet. So, wie wir es als Agentur in München täglich für Ratgeber und Leistungsseiten anwenden.</p>
  </div>

  <nav class="sm-toc" aria-label="Inhaltsverzeichnis">
    <p class="sm-toc-title">Inhaltsverzeichnis</p>
    <ol>
      <li><a href="#was-ist">Was ist ein SEO-Text?</a></li>
      <li><a href="#anleitung">Die Anleitung: in 7 Schritten zum SEO-Text</a></li>
      <li><a href="#checkliste">Die SEO-Text-Checkliste zum Abhaken</a></li>
      <li><a href="#beispiele">Vorher/Nachher: zwei Beispiele</a></li>
      <li><a href="#ki">SEO-Texte im KI-Zeitalter</a></li>
      <li><a href="#schreiben-lassen">SEO-Texte schreiben lassen: wann sich das lohnt</a></li>
      <li><a href="#faq">Häufig gestellte Fragen</a></li>
      <li><a href="#fazit">Fazit</a></li>
    </ol>
  </nav>

  <h2 id="was-ist">Was ist ein SEO-Text?</h2>

  <div class="definition-box">
    <p style="margin:0;"><strong>Was ist ein SEO-Text?</strong> Ein SEO-Text ist ein Text, der für eine konkrete Suchanfrage geplant ist: Er wird bei Google gefunden, weil er die Absicht hinter dieser Anfrage vollständig beantwortet. Dazu verbindet er Handwerk (Keyword-Einsatz, Struktur, Snippet) mit Substanz: klaren Antworten, belegten Aussagen und erkennbarer Erfahrung. Kurz: ein guter Text für Menschen, der für Suchmaschinen lesbar gemacht wurde.</p>
  </div>

  <p>Mit dem alten Bild vom SEO-Text hat das nichts mehr zu tun. Graue Textwüsten am Seitenende, in denen ein Keyword in jedem zweiten Satz steckt, funktionieren seit Jahren nicht mehr und schaden eher. Was stattdessen zählt, hat Google selbst dokumentiert:</p>

  <div class="snippet-box">
    <p style="margin:0;"><strong>Laut Google Search Central:</strong> Erfolgreiche Inhalte sind „people-first“, also in erster Linie für Menschen erstellt und nicht, um Rankings zu manipulieren. Texte, die primär für die Suchmaschine produziert werden, nennt die Doku ausdrücklich als das, was du vermeiden sollst. Und zur Länge steht dort wörtlich: Eine bevorzugte Wortzahl hat Google nicht.</p>
  </div>

  <p>Das heißt nicht, dass Optimierung egal wäre. Es heißt: Die Reihenfolge dreht sich. Erst klärst du, was der Suchende wirklich braucht, dann schreibst du die beste verfügbare Antwort, und erst dabei sorgst du dafür, dass Google den Text versteht und als Treffer ausspielen kann. Genau in dieser Reihenfolge arbeiten die sieben Schritte unten.</p>

  <p>Zu den Begriffen: Ob du SEO-Texte erstellen, SEO-Content erstellen oder einfach „einen Ratgeber schreiben“ sagst, meint in der Praxis dasselbe. Der Ablauf gilt für Blogartikel genauso wie für Leistungs-, Kategorie- und Standortseiten; nur die Suchintention unterscheidet sich, und damit Aufbau und Länge.</p>

  <h2 id="anleitung">Die Anleitung: in 7 Schritten zum SEO-Text</h2>

  <p>Die Schritte bauen aufeinander auf: Die ersten drei passieren, bevor du den ersten Satz formulierst. Das ist der Punkt, an dem sich gute von austauschbaren Texten trennen, denn Schreiben kann man einen schwachen Plan nicht mehr retten.</p>

  <h3>Schritt 1: Kläre die Suchintention</h3>

  <p>Jede Suchanfrage hat eine Absicht. Wer „kernsanierung ablauf“ googelt, will verstehen; wer „sanierungsfirma münchen“ googelt, will beauftragen. Dein Text kann nur eine dieser Absichten richtig gut bedienen. Die drei häufigsten Typen:</p>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Intention</th><th>Typische Anfrage</th><th>Was dein Text leisten muss</th></tr>
    </thead>
    <tbody>
      <tr><td>Informational (wissen)</td><td>„wie läuft eine kernsanierung ab“</td><td>Erklären, anleiten, die Frage vollständig beantworten</td></tr>
      <tr><td>Transaktional (kaufen/beauftragen)</td><td>„sanierungsfirma beauftragen“</td><td>Leistung, Ablauf und nächsten Schritt klar machen</td></tr>
      <tr><td>Lokal (vor Ort finden)</td><td>„sanierungsfirma münchen“</td><td>Ort, Einzugsgebiet und Kontaktweg sichtbar machen</td></tr>
    </tbody>
  </table>
  </div>

  <p>Der schnellste Praxis-Check: Google deine Ziel-Anfrage selbst und sieh dir die erste Seite an. Stehen dort Ratgeber, erwartet Google eine Erklärung; stehen dort Anbieter-Seiten, erwartet Google ein Angebot. Gegen diese Erwartung anzuschreiben ist der häufigste Planungsfehler, den wir in Münchner Audits sehen: eine Verkaufsseite für eine Wissens-Anfrage rankt in der Regel nicht, egal wie gut sie formuliert ist.</p>

  <h3>Schritt 2: Wähle ein Haupt-Keyword und sein Umfeld</h3>

  <p>Pro Text gibt es genau ein Haupt-Keyword, also die Anfrage, deren Intention du komplett abdeckst. Dazu kommt ein Umfeld aus Varianten und Unterfragen: Synonyme, Wortformen und die W-Fragen, die Suchende rund um das Thema stellen. Du findest sie kostenlos über Google Suggest, die Boxen „Ähnliche Fragen“ in der Suche und die echten Suchanfragen in deiner Search Console. Das komplette Recherche-Handwerk mit allen Tool-Wegen findest du in unserer <a href="/blog/keyword-recherche-anleitung" class="internal-link">Keyword-Recherche-Anleitung</a>.</p>

  <p>Für den Einsatz im Text gilt eine einfache Ordnung statt einer Dichte-Formel: Das Haupt-Keyword gehört in den Title, in die H1, in die ersten Sätze und in ein bis zwei Zwischenüberschriften. Varianten und Unterfragen verteilen sich über die Sektionen, so wie es sich natürlich ergibt. Wenn ein Satz durch ein Keyword schlechter wird, gewinnt der Satz.</p>

  <p>Wichtig für die Planung im Gesamtbild: Zwei eigene Texte auf dieselbe Anfrage konkurrieren gegeneinander (Kannibalisierung). Prüfe vor dem Schreiben kurz, ob es zur Ziel-Anfrage schon eine Seite auf deiner Website gibt. Falls ja, ist ein Update dieser Seite fast immer der bessere Weg als ein zweiter Text.</p>

  <h3>Schritt 3: Baue das Gerüst, bevor du schreibst</h3>

  <p>Ein SEO-Text entsteht von außen nach innen: erst die Struktur, dann die Sätze. Schreib die Überschriften zuerst, als wären sie das Inhaltsverzeichnis deiner Antwort: eine H1 für das Thema, H2 für die großen Unterfragen aus Schritt 2, H3 für Details darunter. Dann prüfst du das Gerüst gegen deine Liste: Ist jede relevante Unterfrage eine Überschrift oder bewusst gestrichen?</p>

  <figure>
    <img src="/images/blog/seo-texte-aufbau.webp" alt="Infografik: Aufbau eines SEO-Textes in sechs Ebenen, von Title und Meta Description über H1, Antwort-Einstieg und H2-Sektionen bis zu FAQ und Fazit." width="1200" height="900" loading="lazy" />
    <figcaption>Der Aufbau eines SEO-Textes: vom Snippet über das H-Gerüst bis zu FAQ und Fazit, jede Ebene mit klarer Aufgabe.</figcaption>
  </figure>

  <p>Innerhalb jeder Sektion gilt das Prinzip Antwort zuerst: Die ersten zwei bis vier Sätze beantworten die Frage der Überschrift vollständig, danach kommen Details, Beispiele und Einordnung. Wer nur die Antwort-Absätze deines Textes liest, muss das Wichtigste verstanden haben. Das dient zuerst deinen Lesern, macht deine Inhalte aber auch für Suchsysteme leicht zitierbar.</p>

  <h3>Schritt 4: Schreib Title und Meta Description als Mini-Anzeige</h3>

  <p>Title und Meta Description sind das Schaufenster deines Textes in den Suchergebnissen: Sie entscheiden mit, ob aus einer Einblendung ein Klick wird. Formuliere den Title mit dem Haupt-Keyword möglichst vorn, einem konkreten Nutzen und maximal rund 60 Zeichen, damit er nicht abgeschnitten wird. Die Description hat mit rund 150 Zeichen Platz für eine Zusage: Was findet der Suchende hier, und warum lohnt der Klick?</p>

  <p>Zwei Handwerksregeln dazu: Title und H1 sollten nicht identisch sein, sondern zwei Blickwinkel auf dasselbe Thema zeigen (zum Beispiel Anleitung in der H1, Ergebnis im Title). Und versprich nichts, was der Text nicht hält: Ein Klick auf eine nicht eingelöste Zusage endet mit dem Zurück-Button, und du verlierst genau die Leser, die du gewinnen wolltest.</p>

  <h3>Schritt 5: Schreib lesbar: kurze Absätze, klare Sätze</h3>

  <p>Gelesen wird am Bildschirm, meist am Handy, oft in Bewegung. Dafür schreibst du: Absätze mit zwei bis drei Sätzen, eine Aussage pro Satz, aktive Formulierungen, konkrete Beispiele statt Floskeln. Zwischenüberschriften, Listen und Tabellen geben Struktur, wo Aufzählungen oder Vergleiche im Fließtext unlesbar würden.</p>

  <p>Fachbegriffe darfst du verwenden, wenn deine Zielgruppe sie sucht, aber erklär sie beim ersten Auftreten in einem Halbsatz. Der beste Redaktions-Test kostet nichts: Lies den Text einmal laut. Wo du stolperst, stolpern deine Leser auch.</p>

  <h3>Schritt 6: Setz E-E-A-T-Signale: zeig, wer schreibt und woher du es weißt</h3>

  <p>Google beschreibt in seiner Doku, dass die Systeme Inhalte bevorzugen sollen, die Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit erkennen lassen (E-E-A-T), und ergänzt wörtlich: Vertrauen ist der wichtigste dieser Aspekte. Für deinen Text heißt das konkret: ein sichtbarer Autor mit Namen und Rolle, ein erkennbarer Absender mit Über-uns-Seite, ein Datum, das stimmt, und Aussagen, die du belegen oder erlebt haben musst.</p>

  <p>Die härteste Regel daraus übernehmen wir seit Jahren in jede Textabnahme: Jede Zahl braucht eine benannte Quelle, jede Erfahrungs-Aussage muss aus echter Arbeit stammen. Erfundene Prozentwerte und ausgedachte Fallstudien sind keine Abkürzung, sondern ein Vertrauensrisiko, bei Lesern wie bei Google. Ein Text mit drei belegten Zahlen schlägt einen Text mit zehn erfundenen, spätestens dann, wenn ein Leser nachprüft.</p>

  <h3>Schritt 7: Veröffentlichen ist die Halbzeit: miss und schärfe nach</h3>

  <p>Nach dem Livegang beginnt die zweite Hälfte der Arbeit. In der Search Console siehst du, für welche Suchanfragen dein Text Einblendungen bekommt, wo er steht und ob geklickt wird. Plane die erste ehrliche Auswertung nach vier bis acht Wochen ein und beantworte drei Fragen: Rankt der Text für die geplante Intention? Holt der Title Klicks, wo Einblendungen da sind? Und welche echten Suchanfragen tauchen auf, die der Text noch nicht beantwortet?</p>

  <p>Aus den Antworten entstehen gezielte Updates: eine ergänzte Sektion für eine neue Unterfrage, ein nachgeschärfter Title, ein präziserer Einstieg. Ob drumherum die Seite selbst sauber aufgestellt ist, von Technik bis zu internen Links, prüfst du am schnellsten mit unserer <a href="/blog/onpage-seo-checkliste" class="internal-link">OnPage-SEO-Checkliste</a>.</p>

  <div class="cta-box">
    <strong>Sieben Schritte pro Text sind neben dem Tagesgeschäft nicht drin?</strong> Dann gib das Schreiben ab: Unsere <a href="/preise" class="internal-link">SEO-Pakete mit Content-Baustein und festen Monatspreisen</a> decken Recherche, Texterstellung und die laufende Messung ab. Du siehst jeden Monat, was geschrieben wurde und was es bringt.
  </div>

  <h2 id="checkliste">Die SEO-Text-Checkliste zum Abhaken</h2>

  <p>Vor der Veröffentlichung einmal durchgehen; jeder Punkt kostet Sekunden, jeder übersprungene Punkt kostet Sichtbarkeit:</p>

  <ul class="checklist">
    <li>Suchintention geprüft: Die erste Google-Seite zur Ziel-Anfrage bestätigt deinen Texttyp.</li>
    <li>Ein Haupt-Keyword festgelegt, und keine bestehende Seite deiner Website zielt auf dieselbe Anfrage.</li>
    <li>Haupt-Keyword im Title, in der H1, in den ersten Sätzen und in ein bis zwei Zwischenüberschriften.</li>
    <li>Alle wichtigen Unterfragen sind als H2 oder H3 abgedeckt.</li>
    <li>Jede Sektion beantwortet ihre Überschrift in den ersten zwei bis vier Sätzen.</li>
    <li>Title maximal rund 60 Zeichen, mit Klick-Motiv, nicht identisch mit der H1.</li>
    <li>Meta Description als konkrete Zusage in rund 150 Zeichen.</li>
    <li>Absätze mit zwei bis drei Sätzen; Listen und Tabellen, wo sie Struktur schaffen.</li>
    <li>Jede Zahl und jede Studien-Aussage hat eine benannte Quelle.</li>
    <li>Autor, Absender und Datum sind sichtbar; Erfahrung ist erkennbar.</li>
    <li>Interne Links führen zu weiterführenden Seiten, und mindestens eine bestehende Seite verlinkt zurück.</li>
    <li>Kontrolltermin in der Search Console eingeplant (vier bis acht Wochen nach Livegang).</li>
  </ul>

  <h2 id="beispiele">Vorher/Nachher: zwei Beispiele</h2>

  <p>Beide Beispiele sind frei konstruiert, ohne echte Firmen und ohne Kundenprojekte. Sie zeigen zwei Muster, die uns in Text-Audits immer wieder begegnen: die austauschbare Willkommens-Floskel und der Einstieg, der ankündigt statt antwortet.</p>

  <h3>Beispiel 1: Leistungsseite (lokale Intention)</h3>

  <div class="warn-box">
    <p style="margin:0;"><strong>Vorher:</strong> „Herzlich willkommen auf unserer Website. Als kompetenter Partner rund um das Thema Umzug bieten wir einen umfassenden Rundum-Service aus einer Hand. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.“</p>
  </div>

  <p>Drei Sätze, null Information: kein Ort, keine Leistung im Wortlaut der Suche, kein nächster Schritt. Dieser Einstieg könnte auf jeder Website jeder Branche stehen, und genau deshalb rankt er für nichts.</p>

  <div class="definition-box">
    <p style="margin:0;"><strong>Nachher:</strong> „Du planst einen Umzug in München? Hier findest du in zwei Minuten das Wichtigste: welche Leistungen wir übernehmen (Packen, Transport, Montage), wie du ein verbindliches Angebot bekommst und welche Stadtteile wir bedienen, von Schwabing bis Sendling.“</p>
  </div>

  <p>Gleicher Platz, andere Wirkung: Die Suchanfrage steht sinngemäß im ersten Satz, die Leistung wird konkret, der Weg zum Angebot ist klar. So sieht ein Einstieg aus, der die lokale Intention ernst nimmt.</p>

  <h3>Beispiel 2: Ratgeber-Einstieg (informationale Intention)</h3>

  <div class="warn-box">
    <p style="margin:0;"><strong>Vorher:</strong> „Die Sanierung eines Hauses ist ein wichtiges Thema für jeden Eigentümer. Viele fragen sich, was eigentlich alles zu einer Kernsanierung gehört. In diesem Artikel gehen wir ausführlich auf alle Aspekte rund um das Thema ein.“</p>
  </div>

  <p>Der Text kündigt eine Antwort an, gibt aber keine. Der Leser weiß nach drei Sätzen nichts, was er vorher nicht wusste.</p>

  <div class="definition-box">
    <p style="margin:0;"><strong>Nachher:</strong> „Eine Kernsanierung ist die Erneuerung eines Gebäudes bis auf die tragende Substanz: Leitungen, Böden, Fenster und Haustechnik werden ersetzt, die Grundstruktur bleibt stehen. Was dazugehört, in welcher Reihenfolge saniert wird und woran du erkennst, ob sich das für dein Haus lohnt, klären wir Schritt für Schritt.“</p>
  </div>

  <p>Antwort zuerst, dann die Wegbeschreibung: Der erste Satz definiert, der zweite verspricht nur, was der Artikel hält. Genau das Muster aus Schritt 3, und der Grund, warum solche Einstiege auch in KI-Antworten zitierfähig sind.</p>

  <h2 id="ki">SEO-Texte im KI-Zeitalter</h2>

  <p>Kaum eine Frage hören wir 2026 öfter: Darf ich SEO-Texte mit KI schreiben, und rankt das überhaupt noch? Die gute Nachricht: Du musst nicht raten, die Position von Google ist dokumentiert.</p>

  <div class="snippet-box">
    <p style="margin:0;"><strong>Laut Google:</strong> Belohnt wird hochwertiger Inhalt, unabhängig davon, wie er produziert wurde. Der angemessene Einsatz von KI oder Automatisierung verstößt nicht gegen die Richtlinien. Genauso klar ist die Grenze gezogen: Massenhaft erzeugte Seiten ohne Mehrwert, deren Hauptzweck die Manipulation der Rankings ist, verletzen die Spam-Richtlinien; die Policy nennt generative KI-Tools ausdrücklich als Beispiel („skalierter Content-Missbrauch“).</p>
  </div>

  <p>Entscheidend ist also nicht das Werkzeug, sondern das Ergebnis. Und hier scheitern reine KI-Texte aus drei nachvollziehbaren Gründen. Erstens: Ein Sprachmodell kennt deine Projekte, deine Kunden und deinen Münchner Markt nicht; die Erfahrung, die E-E-A-T verlangt, kann es nur behaupten, nicht belegen. Zweitens: Ungeprüfte KI-Entwürfe enthalten im Zweifel erfundene Details und Zahlen, und jede erfundene Zahl gefährdet genau das Vertrauen, das laut Google am schwersten wiegt. Drittens: Ein Modell formuliert den Durchschnitt des bereits Geschriebenen. Ein Text, der nichts ergänzt, was es nicht schon gibt, liefert keinen Mehrwert, und damit exakt das Muster, das die Spam-Policy beschreibt.</p>

  <p>Dazu kommt die Marktlage: Sistrix hat im Februar 2026 über 100 Millionen deutsche Keywords analysiert. Bei rund 20 Prozent erscheint inzwischen eine AI Overview, und wo sie erscheint, fällt die Klickrate von Position 1 von 27 auf 11 Prozent; am stärksten betroffen sind informationale Suchanfragen, also genau das Terrain klassischer SEO-Texte. Durchschnittstexte konkurrieren damit direkt mit der KI-Antwort oberhalb der Ergebnisse, und diesen Vergleich verlieren sie. Eine Chance bleibt trotzdem: Wer die beste Antwort liefert, kann in der Übersicht selbst als Quelle auftauchen. Wie das funktioniert, zeigt dir unser <a href="/blog/ai-overviews-optimieren" class="internal-link">AI-Overviews-Guide</a>.</p>

  <p>Für die Praxis heißt das nicht KI-Verzicht, sondern Arbeitsteilung. So setzen wir sie ein, ohne die Qualität zu opfern:</p>

  <figure>
    <img src="/images/blog/seo-texte-ki-workflow.webp" alt="Infografik: KI beim Schreiben von SEO-Texten in vier Schritten nutzen, von Gerüst und Rohfassung über Fakten-Check und eigene Erfahrung bis zum Feinschliff mit Messung." width="1200" height="900" loading="lazy" />
    <figcaption>KI im Text-Workflow: vier Schritte, die den Entwurf beschleunigen und die Substanz beim Menschen lassen.</figcaption>
  </figure>

  <ol class="steps-list">
    <li><strong>Nutze KI für Gerüst und Rohfassung.</strong> Gliederungs-Vorschläge, Formulierungs-Varianten, Zusammenfassungen: Hier spart sie echte Zeit.</li>
    <li><strong>Prüfe jede Aussage und jede Zahl.</strong> Was du nicht belegen kannst, fliegt raus oder bekommt eine Quelle.</li>
    <li><strong>Ergänze, was nur du weißt.</strong> Projekterfahrung, lokale Details, echte Kundenfragen: Das kann kein Modell liefern, und genau das macht den Text zitierfähig.</li>
    <li><strong>Redigiere auf deine Stimme und miss das Ergebnis.</strong> Der Text muss klingen wie dein Unternehmen und sich in der Search Console beweisen.</li>
  </ol>

  <p>Übrigens empfiehlt Google in derselben Doku, transparent zu machen, wo Automatisierung eine wesentliche Rolle bei der Erstellung gespielt hat. Wer so arbeitet, dass er das offenlegen könnte, ohne rot zu werden, ist auf der sicheren Seite.</p>

  <h2 id="schreiben-lassen">SEO-Texte schreiben lassen: wann sich das lohnt</h2>

  <p>Selbst schreiben lohnt sich, wenn du die Zeit hast und dein Wissen der eigentliche Inhalt ist: Niemand kennt dein Handwerk, deine Kanzlei oder deine Praxis so gut wie du. SEO-Texte schreiben lassen lohnt sich, wenn Texte liegen bleiben, weil das Tagesgeschäft vorgeht, oder wenn zwar geschrieben wird, aber ohne Recherche, Snippet-Handwerk und Messung dahinter.</p>

  <p>Woran du gute Anbieter erkennst, egal ob freie SEO-Texterin in München, Texter im eigenen Team oder Agentur: Sie fragen nach deiner Zielgruppe und deinen Daten, statt sofort Wortzahlen zu verkaufen. Sie liefern Suchintention, Gerüst, Title und Description mit, nicht nur Fließtext. Und sie wollen nach vier bis acht Wochen in die Search Console schauen, weil sie an der Wirkung gemessen werden wollen.</p>

  <div class="warn-box">
    <p style="margin:0;"><strong>Vorsicht bei Masse-Angeboten:</strong> Pakete nach dem Muster „zehn Texte pro Woche zum Fixpreis, ohne Briefing“ produzieren genau die skalierten Inhalte ohne Mehrwert, die Googles Spam-Richtlinien beschreiben. Das Risiko trägt am Ende deine Domain, nicht der Anbieter.</p>
  </div>

  <p>Bei uns in München ist die Texterstellung deshalb kein Einzelposten, sondern Teil der <a href="/leistungen/onpage-optimierung" class="internal-link">OnPage-Optimierung</a>: Keyword-Set, Text, Snippet und interne Verlinkung entstehen aus einer Hand und werden nach dem Livegang weiter betreut. So bleibt kein Text ein Einzelstück ohne Anschluss an die Website.</p>

  <div class="cta-box">
    <strong>Du willst SEO-Texte schreiben lassen, mit Strategie dahinter?</strong> Dann lern uns kennen: Im <a href="/kontakt" class="internal-link">kostenlosen Erstgespräch</a> (ohne Bindung) schauen wir auf deine wichtigsten Seiten und sagen dir ehrlich, welche Texte zuerst dran sind. Telefonisch oder per E-Mail, du bekommst innerhalb von 24 Stunden eine Antwort.
  </div>

  <div class="faq-section">
    <h2 id="faq">Häufig gestellte Fragen zu SEO-Texten</h2>

    <div class="faq-item">
      <div class="faq-q">Was kostet ein SEO-Text?</div>
      <div class="faq-a">Eine seriöse Pauschale gibt es nicht: Der Preis hängt vom Rechercheaufwand, der Länge, dem Thema und davon ab, ob Strategie, Snippet und Erfolgsmessung enthalten sind. Abgerechnet wird je nach Anbieter pro Wort, pro Text oder als monatliches Paket. Als Faustregel gilt: Je erklärungsbedürftiger das Thema und je härter der Wettbewerb, desto mehr Arbeitszeit steckt in einem Text, der wirkt. Unsere Paketpreise findest du transparent auf der Preisseite.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Wie lang muss ein SEO-Text sein?</div>
      <div class="faq-a">So lang, wie die vollständige Antwort braucht: Eine bevorzugte Wortzahl hat Google nach eigener Aussage nicht. Orientiere dich an der Suchintention und an den Texten, die aktuell ranken. Eine lokale Leistungsseite kommt oft mit wenigen hundert Wörtern aus, ein Ratgeber zu einem komplexen Thema braucht deutlich mehr. Füllabsätze, nur um eine Zielzahl zu erreichen, machen den Text schlechter statt besser.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Wie viele Keywords soll ein SEO-Text enthalten?</div>
      <div class="faq-a">Vergiss feste Dichte-Formeln, sie sind seit Jahren überholt. Arbeite mit einem Haupt-Keyword pro Text und einem Umfeld aus Varianten und Unterfragen. Das Haupt-Keyword gehört in den Title, die H1, die ersten Sätze und ein bis zwei Zwischenüberschriften; danach schreibst du normal weiter. Sobald ein Satz durch ein Keyword schlechter wird, lass das Keyword weg.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Erkennt Google KI-Texte, und werden sie abgestraft?</div>
      <div class="faq-a">Google bewertet nach eigener Aussage die Qualität, nicht die Produktionsart: Hochwertige Inhalte werden belohnt, egal ob mit oder ohne KI erstellt, und der angemessene KI-Einsatz verstößt nicht gegen die Richtlinien. Abgestraft wird skalierter Content-Missbrauch, also massenhaft erzeugte Seiten ohne Mehrwert mit dem Hauptzweck der Ranking-Manipulation. Riskant ist damit nicht das Werkzeug, sondern ungeprüfte Massenware.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Wie schnell wirkt ein SEO-Text?</div>
      <div class="faq-a">Erfahrungsgemäß brauchst du Geduld: Neue Texte pendeln sich je nach Wettbewerb, Thema und Stärke deiner Domain über Wochen bis Monate ein. Erste Einblendungen siehst du in der Search Console oft nach wenigen Tagen, belastbare Positionen meist erst nach mehreren Wochen. Plane deine erste Auswertung nach vier bis acht Wochen ein und schärfe dann gezielt nach.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Was unterscheidet einen SEO-Text von einem normalen Text?</div>
      <div class="faq-a">Die Vorarbeit und die Messbarkeit. Ein SEO-Text startet bei einer konkreten Suchanfrage, deckt die Absicht dahinter vollständig ab und ist auf Snippet, Überschriften-Gerüst und interne Verlinkung hin gebaut; nach der Veröffentlichung wird seine Wirkung in der Search Console geprüft. Sprachlich gilt dasselbe wie für jeden guten Text: klar, konkret, für Menschen geschrieben. Ein Text, der nach Suchmaschine klingt, ist kein guter SEO-Text.</div>
    </div>
  </div>

  <div class="sm-author-box">
    <p class="sm-author-box-title">Über den Autor</p>
    <p class="sm-author-box-text">Julian Schäfer ist SEO-Berater bei <strong>SEO München</strong>. Er plant, schreibt und überarbeitet SEO-Texte für Unternehmen aus München und Bayern: Ratgeber, Leistungs- und Standortseiten. Grundlage sind Suchdaten aus der Search Console, benannte Quellen statt Behauptungen und eine Betreuung mit festem Ansprechpartner.</p>
  </div>

  <div class="fazit">
    <h2 id="fazit">Fazit: gute SEO-Texte sind Handwerk, kein Geheimnis</h2>

    <p>SEO-Texte schreiben heißt: die Suchintention ernster nehmen als den eigenen Werbetext. Drei Dinge nimmst du mit:</p>

    <ol>
      <li><strong>Erst denken, dann schreiben.</strong> Suchintention, Haupt-Keyword und Gerüst entscheiden mehr über deine Sichtbarkeit als jede einzelne Formulierung.</li>
      <li><strong>Substanz schlägt Masse.</strong> Belegte Zahlen, erkennbare Erfahrung und ein klarer Absender zahlen auf das ein, was laut Google am wichtigsten ist: Vertrauen. Skalierte Massenware ohne Mehrwert steht dagegen namentlich in den Spam-Richtlinien.</li>
      <li><strong>Veröffentlichen ist die Halbzeit.</strong> Erst die Search Console zeigt, ob der Text seine Anfrage trifft; nachschärfen gehört zum Handwerk dazu.</li>
    </ol>

    <p>Arbeite die sieben Schritte beim nächsten Text einmal bewusst durch, mit der Checkliste daneben. Und wenn du das Schreiben lieber abgibst: Du weißt jetzt, woran du einen guten Anbieter erkennst, und wir sind nur ein Erstgespräch entfernt.</p>
  </div>
` +
  '</div>'

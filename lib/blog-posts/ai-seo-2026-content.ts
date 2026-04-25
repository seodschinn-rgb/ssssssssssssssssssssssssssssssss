/**
 * Blog: AI SEO 2026 — sm-article Layout.
 *
 * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx
 * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).
 */
export const aiSeo2026Content =
  '<div class="sm-article">' +
  `
    <h1>AI SEO 2026: So rankst du in ChatGPT, Claude und Perplexity</h1>

    <div class="meta-info">
      <span>Aktualisiert: April 2026</span>
      <span>Lesezeit: 22 Min.</span>
      <span>Ratgeber</span>
    </div>

    <nav class="sm-toc" aria-label="Inhaltsverzeichnis">
      <p class="sm-toc-title">Inhaltsverzeichnis</p>
      <ol>
        <li><a href="#was-ist-ai-seo">Was ist AI SEO eigentlich?</a></li>
        <li><a href="#stand-2026">Stand 2026: Wo stehen wir gerade?</a></li>
        <li><a href="#klicks-aio">Was die AI-Welle für deine Klicks bedeutet</a></li>
        <li><a href="#ai-search">Wie funktioniert AI Search wirklich?</a></li>
        <li><a href="#ai-crawler">Die wichtigsten AI-Crawler im Überblick</a></li>
        <li><a href="#robots-strategien">robots.txt für AI-Bots: drei Strategien</a></li>
        <li><a href="#content-hebel">Content optimieren: 6 Hebel</a></li>
        <li><a href="#technik-hebel">Technische Hebel</a></li>
        <li><a href="#brand-hebel">Brand-Hebel</a></li>
        <li><a href="#llms-txt">llms.txt: Hype oder Pflicht?</a></li>
        <li><a href="#lokal-muenchen">Lokal in München</a></li>
        <li><a href="#messung">AI-Sichtbarkeit messen</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#kosten">Kosten</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#fazit">Fazit</a></li>
      </ol>
    </nav>

    <div class="lead-stat">
      <div class="big-number">265 Millionen</div>
      <p><strong>Organische Klicks. Pro Monat. Weg.</strong> Das ist die Zahl, die Sistrix in seiner Studie vom Februar 2026 für den deutschen Markt errechnet hat. Klicks, die durch AI Overviews aus den klassischen Suchergebnissen verschwunden sind.</p>
    </div>

    <p>Wikipedia allein verliert laut derselben Erhebung rund 31,6 Millionen Klicks pro Monat. Position 1 büßt bei einer aktiven AI Overview im Schnitt 59 Prozent ihrer Klickrate ein.</p>

    <p>Wenn du als KMU-Inhaberin oder Marketing-Verantwortlicher in einem mittelständischen Unternehmen sitzt, ist das keine abstrakte Statistik mehr. Das ist dein Traffic, deine Leads, dein Umsatz. Und es ist der Grund, warum AI SEO 2026 keine Spielerei mehr ist, sondern Pflicht.</p>

    <p>Dieser Artikel ist eine ehrliche Tutorial-Anleitung für KMU und Mittelstand. Keine Enterprise-Theorie, keine Buzzword-Show. Du lernst, was AI SEO konkret bedeutet, welche Hebel du selbst bedienen kannst und wo die Grenzen liegen. Mit Daten, Code-Snippets und einer realistischen Roadmap. Wenn du nach diesem Artikel die ersten drei Schritte umsetzt, bist du weiter als 90 Prozent deiner Wettbewerber.</p>

    <h2 id="was-ist-ai-seo">Was ist AI SEO eigentlich?</h2>

    <p>Bevor wir tiefer einsteigen, klären wir die Begriffe. Die Branche wirft mit Akronymen um sich, und nicht alle meinen dasselbe.</p>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Begriff</th><th>Bedeutung</th><th>Was es konkret meint</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>AI SEO</strong></td><td>AI Search Engine Optimization</td><td>Sammelbegriff für alle Optimierungen rund um KI-Suchsysteme</td></tr>
          <tr><td><strong>GEO</strong></td><td>Generative Engine Optimization</td><td>Optimierung für generative Suchmaschinen (ChatGPT, Perplexity, AI Overviews)</td></tr>
          <tr><td><strong>AEO</strong></td><td>Answer Engine Optimization</td><td>Optimierung für direkte Antworten, überschneidet sich stark mit GEO</td></tr>
          <tr><td><strong>LLMO</strong></td><td>Large Language Model Optimization</td><td>Optimierung der Sichtbarkeit in LLM-Antworten ohne Live-Search</td></tr>
          <tr><td><strong>SGE</strong></td><td>Search Generative Experience</td><td>Googles ursprünglicher Name für AI Overviews (mittlerweile veraltet)</td></tr>
        </tbody>
      </table>
    </div>

    <p>In der Praxis benutzen die meisten "AI SEO" und "GEO" synonym. GEO ist der etwas spezifischere Begriff, AI SEO der breitere. Wir verwenden beide in diesem Artikel, gemeint ist immer dasselbe Ziel: in den Antworten der KI-Systeme aufzutauchen, zitiert zu werden und idealerweise einen Klick zu generieren.</p>

    <p>Wichtig zu verstehen: AI SEO ersetzt klassisches SEO nicht. Es erweitert es. Eine Seite, die in der klassischen Google-Suche nicht crawlbar ist, wird auch in AI Overviews nicht zitiert. Eine Seite ohne Backlinks und Autorität schafft es selten in die Quellen-Liste von Perplexity. Die Grundlagen bleiben, die Disziplin obendrauf ist neu.</p>

    <h2 id="stand-2026">Stand 2026: Wo stehen wir gerade?</h2>

    <p>Schauen wir auf die nüchternen Zahlen. Stand Frühjahr 2026 sieht der deutsche Markt so aus.</p>

    <p><strong>AI Overviews in Deutschland:</strong> Live ausgerollt seit dem 26. März 2025. Laut Sistrix zeigen aktuell rund 20 Prozent aller analysierten deutschen Keywords eine AI Overview. Im Health-Sektor sind es bereits 82 Prozent, wer dort Inhalte hat, kommt an AIO nicht vorbei.</p>

    <p><strong>ChatGPT Search:</strong> Verfügbar seit Ende 2024, mittlerweile ohne ChatGPT-Plus-Pflicht für die Basisfunktion. Nutzt im Hintergrund den Bing-Index, ein Punkt auf den wir später zurückkommen.</p>

    <p><strong>Marktanteile bei generativen KI-Tools</strong> (Statcounter, März 2026, weltweit):</p>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Plattform</th><th>Marktanteil</th></tr>
        </thead>
        <tbody>
          <tr><td>ChatGPT</td><td>71,13 %</td></tr>
          <tr><td>Perplexity</td><td>11,76 %</td></tr>
          <tr><td>Gemini</td><td>7,68 %</td></tr>
          <tr><td>Copilot</td><td>5,85 %</td></tr>
          <tr><td>Claude</td><td>3,57 %</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>Klassischer Such-Markt Deutschland</strong> (Statcounter, März 2026):</p>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Suchmaschine</th><th>Marktanteil DE</th></tr>
        </thead>
        <tbody>
          <tr><td>Google</td><td>80,05 %</td></tr>
          <tr><td>Bing</td><td>9,99 %</td></tr>
          <tr><td>Sonstige</td><td>9,96 %</td></tr>
        </tbody>
      </table>
    </div>

    <p>Was bedeutet das praktisch? Google bleibt mit 80 Prozent dominant, aber innerhalb der Google-SERP frisst die AI Overview die Klicks. Und ChatGPT ist bei den KI-Tools so dominant, dass eine Optimierung für ChatGPT etwa 70 Prozent des KI-Suchmarkts abdeckt. Perplexity und Gemini sind die zweite Liga, aber relevant genug um sie nicht zu ignorieren.</p>

    <h2 id="klicks-aio">Was die AI-Welle für deine Klicks bedeutet</h2>

    <p>Hier wird es interessant und überraschend. Die KI-Welle ist nicht nur Bedrohung. Sie verschiebt die Spielregeln.</p>

    <h3>Die Verlust-Seite (Sistrix-Studie 02/2026)</h3>
    <ul>
      <li>Position 1 verliert bei aktiver AI Overview rund 59 Prozent CTR</li>
      <li>265 Millionen organische Klicks pro Monat verloren in Deutschland</li>
      <li>Wikipedia: minus 31,6 Millionen Klicks pro Monat</li>
      <li>Health-Portale teilweise minus 30 Prozent organischer Traffic</li>
    </ul>

    <img src="/images/blog/ai-seo-2026-ai-overviews-stats.webp" alt="AI Overviews in Deutschland 2026: 20 % der Keywords zeigen AI Overviews, −59 % CTR auf Position 1, 265 Mio. Klicks weg, +527 % AI-Search-Traffic YoY (Quellen: Sistrix DE 02/2026, Semrush 2026)" loading="lazy" width="1080" height="1080">

    <h3>Die Chance-Seite (Semrush/Adobe Analytics, Conductor 2026)</h3>
    <ul>
      <li>AI-Visitor sind im Schnitt 4,4-mal wertvoller als organische Visitor</li>
      <li>27 Prozent niedrigere Bounce Rate</li>
      <li>38 Prozent längere Sessions</li>
      <li>Plus 76,7 Prozent Time-on-Site</li>
      <li>Conversion-Rate teilweise bei 18 Prozent (B2B-Sample)</li>
    </ul>

    <p>Die Logik dahinter ist nüchtern: Wer durch eine AI Overview oder eine ChatGPT-Antwort auf deine Seite kommt, hat seine Frage bereits präzisiert. Die KI hat vorgefiltert. Was bei dir landet, ist Bottom-of-Funnel-Traffic mit hoher Kaufabsicht.</p>

    <p><strong>Klassischer Visitor vs. AI Visitor im Vergleich:</strong></p>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Metrik</th><th>Klassischer Organic Visitor</th><th>AI Visitor</th></tr>
        </thead>
        <tbody>
          <tr><td>Bounce Rate</td><td>Baseline</td><td>−27 %</td></tr>
          <tr><td>Session-Dauer</td><td>Baseline</td><td>+38 %</td></tr>
          <tr><td>Time-on-Site</td><td>Baseline</td><td>+76,7 %</td></tr>
          <tr><td>Conversion-Rate</td><td>1 bis 3 % typisch</td><td>bis zu 18 % (Spitze)</td></tr>
          <tr><td>Qualifizierungsgrad</td><td>mittel</td><td>hoch, KI hat vorgefiltert</td></tr>
        </tbody>
      </table>
    </div>

    <p>Die ehrliche Lesart: Du verlierst Quantität, gewinnst Qualität. Und genau deshalb lohnt sich AI SEO. Nicht weil du Angst vor dem Ende der klassischen Suche haben musst, sondern weil der KI-Klick schlicht der bessere Klick ist.</p>

    <h2 id="ai-search">Wie funktioniert AI Search wirklich?</h2>

    <p>Um sinnvoll zu optimieren, musst du verstehen wie diese Systeme tatsächlich Antworten generieren. Es gibt drei Grund-Architekturen.</p>

    <h3>1. Trainings-basiert (Modell-Wissen)</h3>
    <p>Das LLM antwortet aus dem, was es während des Trainings gelernt hat. Beispiel: Claude im Standard-Modus ohne Web-Suche, Llama-only-Anwendungen. Hier zählt, ob dein Content im Trainingsdatensatz vorkam und ob er als zitierwürdig erkannt wurde. Optimierung ist hier langfristig und indirekt, über Brand-Präsenz, Wikipedia, hochwertige Drittquellen.</p>

    <h3>2. Such-basiert (RAG, Retrieval Augmented Generation)</h3>
    <p>Das System macht eine Live-Suche, holt sich aktuelle Quellen und generiert dann die Antwort darauf. Beispiele: Google AI Overviews, Perplexity. Hier ist die Optimierung nah am klassischen SEO, du musst crawlbar, indexiert und strukturiert sein.</p>

    <h3>3. Hybrid</h3>
    <p>Das System nutzt Modell-Wissen, ergänzt durch Live-Suche bei aktuellen oder spezifischen Anfragen. Beispiele: Gemini, ChatGPT mit aktivierter Search-Funktion. Das ist mittlerweile der Standard für die meisten Consumer-Anwendungen.</p>

    <p><strong>Was bedeutet das für deine SEO-Strategie?</strong></p>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Engine-Typ</th><th>SEO-Fokus</th></tr>
        </thead>
        <tbody>
          <tr><td>Trainings-basiert</td><td>Brand-Building, Wikipedia, hochautoritative Drittnennungen</td></tr>
          <tr><td>Such-basiert (RAG)</td><td>Klassisches SEO, Crawlability, strukturierte Antworten, Schema</td></tr>
          <tr><td>Hybrid</td><td>Beides parallel, kein Entweder-oder</td></tr>
        </tbody>
      </table>
    </div>

    <p>Die gute Nachricht: Wenn du für RAG-Systeme optimierst, ziehst du oft auch positive Effekte für die Trainings-Komponente nach. Hochwertiger, gut strukturierter Content wird sowohl live abgerufen als auch in zukünftige Trainingssätze aufgenommen.</p>

    <h2 id="ai-crawler">Die wichtigsten AI-Crawler im Überblick</h2>

    <p>Wer auf deinen Server zugreift, hat einen Namen. Hier sind die Bots die du 2026 kennen solltest.</p>

    <img src="/images/blog/ai-seo-2026-ai-bots-robotstxt.webp" alt="Übersicht: AI-Crawler und ob sie die robots.txt respektieren — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended u.a." loading="lazy" width="1200" height="900">

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Bot</th><th>Betreiber</th><th>Zweck</th><th>robots.txt</th></tr>
        </thead>
        <tbody>
          <tr><td>GPTBot</td><td>OpenAI</td><td>Training für GPT-Modelle</td><td>respektiert</td></tr>
          <tr><td>OAI-SearchBot</td><td>OpenAI</td><td>ChatGPT Search Live-Index</td><td>respektiert</td></tr>
          <tr><td>ChatGPT-User</td><td>OpenAI</td><td>On-demand Browsing</td><td>respektiert</td></tr>
          <tr><td>ClaudeBot</td><td>Anthropic</td><td>Training für Claude</td><td>respektiert</td></tr>
          <tr><td>Claude-User</td><td>Anthropic</td><td>Live-Browsing in Claude-Sessions</td><td>respektiert</td></tr>
          <tr><td>PerplexityBot</td><td>Perplexity</td><td>Index-Aufbau</td><td>respektiert</td></tr>
          <tr><td>Perplexity-User</td><td>Perplexity</td><td>User-getriggertes Browsing</td><td>umstritten (Heise 2024)</td></tr>
          <tr><td>Google-Extended</td><td>Google</td><td>Gemini-Training und AI Overviews</td><td>respektiert</td></tr>
          <tr><td>Googlebot</td><td>Google</td><td>Klassische Suche und AIO-Quellbasis</td><td>respektiert</td></tr>
          <tr><td>CCBot</td><td>Common Crawl</td><td>Open-Source-Crawl-Datensätze</td><td>respektiert</td></tr>
          <tr><td>Applebot-Extended</td><td>Apple</td><td>Apple Intelligence Training</td><td>respektiert</td></tr>
        </tbody>
      </table>
    </div>

    <div class="info-box">
      <p><strong>Hinweis zu Perplexity-User:</strong> Heise hat 2024 dokumentiert, dass Perplexity in bestimmten Konstellationen robots.txt-Direktiven für User-Browsing-Anfragen umgangen hat. Perplexity hat danach Anpassungen vorgenommen. Wenn dir das wichtig ist, kannst du Perplexity-User aktiv via Web Application Firewall blockieren, robots.txt allein reicht hier nicht zwingend.</p>
    </div>

    <h2 id="robots-strategien">robots.txt für AI-Bots: drei Strategien</h2>

    <p>Deine robots.txt ist der erste und billigste Hebel. Drei sinnvolle Ausgangspunkte:</p>

    <h3>Strategie 1: Maximal offen (Empfehlung für die meisten KMU)</h3>

    <pre class="code-block"><span class="comment"># robots.txt</span>
<span class="keyword">User-agent:</span> *
<span class="keyword">Allow:</span> /

<span class="keyword">Sitemap:</span> https://example.de/sitemap.xml</pre>

    <p>Alle Bots dürfen alles. Kein KMU mit normalem Content-Marketing hat einen guten Grund AI-Bots auszusperren. Du willst zitiert werden, du willst in den Trainingssätzen landen, du willst Sichtbarkeit. Diese Strategie maximiert das.</p>

    <h3>Strategie 2: Selektiv (Training blockieren, Live-Search erlauben)</h3>

    <pre class="code-block"><span class="comment"># Training-Bots blockieren</span>
<span class="keyword">User-agent:</span> GPTBot
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> ClaudeBot
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> Google-Extended
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> CCBot
<span class="keyword">Disallow:</span> /

<span class="comment"># Live-Search-Bots erlauben</span>
<span class="keyword">User-agent:</span> OAI-SearchBot
<span class="keyword">Allow:</span> /

<span class="keyword">User-agent:</span> PerplexityBot
<span class="keyword">Allow:</span> /

<span class="keyword">User-agent:</span> *
<span class="keyword">Allow:</span> /

<span class="keyword">Sitemap:</span> https://example.de/sitemap.xml</pre>

    <p>Sinnvoll wenn du Original-Content produzierst der nicht in fremde Modelle einfließen soll, du aber trotzdem in Live-Antworten zitiert werden willst. Verlage, Forschung, Premium-Publisher.</p>

    <h3>Strategie 3: Restriktiv (Premium-/News-Content)</h3>

    <pre class="code-block"><span class="keyword">User-agent:</span> GPTBot
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> ClaudeBot
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> CCBot
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> Google-Extended
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> Applebot-Extended
<span class="keyword">Disallow:</span> /

<span class="keyword">User-agent:</span> *
<span class="keyword">Allow:</span> /

<span class="keyword">Sitemap:</span> https://example.de/sitemap.xml</pre>

    <p>Hier blockierst du systematisch das KI-Training, während klassische Suchmaschinen weiter crawlen dürfen. Das ist der Pfad, den große Verlagshäuser (FAZ, Spiegel, NYT) gewählt haben, verbunden mit Lizenzverhandlungen mit OpenAI und Co.</p>

    <h2 id="content-hebel">Content optimieren für AI-Antworten: die 6 wichtigsten Hebel</h2>

    <p>Jetzt zum Kern. Was macht Content KI-tauglich? Princeton hat 2024 in der vielzitierten "GEO"-Studie sieben Optimierungs-Methoden getestet. Drei davon haben sich als signifikant wirksam erwiesen, andere als neutral oder negativ. Hier die Erkenntnisse, übersetzt in konkrete Hebel.</p>

    <h3>1. Pyramid-Prinzip: Antwort zuerst</h3>
    <p>LLMs scannen den Anfang eines Textabschnitts auf eine direkte Antwort. Wer mit Aufwärm-Sätzen, Storytelling-Intros oder generischer Kontextualisierung startet, wird seltener zitiert. Erste 1-2 Sätze müssen die Antwort liefern. Begründung, Kontext, Beispiel kommen danach.</p>

    <p>Beispiel, Frage: "Was kostet eine GmbH-Gründung in Deutschland?"</p>

    <p><strong>Schlecht:</strong> "Wer in Deutschland gründen möchte, steht vor vielen Fragen. Eine davon ist die nach den Kosten. In diesem Artikel beleuchten wir das Thema umfassend ..."</p>

    <p><strong>Gut:</strong> "Eine GmbH-Gründung kostet in Deutschland typischerweise zwischen 600 und 1.200 EUR, bei mindestens 25.000 EUR Stammkapital, davon 12.500 EUR Mindesteinzahlung. Hinzu kommen Notarkosten, Handelsregister-Eintrag und Beratungsgebühren."</p>

    <h3>2. Question-Answer-Format</h3>
    <p>H2-Überschriften als Fragen formulieren, der erste Satz darunter liefert die Antwort. Genau so wie es Google's Featured Snippets seit Jahren belohnen, und wie es LLMs lieben.</p>

    <h3>3. FAQ-Sektionen mit FAQPage-Schema</h3>
    <p>Jede Service-Seite und jeder Ratgeber-Artikel sollte eine FAQ-Sektion haben, mit echten Fragen die deine Zielgruppe stellt. Plus FAQPage-Schema im strukturierten Daten-Markup. Das ist der niedrigschwelligste Hebel mit dem höchsten Hebel-Effekt.</p>

    <h3>4. Listicles, Tabellen, Checklisten</h3>
    <p>Strukturierte Formate haben die höchste Extraction-Rate in LLM-Antworten. Eine durchnummerierte Liste mit klaren Punkten wird häufiger als Quelle herangezogen als ein Fließtext gleichen Inhalts. Tabellen sind das Top-Format für Vergleichs-Queries.</p>

    <h3>5. Statistiken mit Quellen</h3>
    <p>Princeton-Studie: Die Methode "Cite Sources", also das Einfügen von Statistiken mit Quellenangabe, erhöhte die Visibility für Position-5-Inhalte um plus 115,1 Prozent. LLMs gewichten zitierfähige Aussagen höher. Daraus folgt: Wenn du eine Behauptung aufstellst, hänge eine Zahl mit Quelle dran.</p>

    <h3>6. Originaldaten und eigene Studien</h3>
    <p>Das ist der Hebel mit dem stärksten langfristigen Effekt. LLMs können keine eigenen Daten erheben. Wenn du eine Branchen-Umfrage, eine Preisanalyse oder eine Performance-Studie veröffentlichst, wirst du zur Zitations-Quelle. Eine einzige gute Studie pro Jahr kann mehr GEO-Wirkung haben als 50 generische Blog-Artikel.</p>

    <h2 id="technik-hebel">Technische Hebel: was muss serverseitig stimmen?</h2>

    <p>Content allein reicht nicht. Wenn die Maschine deinen Content nicht sauber lesen kann, ist alle Optimierung umsonst.</p>

    <ol>
      <li><strong>robots.txt</strong> wie oben besprochen, maximal offen für die meisten KMU.</li>
      <li><strong>Schema.org strukturierte Daten:</strong> FAQPage, HowTo, Article/BlogPosting, LocalBusiness (Pflicht für jedes Münchner KMU), Organization, Person (Author-Bio mit sameAs-Links zu LinkedIn, X), Product/Offer, Review/AggregateRating</li>
      <li><strong>Crawlability:</strong> Server-Side-Rendering oder Pre-Rendering bei JavaScript-lastigen Seiten. Reine Client-Side-React-Apps sind für AI-Crawler oft unsichtbar. TTFB unter 200 ms anstreben. Saubere HTML-Semantik (h1, h2, h3, p, ul, table)</li>
      <li><strong>XML-Sitemap und IndexNow:</strong> XML-Sitemap aktuell halten. Zusätzlich IndexNow implementieren, das Protokoll wird von Bing und damit indirekt von ChatGPT Search genutzt</li>
      <li><strong>Bing Webmaster Tools registrieren:</strong> Das ist der unterschätzteste Hebel überhaupt. ChatGPT Search nutzt im Hintergrund den Bing-Index. Wenn du nicht in Bing indexiert bist, bist du in ChatGPT Search praktisch unsichtbar. Registrierung ist kostenlos und dauert 15 Minuten. Mach das heute.</li>
      <li><strong>HTTPS, Mobile-First, Core Web Vitals:</strong> Die klassischen Hygiene-Faktoren bleiben. Eine langsame, unsichere oder mobile-broken Site fliegt aus den Quellen-Listen. Mehr Details in unserer <a href="/leistungen/technisches-seo/">Technisches-SEO-Leistung</a>.</li>
    </ol>

    <h2 id="brand-hebel">Brand-Hebel: warum deine Marke außerhalb deiner Website wichtig ist</h2>

    <p>Hier wird AI SEO zum Marken-Marketing. LLMs ziehen ihre "Meinung" über dein Unternehmen aus tausenden externen Quellen, nicht primär aus deiner eigenen Website. Sieben Hebel die zählen:</p>

    <ol>
      <li><strong>Wikipedia-Eintrag:</strong> die mit Abstand häufigste Citation-Quelle in AI Overviews und ChatGPT.</li>
      <li><strong>Wikidata-Eintrag:</strong> niedrigere Hürde als Wikipedia, ähnlich wichtig für die Entity-Verknüpfung.</li>
      <li><strong>Konsistente NAP-Daten</strong> (Name, Address, Phone) über LinkedIn, Crunchbase, Google Business Profile, OpenStreetMap, Branchenbücher.</li>
      <li><strong>Echte Reviews:</strong> Google Business, Trustpilot, ProvenExpert, Branchenportale. ChatGPT Search zieht für lokale Empfehlungs-Queries fast immer Google-Maps-Reviews.</li>
      <li><strong>YouTube-Kanal:</strong> eine eigene Source-Kategorie. LLMs zitieren YouTube-Videos mittlerweile aktiv, vor allem für How-to-Queries.</li>
      <li><strong>Reddit/Quora-Präsenz:</strong> Reddit wird seit der OpenAI-Reddit-Kooperation 2024 überproportional häufig in ChatGPT-Antworten zitiert. Authentische Antworten in fachrelevanten Subreddits zahlen direkt auf deine Brand-KI-Sichtbarkeit ein.</li>
      <li><strong>Vergleichsportale-Listings:</strong> Capterra, OMR Reviews, G2, Trusted Shops, je nach Branche.</li>
    </ol>

    <p><strong>Faustregel:</strong> Du baust nicht für deine Website, du baust für dein Entity-Profil im Web. Je konsistenter und vielfältiger deine Brand außerhalb deiner Domain auftaucht, desto eher empfiehlt dich die KI.</p>

    <h2 id="llms-txt">llms.txt: Hype oder Pflicht?</h2>

    <p>Kurze Einordnung, weil es ein häufiges Missverständnis gibt.</p>

    <p><strong>Was ist llms.txt?</strong> Eine vorgeschlagene Spezifikation für eine Markdown-Datei im Root-Verzeichnis, die LLMs eine kuratierte Übersicht deiner wichtigsten Inhalte gibt, vergleichbar einer Sitemap aber für KI-Konsum optimiert.</p>

    <p><strong>Wer hat es vorgeschlagen?</strong> Jeremy Howard (Mitgründer fast.ai) im September 2024. Nicht Anthropic, das wird in der deutschen Berichterstattung immer wieder falsch dargestellt. Es ist ein Community-Vorschlag, kein offizieller Standard.</p>

    <p><strong>Aktueller Status (April 2026):</strong> Keine große AI-Plattform hat offiziell bestätigt llms.txt zu nutzen. John Mueller von Google hat sich öffentlich skeptisch geäußert. OpenAI und Anthropic haben sich bisher nicht dazu positioniert. Es gibt anekdotische Berichte über bessere Ergebnisse, aber keine harten Daten.</p>

    <p><strong>Empfehlung:</strong> Aufwand minimal (15 Minuten), Schaden null. Mach es, aber erwarte keinen Game-Changer. Es ist ein "Nice-to-have" auf Position 14 deiner Prioritätenliste, nicht Position 1.</p>

    <p><strong>Beispiel-llms.txt für ein Münchner Steuerbüro:</strong></p>

    <pre class="code-block"><span class="comment"># Mein Münchner Steuerbüro</span>

&gt; Steuerberatungskanzlei in München-Schwabing, spezialisiert auf KMU,
&gt; Selbstständige und Freiberufler in Bayern. Gegründet 2008.

## Hauptseiten
- [Leistungen](https://example.de/leistungen): Übersicht aller Steuerberatungs-Services
- [Über uns](https://example.de/ueber-uns): Team und Kanzleiprofil
- [Kontakt](https://example.de/kontakt): Termin vereinbaren

## Fachgebiete
- [Steuern für Gründer](https://example.de/leistungen/gruender): GmbH, UG, Einzelunternehmen
- [Jahresabschluss](https://example.de/leistungen/jahresabschluss): HGB-konform
- [Lohnbuchhaltung](https://example.de/leistungen/lohn): DATEV-zertifiziert

## Ratgeber & Blog
- [Steuern für Gründer 2026](https://example.de/blog/steuern-gruender-2026): Komplette Anleitung
- [Kleinunternehmerregelung](https://example.de/blog/kleinunternehmer): Wann sie sich lohnt</pre>

    <p>Die Datei legst du unter <code>https://deine-domain.de/llms.txt</code> ab. Mehr ist es nicht.</p>

    <h2 id="lokal-muenchen">Lokal in München: wie funktioniert das?</h2>

    <p>Für KMU mit lokalem Geschäft, Steuerberater in der Maxvorstadt, Zahnarzt in Schwabing, Handwerksbetrieb in Pasing, gelten ein paar Spezifika.</p>

    <h3>ChatGPT-Search und lokale Queries</h3>
    <p>Wenn du in ChatGPT fragst "Bester Steuerberater in München für Selbstständige", zieht das System mehrere Quellen: Google-Maps-Reviews, Google Business Profile, Branchenbücher, Stadtportale. Die Antwort ist eine Aggregation. Wer in keiner dieser Quellen sauber repräsentiert ist, taucht auch nicht in der Empfehlung auf.</p>

    <h3>Münchner Branchenbücher und Plattformen</h3>
    <ul>
      <li>muenchen.de (offizielles Stadtportal)</li>
      <li>IHK München und Oberbayern</li>
      <li>branchenbuch.muenchen.de</li>
      <li>Handwerkskammer München (für Handwerk)</li>
      <li>gelbeseiten.de</li>
      <li>11880.com</li>
      <li>meinestadt.de/muenchen</li>
    </ul>

    <h3>Stadtteil-Erwähnungen</h3>
    <p>LLMs verstehen Münchner Geografie. "Zahnarzt in der Maxvorstadt" ist eine andere Query als "Zahnarzt München". Wer auf seiner Website Stadtteile, Straßen und lokale Wahrzeichen erwähnt (natürlich, nicht gestapelt), wird in stadtteil-spezifischen Queries besser gefunden.</p>

    <h3>LocalBusiness-Schema mit korrektem areaServed</h3>

    <pre class="code-block">{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Steuerberatung Müller",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schellingstraße 42",
    "addressLocality": "München",
    "postalCode": "80799",
    "addressCountry": "DE"
  },
  "areaServed": [
    {"@type": "City", "name": "München"},
    {"@type": "AdministrativeArea", "name": "Oberbayern"},
    {"@type": "AdministrativeArea", "name": "Bayern"}
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1521,
    "longitude": 11.5800
  }
}</pre>

    <p>Wer tiefer in lokale Optimierung einsteigen will, findet auf unserer <a href="/leistungen/local-seo/">Local-SEO-Service-Seite</a> weitere Details, und in unserem <a href="/blog/local-seo-guide" class="internal-link">Local SEO Guide</a> die Selbstmach-Anleitung. Die hier genannten Punkte deckt jeder Münchner KMU-Inhaber selbst in einem Wochenende ab.</p>

    <h2 id="messung">Wie misst du deine AI-Sichtbarkeit?</h2>

    <p>Ohne Messung kein Management. Drei Methoden, gestaffelt nach Aufwand.</p>

    <h3>Methode 1: Manuell (kostenlos, sofort startbar)</h3>
    <p>Erstelle eine Liste mit 10-15 Test-Queries:</p>
    <ul>
      <li>3 Brand-Queries ("Was ist [dein Unternehmen]?")</li>
      <li>5-7 Service-Queries ("Bester [dein Service] in München")</li>
      <li>2-3 Long-Tail-Informationsqueries ("Wie funktioniert [dein Thema]?")</li>
    </ul>
    <p>Teste diese Queries einmal pro Monat in ChatGPT, Perplexity, Gemini und Google AI Overview. Notiere: Wirst du erwähnt? Bist du in den Quellen verlinkt? In welcher Reihenfolge? Mit welcher Beschreibung?</p>

    <h3>Methode 2: Spezialisierte Tools (kostenpflichtig)</h3>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Tool</th><th>Schwerpunkt</th><th>Preisniveau</th></tr>
        </thead>
        <tbody>
          <tr><td>Profound</td><td>KI-Citation-Tracking, Enterprise</td><td>hoch</td></tr>
          <tr><td>Otterly.AI</td><td>KI-Brand-Monitoring</td><td>mittel</td></tr>
          <tr><td>Peec AI</td><td>GEO-Analytics</td><td>mittel</td></tr>
          <tr><td>AthenaHQ</td><td>KI-Visibility-Dashboard</td><td>mittel</td></tr>
          <tr><td>Semrush AI Toolkit</td><td>Integration in bestehende SEO-Suite</td><td>im Semrush-Abo</td></tr>
          <tr><td>Ahrefs Brand Radar</td><td>KI-Mentions-Tracking</td><td>im Ahrefs-Abo</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Methode 3: GSC und GA4</h3>
    <ul>
      <li><strong>Google Search Console</strong> zeigt seit 2026 zunehmend AIO-Impressions als eigenes Segment</li>
      <li><strong>GA4</strong> über Custom-Channel-Group: AI-Referral-Traffic isolieren. Source-Liste: chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai</li>
    </ul>

    <p><strong>Die KPIs die wirklich zählen:</strong></p>
    <ol>
      <li>Impressions in AI Overviews (GSC)</li>
      <li>Anzahl Citations in ChatGPT/Perplexity (manuell oder Tool)</li>
      <li>AI-Referral-Sessions (GA4)</li>
      <li>Engagement AI-Traffic vs. Organic-Traffic (Bounce, Session-Dauer, Conversions)</li>
    </ol>

    <h2 id="roadmap">Realistic Roadmap: was wann passiert</h2>

    <p>Erwartungs-Management ist die unterschätzte Disziplin. Hier eine realistische Timeline für ein KMU das bei null startet:</p>

    <ol class="roadmap-list">
      <li data-week="1">
        <strong>Hygiene</strong>
        robots.txt prüfen und auf "maximal offen" stellen. Schema-Audit der Top-10-Seiten. Content-Format-Check. Bing Webmaster Tools registrieren. 15 Test-Queries als Baseline dokumentieren.
      </li>
      <li data-week="month1">
        <strong>Foundation</strong>
        FAQ-Sektionen auf Service-Seiten ergänzen, FAQPage-Schema implementieren. llms.txt erstellen und deployen. Google Business Profile auf 100 Prozent Vollständigkeit bringen. LocalBusiness-Schema mit areaServed implementieren. Erste 5 echte Reviews aktiv einsammeln.
      </li>
      <li data-week="month2">
        <strong>Sichtbarkeit aufbauen</strong>
        Erste Citations in ChatGPT/Perplexity sichtbar. Brand-Mentions auf Drittseiten gezielt aufbauen. 1-2 Reddit/Quora-Antworten pro Woche in fachrelevanten Threads. YouTube-Kanal starten. Erste lokale Pressemitteilung an Münchner Medien.
      </li>
      <li data-week="month4">
        <strong>Konsolidieren</strong>
        Wikidata-Eintrag erstellen. Bei ausreichender Außenwahrnehmung: Wikipedia-Anlauf starten. Erste Originaldaten/Studie konzipieren und veröffentlichen. Signifikanter AI-Referral-Traffic-Anstieg messbar. KPIs etablieren und monatliches Reporting.
      </li>
      <li data-week="month6">
        <strong>Stabilisieren</strong>
        Stabile AI-Inclusion in Service-Queries. Messbare Conversions aus AI-Traffic. Brand-Profil im Web breit verankert (Wikipedia, Wikidata, Reviews, YouTube, Reddit). Skalierung der wirksamen Hebel.
      </li>
    </ol>

    <p><strong>Wichtige Erwartungs-Anker:</strong> AI SEO ist langsamer als klassisches SEO in den ersten 60 Tagen, und schneller danach. Die Algorithmen lernen aus deiner Brand-Konsistenz. Die ersten 6-8 Wochen siehst du oft fast nichts. Dann kippt es.</p>

    <h2 id="kosten">Kosten: was kostet AI SEO 2026 wirklich?</h2>

    <p>Ehrliche Zahlen, ohne Schönreden.</p>

    <ul>
      <li><strong>Selbst gemacht (DIY):</strong> 0 bis 500 EUR pro Monat. ChatGPT Plus, evtl. Otterly.AI, Schema-Validatoren kostenlos. Grenze: deine Zeit und dein technisches Knowhow.</li>
      <li><strong>Freelancer:</strong> 800 bis 2.500 EUR pro Monat. Sinnvoll für KMU mit klarem Fokus. Risiko: Qualität schwankt stark, kaum jemand hat 2026 schon belastbare GEO-Erfahrung.</li>
      <li><strong>Agentur in Deutschland/München:</strong> 1.500 bis 8.000 EUR pro Monat. Für KMU mit Ambitionen typisch im Bereich 990 bis 2.990 EUR pro Monat (siehe unsere Pakete-Übersicht). Für Mid-Market kann der Aufwand auch höher liegen, vor allem wenn Original-Content-Produktion und PR mit drin sind.</li>
    </ul>

    <p><strong>Faustregel für 2026:</strong> 20 bis 25 Prozent deines bestehenden SEO-Budgets sollten in GEO-spezifische Maßnahmen fließen. Wenn du heute 4.000 EUR pro Monat für SEO ausgibst, wäre eine sinnvolle Allokation 800 bis 1.000 EUR pro Monat AI SEO obendrauf, oder als Re-Allokation aus weniger wirksamen klassischen Maßnahmen.</p>

    <p>Detaillierte Pakete und Preise findest du auf unserer <a href="/preise/">Preisseite</a>, und wenn du AI SEO als gemanagten Service willst, beschreibt das unsere <a href="/leistungen/geo-agentur/">GEO-Agentur-Seite</a> im Detail.</p>

    <h2 id="faq">Häufige Fragen zu AI SEO</h2>

    <div class="faq-section">
      <div class="faq-item">
        <div class="faq-q">Was ist der Unterschied zwischen AI SEO und klassischem SEO?</div>
        <div class="faq-a">Klassisches SEO optimiert für die zehn blauen Links der Google-SERP. AI SEO optimiert dafür, in generativen Antworten von ChatGPT, Perplexity, Gemini und in Google AI Overviews zitiert oder erwähnt zu werden. Die Grundlagen (Crawlability, Schema, Content-Qualität) überlappen stark. Die Akzente verschieben sich Richtung strukturierter Antworten, Brand-Entity-Building und Drittquellen-Präsenz.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Funktioniert klassisches SEO noch mit AI Overviews?</div>
        <div class="faq-a">Ja, aber mit reduziertem Output. Position-1-Klicks gehen laut Sistrix-Studie 02/2026 um rund 59 Prozent zurück, wenn eine AI Overview erscheint. Klassisches SEO bleibt notwendig, denn ohne klassische Sichtbarkeit landest du auch nicht in den AIO-Quellen.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Sollte ich AI-Bots in robots.txt blockieren oder zulassen?</div>
        <div class="faq-a">Für die meisten KMU: zulassen. Du willst zitiert werden, du willst Brand-Sichtbarkeit, du willst in den Trainingsdaten landen. Blockieren ist nur sinnvoll für Premium-Publisher mit eigenem Geschäftsmodell rund um Content-Lizenzierung.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Wie erkenne ich, ob meine Site in ChatGPT oder Perplexity erscheint?</div>
        <div class="faq-a">Manuelle Test-Queries sind der schnellste Weg. Erstelle eine Liste von 10-15 Brand-, Service- und Themen-Queries, teste sie monatlich. Tools wie Otterly.AI, Peec AI oder Semrush AI Toolkit automatisieren das.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Was kostet AI SEO?</div>
        <div class="faq-a">Selbst gemacht: 0 bis 500 EUR pro Monat. Freelancer: 800 bis 2.500 EUR pro Monat. Agentur: 1.500 bis 8.000 EUR pro Monat, je nach Umfang. Faustregel: 20 bis 25 Prozent des bestehenden SEO-Budgets.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Kann ich AI SEO selber machen?</div>
        <div class="faq-a">Die Hygiene-Hebel (robots.txt, Schema, FAQ-Sektionen, Bing Webmaster Tools, llms.txt, Google Business) kann jeder KMU-Inhaber an einem Wochenende umsetzen. Komplex wird es bei Brand-Building, Wikipedia, Originaldaten und systematischer Drittquellen-Präsenz. Hier lohnt sich oft externe Begleitung.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Wirkt AI SEO auch lokal, für Münchner Geschäfte?</div>
        <div class="faq-a">Sehr stark sogar. ChatGPT-Search und Perplexity ziehen für lokale Queries Google-Maps-Reviews, Google Business Profile und Stadtportale. Wer in München sichtbar sein will, braucht ein vollständiges Google Business Profile, echte Reviews, LocalBusiness-Schema mit areaServed und Erwähnungen in Münchner Branchenportalen.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Was ist llms.txt und brauche ich das?</div>
        <div class="faq-a">Eine vorgeschlagene Markdown-Datei im Root, die LLMs eine kuratierte Inhaltsübersicht gibt. Vorgeschlagen von Jeremy Howard (fast.ai) im September 2024. Aktuell von keiner großen Plattform offiziell genutzt. Aufwand 15 Minuten, Schaden null. Mach es, aber erwarte keinen Game-Changer.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Wie schnell sieht man Ergebnisse?</div>
        <div class="faq-a">Erste Citations: ab Woche 4-8 bei sauberer Umsetzung. Spürbarer AI-Referral-Traffic: Monat 3-4. Stabile AI-Inclusion mit messbaren Conversions: Monat 6-12. AI SEO ist langsamer in den ersten 60 Tagen als klassisches SEO und schneller danach.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Was passiert mit meinem klassischen Google-Ranking?</div>
        <div class="faq-a">AI-SEO-Maßnahmen wirken in der Regel positiv auf klassisches Ranking. Bessere Struktur, bessere Schema-Implementierung, bessere Brand-Signale stärken auch klassisches SEO. Direkter Klick-Verlust kommt nicht von deiner Optimierung, sondern von der AI Overview selbst.</div>
      </div>
    </div>

    <h2 id="fazit">Fazit: wie fängst du an?</h2>

    <p>Kein Marathon-Plan, keine 80-Punkte-Checkliste. Drei Schritte die dich in 48 Stunden weiter bringen als die meisten deiner Wettbewerber:</p>

    <div class="quick-start">
      <h3>Quick-Start in 3 Schritten</h3>
      <ol>
        <li><strong>robots.txt prüfen, 5 Minuten.</strong> Öffne <code>deine-domain.de/robots.txt</code>. Wenn dort GPTBot, ClaudeBot oder Google-Extended blockiert sind, frag dich warum. Für 95 Prozent der KMU lautet die Antwort: maximal offen.</li>
        <li><strong>FAQPage-Schema auf Top-3-Seiten, 1 Stunde.</strong> Nimm deine drei wichtigsten Service-Seiten. Ergänze eine FAQ-Sektion mit 5-8 echten Kunden-Fragen. Implementiere FAQPage-Schema. Höchstes Verhältnis von Aufwand zu KI-Sichtbarkeit.</li>
        <li><strong>Brand-Audit, 1 Tag.</strong> Liste auf wo deine Marke außerhalb deiner Domain auftaucht: Google Business, Wikipedia, Wikidata, LinkedIn, Crunchbase, YouTube, Reddit, Branchenportale, lokale Medien. Wo bist du nicht? Wo sind die NAP-Daten inkonsistent? Wo fehlen echte Reviews? Diese Liste ist deine Roadmap für die nächsten sechs Monate.</li>
      </ol>
    </div>

    <p>Mehr braucht es zum Start nicht.</p>

    <div class="cta-box">
      <h3>Du willst AI SEO mit professioneller Begleitung?</h3>
      <p>Wir machen ein kostenloses Erstgespräch ohne Bindung. 30 Minuten, in denen wir deinen Status quo anschauen, die wichtigsten Lücken benennen und dir zeigen, was selbst machbar ist und wo Begleitung sich lohnt.</p>
      <a href="/kontakt/" class="cta-btn">Kostenloses Erstgespräch sichern</a>
    </div>

    <p>Wenn dir das alles zu komplex wird oder du keine internen Kapazitäten hast, übernehmen wir das gerne für dich. Mehr Details findest du auf unserer <a href="/leistungen/geo-agentur/">GEO-Agentur-Seite</a>. Wer zuerst die technische Basis sicherstellen will, ist auf unserer <a href="/leistungen/technisches-seo/">Technisches-SEO-Seite</a> richtig.</p>
` +
  '</div>'


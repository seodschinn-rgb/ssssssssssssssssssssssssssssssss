/** Reviewed setup guide. Shared blog route supplies layout, thumbnail and BlogPosting metadata. */
export const googleSearchConsoleEinrichtenContent = `<div class="sm-article">
<h1>Google Search Console einrichten: in 7 Schritten startklar</h1>
<div class="meta-info"><span>Stand: <time datetime="2026-09-06">6. September 2026</time></span><span>Ratgeber</span></div>
<div class="intro"><p>Wenn du die <strong>Google Search Console einrichten</strong> willst, brauchst du vor allem die richtige Property, einen Nachweis, dass du die Website kontrollierst, und klare Zuständigkeiten. Das kostenlose Google-Werkzeug macht Berichte und technische Hinweise zur Präsenz deiner Website in der Google-Suche zugänglich; <a href="https://support.google.com/webmasters/answer/9128668?hl=de">Google erklärt Zweck und Voraussetzungen hier</a>. Das Anlegen einer Property verändert die Website selbst nicht, wie die <a href="https://support.google.com/webmasters/answer/34592?hl=de">Property-Hilfe</a> klarstellt. Es verbessert auch nicht automatisch Rankings und garantiert keine Indexierung.</p>
<p>Nach den folgenden sieben Schritten sind Property-Umfang, Inhaberschaft, Sitemap, Zugriffe und die erste Abnahme dokumentiert. Plane keine starre Einrichtungsdauer ein: DNS-Änderungen und neue Berichtsdaten können zeitversetzt sichtbar werden.</p>
</div>
<nav class="sm-toc" aria-label="Inhaltsverzeichnis">
<p class="sm-toc-title">Inhaltsverzeichnis</p>
<ol>
<li><a href="#schritt-1-google-konto">Schritt 1: Mit dem passenden Google-Konto öffnen</a></li>
<li><a href="#schritt-2-property-waehlen">Schritt 2: Domain- oder URL-Präfix-Property wählen</a></li>
<li><a href="#schritt-3-inhaberschaft-bestaetigen">Schritt 3: Inhaberschaft bestätigen</a></li>
<li><a href="#schritt-4-zugriffe-vergeben">Schritt 4: Zugriffe schlank und nachvollziehbar vergeben</a></li>
<li><a href="#schritt-5-sitemap-einreichen">Schritt 5: Richtige Sitemap finden und einreichen</a></li>
<li><a href="#schritt-6-url-pruefen">Schritt 6: Eine wichtige Seite richtig prüfen</a></li>
<li><a href="#schritt-7-daten-abwarten">Schritt 7: Daten abwarten und Berichte gezielt lesen</a></li>
<li><a href="#faq">Häufige Fragen zur Einrichtung</a></li>
<li><a href="#setup-abgeschlossen">Setup abgeschlossen und sauber übergeben</a></li>
</ol>
</nav>
<h2 id="schritt-1-google-konto">Schritt 1: Mit dem passenden Google-Konto öffnen</h2>
<p>Öffne die <a href="https://search.google.com/search-console">Google Search Console</a> und melde dich mit einem Google-Konto an, das dein Unternehmen dauerhaft kontrolliert. Ein persönliches Konto eines externen Dienstleisters ist als alleinige Basis ungeeignet: Endet die Zusammenarbeit, darf der Unternehmenszugang nicht mitverschwinden.</p>
<p>Wähle in der Property-Auswahl <strong>„+ Property hinzufügen“</strong>. Für diesen normalen Weg durch die Benutzeroberfläche brauchst du weder ein Google-Cloud-Projekt noch eine API oder Programmierkenntnisse. OAuth und eine API-Konfiguration werden erst für eine eigene programmatische Integration oder Anwendung relevant. Das sind getrennte Prozesse, wie der Vergleich aus <a href="https://support.google.com/webmasters/answer/34592?hl=de">Property-Anleitung</a> und <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">API-Autorisierung</a> zeigt.</p>
<p>Halte jetzt die tatsächlich verwendete Hauptadresse samt <code>https</code>, möglicher <code>www</code>-Variante und relevanten Subdomains fest. Kläre außerdem, wer Zugriff auf DNS-Verwaltung oder CMS hat. Teile dafür keine Passwörter; weitere Personen erhalten später eigene Search-Console-Zugänge. Eine breitere Einordnung findest du bei unseren <a href="/blog/seo-tools-anfaenger">kostenlosen SEO-Tools für Einsteiger</a>.</p>
<h2 id="schritt-2-property-waehlen">Schritt 2: Domain- oder URL-Präfix-Property wählen</h2>
<p>Eine <strong>Property</strong> ist der Website-Bereich, dessen Daten und Hinweise du in der Search Console siehst. Die Wahl entscheidet über die Abdeckung, nicht über das Ranking.</p>
<div class="sm-table-wrap" role="region" tabindex="0" aria-label="Vergleichstabelle, bei Bedarf horizontal scrollen"><table>
<thead>
<tr>
<th scope="col">Kriterium</th>
<th scope="col">Domain-Property</th>
<th scope="col">URL-Präfix-Property</th>
</tr>
</thead>
<tbody>
<tr>
<td>Abdeckung</td>
<td>Protokollvarianten und Subdomains der eingetragenen Domain</td>
<td>Nur URLs mit dem exakt eingetragenen Protokoll und Präfix</td>
</tr>
<tr>
<td>Beispiel</td>
<td><code>example.com</code></td>
<td><code>https://www.example.com/</code></td>
</tr>
<tr>
<td>Bestätigung</td>
<td>über DNS</td>
<td>mehrere Methoden möglich</td>
</tr>
<tr>
<td>Meist passend, wenn …</td>
<td>du die gesamte Website erfassen kannst und sicheren DNS-Zugriff hast</td>
<td>du nur einen klar begrenzten Präfix brauchst oder keinen DNS-Zugriff hast</td>
</tr>
</tbody>
</table></div>
<p>Für die gesamte Website gibst du die Stammdomain ohne <code>www</code> ein: <code>example.com</code>, ohne Protokoll oder Pfad. Eine Domain-Property kann technisch auch gezielt für eine Subdomain wie <code>shop.example.com</code> angelegt werden. Beim URL-Präfix muss dagegen die vollständige Adresse zur gewünschten Variante passen. Die Details beschreibt die <a href="https://support.google.com/webmasters/answer/34592?hl=de">offizielle Property-Hilfe</a>.</p>
<figure id="property-vergleich" style="max-width:640px;margin:28px auto;scroll-margin-top:120px"><img alt="Schematischer Vergleich: Die Domain-Property umfasst example.com mit Protokollvarianten und Subdomains, das URL-Präfix nur den exakt eingetragenen Anfang." decoding="async" height="2000" loading="lazy" src="/images/blog/google-search-console-property-vergleich.webp" width="1600"/><figcaption>Schematischer Vergleich der URL-Abdeckung; keine Abbildung der Google-Oberfläche.</figcaption></figure>

<p>Für eine typische Unternehmenswebsite ist die Domain-Property meist robust, sofern du die DNS-Zone sicher verwalten kannst. Auch Google <a href="https://support.google.com/webmasters/answer/10351509?hl=de">empfiehlt diesen Typ für die möglichst vollständige Abdeckung</a>. Zusätzliche URL-Präfix-Properties lohnen sich nur bei einem konkreten Analyse- oder Rechtebedarf, etwa für einen abgegrenzten Bereich.</p>
<h2 id="schritt-3-inhaberschaft-bestaetigen">Schritt 3: Inhaberschaft bestätigen</h2>
<p>Trage die gewählte Domain oder vollständige URL ein und fahre mit der Bestätigung fort. Damit weist du nach, dass du die Website kontrollierst. Bei einer Domain-Property führt der Weg über DNS; Search Console kann dafür einen TXT- oder CNAME-Datensatz vorgeben. Die <a href="https://support.google.com/webmasters/answer/9008080?hl=de">Google-Hilfe zur Inhaberschaft</a> listet die aktuellen Methoden. Hier folgt der übliche TXT-Weg.</p>
<h3 id="domain-property-sicher-per-txt-bestatigen">Domain-Property sicher per TXT bestätigen</h3>
<ol>
<li>Kopiere den in <strong>deinem</strong> Search-Console-Dialog angezeigten Datensatz vollständig. Verwende keinen Token aus einer fremden Anleitung.</li>
<li>Öffne die aktive DNS-Verwaltung deiner Domain. DNS-Einträge legen unter anderem fest, welche Server Website und E-Mail bedienen. Diese Verwaltung kann bei einem anderen Anbieter liegen als dem, bei dem du die Domain gekauft hast. Kläre im Zweifel mit deiner IT, welches Kundenkonto zuständig ist.</li>
<li>Lege einen <strong>neuen TXT-Datensatz</strong> an. Beim Feld <strong>Name/Host</strong> verlangen Anbieter unterschiedliche Eingaben; häufig ist es leer oder enthält <code>@</code>. Folge hier der Dokumentation deines Providers statt einer pauschalen Vorlage. Diese Feldlogik erläutert auch die <a href="https://knowledge.workspace.google.com/admin/domains/verify-your-domain-with-a-txt-record?hl=en">Google-Workspace-Anleitung zu TXT-Einträgen</a>.</li>
<li>Füge den Google-Wert unverändert in das Wertfeld ein und speichere. Überschreibe oder lösche keine bestehenden DNS-Einträge. Insbesondere MX-Einträge und vorhandene TXT-Einträge wie SPF bleiben unangetastet.</li>
<li>Starte die Prüfung in der Search Console. Scheitert sie zunächst, kontrolliere Domainzone, Datensatztyp, Name/Host und Wert. Manuelle DNS-Änderungen können erst später sichtbar sein, in manchen Fällen nach zwei bis drei Tagen.</li>
<li>Lass den Bestätigungsdatensatz auch nach dem Erfolg bestehen. Google prüft den Nachweis erneut; ein entfernter Token kann deshalb zum Verlust der Bestätigung führen.</li>
</ol>
<blockquote>
<p><strong>Sicherheitshinweis:</strong> Wenn du die zuständige DNS-Zone nicht eindeutig findest, übergib Domain, Datensatztyp und unveränderten Wert an deine IT oder deinen Hoster. Ändere nicht versuchsweise Mail-, Nameserver- oder andere bestehende Einträge.</p>
</blockquote>
<h3 id="alternativen-fur-eine-url-prafix-property">Alternativen für eine URL-Präfix-Property</h3>
<ul>
<li><strong>HTML-Datei oder HTML-Tag:</strong> Lass die Datei am vorgegebenen Ort erreichbar beziehungsweise den Meta-Tag im <code>&lt;head&gt;</code> der öffentlichen Startseite bestehen.</li>
<li><strong>Google Analytics:</strong> Nur mit demselben Google-Konto, den erforderlichen Bearbeitungsrechten und der passenden Einbindung im <code>&lt;head&gt;</code> verwenden.</li>
<li><strong>Google Tag Manager:</strong> Nur mit demselben Konto, den nötigen Veröffentlichungs- oder Administratorrechten und einem korrekt installierten Container verwenden. Prüfe die Einbindung anhand der oben verlinkten Google-Hilfe.</li>
<li><strong>DNS:</strong> Der DNS-Nachweis ist auch beim URL-Präfix möglich.</li>
</ul>
<p>Bleibt eine Methode erfolglos, prüfe Datei oder Tag in der öffentlich ausgelieferten Seite und kontrolliere das angemeldete Konto. Ändere jeweils nur einen Punkt, damit die Ursache nachvollziehbar bleibt.</p>
<h3 id="wordpress-ein-plugin-ist-keine-pflicht">WordPress: Ein Plugin ist keine Pflicht</h3>
<p>Auch bei WordPress funktioniert die Domain-Bestätigung über DNS unabhängig vom Theme. Optional kann das Google-Plugin Site Kit die Verbindung übernehmen. Gibt es noch keine passende Search-Console-Property, legt Site Kit laut <a href="https://sitekit.withgoogle.com/documentation/supported-services/search-console/">eigener Dokumentation</a> eine URL-Präfix-Property an. Prüfe deshalb auch beim Plugin-Weg den erfassten Umfang. Eine Sitemap einzureichen und Google Analytics einzurichten sind davon getrennte Aufgaben.</p>
<h2 id="schritt-4-zugriffe-vergeben">Schritt 4: Zugriffe schlank und nachvollziehbar vergeben</h2>
<p>Gehe zu <strong>Einstellungen &gt; Nutzer und Berechtigungen</strong>, um Personen mit eigenen Konten hinzuzufügen. Google unterscheidet bestätigte und delegierte Inhaber sowie uneingeschränkte und eingeschränkte Nutzer. Inhaber können Nutzer verwalten. Uneingeschränkte Nutzer sehen alle Daten und dürfen operative Aktionen ausführen; eingeschränkte Nutzer erhalten vor allem Lesezugriff. Eine genaue Rechteübersicht führt die <a href="https://support.google.com/webmasters/answer/7687615?hl=de">Google-Dokumentation zu Nutzern und Berechtigungen</a>.</p>
<div class="sm-table-wrap" role="region" tabindex="0" aria-label="Vergleichstabelle, bei Bedarf horizontal scrollen"><table>
<thead>
<tr>
<th scope="col">Bedarf</th>
<th scope="col">Sinnvolle Rolle</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dauerhafte Kontrolle im Unternehmen</td>
<td>bestätigter Inhaber</td>
</tr>
<tr>
<td>Nahezu vollständige Verwaltung durch eine weitere verantwortliche Person</td>
<td>delegierter Inhaber, nur wenn wirklich nötig</td>
</tr>
<tr>
<td>Sitemap einreichen und weitere operative Aufgaben erledigen</td>
<td>uneingeschränkter Nutzer</td>
</tr>
<tr>
<td>Berichte ansehen</td>
<td>eingeschränkter Nutzer</td>
</tr>
</tbody>
</table></div>
<p>Unsere Praxisempfehlung folgt dem Prinzip der geringsten nötigen Rechte: Mindestens ein vom Unternehmen kontrolliertes Konto bleibt bestätigter Inhaber. Mitarbeitende, Freelancer und Agenturen bekommen eigene Zugänge passend zu ihrer Aufgabe – keinen gemeinsamen Login. Dokumentiere Person, Rolle und Zweck. Beim Offboarding entfernst du nicht mehr benötigte Nutzer zeitnah, aber keinen Verifizierungstoken, der noch eine benötigte Inhaberschaft trägt.</p>
<p>Führe dafür eine kleine Zugriffsliste außerhalb persönlicher Postfächer: Konto, Rolle, Verantwortungsbereich, freigebende Person und nächster Prüftermin genügen. Prüfe die Liste bei Personalwechseln und nach dem Ende externer Aufträge. So wird aus einer einmaligen Rechtevergabe ein kontrollierbarer Unternehmenszugang.</p>
<h2 id="schritt-5-sitemap-einreichen">Schritt 5: Richtige Sitemap finden und einreichen</h2>
<p>Eine XML-Sitemap ist eine auf deiner Website erreichbare Datei oder ein Index mit URLs, die Google kennen soll. Öffne ihre Adresse zuerst im Browser. Sie muss zur gewählten Property passen und ohne Anmeldung erreichbar sein. Prüfe außerdem, ob die aufgeführten Adressen zur richtigen öffentlichen Website gehören.</p>
<p>Rate den Pfad nicht. Bei WordPress Core kann der native Index unter <code>/wp-sitemap.xml</code> liegen, wie die <a href="https://developer.wordpress.org/reference/classes/wp_sitemaps_index/">WordPress-Entwicklerreferenz</a> zeigt. Mit aktivem Yoast SEO kann er <code>/sitemap_index.xml</code> heißen; das beschreibt die <a href="https://yoast.com/help/submit-sitemap-search-engines/">Yoast-Dokumentation</a>. Andere Plugins, CMS oder individuelle Setups können abweichen. Prüfe deshalb immer die echte URL auf deiner Domain.</p>
<p>Öffne anschließend den <strong>Sitemaps-Bericht</strong>, trage unter <strong>„Neue Sitemap hinzufügen“</strong> die korrekte Adresse beziehungsweise den Pfad ein und sende sie ab. Du lädst dabei keine Datei zu Google hoch, sondern teilst den Speicherort der live erreichbaren Sitemap mit. Dokumentiere den angezeigten Status und prüfe ihn später erneut.</p>
<p>Eine erfolgreiche Übermittlung bedeutet nicht, dass Google jede enthaltene URL crawlt oder indexiert. Auch bessere Rankings folgen daraus nicht automatisch. Diese Grenzen nennt die <a href="https://support.google.com/webmasters/answer/7451001?hl=de">Google-Hilfe zum Sitemaps-Bericht</a>. Wenn einzelne Seiten trotz sauberer Grundlage fehlen, hilft der Ratgeber dazu, <a href="/blog/website-nicht-gefunden">warum eine Website bei Google nicht gefunden wird</a>.</p>
<h2 id="schritt-6-url-pruefen">Schritt 6: Eine wichtige Seite richtig prüfen</h2>
<p>Gib im <strong>URL-Prüftool</strong> zunächst die vollständige Adresse der Startseite oder einer zentralen, bereits öffentlichen Leistungsseite ein, zum Beispiel <code>https://www.example.com/leistungen/</code>.</p>
<p>Das Standardergebnis zeigt, was Google von der zuletzt indexierten Fassung kennt. <strong>„Live-URL testen“</strong> ruft dagegen die aktuell erreichbare Version ab. Deshalb können beide Ergebnisse voneinander abweichen. Ein erfolgreicher Live-Test bestätigt für diesen Test Abruf und Verarbeitung, aber nicht alle Voraussetzungen für eine Indexierung und keinen Platz im Suchergebnis. Die Unterschiede erklärt die <a href="https://support.google.com/webmasters/answer/9012289?hl=de">Hilfe zum URL-Prüftool</a>.</p>
<p>Für eine neue oder wesentlich geänderte einzelne URL kannst du nach einem erfolgreichen technischen Check optional <strong>„Indexierung beantragen“</strong> wählen. Wiederholte Anträge beschleunigen das Crawling nicht; es gelten Limits, und Google garantiert weder Aufnahme noch Termin. Für viele URLs ist die Sitemap der passende Weg. Siehe dazu auch Googles Anleitung zum <a href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl">erneuten Crawling</a>.</p>
<p>Notiere geprüfte URL, Datum, Indexansicht, Live-Test und nächsten Schritt getrennt. So wird aus einem grünen oder roten Status eine nachvollziehbare Aufgabe statt einer vorschnellen Schlussfolgerung.</p>
<h2 id="schritt-7-daten-abwarten">Schritt 7: Daten abwarten und Berichte gezielt lesen</h2>
<p>Eine neu angelegte Property liefert nicht sofort einen vollständigen Verlauf. Erste Daten können einige Tage benötigen, in Einzelfällen laut Google bis zu einer Woche. Leistungsdaten erscheinen üblicherweise mit einer Verzögerung von zwei bis drei Tagen; die jüngsten Werte können noch vorläufig sein. Behandle ein anfangs leeres Diagramm deshalb nicht automatisch als Einrichtungsfehler. Mehr dazu steht in Googles Hinweisen zu <a href="https://support.google.com/webmasters/answer/96568?hl=en">Search-Console-Daten</a> und <a href="https://support.google.com/webmasters/answer/17011364">Leistungsdaten</a>.</p>
<p>Nimm das Setup mit diesen fünf Punkten ab:</p>
<ul>
<li>☐ <strong>Umfang:</strong> Property-Typ, eingetragene Domain und erfasste Varianten sind dokumentiert.</li>
<li>☐ <strong>Inhaberschaft:</strong> Ein unternehmenskontrollierter bestätigter Inhaber ist vorhanden; der Bestätigungsnachweis bleibt bestehen.</li>
<li>☐ <strong>Zugriffe:</strong> Jede beteiligte Person nutzt ein eigenes Konto mit der niedrigsten passenden Rolle.</li>
<li>☐ <strong>Sitemap und URL:</strong> Die richtige Sitemap ist erreichbar und gemeldet; Startseite sowie ein bis zwei wichtige Seiten wurden per URL-Prüfung kontrolliert.</li>
<li>☐ <strong>Übergabe:</strong> Abruf- oder Verifizierungsprobleme sind notiert. Jeder offene Punkt hat eine verantwortliche Person und einen nächsten Prüftermin.</li>
</ul>
<p>Damit sind Zugang und Ausgangszustand dokumentiert. Prüfe offene Sitemap- und URL-Hinweise zum notierten Termin erneut. Die anschließende Erfolgsmessung ist eine eigene Aufgabe; dafür brauchst du ein <a href="/leistungen/reporting-kpis">SEO-Reporting mit passenden KPIs</a>, keine weiteren Einrichtungsschritte.</p>
<h2 id="faq">Häufige Fragen zur Einrichtung</h2>
<h3 id="ist-die-google-search-console-kostenlos">Ist die Google Search Console kostenlos?</h3>
<p>Ja. Google stellt die Search Console ohne Nutzungsgebühr bereit. Kosten können nur außerhalb des Werkzeugs entstehen, etwa wenn Hoster, Entwicklung oder eine Agentur bei DNS und CMS unterstützt. Für die übliche Einrichtung in der Oberfläche sind weder ein kostenpflichtiges Google-Produkt noch eine API nötig.</p>
<h3 id="wie-lange-dauert-die-bestatigung">Wie lange dauert die Bestätigung?</h3>
<p>Es gibt keine verlässliche Pauschaldauer. Eine direkt erkannte Datei oder ein Tag kann schnell funktionieren, während ein neuer DNS-Eintrag erst nach der Verteilung sichtbar wird. Prüfe bei einem Fehlschlag zuerst Zone, Typ, Name/Host und Wert; teste danach später erneut, statt den Eintrag zu löschen.</p>
<h3 id="brauche-ich-google-analytics-dafur">Brauche ich Google Analytics dafür?</h3>
<p>Nein. Du kannst die Search Console unabhängig von Google Analytics einrichten und nutzen. Analytics ist lediglich eine optionale Bestätigungsmethode für eine URL-Präfix-Property. Wenn es nicht bereits passend eingerichtet ist, installiere es nicht nur für diesen Nachweis, sondern wähle eine andere Methode.</p>
<h3 id="garantiert-die-sitemap-die-indexierung">Garantiert die Sitemap die Indexierung?</h3>
<p>Nein. Mit der Einreichung teilst du Google den Ort der Sitemap mit. Sie kann die Entdeckung von URLs unterstützen, erzwingt aber weder Crawling noch Indexierung oder Rankings. Entscheidend bleiben unter anderem die technische Erreichbarkeit und die Indexierbarkeit jeder Seite.</p>
<h3 id="wer-sollte-inhaber-der-property-sein">Wer sollte Inhaber der Property sein?</h3>
<p>Mindestens ein dauerhaft vom Unternehmen kontrolliertes Konto sollte bestätigter Inhaber sein. Externe Dienstleister und Mitarbeitende erhalten eigene, auf ihren Auftrag begrenzte Zugriffe. So bleibt die Property erreichbar, wenn eine Person ausscheidet oder ein Dienstleister wechselt.</p>
<h2 id="setup-abgeschlossen">Setup abgeschlossen und sauber übergeben</h2>
<p>Speichere die Abnahmecheckliste zusammen mit Property-Umfang, verantwortlichem Inhaber und offenen Aufgaben. Damit bleibt die Einrichtung auch bei einem Personal- oder Agenturwechsel nachvollziehbar. Wenn DNS-Bestätigung, Sitemap oder technische Erreichbarkeit ungeklärt bleiben, findest du bei unserem <a href="/leistungen/technisches-seo">technischen SEO für Unternehmenswebsites</a> passende Unterstützung.</p>
</div>`


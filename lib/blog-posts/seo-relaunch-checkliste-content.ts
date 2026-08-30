/**
 * Blog: SEO-Relaunch-Checkliste — sm-article Layout.
 *
 * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx
 * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).
 */
export const seoRelaunchChecklisteContent =
  '<div class="sm-article">' +
  `
  <h1>SEO-Relaunch-Checkliste für KMU: Rankings beim Relaunch schützen</h1>

  <div class="meta-info">
    <span>Veröffentlicht: 30. August 2026</span>
    <span>Lesezeit: 17 Min.</span>
    <span>Ratgeber</span>
  </div>

  <div class="intro">
    <p>Ein Website-Relaunch kann Design, Technik und Nutzerführung deutlich verbessern. Für Google ist er jedoch keine kosmetische Änderung: URLs, Inhalte, interne Links, Canonicals, Statuscodes und Seitentemplates können sich gleichzeitig verändern. Genau dort entstehen Rankingrisiken.</p>
    <p>Die ehrliche Antwort vorweg: <strong>Niemand kann garantieren, dass alle Rankings nach einem Relaunch unverändert bleiben.</strong> Mit einem vollständigen URL-Mapping, sauber getesteten Weiterleitungen und engmaschigem Monitoring lässt sich das Risiko aber erheblich reduzieren. Diese SEO-Relaunch-Checkliste führt dich operativ durch die vier entscheidenden Phasen: Vorbereitung, Staging, Go-live und Nachkontrolle.</p>
    <p>Die Abgrenzung zum klassischen Audit ist wichtig: Ein SEO-Audit bewertet den aktuellen Zustand einer Website. Diese Relaunch-Checkliste konzentriert sich darauf, vorhandene Signale während einer konkreten Veränderung kontrolliert auf die neue Website zu übertragen.</p>
  </div>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Phase</th><th>Fokus</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Vor dem Relaunch</strong></td><td>Bestand sichern, Zielseiten bewerten und jede relevante alte URL einer eindeutigen Aktion zuordnen.</td></tr>
      <tr><td><strong>Beim Go-live</strong></td><td>Weiterleitungen, Indexierbarkeit, Canonicals, interne Links und Tracking unmittelbar am Livesystem prüfen.</td></tr>
      <tr><td><strong>Nach dem Relaunch</strong></td><td>Fehlerlogs, Search Console, Rankings und Conversions beobachten und Abweichungen priorisiert beheben.</td></tr>
    </tbody>
  </table>
  </div>

  <nav class="sm-toc" aria-label="Inhaltsverzeichnis">
    <p class="sm-toc-title">Inhaltsverzeichnis</p>
    <ol>
      <li><a href="#risiko">Welche Relaunches sind aus SEO-Sicht riskant?</a></li>
      <li><a href="#vorbereitung">Phase 1: Bestand und Ziele sichern</a></li>
      <li><a href="#url-mapping">URL-Mapping und Redirect-Konzept</a></li>
      <li><a href="#staging">Phase 2: Staging-System prüfen</a></li>
      <li><a href="#stop-or-go">Stop-or-Go-Entscheidung</a></li>
      <li><a href="#go-live">Phase 3: Go-live kontrolliert durchführen</a></li>
      <li><a href="#monitoring">Phase 4: Entwicklung überwachen</a></li>
      <li><a href="#checkliste">Kompakte Abhak-Checkliste</a></li>
      <li><a href="#fehler">Typische Relaunch-Fehler</a></li>
      <li><a href="#faq">Häufige Fragen</a></li>
      <li><a href="#fazit">Relaunch-Risiko prüfen lassen</a></li>
    </ol>
  </nav>

  <div class="info-box">
    <p style="margin:0;"><strong>Die wichtigste Regel:</strong> Verändere nicht mehr als nötig gleichzeitig. Neue Domain, neues CMS, neue Informationsarchitektur und komplett neue Inhalte in einem einzigen Schritt erschweren die Fehlersuche. Wenn dein Projekt es zulässt, trenne große Änderungen in kontrollierbare Etappen.</p>
  </div>

  <h2 id="risiko">Welche Relaunches sind aus SEO-Sicht riskant?</h2>
  <p>„Relaunch“ kann vieles bedeuten. Ein neues Farbschema bei unveränderten URLs ist etwas anderes als der Wechsel von Domain, CMS und Seitenstruktur. Bevor du Aufgaben verteilst, ordne das Projekt deshalb nach seiner tatsächlichen SEO-Wirkung ein.</p>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Änderung</th><th>Typisches Beispiel</th><th>SEO-Risiko</th><th>Notwendige Absicherung</th></tr>
    </thead>
    <tbody>
      <tr><td>Reines Redesign</td><td>Layout und Komponenten ändern sich, URLs und Inhalte bleiben bestehen</td><td>niedrig bis mittel</td><td>Rendering, interne Links, Metadaten und Ladeleistung testen</td></tr>
      <tr><td>CMS-Wechsel</td><td>WordPress wird durch ein anderes System ersetzt</td><td>mittel bis hoch</td><td>URL-Parität, Statuscodes, Canonicals, strukturierte Daten und Sitemap prüfen</td></tr>
      <tr><td>Neue Seitenstruktur</td><td>Verzeichnisse, Navigation oder Slugs ändern sich</td><td>hoch</td><td>vollständiges URL-Mapping und permanente Weiterleitungen umsetzen</td></tr>
      <tr><td>Domainwechsel</td><td>Inhalte ziehen auf eine neue Domain oder Subdomain um</td><td>sehr hoch</td><td>beide Properties verifizieren, Redirects, Sitemap und Change of Address koordinieren</td></tr>
      <tr><td>Zusammenlegung</td><td>mehrere Domains oder Seitenbereiche werden konsolidiert</td><td>sehr hoch</td><td>Zielseiten nach Suchintention bestimmen und widersprüchliche Signale vermeiden</td></tr>
    </tbody>
  </table>
  </div>

  <p>Das Risikoniveau bestimmt, wie früh SEO einbezogen und wie streng die Freigabe gestaltet werden sollte. Die folgende Entscheidungsmatrix hilft bei der Planung.</p>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Ausgangslage</th><th>Sinnvoller Weg</th></tr>
    </thead>
    <tbody>
      <tr><td>URLs bleiben vollständig gleich</td><td>Fokus auf technische Parität, Inhalte, interne Links, Rendering und Performance</td></tr>
      <tr><td>Viele URLs ändern sich, die Inhalte bleiben ähnlich</td><td>URL-Mapping vor der Entwicklung abschließen und Redirects aus der Mapping-Datei erzeugen</td></tr>
      <tr><td>Inhalte werden stark gekürzt oder zusammengeführt</td><td>Suchintention und Leistungsdaten je alter URL bewerten, bevor Ziele festgelegt werden</td></tr>
      <tr><td>Gleichzeitig wechseln Domain, CMS und Struktur</td><td>wenn möglich in Etappen migrieren; andernfalls mehr Testzeit und klare Rückfalloption einplanen</td></tr>
      <tr><td>Keine belastbare URL-Liste oder Messbasis vorhanden</td><td>Go-live verschieben, bis Bestand, Prioritäten und Erfolgskriterien dokumentiert sind</td></tr>
    </tbody>
  </table>
  </div>

  <figure>
    <img src="/images/blog/seo-relaunch-checkliste-phasen.webp" alt="Vier Phasen eines SEO-Relaunches: Vorbereitung, Staging, Go-live und Monitoring" width="2336" height="1744" loading="lazy" decoding="async" />
    <figcaption>Ein sicherer Relaunch ist kein einzelner Termin, sondern eine kontrollierte Abfolge mit klaren Freigaben zwischen den Phasen.</figcaption>
  </figure>

  <h2 id="vorbereitung">Phase 1: Bestand und Ziele vor dem Relaunch sichern</h2>
  <p>Der häufigste Planungsfehler ist, nur die neue Website zu betrachten. Für SEO musst du zuerst verstehen, welche Signale die alte Website bereits besitzt. Die Bestandsaufnahme schafft deine Referenz für Entscheidungen und das spätere Monitoring.</p>

  <h3>Bestehende URLs vollständig erfassen</h3>
  <p>Kombiniere mehrere Datenquellen, weil keine einzelne Liste zuverlässig alle relevanten URLs enthält:</p>
  <ul>
    <li>URLs aus der aktuellen XML-Sitemap</li>
    <li>intern verlinkte Seiten aus einem vollständigen Crawl</li>
    <li>Seiten mit Impressionen oder Klicks in der Google Search Console</li>
    <li>Landingpages mit organischen Sitzungen oder Conversions im Analytics-System</li>
    <li>URLs mit relevanten externen Links</li>
    <li>wichtige Kampagnen-, Produkt-, Standort- und Service-Seiten</li>
    <li>PDFs und andere indexierbare Dateien, sofern sie Suchsichtbarkeit oder Backlinks besitzen</li>
  </ul>
  <p>Führe diese Quellen in einer Masterliste zusammen und entferne erst danach Duplikate. Eine URL ohne aktuellen Traffic kann trotzdem eine sinnvolle Zielseite, einen wertvollen externen Link oder eine saisonale Funktion besitzen.</p>

  <h3>Messbasis dokumentieren</h3>
  <p>Speichere vor dem Relaunch mindestens die wichtigsten organischen Landingpages, Suchanfragen, Impressionen, Klicks, Conversions und indexierten Seitentypen. Ergänze zentrale Rankings, wenn sie geschäftlich relevant sind. So kannst du Veränderungen nach dem Go-live einordnen.</p>
  <p>Lege außerdem fest, woran das Projekt gemessen wird. Für ein KMU können das qualifizierte Kontaktanfragen, Terminbuchungen, Anrufe oder Verkäufe sein. Ein Relaunch ist nicht erfolgreich, nur weil die neue Website moderner aussieht.</p>

  <h3>SEO-Audit als Bestandsaufnahme nutzen</h3>
  <p>Ein vorbereitender Audit zeigt technische Altlasten, doppelte Inhalte, schwache interne Verlinkung und Indexierungsprobleme. Er sollte hier als Inventur dienen: Was muss erhalten bleiben, was wird bewusst verbessert und was darf entfallen? Eine ausführliche Prüflogik findest du in unserer <a href="/blog/seo-audit-checkliste" class="internal-link">SEO-Audit-Checkliste</a>.</p>
  <p>Übernimm alte Fehler nicht blind, dokumentiere aber jede bewusste Korrektur. Nur so lassen sich Auswirkungen der Migration von beabsichtigten Inhaltsänderungen unterscheiden.</p>

  <h3>Rollen und Rückfallplan festlegen</h3>
  <p>Benennen solltest du mindestens eine verantwortliche Person für Entwicklung, Inhalte, SEO, Tracking und finale Freigabe. Definiere außerdem:</p>
  <ul>
    <li>wer Redirect-Regeln einspielt und kurzfristig korrigieren kann,</li>
    <li>wer DNS, Hosting oder CDN kontrolliert,</li>
    <li>wer am Go-live-Tag Entscheidungen treffen darf,</li>
    <li>wie ein Rollback technisch funktioniert,</li>
    <li>welche Fehler den Launch stoppen,</li>
    <li>wie Support und Monitoring in den ersten Tagen besetzt sind.</li>
  </ul>
  <p>Ein Backup allein ist noch kein Rückfallplan. Das Team muss wissen, welche Version wiederhergestellt wird, wie lange das dauert und wie dabei neue Daten wie Bestellungen oder Anfragen geschützt werden.</p>

  <h2 id="url-mapping">URL-Mapping: Jede alte URL braucht eine Entscheidung</h2>
  <p>Das URL-Mapping ist das operative Herzstück einer SEO-Migration. Für jede relevante alte URL hältst du fest, ob sie unverändert bleibt, permanent umzieht, zusammengeführt oder ohne Ersatz entfernt wird. Eine pauschale Regel, die alle alten Seiten zur Startseite schickt, ist kein Mapping. Wenn du die Zuordnung noch strukturieren musst, hilft dir unsere Anleitung zum <a href="/blog/keyword-mapping-anleitung" class="internal-link">Keyword- und URL-Mapping</a>.</p>

  <h3>Beispiel für ein sauberes URL-Mapping</h3>
  <p>Die folgende Tabelle ist ein Modell und muss mit den tatsächlichen URLs deines Projekts gefüllt werden.</p>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Alte URL</th><th>Neue URL</th><th>Aktion</th><th>Begründung</th></tr>
    </thead>
    <tbody>
      <tr><td><code>/leistungen/seo-beratung-muenchen/</code></td><td><code>/seo-beratung-muenchen/</code></td><td>301 oder 308</td><td>Inhalt und Suchintention haben einen eindeutigen neuen Zielort</td></tr>
      <tr><td><code>/leistungen/technische-optimierung/</code></td><td><code>/leistungen/technisches-seo/</code></td><td>301 oder 308</td><td>thematisch gleichwertige neue Leistungsseite</td></tr>
      <tr><td><code>/blog/relaunch-tipps-alt/</code></td><td><code>/blog/seo-relaunch-checkliste/</code></td><td>301 oder 308</td><td>alter Beitrag wird durch einen umfassenden Nachfolger ersetzt</td></tr>
      <tr><td><code>/events/webinar-mai/</code></td><td>keine Ziel-URL</td><td>410 oder 404</td><td>abgelaufen, kein gleichwertiger Ersatz und kein dauerhaft relevanter Inhalt</td></tr>
      <tr><td><code>/kampagne-fruehjahr/</code></td><td><code>/kampagne-sommer/</code></td><td>302 oder 307</td><td>zeitlich begrenzte Weiterleitung; die ursprüngliche URL soll später wieder eigenständig erreichbar sein</td></tr>
    </tbody>
  </table>
  </div>

  <p>Ordne eine alte URL nur dann einer neuen Seite zu, wenn diese denselben Zweck oder eine sehr nahe Suchintention erfüllt. Werden mehrere alte Seiten sinnvoll zu einer stärkeren Zielseite zusammengeführt, darf jede von ihnen direkt dorthin weiterleiten. Gibt es keinen passenden Ersatz, ist ein korrekter <code>404 Not Found</code> oder <code>410 Gone</code> ehrlicher als eine irrelevante Weiterleitung.</p>
  <p>Für eine echte Wartungsunterbrechung ist dagegen meist ein temporärer <code>503 Service Unavailable</code> mit sinnvoll gesetztem <code>Retry-After</code> passender als eine Umleitung auf eine andere Inhaltsseite.</p>

  <h3>Kopierbare Vorlage für dein URL-Mapping</h3>
  <p>Übernimm die folgende Struktur in eine Tabelle und ergänze jede indexierbare, besuchte oder verlinkte Bestands-URL. Für große Websites kommen bei Bedarf Spalten für Seitentyp, Sprache und Priorität hinzu.</p>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Alte URL</th><th>Neue URL</th><th>Aktion</th><th>Suchintention</th><th>Klicks / Backlinks</th><th>Verantwortlich</th><th>Teststatus</th></tr>
    </thead>
    <tbody>
      <tr><td><code>[vollständige alte URL]</code></td><td><code>[vollständige neue URL oder leer]</code></td><td><code>200 / 301 / 308 / 404 / 410</code></td><td><code>[gleich / ähnlich / entfällt]</code></td><td><code>[Kennzahlen oder Priorität]</code></td><td><code>[Name oder Team]</code></td><td><code>offen / bestanden / Fehler</code></td></tr>
    </tbody>
  </table>
  </div>

  <p>Das Feld „Teststatus“ wird erst nach einem technischen Abruf gepflegt. Ein Redirect gilt nicht allein deshalb als korrekt, weil die Ziel-URL eingetragen wurde: Statuscode, Endziel, Canonical und mögliche Ketten müssen ebenfalls stimmen.</p>

  <h3>301 und 308 richtig einsetzen</h3>
  <p><code>301</code> und <code>308</code> sind permanente serverseitige Redirects. Beide signalisieren, dass eine Ressource dauerhaft umgezogen ist. Für typische Inhaltsseiten ist <code>301</code> die einfache Standardwahl; <code>308</code> ist eine permanente technische Alternative. Entscheidend ist, dass das Ziel inhaltlich passt und die Weiterleitung serverseitig korrekt ausgeliefert wird.</p>
  <p>Wichtiger als die Wahl zwischen <code>301</code> und <code>308</code> ist die Qualität der Zuordnung. Leite direkt auf das endgültige Ziel weiter. Ketten wie <code>alt → zwischenziel → neu</code> verlangsamen Aufrufe und erschweren die Kontrolle. Kreise wie <code>A → B → A</code> müssen vollständig ausgeschlossen sein.</p>
  <p>Permanente Redirects sollten <strong>mindestens ein Jahr</strong> bestehen bleiben. Wenn alte Links, Bookmarks oder externe Verweise weiterhin genutzt werden, ist eine längere beziehungsweise dauerhafte Beibehaltung sinnvoll. Aktualisiere parallel die internen Links, damit Nutzer und Crawler nicht dauerhaft über Weiterleitungen gehen müssen. Wie du dabei wichtige Seiten gezielt stärkst, zeigt unsere Anleitung zur <a href="/blog/interne-verlinkung-anleitung" class="internal-link">internen Verlinkung</a>.</p>

  <h3>404 und 410 sind nicht automatisch Fehler</h3>
  <p>Eine entfernte Seite ohne gleichwertigen Ersatz darf einen echten <code>404</code>- oder <code>410</code>-Status liefern. <code>404</code> bedeutet, dass die Ressource nicht gefunden wurde; <code>410</code> erklärt ausdrücklich, dass sie entfernt wurde. Beide sind für endgültig entfallene Inhalte möglich.</p>
  <p>Problematisch wird es, wenn wertvolle Seiten versehentlich verschwinden, eine optisch gestaltete Fehlerseite technisch <code>200 OK</code> zurückgibt oder große URL-Mengen ohne Prüfung entfernt werden. Eine benutzerfreundliche Fehlerseite sollte hilfreiche Navigation bieten, aber trotzdem den korrekten Fehlerstatus senden.</p>

  <div class="warn-box">
    <p style="margin:0;"><strong>Nicht jede alte URL auf die Startseite umleiten.</strong> Fehlt eine inhaltlich passende Zielseite, erzeugt eine pauschale Weiterleitung falsche Erwartungen und kann als Soft-404 eingeordnet werden. Entscheide URL für URL.</p>
  </div>

  <h2 id="staging">Phase 2: Das Staging-System aus SEO-Sicht prüfen</h2>
  <p>Auf dem Staging-System wird nicht nur das Design abgenommen. Hier prüfst du, ob die neue Website technisch dieselben oder bessere Voraussetzungen für Crawling, Indexierung und Conversion besitzt.</p>

  <h3>Staging zuverlässig vor Indexierung schützen</h3>
  <p>Schütze die Testumgebung vorzugsweise durch Anmeldung, HTTP-Authentifizierung oder einen vergleichbaren Zugriffsschutz. Ein öffentlich erreichbares Staging mit <code>noindex</code> kann trotzdem gecrawlt werden und interne Informationen offenlegen.</p>
  <p>Verlasse dich nicht auf eine Sperre in der <code>robots.txt</code>, um Indexierung zu verhindern. Eine dort blockierte URL kann unter Umständen als Adresse bekannt bleiben, und der Crawler kann ein <code>noindex</code> im HTML nicht sehen, wenn er die Seite nicht abrufen darf. Für die Live-Schaltung brauchst du deshalb eine dokumentierte Liste aller Zugangssperren, <code>noindex</code>-Anweisungen und <code>X-Robots-Tag</code>-Header, die entfernt werden müssen.</p>

  <h3>Template für Template testen</h3>
  <p>Prüfe nicht nur Startseite und Kontaktformular. Wähle aus jedem Seitentyp mindestens mehrere repräsentative URLs: Leistungsseite, Standortseite, Blogartikel, Kategorie, Formularseite und gegebenenfalls Produkt- oder Fallstudienseite.</p>
  <p>Kontrolliere dabei:</p>
  <ul>
    <li>eindeutigen Meta Title und eine passende Meta Description,</li>
    <li>eine klare, sichtbare Hauptüberschrift, die den Seiteninhalt beschreibt,</li>
    <li>vollständigen Hauptinhalt auch im gerenderten HTML,</li>
    <li>selbstreferenzierenden Canonical auf die endgültige Live-URL,</li>
    <li>korrekte <code>index,follow</code>-Steuerung für indexierbare Seiten,</li>
    <li>interne Links auf finale URLs statt Staging-Adressen,</li>
    <li>strukturierte Daten ohne veraltete oder erfundene Angaben,</li>
    <li>Bildquellen, Alt-Texte und responsive Darstellung,</li>
    <li>Analytics, Consent-Modus und wichtige Conversion-Ereignisse,</li>
    <li>mobile Bedienbarkeit und Ladeleistung.</li>
  </ul>
  <p>Für die vollständige Seitenprüfung kannst du die Punkte mit unserer <a href="/blog/onpage-seo-checkliste" class="internal-link">OnPage-SEO-Checkliste</a> abgleichen.</p>

  <div class="info-box">
    <p style="margin:0;"><strong>Sonderfälle separat testen:</strong> Bei internationalen Seiten müssen <code>hreflang</code>-Verweise auf die finalen Sprach-URLs zeigen. Pagination, Filter und Parameter brauchen konsistente Indexierungs- und Canonical-Regeln. Relevante PDFs gehören in das Mapping. Bei JavaScript-Websites muss der entscheidende Inhalt auch im gerenderten HTML verfügbar sein.</p>
  </div>

  <p>Canonicals sind ein Signal für die bevorzugte URL, kein Ersatz für Redirects. Vermeide widersprüchliche Angaben: Eine URL sollte nicht in der Sitemap stehen, sich per Canonical auf eine andere Seite beziehen und gleichzeitig intern als Hauptversion verlinkt werden.</p>

  <h3>Neue Sitemap vorbereiten</h3>
  <p>Die neue XML-Sitemap sollte ausschließlich kanonische, indexierbare URLs mit erfolgreichem <code>200</code>-Status enthalten. Redirects, Fehlerseiten, <code>noindex</code>-URLs und Staging-Adressen gehören nicht hinein. Prüfe außerdem, ob die Sitemap nach dem Go-live unter der vorgesehenen URL erreichbar ist und in der <code>robots.txt</code> korrekt referenziert wird.</p>

  <h3>Redirects vorab automatisiert testen</h3>
  <p>Erzeuge eine Testliste aus dem URL-Mapping und prüfe jede Regel gegen eine produktionsnahe Umgebung. Das Ergebnis sollte zeigen:</p>
  <ul>
    <li>alten Status und Redirect-Ziel,</li>
    <li>Anzahl der Weiterleitungsschritte,</li>
    <li>finalen Statuscode,</li>
    <li>finalen Canonical,</li>
    <li>Übereinstimmung mit dem geplanten Ziel.</li>
  </ul>
  <p>Ein paar manuelle Browserchecks reichen bei einer größeren Migration nicht. Schon ein fehlendes Zeichen in einer globalen Regel kann ganze Verzeichnisse falsch umleiten.</p>
  <p>Wenn du technische Umsetzung und Qualitätssicherung nicht intern abdecken kannst, unterstützt dich unser Bereich <a href="/leistungen/technisches-seo" class="internal-link">technisches SEO</a> bei Crawling, Indexierungssteuerung und Migrationstests.</p>

  <h2 id="stop-or-go">Stop or Go: Darf die neue Website live gehen?</h2>
  <p>Eine klare Freigabetabelle verhindert, dass Zeitdruck kritische Fehler relativiert. Lege die Schwellen vor dem Launch fest.</p>

  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Prüffeld</th><th>Go</th><th>Stop</th></tr>
    </thead>
    <tbody>
      <tr><td>URL-Mapping</td><td>alle relevanten alten URLs haben eine freigegebene Aktion</td><td>wichtige Landingpages fehlen oder zeigen auf unpassende Ziele</td></tr>
      <tr><td>Redirect-Test</td><td>permanente Redirects führen direkt auf erreichbare finale URLs</td><td>Schleifen, Ketten, 5xx-Fehler oder Massenumleitung zur Startseite</td></tr>
      <tr><td>Indexierung</td><td>Live-Templates sind ohne <code>noindex</code> und ohne Zugriffssperre vorbereitet</td><td>globale <code>noindex</code>- oder <code>X-Robots-Tag</code>-Regel ist noch aktiv</td></tr>
      <tr><td>Canonicals</td><td>zeigen konsistent auf die indexierbare Live-Version</td><td>verweisen auf Staging, alte Domain oder widersprüchliche URLs</td></tr>
      <tr><td>Inhalte</td><td>geschäftskritische Seiten und Metadaten sind vollständig</td><td>zentrale Inhalte fehlen oder werden erst nach dem Launch ergänzt</td></tr>
      <tr><td>Tracking</td><td>Test-Conversions und Consent-Verhalten wurden geprüft</td><td>Anfragen, Käufe oder zentrale Events lassen sich nicht messen</td></tr>
      <tr><td>Betrieb</td><td>Backup, Rollback, Ansprechpartner und Monitoring stehen</td><td>niemand kann kritische Fehler kurzfristig beheben</td></tr>
    </tbody>
  </table>
  </div>

  <p>Bei einem Stop-Kriterium ist eine Verschiebung meist günstiger als ein überstürzter Launch. Besonders globale Indexierungssperren, fehlerhafte Redirect-Regeln und nicht messbare Conversions sind keine Schönheitsfehler.</p>

  <h2 id="go-live">Phase 3: Go-live kontrolliert durchführen</h2>
  <p>Plane den Launch in einem Zeitraum mit niedrigerem Geschäfts- und Websiteaufkommen, sofern das für dein Unternehmen möglich ist. Das schafft Raum für Kontrollen, ist aber kein SEO-Trick. Entscheidend bleibt, dass das verantwortliche Team erreichbar ist.</p>

  <h3>Empfohlene Reihenfolge am Launch-Tag</h3>
  <ol class="steps-list">
    <li><strong>Änderungsstopp aktivieren:</strong> Friere alte und neue Inhalte kurzzeitig ein, damit Mapping und Datenbestand nicht auseinanderlaufen.</li>
    <li><strong>Backup und Rückfallpunkt bestätigen:</strong> Prüfe, ob die letzte funktionsfähige Version tatsächlich wiederhergestellt werden kann.</li>
    <li><strong>Neue Version veröffentlichen:</strong> Spiele Anwendung, Daten, Assets und Serverkonfiguration in der abgestimmten Reihenfolge aus.</li>
    <li><strong>Permanente Redirects aktivieren:</strong> Setze die freigegebenen <code>301</code>- oder <code>308</code>-Regeln serverseitig um.</li>
    <li><strong>Indexierung freigeben:</strong> Entferne Staging-Schutz, globale <code>noindex</code>-Anweisungen und versehentliche Crawler-Sperren vom Livesystem.</li>
    <li><strong>Smoke Tests durchführen:</strong> Prüfe Startseite, wichtigste Landingpages, Formulare, Navigation, Statuscodes und Redirect-Stichproben auf Desktop und Mobilgerät.</li>
    <li><strong>Interne Signale kontrollieren:</strong> Teste Canonicals, interne Links, strukturierte Daten, Sprachversionen und die neue XML-Sitemap.</li>
    <li><strong>Messung verifizieren:</strong> Löse echte Test-Conversions aus und kontrolliere, ob sie korrekt erfasst werden.</li>
    <li><strong>Search Console aktualisieren:</strong> Reiche die neue Sitemap ein und prüfe einzelne Schlüssel-URLs mit der URL-Prüfung.</li>
    <li><strong>Monitoring starten:</strong> Beobachte Serverfehler, Crawling, Indexierung, organische Landingpages und Geschäftsziele ab der ersten Stunde.</li>
  </ol>

  <h3>Wann das Change-of-Address-Tool sinnvoll ist</h3>
  <p>Das Tool zur Adressänderung in der Google Search Console ist für einen vollständigen Wechsel von einer Domain oder Subdomain auf eine andere vorgesehen. Das Google-Konto, mit dem du die Änderung meldest, braucht Inhaberrechte für die alte und die neue Property. Die permanenten Weiterleitungen müssen bereits funktionieren. Prüfe außerdem separat eingebundene Subdomains und Property-Varianten, wenn sie Teil des Umzugs sind.</p>
  <p>Nutze es nicht für reine Pfadänderungen innerhalb derselben Domain, einen Wechsel von HTTP auf HTTPS, einen Wechsel zwischen www und non-www oder einen Hostingwechsel ohne sichtbare URL-Änderung. In diesen Fällen sind korrekte Redirects, Canonicals, interne Links und Sitemaps die entscheidenden Signale.</p>

  <h3>Direkt nach der Veröffentlichung prüfen</h3>
  <p>Teste nicht nur neue URLs. Rufe auch eine Stichprobe alter URLs aus unterschiedlichen Verzeichnissen auf. Jede muss genau die im Mapping festgelegte Antwort liefern. Prüfe zusätzlich:</p>
  <ul>
    <li><code>200</code> für indexierbare neue Seiten,</li>
    <li><code>301</code> oder <code>308</code> für dauerhaft umgezogene Seiten,</li>
    <li><code>404</code> oder <code>410</code> für bewusst entfernte Inhalte ohne Ersatz,</li>
    <li>keine unerwarteten <code>302</code>, <code>307</code> oder <code>5xx</code>-Antworten,</li>
    <li>keine Redirect-Schleifen oder mehrstufigen Ketten,</li>
    <li>keine Staging-Domain in Quellcode, Canonical, Bildern oder internen Links.</li>
  </ul>

  <h2 id="monitoring">Phase 4: SEO-Monitoring nach dem Relaunch</h2>
  <p>Ein erfolgreicher Go-live beendet die Migration nicht. Google muss alte und neue URLs erneut abrufen, Signale verarbeiten und den Index aktualisieren. Dabei können Rankings und Sichtbarkeit vorübergehend schwanken. Wie schnell sich die Lage stabilisiert, hängt unter anderem von Umfang, Crawl-Frequenz, Serverleistung und Qualität der Umsetzung ab.</p>

  <h3>Praktischer Monitoring-Zeitplan</h3>
  <div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Zeitraum</th><th>Prüffrequenz</th><th>Schwerpunkt</th></tr>
    </thead>
    <tbody>
      <tr><td>erste zwei Stunden</td><td>fortlaufend</td><td>Erreichbarkeit, 5xx, Redirect-Schleifen, Formulare, Tracking, globale Indexierungssperren</td></tr>
      <tr><td>erste 24 Stunden</td><td>mehrmals</td><td>wichtige alte und neue URLs, Serverlogs, Sitemap, Canonicals, robots.txt, Conversion-Ereignisse</td></tr>
      <tr><td>Tage 2 bis 7</td><td>täglich</td><td>neue 404-Fehler, Crawling, indexierte Zielseiten, organische Landingpages und Geschäftskennzahlen</td></tr>
      <tr><td>Wochen 2 bis 4</td><td>mindestens wöchentlich</td><td>Suchanfragen, Klicks, Impressionen, Canonical-Abweichungen, Rankings und Redirect-Nachbesserungen</td></tr>
      <tr><td>Monate 2 und 3</td><td>regelmäßig nach Datenlage</td><td>Trendvergleich, verbliebene alte URLs, Inhaltslücken, interne Links und technische Restpunkte</td></tr>
      <tr><td>danach</td><td>laufender SEO-Rhythmus</td><td>Redirect-Erhalt, neue Fehler, Performance und nachhaltige Entwicklung</td></tr>
    </tbody>
  </table>
  </div>
  <p>Die Intervalle sind ein Arbeitsplan. Passe sie an Umfang, Crawling und Geschäftswirkung deiner Website an.</p>

  <h3>Abweichungen richtig priorisieren</h3>
  <p>Nicht jeder Positionswechsel ist sofort ein Notfall. Priorisiere Fehler nach Reichweite und Geschäftswirkung:</p>
  <ol>
    <li><strong>Kritisch:</strong> Website nicht erreichbar, globale <code>noindex</code>-Regel, flächendeckende 5xx-Fehler, defekte Formulare oder Redirect-Schleifen.</li>
    <li><strong>Hoch:</strong> wichtige Landingpages liefern 404, Canonicals zeigen auf falsche Domains, zentrale Inhalte fehlen oder Tracking fällt aus.</li>
    <li><strong>Mittel:</strong> einzelne Redirect-Ketten, fehlende Metadaten, nicht aktualisierte interne Links oder Sitemap-Abweichungen.</li>
    <li><strong>Beobachten:</strong> normale kurzfristige Rankingbewegungen ohne technische Auffälligkeit und ohne breiten Verlust wichtiger Landingpages.</li>
  </ol>
  <p>Vergleiche dabei nicht nur den Gesamttraffic. Ein stabiler Gesamtwert kann Verluste auf einer wertvollen Leistungsseite verdecken, wenn ein Blogartikel gleichzeitig mehr Besuche erhält. Prüfe deshalb URL-Gruppen, Suchintentionen und Conversions getrennt.</p>

  <div class="info-box">
    <p style="margin:0;"><strong>Temporäre Schwankungen sind möglich, aber keine Ausrede.</strong> Wenn geschäftskritische Seiten nicht indexierbar sind, alte URLs falsch weiterleiten oder Conversions ausfallen, solltest du sofort handeln. Sind Technik und Mapping korrekt, braucht die Neubewertung dagegen oft Geduld.</p>
  </div>

  <h2 id="checkliste">Kompakte SEO-Relaunch-Checkliste zum Abhaken</h2>

  <h3>Vor dem Relaunch</h3>
  <ul class="checklist">
    <li>Ziele, KPIs und geschäftskritische Landingpages dokumentiert</li>
    <li>vollständige URL-Liste aus Sitemap, Crawl, Search Console, Analytics und Backlinkdaten erstellt</li>
    <li>Rankings, Klicks, Impressionen, Conversions und Indexierungsstand gesichert</li>
    <li>jede alte URL einer Aktion und gegebenenfalls einer Ziel-URL zugeordnet</li>
    <li>Inhalte, Metadaten, strukturierte Daten und interne Links geplant</li>
    <li>Redirect-Regeln aus dem freigegebenen Mapping vorbereitet</li>
    <li>Rollen, Launchfenster, Backup und Rollback festgelegt</li>
  </ul>

  <h3>Auf dem Staging-System</h3>
  <ul class="checklist">
    <li>Testumgebung durch Zugriffsschutz vor Indexierung geschützt</li>
    <li>alle Seitentemplates auf Inhalt, H1, Title, Description und Canonical geprüft</li>
    <li>indexierbare Seiten für <code>index,follow</code> auf dem Livesystem vorbereitet</li>
    <li>keine internen Links oder Assets verweisen auf Staging-Adressen</li>
    <li>mobile Darstellung, Rendering und Ladeleistung getestet</li>
    <li>Sitemap enthält nur kanonische, indexierbare <code>200</code>-URLs</li>
    <li>Redirects automatisiert auf Ziel, Status, Ketten und Schleifen geprüft</li>
    <li>Analytics, Consent und Test-Conversions funktionieren</li>
  </ul>

  <h3>Beim Go-live</h3>
  <ul class="checklist">
    <li>neue Website, Serverkonfiguration und Redirects vollständig veröffentlicht</li>
    <li>Zugriffsschutz, <code>noindex</code> und unbeabsichtigte robots.txt-Sperren entfernt</li>
    <li>wichtige neue URLs liefern <code>200</code> und den richtigen Canonical</li>
    <li>alte URLs liefern die im Mapping definierte Antwort</li>
    <li>Navigation, Formulare, Bilder und interne Links funktionieren</li>
    <li>neue Sitemap in der Search Console eingereicht</li>
    <li>Change of Address nur bei tatsächlichem Domain- oder Subdomainwechsel genutzt</li>
    <li>Monitoring und Fehlereskalation aktiviert</li>
  </ul>

  <h3>Nach dem Go-live</h3>
  <ul class="checklist">
    <li>Serverfehler, 404/410, Redirects und Crawling regelmäßig geprüft</li>
    <li>Indexierung und Canonical-Auswahl wichtiger URLs beobachtet</li>
    <li>organische Landingpages, Suchanfragen und Conversions verglichen</li>
    <li>interne Links auf finale URLs umgestellt und Betreiber besonders wichtiger verlinkender Websites um Aktualisierung gebeten</li>
    <li>Redirects mindestens ein Jahr bestehen lassen</li>
    <li>Erkenntnisse, Korrekturen und offene Punkte im Migrationsprotokoll dokumentiert</li>
  </ul>

  <h2 id="fehler">Typische Fehler, die Rankings unnötig gefährden</h2>
  <p><strong>SEO wird erst kurz vor dem Launch eingebunden.</strong> Dann sind URL-Struktur und Templates oft bereits festgelegt. Korrekturen werden teuer oder unter Zeitdruck ausgelassen.</p>
  <p><strong>Die neue Navigation ersetzt wichtige interne Links.</strong> Eine schlankere Menüstruktur kann sinnvoll sein, darf aber zentrale Seiten nicht zu tief verstecken. Prüfe, wie Nutzer und Crawler weiterhin zu ihnen gelangen.</p>
  <p><strong>Inhalte werden aus Designgründen stark gekürzt.</strong> Ein moderneres Layout gleicht nicht automatisch den Verlust hilfreicher Antworten, lokaler Relevanz oder klarer Leistungsbeschreibungen aus.</p>
  <p><strong>Canonicals zeigen noch auf Staging oder die alte Domain.</strong> Das erzeugt widersprüchliche Konsolidierungssignale. Prüfe den tatsächlich ausgelieferten Quellcode, nicht nur die Einstellung im CMS.</p>
  <p><strong>Die robots.txt wird mit Indexierungssteuerung verwechselt.</strong> Crawling zu blockieren ist nicht dasselbe wie eine URL per <code>noindex</code> aus dem Index zu halten. Beim Relaunch muss jede Maßnahme den richtigen Zweck erfüllen.</p>
  <p><strong>Alle 404-Fehler werden pauschal weitergeleitet.</strong> Echte entfernte Inhalte dürfen 404 oder 410 liefern. Nur URLs mit einem passenden Nachfolger sollten permanent umziehen.</p>
  <p><strong>Nach dem Launch wird nur auf Rankings geschaut.</strong> Prüfe ebenso Crawling, Statuscodes, Landingpages, Leads und Umsätze. Rankings können schwanken, während ein technischer Conversionfehler bereits reale Anfragen kostet.</p>

  <div class="faq-section">
    <h2 id="faq">Häufige Fragen zum SEO-Relaunch</h2>

    <div class="faq-item">
      <div class="faq-q">Kann ein Website-Relaunch ohne Rankingverlust garantiert werden?</div>
      <div class="faq-a">Nein. Auch bei sorgfältiger Vorbereitung können Rankings vorübergehend schwanken, weil Suchmaschinen URLs und Inhalte neu crawlen und bewerten. Ein vollständiges URL-Mapping, korrekt umgesetzte Redirects und enges Monitoring minimieren das Risiko, garantieren aber keine unveränderten Positionen.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Sollte ich beim Relaunch 301 oder 308 verwenden?</div>
      <div class="faq-a">Für dauerhaft umgezogene Inhaltsseiten sind sowohl 301 als auch 308 als permanente serverseitige Redirects geeignet. Ein 308 erhält die HTTP-Methode verbindlich, während ein 301 bei manchen Clients einen Methodenwechsel zulassen kann. Entscheidend sind ein passendes Ziel und eine direkte Weiterleitung ohne Kette.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Wie lange müssen Relaunch-Weiterleitungen bestehen bleiben?</div>
      <div class="faq-a">Permanente Weiterleitungen sollten mindestens ein Jahr aktiv bleiben. Wenn alte URLs weiterhin über Backlinks, Bookmarks oder andere Quellen aufgerufen werden, ist eine längere oder dauerhafte Beibehaltung sinnvoll.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Muss jede gelöschte Seite weitergeleitet werden?</div>
      <div class="faq-a">Nein. Eine gelöschte URL sollte nur dann permanent weitergeleitet werden, wenn es einen inhaltlich passenden Ersatz gibt. Ohne gleichwertiges Ziel sind ein echter 404- oder 410-Status sinnvoller als eine pauschale Weiterleitung zur Startseite.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Darf die Staging-Website über robots.txt gesperrt werden?</div>
      <div class="faq-a">Eine robots.txt-Sperre allein schützt eine Staging-Website nicht zuverlässig vor einer Aufnahme der URL in Suchergebnisse. Nutze vorzugsweise einen Zugriffsschutz. Ein noindex kann nur sicher verarbeitet werden, wenn der Crawler die Seite abrufen darf.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Wann nutze ich Change of Address in der Search Console?</div>
      <div class="faq-a">Nutze Change of Address bei einem vollständigen Wechsel von einer Domain oder Subdomain auf eine andere. Für Pfadänderungen innerhalb derselben Domain, HTTP-zu-HTTPS, www-zu-non-www oder einen reinen Hostingwechsel ist das Tool nicht vorgesehen.</div>
    </div>
  </div>

  <div class="fazit">
    <h2 id="fazit">Relaunch-Risiko vor dem Go-live prüfen lassen</h2>
    <p>Je früher Redirects, Templates und Indexierungssteuerung geprüft werden, desto mehr Handlungsspielraum bleibt. Wir kontrollieren dein URL-Mapping, testen die produktionsnahe Version und priorisieren Fehler nach tatsächlichem Risiko.</p>
    <p><strong>Lass dein <a href="/kontakt" class="internal-link">Relaunch-Risiko unverbindlich prüfen</a></strong> oder informiere dich vorab über unsere Leistungen im <a href="/leistungen/technisches-seo" class="internal-link">technischen SEO</a>.</p>
  </div>
` +
  '</div>'

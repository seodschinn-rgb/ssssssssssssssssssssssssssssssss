import Link from 'next/link'

export default function HotelsSpec() {
  return (
    <section className="specs" id="besonderheiten" aria-labelledby="specs-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">04</span>
            <span className="rail" />
            Besonderheiten
          </p>
          <h2 id="specs-heading">Was Hotel-SEO anders macht</h2>
          <p className="lead">
            Hotellerie ist kein gewöhnlicher lokaler Markt: Du konkurrierst mit Plattformen, dein Publikum ist
            international und die Buchung fällt oft in Minuten. Drei Punkte, sachlich eingeordnet.
          </p>
        </div>
        <div className="spec-rows stagger">
          <article className="spec-row rv">
            <div>
              <h3>Direktbuchung vs. Portale: ein Kanal-Mix, kein Entweder-oder</h3>
              <p>
                Buchungsportale bleiben ein Reichweiten-Kanal, besonders für internationale Erstgäste. Das Ziel ist kein
                Boykott, sondern ein gesünderes Verhältnis: Der Direktkanal wächst, die Provisionslast sinkt, und die
                Gästedaten aus jeder Direktbuchung gehören dir, als Grundlage für Wiederbuchung und direkten Kontakt.
              </p>
            </div>
          </article>
          <article className="spec-row rv">
            <div>
              <h3>Local SEO &amp; Maps für Häuser mit Profil</h3>
              <p>
                Hotel-Suchen sind lokale Suchen: Kategorie, Ausstattungs-Attribute, Fotos und beantwortete Fragen
                entscheiden über deinen Platz in Maps. Dazu kommen strukturierte Daten für Haus und Zimmer, damit Google
                dein Angebot vollständig versteht. Wie lokale Rankings grundsätzlich funktionieren, erklärt unser{' '}
                <Link href="/blog/local-seo-guide">Local-SEO-Guide</Link>.
              </p>
            </div>
          </article>
          <article className="spec-row rv">
            <div>
              <h3>Mehrsprachige Gäste, mehrsprachige Suche</h3>
              <p>
                Ein Teil deiner Gäste sucht auf Englisch oder in anderen Sprachen. Sauber übersetzte Seiten mit
                korrekten hreflang-Auszeichnungen sorgen dafür, dass internationale Gäste die passende Sprachversion
                sehen und sich die Versionen nicht gegenseitig Konkurrenz machen.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

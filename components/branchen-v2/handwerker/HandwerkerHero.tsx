import Link from 'next/link'

export default function HandwerkerHero() {
  return (
    <section className="hero-s" aria-labelledby="hero-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <nav className="crumbs" aria-label="Brotkrumen-Navigation">
          <ol>
            <li>
              <Link href="/">Start</Link>
            </li>
            <li>
              <Link href="/branchen">Branchen</Link>
            </li>
            <li>
              <span aria-current="page">Handwerker</span>
            </li>
          </ol>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="rail" />
              SEO für Handwerker
            </p>
            <h1 id="hero-heading">
              <span className="h1-main">SEO für Handwerker in München.</span>
              <span className="h1-sub">Mehr Aufträge über Google.</span>
            </h1>
            <p className="sub">
              Gute Arbeit spricht sich herum, aber die nächste Generation deiner Kunden fragt nicht mehr den Nachbarn,
              sondern Google. Wir sorgen dafür, dass dein Betrieb gefunden wird: bei der Suche nach deinem Gewerk, in
              deinem Einzugsgebiet und im Notfall um 22 Uhr.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/kontakt">
                Kostenloses Erstgespräch sichern
              </Link>
            </div>
            <p className="cta-micro">unverbindlich, Antwort innerhalb von 24 Stunden</p>
            <ul className="hero-chips">
              <li>Fester Ansprechpartner ab Tag 1</li>
              <li>Preise offen auf der Website</li>
              <li>Monatlich kündbar</li>
            </ul>
          </div>
          <figure className="hero-visual rv">
            <span className="num-badge" aria-hidden="true">
              02 / 10
            </span>
            <img
              src="/images/blog/branche-handwerker.webp"
              alt="Hände eines Schreiners hobeln eine Eichenbohle in der Werkstatt"
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

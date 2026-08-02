import Link from 'next/link'

export default function AnwaelteHero() {
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
              <span aria-current="page">Anwälte</span>
            </li>
          </ol>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="rail" />
              SEO für Anwälte
            </p>
            <h1 id="hero-heading">
              <span className="h1-main">SEO für Anwälte in München.</span>
              <span className="h1-sub">Mehr Mandate über Google.</span>
            </h1>
            <p className="sub">
              Der Münchner Rechtsmarkt ist einer der dichtesten in Deutschland, und immer mehr Mandanten beginnen ihre
              Suche bei Google statt im Bekanntenkreis. Wir machen deine Kanzlei dort sichtbar: sachlich, mit klarem
              Fokus auf deine Rechtsgebiete und dein Berufsrecht im Blick.
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
              04 / 10
            </span>
            <img
              src="/images/blog/branche-anwaelte.webp"
              alt="Anwalt steht am Schreibtisch einer Kanzlei und liest eine Akte, Bücherwand im Hintergrund"
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

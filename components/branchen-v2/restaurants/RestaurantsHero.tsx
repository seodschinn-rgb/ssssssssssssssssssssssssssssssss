import Link from 'next/link'

export default function RestaurantsHero() {
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
              <span aria-current="page">Restaurants</span>
            </li>
          </ol>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="rail" />
              SEO für Restaurants
            </p>
            <h1 id="hero-heading">
              <span className="h1-main">SEO für Restaurants in München.</span>
              <span className="h1-sub">Mehr Gäste über Google.</span>
            </h1>
            <p className="sub">
              Ob spontane Suche nach „Restaurant in der Nähe“ oder gezielte Reservierung fürs Wochenende: Gäste
              entscheiden heute bei Google und Google Maps, wo sie essen. Wir sorgen dafür, dass dein Haus dort
              auftaucht, bevor der Tisch woanders gebucht ist.
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
              07 / 10
            </span>
            <img
              src="/images/blog/branche-restaurants.webp"
              alt="Gedeckte Tische in einem warm beleuchteten Restaurant"
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

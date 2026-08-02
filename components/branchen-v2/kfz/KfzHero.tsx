import Link from 'next/link'

export default function KfzHero() {
  return (
    <section className="hero-s" aria-labelledby="hero-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <nav aria-label="Brotkrumen-Navigation">
          <ol className="crumbs">
            <li>
              <Link href="/">Start</Link>
            </li>
            <li>
              <Link href="/branchen">Branchen</Link>
            </li>
            <li>
              <span aria-current="page">KFZ-Werkstätten</span>
            </li>
          </ol>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="rail" />
              SEO für KFZ-Werkstätten
            </p>
            <h1 id="hero-heading">
              <span className="h1-main">SEO für KFZ-Werkstätten in München.</span>
              <span className="h1-sub">Sichtbar, wenn das Auto streikt.</span>
            </h1>
            <p className="sub">
              Neue Kunden suchen ihre Werkstatt heute bei Google, nicht im Telefonbuch. Wir sorgen dafür, dass dein
              Betrieb in Maps und den lokalen Suchergebnissen auftaucht, wenn in deinem Viertel jemand TÜV,
              Reifenwechsel oder Inspektion braucht.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/kontakt">
                Kostenloses Erstgespräch sichern
              </Link>
            </div>
            <p className="cta-micro">unverbindlich, Antwort innerhalb von 24 Stunden</p>
            <ul className="hero-chips">
              <li>Maps + Bewertungen</li>
              <li>Leistungsseiten je Service</li>
              <li>Saisonale Sichtbarkeit</li>
            </ul>
          </div>
          <figure className="hero-visual rv">
            <span className="hero-badge" aria-hidden="true">
              Branche 10 / 10
            </span>
            <img
              src="/images/blog/branche-kfz-werkstatt.webp"
              alt="Mechaniker arbeitet unter der geöffneten Motorhaube in einer KFZ-Werkstatt"
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>Gute Arbeit verdient Kunden, die sie finden.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

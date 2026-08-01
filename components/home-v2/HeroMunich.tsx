import Link from 'next/link'

export default function HeroMunich() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        {/* Hero-Bild: AI-generiert, 1920x900-Crop. Dekorativ (alt=""), die H1 trägt die Information. */}
        <img
          src="/images/blog/muenchen-hero.webp"
          alt=""
          width={1920}
          height={900}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="wrap hero-inner">
        <p className="eyebrow">
          <span className="rail" />
          SEO-Agentur · München & Bayern
        </p>
        <h1 id="hero-heading">
          <span className="h1-main">SEO Agentur München</span>
          <span className="h1-sub">Sichtbarkeit, die Kunden bringt.</span>
        </h1>
        <p className="sub">
          Du investierst in eine Website, aber Google schickt dir keine Kunden? Wir ändern das: mit
          einer datengetriebenen SEO-Strategie, die Rankings liefert und nicht nur Reports.
          Transparent, messbar und spezialisiert auf Unternehmen in München und Bayern.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/kontakt">
            Kostenloses Erstgespräch sichern
          </Link>
          <Link className="btn btn-ghost" href="/leistungen">
            Leistungen ansehen
          </Link>
        </div>
        <p className="cta-micro">unverbindlich, Antwort innerhalb von 24 Stunden</p>
        <ul className="hero-chips">
          <li>Fester Ansprechpartner ab Tag 1</li>
          <li>Preise offen auf der Website</li>
          <li>Monatlich kündbar</li>
          <li>SEO + GEO für die KI-Suche</li>
        </ul>
      </div>
      <span className="hero-scroll" aria-hidden="true">
        Scroll
      </span>
    </section>
  )
}

import Link from 'next/link'

export default function BranchenHero() {
  return (
    <section className="hero-b" aria-labelledby="hero-heading">
      <div className="hero-b-media" aria-hidden="true">
        <img
          src="/images/blog/branchen-hero.png"
          alt=""
          width={1920}
          height={900}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="wrap hero-b-inner">
        <p className="eyebrow">
          <span className="rail" />
          Branchen-SEO · München & Bayern
        </p>
        <h1 id="hero-heading">
          <span className="h1-main">SEO für deine Branche.</span>
          <span className="h1-sub">Gemacht für München.</span>
        </h1>
        <p className="sub">
          Ein Zahnarzt konkurriert bei Google mit anderen Suchbegriffen als ein Immobilienmakler, und ein Handwerker
          braucht eine andere Strategie als ein Restaurant. Deshalb bekommst du bei uns keine Schablone, sondern
          branchenspezifische Suchmaschinenoptimierung mit klarem München-Fokus.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/kontakt">
            Kostenloses Erstgespräch sichern
          </Link>
        </div>
        <p className="cta-micro">unverbindlich, Antwort innerhalb von 24 Stunden</p>
      </div>
    </section>
  )
}

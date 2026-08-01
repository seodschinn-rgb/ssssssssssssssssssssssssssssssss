import Link from 'next/link'
import { BRANCHEN_HUB_CARDS } from '@/lib/branchen/hub-v2'

export default function BranchenGrid() {
  return (
    <section className="branchen" id="alle-branchen" aria-labelledby="branchen-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Alle Branchen
          </p>
          <h2 id="branchen-heading">SEO-Strategien für 10 Branchen in München</h2>
          <p className="lead">
            Wähle deine Branche: Jede Strategie ist auf die Suchbegriffe, den Wettbewerb und die Spielregeln deines
            Markts zugeschnitten.
          </p>
        </div>
        <div className="bgrid stagger">
          {BRANCHEN_HUB_CARDS.map((card) => (
            <article
              key={card.slug}
              className={`bcard lift rv${card.featured ? ' feat' : ''}`}
            >
              <figure className="bcard-media">
                <span className="bcard-num" aria-hidden="true" />
                <img
                  src={card.image}
                  alt={card.alt}
                  width={1200}
                  height={800}
                  {...(card.priority
                    ? { fetchPriority: 'high' as const }
                    : { loading: 'lazy' as const })}
                  decoding="async"
                />
              </figure>
              <div className="bcard-body">
                <h3>
                  <Link href={`/branchen/${card.slug}`}>{card.title}</Link>
                </h3>
                <p>{card.description}</p>
                <span className="bcard-go" aria-hidden="true">
                  {card.go}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="sec-foot rv">
          Du suchst eine Leistung statt einer Branche?{' '}
          <Link className="arrow-link" href="/leistungen">
            Alle SEO-Leistungen ansehen
          </Link>
        </p>
      </div>
    </section>
  )
}

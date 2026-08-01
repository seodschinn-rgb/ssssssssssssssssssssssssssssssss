import Link from 'next/link'

export default function BranchenWhy() {
  return (
    <section className="why" id="warum-branchen-seo" aria-labelledby="warum-heading">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">02</span>
            <span className="rail" />
            Warum Branchen-SEO
          </p>
          <h2 id="warum-heading">Warum branchenspezifisches SEO?</h2>
          <p className="lead">
            Allgemeines SEO reicht in umkämpften Münchner Märkten selten aus. Drei Gründe, warum sich der Branchenfokus
            auszahlt.
          </p>
        </div>
        <div className="why-grid stagger">
          <article className="card lift rv">
            <span className="why-idx" aria-hidden="true">
              01
            </span>
            <h3>Suchintention je Branche</h3>
            <p>
              Ein Zahnarzt-Patient sucht anders als jemand, der einen Anwalt für Mietrecht braucht. Wir analysieren,
              welche Suchbegriffe in deiner Branche wirklich Anfragen bringen, und richten Seitenstruktur und Inhalte
              exakt darauf aus. Das gilt für die klassische Google-Suche genauso wie für KI-Antworten, die wir mit{' '}
              <Link href="/leistungen/geo-agentur">GEO (Generative Engine Optimization)</Link> gezielt mitoptimieren.
            </p>
          </article>
          <article className="card lift rv">
            <span className="why-idx" aria-hidden="true">
              02
            </span>
            <h3>Wettbewerbsdichte in München</h3>
            <p>
              Ein Restaurant in Schwabing konkurriert mit völlig anderen Suchergebnissen als ein Handwerksbetrieb in
              Sendling. Wir kennen die Wettbewerbssituation in den Münchner Vierteln, priorisieren die Hebel mit dem
              größten Effekt und bauen deine Sichtbarkeit mit <Link href="/leistungen/local-seo">Local SEO</Link>{' '}
              gezielt aus, vom Local Pack bis zu den organischen Treffern.
            </p>
          </article>
          <article className="card lift rv">
            <span className="why-idx" aria-hidden="true">
              03
            </span>
            <h3>Branchenwissen inklusive Grenzen</h3>
            <p>
              In Heilberufen setzt das Heilmittelwerbegesetz (HWG) Werbeaussagen enge Grenzen, im Rechts- und
              Steuerbereich das Berufsrecht. Wir texten entsprechend sachlich und zurückhaltend. Das ersetzt keine
              Rechtsberatung, verhindert aber die typischen Formulierungsfehler, die Praxen und Kanzleien online
              angreifbar machen.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

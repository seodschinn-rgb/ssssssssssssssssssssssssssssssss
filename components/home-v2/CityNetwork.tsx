import Link from 'next/link'

export default function CityNetwork() {
  return (
    <section className="cities" id="orte" aria-labelledby="orte-heading">
      <div className="wrap">
        <div className="city-head">
          <div className="sec-head rv" style={{ marginBottom: 0 }}>
            <p className="eyebrow">
              <span className="num">07</span>
              <span className="rail" />
              Standorte
            </p>
            <h2 id="orte-heading">SEO für München und ganz Bayern</h2>
            <p className="lead">
              Unser Geschäftssitz ist Engelskirchen. Wir betreuen Unternehmen in München und ganz Bayern remote –
              von Handwerksbetrieben bis zu Praxen und IT-Unternehmen. Strategie und Umsetzung richten wir auf
              deinen jeweiligen Markt aus.
            </p>
          </div>
          {/* Dekoratives Bayern-Liniennetz (abstrahiert, grobe Geografie; Links laufen über die Chips) */}
          <div className="netz rv" aria-hidden="true">
            <svg viewBox="0 0 520 360" fill="none">
              <path d="M250 218 L250 150 L262 138 L262 76" stroke="#CBD2E0" strokeWidth="2" />
              <path d="M250 218 L196 164 L120 164" stroke="#CBD2E0" strokeWidth="2" />
              <path d="M250 218 L320 148 L410 118 M320 148 L330 76" stroke="#CBD2E0" strokeWidth="2" />
              <path d="M250 218 L176 218 L96 200 M176 218 L120 262" stroke="#CBD2E0" strokeWidth="2" />
              <path d="M250 218 L206 262 L92 320" stroke="#CBD2E0" strokeWidth="2" />
              <path d="M250 218 L322 262 L420 268" stroke="#2563EB" strokeOpacity=".55" strokeWidth="2.5" />
              <path d="M250 218 L262 138" stroke="#2563EB" strokeOpacity=".55" strokeWidth="2.5" />
              <circle cx="250" cy="218" r="10" fill="#2563EB" />
              <circle cx="250" cy="218" r="16" stroke="#2563EB" strokeOpacity=".25" strokeWidth="2" fill="none" />
              <circle cx="262" cy="76" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="262" cy="138" r="5" fill="#fff" stroke="#2563EB" strokeWidth="2" />
              <circle cx="120" cy="164" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="196" cy="164" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="410" cy="118" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="330" cy="76" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="320" cy="148" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="96" cy="200" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="176" cy="218" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="120" cy="262" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="92" cy="320" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="206" cy="262" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <circle cx="322" cy="262" r="5" fill="#fff" stroke="#2563EB" strokeWidth="2" />
              <circle cx="420" cy="268" r="5" fill="#fff" stroke="#5F6C88" strokeWidth="2" />
              <text
                x="250"
                y="248"
                textAnchor="middle"
                fontFamily="Consolas,monospace"
                fontSize="11"
                fill="#101A33"
                fontWeight="700"
              >
                MÜNCHEN
              </text>
            </svg>
          </div>
        </div>
        <nav className="city-grid rv" aria-label="SEO-Standorte in Bayern">
          <Link className="is-home" href="/">
            München
          </Link>
          <Link href="/standorte/garching">Garching</Link>
          <Link href="/standorte/starnberg">Starnberg</Link>
          <Link href="/standorte/traunstein">Traunstein</Link>
          <Link href="/standorte/freising">Freising</Link>
          <Link href="/standorte/dachau">Dachau</Link>
          <Link href="/standorte/germering">Germering</Link>
          <Link href="/standorte/fuerstenfeldbruck">Fürstenfeldbruck</Link>
          <Link href="/standorte/rosenheim">Rosenheim</Link>
          <Link href="/standorte/kempten">Kempten</Link>
          <Link href="/standorte/landshut">Landshut</Link>
          <Link href="/standorte/augsburg">Augsburg</Link>
          <Link href="/standorte/ingolstadt">Ingolstadt</Link>
          <Link href="/standorte/regensburg">Regensburg</Link>
        </nav>
        <p className="sec-foot rv">
          <Link className="arrow-link" href="/standorte">
            Alle Standorte anzeigen
          </Link>
        </p>
      </div>
    </section>
  )
}

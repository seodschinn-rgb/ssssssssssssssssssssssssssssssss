export default function HotelsPath() {
  return (
    <section className="path-wrap" id="gaeste-weg" aria-labelledby="path-heading">
      <div className="wrap path-grid">
        <figure className="path-figure rv">
          <img
            src="/images/blog/hotels-fruehstueck.webp"
            alt="Gedeckter Frühstückstisch am Fenster eines Hotelrestaurants, eine Hand schenkt Kaffee ein"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Erlebnis beginnt vor dem Check-in: bei der Suche.</figcaption>
        </figure>
        <div>
          <div className="sec-head rv" style={{ marginBottom: 0 }}>
            <p className="eyebrow">
              <span className="num">03</span>
              <span className="rail" />
              Der Weg zur Buchung
            </p>
            <h2 id="path-heading">So entscheidet sich, wo dein Gast bucht</h2>
            <p className="lead">
              Drei Momente, drei Chancen für dein Haus. SEO sorgt dafür, dass du in jedem davon stattfindest.
            </p>
          </div>
          <ol className="path-steps">
            <li className="rv">
              <span className="p-num" aria-hidden="true">
                01
              </span>
              <h3>Inspiration &amp; Planung</h3>
              <p>
                Der Gast sucht zuerst nach München, nicht nach dir: Viertel, Termine, Anreise. Wer hier mit eigenen
                Inhalten auftaucht, ist früh im Kopf.
              </p>
            </li>
            <li className="rv">
              <span className="p-num" aria-hidden="true">
                02
              </span>
              <h3>Vergleich &amp; Vertrauen</h3>
              <p>
                Dann werden Häuser verglichen: Lage, Fotos, Bewertungen. Google-Profil und Website müssen dasselbe
                stimmige Bild abgeben.
              </p>
            </li>
            <li className="rv">
              <span className="p-num" aria-hidden="true">
                03
              </span>
              <h3>Die Buchung</h3>
              <p>
                Gebucht wird, wo es einfach ist. Eine schnelle Buchungsstrecke mit klaren Direktbucher-Vorteilen holt
                die Buchung auf deine Website statt ins Portal.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

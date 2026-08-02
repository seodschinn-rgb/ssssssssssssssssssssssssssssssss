export default function RestaurantsBand() {
  return (
    <section className="band-wrap" id="aus-der-kueche" aria-labelledby="kueche-heading">
      <div className="wrap band">
        <figure className="band-visual rv" style={{ margin: 0 }}>
          <img
            src="/images/blog/restaurants-kueche.webp"
            alt="Hände eines Kochs richten ein Gericht in der Restaurantküche an"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="band-copy rv">
          <p className="eyebrow">
            <span className="num">03</span>
            <span className="rail" />
            Aus der Küche
          </p>
          <h2 id="kueche-heading">Deine Küche liefert den Content, wir machen ihn sichtbar</h2>
          <p className="lead">
            Gerichte, Fotos, Karte, Atmosphäre: Alles, was dein Restaurant besonders macht, existiert schon. Wir
            übersetzen es in Inhalte, die Google versteht und Gäste überzeugen.
          </p>
          <ul className="band-points">
            <li>Speisekarte als Text mit Beschreibungen, Preisen und strukturierten Daten</li>
            <li>Echte Food- und Raum-Fotos, benannt und beschrieben, wie Google sie braucht</li>
            <li>Reservierung und Anruf ohne Umweg: prominent auf Website und Profil</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

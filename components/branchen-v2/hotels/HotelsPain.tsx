export default function HotelsPain() {
  return (
    <section className="pain" id="ausgangslage" aria-labelledby="pain-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Ausgangslage
          </p>
          <h2 id="pain-heading">Volle Zimmer, schrumpfende Marge?</h2>
          <p className="lead">
            Die Münchner Hotellerie hat kein Nachfrageproblem, sondern ein Sichtbarkeitsproblem auf dem eigenen Kanal.
            Drei Muster sehen wir immer wieder.
          </p>
        </div>
        <div className="pain-grid stagger">
          <article className="card lift rv">
            <span className="pain-x" aria-hidden="true">
              × 01
            </span>
            <h3>Die Provisionsfalle</h3>
            <p>
              Jede Portal-Buchung kostet dich einen spürbaren Teil des Zimmerpreises. Ohne Portale fehlt die Auslastung,
              mit ihnen leidet die Marge. Aus dieser Abhängigkeit führt nur ein starker eigener Buchungskanal.
            </p>
          </article>
          <article className="card lift rv">
            <span className="pain-x" aria-hidden="true">
              × 02
            </span>
            <h3>Unsichtbar trotz bester Lage</h3>
            <p>
              Messen, Kongresse, Oktoberfest: München zieht Gäste an, und Ketten, Boutique-Häuser und Apartments kämpfen
              um dieselben Suchanfragen. Wer organisch nicht sichtbar ist, wird von den Portalen überholt, oft sogar
              beim eigenen Hotelnamen.
            </p>
          </article>
          <article className="card lift rv">
            <span className="pain-x" aria-hidden="true">
              × 03
            </span>
            <h3>Die Website bremst die Buchung</h3>
            <p>
              Versteckte Buchungs-Buttons, veraltete Bilder, eine träge Buchungsstrecke: Jede Hürde auf deiner Website
              ist ein Argument für das Portal. Genau dort entscheidet sich, wem der Gast die Buchung gibt.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

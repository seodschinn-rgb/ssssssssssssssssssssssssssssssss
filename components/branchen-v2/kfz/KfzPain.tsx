export default function KfzPain() {
  return (
    <section className="pain" id="ausgangslage" aria-labelledby="pain-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">01</span>
            <span className="rail" />
            Ausgangslage
          </p>
          <h2 id="pain-heading">Volle Hebebühnen heute, leere morgen?</h2>
          <p className="lead">
            Werkstätten leben von Stammkunden, aber Stammkundschaft allein trägt keinen Betrieb durch die nächsten zehn
            Jahre. Drei Muster sehen wir immer wieder.
          </p>
        </div>
        <div className="pain-grid stagger">
          <article className="card lift rv">
            <span className="pain-x" aria-hidden="true">
              × 01
            </span>
            <h3>Das Stammkunden-Paradox</h3>
            <p>
              Stammkunden kommen wieder, bis sie wegziehen, aufs E-Auto umsteigen oder den Wagen abmelden. Ohne stetigen
              Zulauf schrumpft der Bestand unbemerkt. Und neue Kunden suchen zuerst bei Google, nicht im Telefonbuch.
            </p>
          </article>
          <article className="card lift rv">
            <span className="pain-x" aria-hidden="true">
              × 02
            </span>
            <h3>Ketten dominieren die Suche</h3>
            <p>
              Große Werkstattketten investieren massiv in Online-Marketing und stehen bei Suchen wie Reifenwechsel
              München oft vorn. Freie Werkstätten rutschen nach hinten: nicht, weil ihre Arbeit schlechter wäre, sondern
              weil die Online-Präsenz nicht mithalten kann.
            </p>
          </article>
          <article className="card lift rv">
            <span className="pain-x" aria-hidden="true">
              × 03
            </span>
            <h3>Eine Seite für alles</h3>
            <p>
              TÜV, Reifen, Bremsen, Klima: Alles steht auf einer einzigen Leistungsübersicht. Google kann so nicht
              zuordnen, wofür dein Betrieb relevant ist, und zeigt dich im Zweifel für keinen dieser Begriffe.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

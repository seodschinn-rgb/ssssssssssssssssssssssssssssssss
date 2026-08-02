/** Festes Markenzeichen: Lupe im blauen Rounded-Quadrat (altes Logo). */
export default function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </span>
  )
}

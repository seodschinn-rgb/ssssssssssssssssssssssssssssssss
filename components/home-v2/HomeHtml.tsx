/** Server-safe HTML fragment renderer for homepage v2 static modules. */
export default function HomeHtml({ html }: { html: string }) {
  // Kein display:contents — verursacht in React/Next Hydration-Mismatches.
  return <div className="home-html-slot" dangerouslySetInnerHTML={{ __html: html }} />
}

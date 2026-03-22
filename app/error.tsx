'use client'

/**
 * Zeigt Fehler aus dem App-Router (z. B. Absturz in Client-Komponenten).
 * Hilft beim Debuggen, statt einer leeren weißen Seite.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto max-w-lg px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Fehler</p>
      <h1 className="mt-2 text-xl font-bold text-zinc-900">Die Seite konnte nicht vollständig geladen werden</h1>
      <p className="mt-3 break-words text-sm text-zinc-600">{error.message}</p>
      {error.digest ? (
        <p className="mt-2 font-mono text-xs text-zinc-400">Ref: {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
      >
        Erneut versuchen
      </button>
    </div>
  )
}

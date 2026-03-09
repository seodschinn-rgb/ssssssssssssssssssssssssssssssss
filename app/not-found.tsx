import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-zinc-900">404</h1>
      <p className="mt-2 text-zinc-600">Seite nicht gefunden</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        Zur Startseite
      </Link>
    </div>
  )
}

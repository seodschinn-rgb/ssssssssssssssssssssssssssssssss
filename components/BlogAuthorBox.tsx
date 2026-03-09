/**
 * Autorenbox für Blog-Artikel: Autor + Lesezeit
 */
interface BlogAuthorBoxProps {
  authorName: string
  readingMinutes: number
}

function formatReadingTime(minutes: number): string {
  if (minutes === 1) return '1 Min. Lesezeit'
  return `${minutes} Min. Lesezeit`
}

export default function BlogAuthorBox({ authorName, readingMinutes }: BlogAuthorBoxProps) {
  return (
    <div className="mt-10 pt-8 pb-2 mb-10 border-t border-zinc-200 flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg shrink-0"
          aria-hidden
        >
          {authorName
            .split(/\s+/)
            .map((n) => n[0])
            .join('')
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Autor</p>
          <p className="font-semibold text-zinc-900">{authorName}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-zinc-500 text-sm">
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{formatReadingTime(readingMinutes)}</span>
      </div>
    </div>
  )
}

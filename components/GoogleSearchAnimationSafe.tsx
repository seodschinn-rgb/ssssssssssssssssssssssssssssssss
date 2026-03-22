'use client'

import { Component, type ReactNode } from 'react'
import GoogleSearchAnimation from './GoogleSearchAnimation'

/** Einfache statische Karte, falls die Animation einen Laufzeitfehler wirft */
function StaticSearchFallback() {
  return (
    <div
      className="mx-auto flex h-[480px] w-full max-w-2xl flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 text-center shadow-xl sm:h-[520px] md:h-[520px] lg:h-[560px]"
      role="img"
      aria-label="Vorschau: Google-Suche SEO Agentur München"
    >
      <p className="text-sm font-semibold text-zinc-800">Google-Suchvorschau</p>
      <p className="mt-2 text-xs text-zinc-500">
        Suchbegriff: <strong className="text-zinc-900">SEO Agentur München</strong>
      </p>
      <p className="mt-6 text-sm font-semibold text-indigo-600">So bringen wir dich auf Platz 1.</p>
      <p className="mt-3 max-w-xs text-[11px] leading-snug text-zinc-400">
        (Live-Animation konnte nicht geladen werden — Inhalt der Seite funktioniert trotzdem.)
      </p>
    </div>
  )
}

type BState = { hasError: boolean }

class SearchPreviewErrorBoundary extends Component<{ children: ReactNode }, BState> {
  state: BState = { hasError: false }

  static getDerivedStateFromError(): BState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <StaticSearchFallback />
    }
    return this.props.children
  }
}

export default function GoogleSearchAnimationSafe() {
  return (
    <SearchPreviewErrorBoundary>
      <GoogleSearchAnimation />
    </SearchPreviewErrorBoundary>
  )
}

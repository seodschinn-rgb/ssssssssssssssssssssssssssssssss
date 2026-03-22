import type { ReactNode } from 'react'

/**
 * Einheitliches „Eyebrow“-Label für Startseiten-Sektionen
 */
export default function HomeSectionLabel({
  children,
  variant = 'light',
}: {
  children: ReactNode
  variant?: 'light' | 'dark'
}) {
  if (variant === 'dark') {
    return (
      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-200/95 backdrop-blur-sm">
        {children}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded-full border border-indigo-200/60 bg-gradient-to-r from-indigo-50/90 to-blue-50/80 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-700 shadow-sm shadow-indigo-500/5">
      {children}
    </span>
  )
}

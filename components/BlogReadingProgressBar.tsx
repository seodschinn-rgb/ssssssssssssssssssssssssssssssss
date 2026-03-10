'use client'

import { useEffect, useState } from 'react'

const ARTICLE_SELECTOR = '[data-blog-article]'

/**
 * Balken oben in Logo-Blau, der beim Scrollen durch den Artikel von links nach rechts voll wird.
 */
export default function BlogReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const article = document.querySelector(ARTICLE_SELECTOR)
    if (!article) return

    const updateProgress = () => {
      const rect = article.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY
      const articleTop = rect.top + scrollY
      const articleHeight = rect.height
      const articleBottom = articleTop + articleHeight

      // 0 = Artikel-Oberkante trifft Viewport-Oberkante, 1 = Artikel-Ende wurde erreicht
      const start = articleTop
      const end = articleBottom - viewportHeight
      if (end <= start) {
        setProgress(scrollY >= articleTop ? 1 : 0)
        return
      }
      const value = (scrollY - start) / (end - start)
      setProgress(Math.min(1, Math.max(0, value)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <>
      {progress > 0 && (
        <div
          className="fixed left-0 right-0 top-[4.5rem] h-1 bg-accent/20 z-[60]"
          aria-hidden
          role="presentation"
        >
          <div
            className="h-full bg-accent transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </>
  )
}

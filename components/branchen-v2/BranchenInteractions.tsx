'use client'

import { useEffect } from 'react'

/** Scroll-Reveals für Branchen-Hub v2 */
export default function BranchenInteractions() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.querySelector('.branchen-v2')
    if (!root) return
    root.classList.add('js')

    const rvs = root.querySelectorAll('.rv')
    let io: IntersectionObserver | undefined

    if (reduce || !('IntersectionObserver' in window)) {
      rvs.forEach((el) => el.classList.add('in'))
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              io?.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      )
      rvs.forEach((el) => io!.observe(el))
    }

    return () => io?.disconnect()
  }, [])

  return null
}

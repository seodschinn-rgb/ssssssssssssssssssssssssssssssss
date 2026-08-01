'use client'

import { useEffect } from 'react'

/**
 * Homepage-only Interactions: Reveals, Stationen, SERP-Loop.
 * Nav/Burger lebt in components/Header.tsx (siteweit).
 */
export default function HomeInteractions() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.querySelector('.home-v2')
    if (!root) return
    root.classList.add('js')

    const rvs = root.querySelectorAll('.rv')
    const stations = root.querySelectorAll('.station')
    let io: IntersectionObserver | undefined
    let ioSt: IntersectionObserver | undefined

    if (reduce || !('IntersectionObserver' in window)) {
      rvs.forEach((el) => el.classList.add('in'))
      stations.forEach((el) => el.classList.add('active'))
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

      ioSt = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              ioSt?.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -30% 0px', threshold: 0.2 },
      )
      stations.forEach((el) => ioSt!.observe(el))
    }

    const serp = root.querySelector('#serp') as HTMLElement | null
    let timer: ReturnType<typeof setInterval> | null = null
    let timeouts: ReturnType<typeof setTimeout>[] = []
    let cancelled = false

    if (serp && !reduce) {
      const q = 'steuerberater münchen'
      const qEl = serp.querySelector('.serp-q')
      const rows = Array.from(serp.querySelectorAll('.serp-row')) as HTMLElement[]

      const setPos = (final: boolean) => {
        rows.forEach((row) => {
          row.style.setProperty('--p', final ? row.dataset.b || '0' : row.dataset.a || '0')
        })
      }

      const cycle = () => {
        if (cancelled || !qEl) return
        serp.dataset.state = 'typing'
        qEl.textContent = ''
        setPos(false)
        let i = 0
        timer = setInterval(() => {
          if (cancelled) {
            if (timer) clearInterval(timer)
            return
          }
          i += 1
          qEl.textContent = q.slice(0, i)
          if (i >= q.length) {
            if (timer) clearInterval(timer)
            timeouts.push(
              setTimeout(() => {
                if (!cancelled) serp.dataset.state = 'results'
              }, 550),
            )
            timeouts.push(
              setTimeout(() => {
                if (!cancelled) {
                  serp.dataset.state = 'ranked'
                  setPos(true)
                }
              }, 550 + 2400),
            )
            timeouts.push(setTimeout(cycle, 550 + 2400 + 4600))
          }
        }, 72)
      }

      timeouts.push(setTimeout(cycle, 900))
    }

    return () => {
      cancelled = true
      io?.disconnect()
      ioSt?.disconnect()
      if (timer) clearInterval(timer)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return null
}

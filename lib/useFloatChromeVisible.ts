'use client'

import { useSyncExternalStore } from 'react'

const FOOTER_ID = 'site-footer'
const TOP_SHOW_Y = 72
const DELTA = 8

let visible = true
let footerInView = false
let lastY = 0
let raf = 0
let attached = false
let footerObserver: IntersectionObserver | null = null
let footerWatcher: MutationObserver | null = null

const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function setVisible(next: boolean) {
  if (visible === next) return
  visible = next
  emit()
}

function computeVisible(scrollY: number) {
  if (footerInView) {
    setVisible(false)
    return
  }
  if (scrollY <= TOP_SHOW_Y) {
    setVisible(true)
    return
  }
  const delta = scrollY - lastY
  if (delta > DELTA) setVisible(false)
  else if (delta < -DELTA) setVisible(true)
}

function onScroll() {
  if (raf) return
  raf = window.requestAnimationFrame(() => {
    raf = 0
    const y = window.scrollY || document.documentElement.scrollTop || 0
    computeVisible(y)
    lastY = y
  })
}

function attachFooterObserver() {
  if (typeof IntersectionObserver === 'undefined') return
  const footer = document.getElementById(FOOTER_ID)
  if (!footer) return

  footerWatcher?.disconnect()
  footerWatcher = null
  footerObserver?.disconnect()
  footerObserver = new IntersectionObserver(
    (entries) => {
      footerInView = entries.some((entry) => entry.isIntersecting)
      const y = window.scrollY || document.documentElement.scrollTop || 0
      computeVisible(y)
      lastY = y
    },
    { threshold: 0 }
  )
  footerObserver.observe(footer)
}

function detach() {
  attached = false
  window.removeEventListener('scroll', onScroll)
  footerObserver?.disconnect()
  footerObserver = null
  footerWatcher?.disconnect()
  footerWatcher = null
  if (raf) {
    window.cancelAnimationFrame(raf)
    raf = 0
  }
  footerInView = false
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)

  if (!attached && typeof window !== 'undefined') {
    attached = true
    lastY = window.scrollY || document.documentElement.scrollTop || 0
    window.addEventListener('scroll', onScroll, { passive: true })
    attachFooterObserver()

    if (!document.getElementById(FOOTER_ID)) {
      footerWatcher = new MutationObserver(() => {
        if (document.getElementById(FOOTER_ID)) {
          attachFooterObserver()
        }
      })
      footerWatcher.observe(document.body, { childList: true, subtree: true })
    }
  }

  return () => {
    listeners.delete(onStoreChange)
    if (listeners.size === 0 && attached) detach()
  }
}

function getSnapshot() {
  return visible
}

function getServerSnapshot() {
  return true
}

/** true = Floating-Buttons sichtbar */
export function useFloatChromeVisible() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

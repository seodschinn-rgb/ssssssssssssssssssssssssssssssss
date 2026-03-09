'use client'

import { useEffect, useState } from 'react'
import BlogTableOfContents from './BlogTableOfContents'

const FOOTER_ID = 'site-footer'

/**
 * Desktop-only: Zeigt die TOC fixed (floating). Blendet sie aus, sobald der Footer in den Viewport kommt.
 */
export default function BlogTocDesktopWrapper() {
  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    const footer = document.getElementById(FOOTER_ID)
    if (!footer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setFooterInView(entry.isIntersecting)
        })
      },
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      className={`blog-toc-wrap blog-toc-wrap--fixed lg:pt-0 lg:pb-0 ${footerInView ? 'blog-toc-wrap--hidden' : ''}`}
      aria-hidden={footerInView}
    >
      <BlogTableOfContents />
    </aside>
  )
}

'use client'

import { useId, useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/** Startet Animation wenn Element sichtbar ist ODER nach Fallback-Zeit (für iOS/Safari) */
function useVisibleOnce(fallbackMs = 2500) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { rootMargin: '100px', threshold: 0 }
    )
    observer.observe(el)
    const t = setTimeout(() => setVisible(true), fallbackMs)
    return () => {
      observer.disconnect()
      clearTimeout(t)
    }
  }, [fallbackMs])
  return { ref, visible }
}

/** Dekorative Gradient-Blobs für moderne Hintergründe */
export function GradientBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-400/25 via-violet-400/15 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: 'easeOut' }}
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-10 right-1/3 w-72 h-72 rounded-full bg-gradient-to-tl from-amber-400/15 via-orange-300/10 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute top-2/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-violet-300/10 to-transparent blur-3xl"
      />
    </div>
  )
}

/** Abstract Grid-Pattern für Hintergründe */
export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.03] ${className}`}>
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0 0 0) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}

/** Glasmorphism-Card mit modernem Look */
export function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl shadow-zinc-200/50 ${className}`}
    >
      {children}
    </div>
  )
}

/** SEO Ranking-Chart: Area-Chart mit Animation – läuft auch auf iOS (Fallback-Timer) */
export function SeoRankingVisual() {
  const { ref, visible } = useVisibleOnce(2500)
  const id = useId().replace(/:/g, '-')
  const areaGradId = `areaGrad-${id}`
  const lineGradId = `lineGrad-${id}`

  const values = [35, 55, 72, 88, 78, 65, 100]
  const labels = ['Start', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6']
  const padding = { top: 50, right: 40, bottom: 50, left: 40 }
  const width = 400
  const height = 220
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom
  const maxVal = 100

  const points = values.map((v, i) => {
    const x = padding.left + (i / (values.length - 1)) * chartWidth
    const y = padding.top + chartHeight - (v / maxVal) * chartHeight
    return { x, y, v }
  })

  const baseY = padding.top + chartHeight
  const tension = 0.4

  const smoothCurve = (pts: typeof points) => {
    if (pts.length < 2) return ''
    let d = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 1; i < pts.length; i++) {
      const p0 = pts[Math.max(0, i - 2)]
      const p1 = pts[i - 1]
      const p2 = pts[i]
      const p3 = pts[Math.min(pts.length - 1, i + 1)]
      const cp1x = p1.x + (p2.x - p0.x) * tension
      const cp1y = p1.y + (p2.y - p0.y) * tension
      const cp2x = p2.x - (p3.x - p1.x) * tension
      const cp2y = p2.y - (p3.y - p1.y) * tension
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }
    return d
  }

  const curvePath = smoothCurve(points)
  const areaPath = `${curvePath} L ${points[points.length - 1].x} ${baseY} L ${points[0].x} ${baseY} Z`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[200px] sm:min-h-[220px]"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full max-w-lg mx-auto block"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        style={{ minHeight: '200px', maxWidth: '100%' }}
      >
        <defs>
          <linearGradient id={areaGradId} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id={lineGradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Area-Füllung mit Animation */}
        <motion.path
          d={areaPath}
          fill={`url(#${areaGradId})`}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Trend-Linie mit pathLength-Animation */}
        <motion.path
          d={curvePath}
          fill="none"
          stroke={`url(#${lineGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Datenpunkte mit Scale-Animation */}
        {points.map((p, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            animate={visible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
          >
            <circle cx={p.x} cy={p.y} r={i === 6 ? 6 : 4} fill="white" stroke={`url(#${lineGradId})`} strokeWidth={i === 6 ? 3 : 2} />
          </motion.g>
        ))}

        {/* Platz 1 Badge – ohne SVG-Filter (Safari), mit Animation */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <rect
            x={points[6].x - 36}
            y={points[6].y - 42}
            width={72}
            height={28}
            rx={14}
            fill="#4f46e5"
          />
          <text x={points[6].x} y={points[6].y - 24} textAnchor="middle" fill="white" style={{ fontSize: 12, fontFamily: 'system-ui', fontWeight: 700 }}>
            Platz 1
          </text>
        </motion.g>

        {/* Labels */}
        {labels.map((label, i) => (
          <text
            key={i}
            x={points[i].x}
            y={height - 12}
            textAnchor="middle"
            fill="#64748b"
            style={{ fontSize: 11, fontFamily: 'system-ui', fontWeight: 500 }}
          >
            {label}
          </text>
        ))}

        <text x={width / 2} y={height - 2} textAnchor="middle" fill="#94a3b8" style={{ fontSize: 10, fontFamily: 'system-ui' }}>
          Sichtbarkeit über 6 Monate
        </text>
      </svg>
    </motion.div>
  )
}

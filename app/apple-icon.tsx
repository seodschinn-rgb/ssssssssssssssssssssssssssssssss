import { ImageResponse } from 'next/server'

/**
 * Gleiche Lupe wie icon.svg – 1:1 aus viewBox 0 0 32 32 auf 180x180 skaliert.
 * SVG: Kreis cx=14 cy=14 r=8, Linie (20.5,20.5)→(30,30), stroke 3, Gradient #4f46e5→#6366f1.
 */
const S = 180 / 32 // Skalierung 32 → 180

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  // SVG-Maße skaliert: Kreis (14,14) r=8 stroke 3, Linie 20.5,20.5 → 30,30 stroke 3
  const cx = 14 * S
  const cy = 14 * S
  const r = 8 * S
  const stroke = 3 * S
  const lineStart = 20.5 * S
  const lineEnd = 30 * S
  const lineLength = Math.sqrt(2) * (lineEnd - lineStart)
  const rectRadius = 6 * S

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
          borderRadius: rectRadius,
        }}
      >
        <div style={{ display: 'flex', position: 'relative', width: 180, height: 180 }}>
          {/* Kreis wie in icon.svg: cx=14 cy=14 r=8, stroke 3 */}
          <div
            style={{
              position: 'absolute',
              left: cx - r,
              top: cy - r,
              width: r * 2,
              height: r * 2,
              border: `${stroke}px solid white`,
              borderRadius: '50%',
              boxSizing: 'border-box',
            }}
          />
          {/* Linie wie in icon.svg: (20.5,20.5) → (30,30), stroke 3 */}
          <div
            style={{
              position: 'absolute',
              left: lineStart,
              top: lineStart,
              width: stroke,
              height: lineLength,
              background: 'white',
              borderRadius: stroke / 2,
              transform: 'rotate(45deg)',
              transformOrigin: 'top left',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}

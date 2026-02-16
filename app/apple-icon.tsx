import { ImageResponse } from 'next/server'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: 24,
        }}
      >
        {/* Lupe: Kreis + Griff */}
        <div style={{ position: 'relative', width: 100, height: 100 }}>
          <div
            style={{
              position: 'absolute',
              left: 10,
              top: 10,
              width: 56,
              height: 56,
              border: '4px solid white',
              borderRadius: '50%',
              boxSizing: 'border-box',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 48,
              top: 48,
              width: 4,
              height: 32,
              background: 'white',
              borderRadius: 2,
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

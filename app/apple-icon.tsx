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
        {/* Lupe: Kreis + kräftiger Griff wie im Logo */}
        <div style={{ display: 'flex', position: 'relative', width: 120, height: 120 }}>
          {/* Glas (Kreis) */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 72,
              height: 72,
              border: '5px solid white',
              borderRadius: '50%',
              boxSizing: 'border-box',
            }}
          />
          {/* Griff – dick und lang, setzt am Kreisrand an */}
          <div
            style={{
              position: 'absolute',
              left: 50,
              top: 50,
              width: 8,
              height: 55,
              background: 'white',
              borderRadius: 4,
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

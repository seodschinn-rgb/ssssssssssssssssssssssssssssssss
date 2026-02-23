import { ImageResponse } from 'next/server'

/**
 * 48×48 PNG-Favicon für Browser und Google Search Console (Google nutzt mind. 48×48).
 */
export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          style={{ display: 'block' }}
        >
          <circle
            cx="14"
            cy="14"
            r="8"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 20.5 L30 30"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}

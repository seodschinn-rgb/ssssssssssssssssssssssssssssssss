/**
 * Hero-Bild für Blog-Artikel: festes Seitenverhältnis + intrinsische Maße,
 * damit kein Layout-Shift (CLS) beim Nachladen entsteht.
 */
export default function BlogPostThumbnail({
  src,
  alt,
  className = '',
  width = 1200,
  height = 750,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-transparent ${className}`.trim()}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-contain object-center"
      />
    </div>
  )
}

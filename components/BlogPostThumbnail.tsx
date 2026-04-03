/**
 * Hero-Bild für Blog-Artikel: festes Seitenverhältnis + intrinsische Maße,
 * damit kein Layout-Shift (CLS) beim Nachladen entsteht.
 */
export default function BlogPostThumbnail({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-zinc-100 aspect-[16/10] ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1200}
        height={750}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  )
}

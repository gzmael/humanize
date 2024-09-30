'use client'

import Image from 'next/image'

import { ZoomImage } from '@/components/ui/zoom-image'
interface GalleryProps {
  galery: {
    blur: string
    src: string
    large: string
    alt: string
  }[]
}
export const Gallery = ({ galery }: GalleryProps) => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {galery.map((item) => (
        <ZoomImage key={item.src} zoomImg={{ src: item.large, alt: item.alt }}>
          <Image
            src={item.large}
            alt={item.alt}
            width={340}
            height={340}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={item.blur}
            className="rounded-lg object-cover aspect-square"
            loading="lazy"
            quality={90}
          />
        </ZoomImage>
      ))}
    </div>
  )
}

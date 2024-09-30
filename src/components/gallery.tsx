'use client'

import Image from 'next/image'

import { ZoomImage } from '@/components/ui/zoom-image'
import { StructureGaleryItem } from '@/config/site'
interface GalleryProps {
  galery: (StructureGaleryItem & { blur: string })[]
}
export const Gallery = ({ galery }: GalleryProps) => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {galery.map((item) => (
        <ZoomImage key={item.src}>
          <Image
            src={item.large}
            alt={item.alt}
            width={item.sizes.lg.width}
            height={item.sizes.lg.height}
            placeholder="blur"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw"
            blurDataURL={item.blur}
            className="rounded-lg object-cover aspect-square"
            loading="lazy"
            quality={100}
          />
        </ZoomImage>
      ))}
    </div>
  )
}

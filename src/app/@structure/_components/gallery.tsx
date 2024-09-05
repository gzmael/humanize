'use client'

import Image from 'next/image'

import { ZoomImage } from '@/components/ui/zoom-image'
import { structureGalery } from '@/config/site'

export const Gallery = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {structureGalery.map((item) => (
        <ZoomImage key={item.src}>
          <Image
            src={item.src}
            alt={item.alt}
            width={1024}
            height={1600}
            objectFit="cover"
            className="rounded-lg object-cover aspect-square"
          />
        </ZoomImage>
      ))}
    </div>
  )
}

'use client'
import { useState } from 'react'
import React from 'react'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { partners } from '@/config/site'
import { useDotButton } from '@/hooks/useDotButton'
import { cn } from '@/lib/utils'

import { Headline } from '../headline'

export function PartnersSlide() {
  const [api, setApi] = useState<CarouselApi>()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

  return (
    <>
      <Headline variant="heading" size="md" as="h2" weight="black">
        Parceiros
      </Headline>
      <Carousel
        opts={{
          align: 'center',
        }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="w-full max-w-md"
        setApi={setApi}
      >
        <CarouselContent>
          {partners.map((partner) => (
            <CarouselItem key={partner.name} className="md:basis-1/2">
              <div className="w-full p-1 rounded-lg h-32 lg:w-auto grid place-items-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={partner.className}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Ir para página ${index + 1}`}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              'size-4 md:size-3 rounded-full border-2 border-humanize-500 transition-colors duration-300',
              index === selectedIndex ? 'bg-humanize-500' : 'bg-transparent',
            )}
          >
            <span className="sr-only">{index + 1}</span>
          </button>
        ))}
      </div>
    </>
  )
}

'use client'
import { useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
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
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="w-fullp-1 rounded-lg h-32 lg:w-32">
              <Image
                src="/parceiros/afagu.svg"
                alt="Logo 1"
                width={100}
                height={100}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center gap-2 ">
        {scrollSnaps.map((_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Ir para página ${index + 1}`}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              'size-3 rounded-full border-2 border-humanize-500 transition-colors duration-300',
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

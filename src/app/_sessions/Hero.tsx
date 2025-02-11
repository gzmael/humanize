'use client'

import { useState } from 'react'

import Image from 'next/image'

import { Headline } from '@/components/headline'
import { Text } from '@/components/text'
import { humanizeData } from '@/config/site'

interface HeroProps {
  doctorBlur: string
}

export const Hero = ({ doctorBlur }: HeroProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY } = e.nativeEvent
    const sizeObject = 208
    setPosition({ x: offsetX - sizeObject / 2, y: offsetY - sizeObject / 2 })
  }

  return (
    <div
      className={`min-h-screen md:h-[400px] md:min-h-[400px] flex-col justify-end items-center flex relative overflow-hidden bg-gradient-to-tl from-[#005068] to-[#1D656A]`}
    >
      <div className="absolute mix-blend-hard-light size-full bg-cover bg-center bg-no-repeat opacity-15 bg-hero-bg saturate-50" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 210"
        fill="none"
        className="absolute -bottom-1 right-0 scale-125 z-20 size-64"
        style={{
          fill: 'hsl(var(--humanize-500))',
          filter: 'blur(2.7px)',
        }}
      >
        <g filter="url(#filter0_f_65_1629)">
          <path
            d="M6 216C188.909 201.212 247.105 154.822 274 6V216H6Z"
            fill="hsl(var(--humanize-500))"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_65_1629"
            x="0.6"
            y="0.6"
            width="278.8"
            height="220.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2.7"
              result="effect1_foregroundBlur_65_1629"
            />
          </filter>
        </defs>
      </svg>
      <div className="container flex flex-col md:flex-row items-end gap-4 z-10 px-4 lg:gap-6 relative lg:px-0">
        <div className="flex-col justify-start items-end gap-2 flex w-full md:w-2/5 lg:w-[450px] mt-16 md:mt-0 md:mb-16 lg:mb-0">
          <Headline
            as="h1"
            size="md"
            variant="white"
            weight="semibold"
            className="w-full text-left"
          >
            Cuidando com carinho e humanidade em Brejo Santo
          </Headline>
          <Text scale="md" weight="regular" className="leading-snug">
            Oferecemos uma ampla gama de especialidades médicas, uma instalação
            moderna e equipada, exames laboratoriais precisos e uma equipe de
            profissionais altamente preparados.
          </Text>
          <div className="hidden lg:flex justify-around items-center h-24 w-full rounded-xl rounded-b-none border border-b-0 border-humanize-500 shadow-inner bg-humanize-500/20 shadow-humanize-100/30 mt-8 overflow-hidden select-none relative z-10">
            {humanizeData.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-center items-center pointer-events-none"
              >
                <Headline as="span" size="xs" variant="white" weight="semibold">
                  {item.title}
                </Headline>
                <Text scale="sm" weight="regular" className="leading-snug">
                  {item.description}
                </Text>
              </div>
            ))}
            <span
              className="size-52 top-0 left-0 bg-bright bg-center bg-no-repeat absolute mix-blend-darken z-0"
              style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
              }}
            />
            <span
              className="size-full absolute top-0 left-0 cursor-pointer z-20"
              onMouseMove={handleMouseMove}
            />
          </div>
        </div>
        <div className="relative w-full md:w-3/5 lg:w-[600px]">
          {/* <Image
            src="/H.svg"
            alt="Footer"
            className="absolute h-full right-0 object-scale-down object-bottom opacity-50 translate-y-6"
            fill
          /> */}
          <div className="relative w-full h-[300px]">
            <Image
              src="/hero-team2.webp"
              alt="Footer"
              blurDataURL={doctorBlur}
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain object-bottom drop-shadow-2xl"
              quality={100}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

import { Headline } from '@/components/headline'
import { Text } from '@/components/text'

export const Hero = () => {
  return (
    <div
      className={`min-h-screen md:h-[550px] md:min-h-[550px] flex-col justify-end items-center flex relative overflow-hidden bg-gradient-to-tl from-[#005068] to-[#1D656A]`}
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
      <div className="container flex flex-col md:flex-row items-end lg:items-end gap-4 z-10 px-4 lg:gap-8">
        <div className="py-20 flex-col justify-start items-start gap-2 flex w-full">
          <Headline as="h1" size="lg" variant="white" weight="semibold">
            Cuidando com carinho e humanidade
          </Headline>
          <Text scale="lg" weight="regular" className="leading-snug">
            Oferecemos uma ampla gama de especialidades médicas, uma instalação
            moderna e equipada, exames laboratoriais precisos e uma equipe de
            profissionais altamente preparados.
          </Text>
        </div>
        <div className="relative w-full">
          <Image
            src="/H.svg"
            alt="Footer"
            className="absolute h-full right-0 object-scale-down object-bottom opacity-50 translate-y-6"
            fill
          />
          <div className="relative w-full h-[430px]">
            <Image
              src="/doctor-hero.png"
              alt="Footer"
              className="object-contain object-bottom"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

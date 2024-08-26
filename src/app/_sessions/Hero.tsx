import Image from 'next/image'

import { Headline } from '@/components/headline'
import { Text } from '@/components/text'

export const Hero = () => {
  return (
    <div
      className={`min-h-screen lg:h-[500px] lg:min-h-[500px] flex-col justify-center items-start inline-flex relative overflow-hidden bg-gradient-to-tl from-[#005068] to-[#1D656A]`}
    >
      <div className="absolute mix-blend-hard-light size-full bg-cover bg-center bg-no-repeat opacity-15 bg-hero-bg saturate-50" />
      <div className="container flex flex-col lg:flex-row items-center z-10 px-4 lg:px-0 ">
        <div className="py-20 flex-col justify-start items-start gap-2 flex w-full lg:w-[500px]">
          <Headline as="h1" size="lg" variant="white" weight="semibold">
            Cuidando com carinho e humanidade
          </Headline>
          <Text scale="lg" weight="regular" className="leading-snug">
            Oferecemos uma ampla gama de especialidades médicas, uma instalação
            moderna e equipada, exames laboratoriais precisos e uma equipe de
            profissionais altamente preparados.
          </Text>
        </div>
        <div className="relative w-full ">
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
              className="object-contain object-bottom scale-105"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

import { Headline } from '@/components/headline'
import { Text } from '@/components/text'
import { socialLinks } from '@/config/site'

const CallToAction = ({ blur }: { blur: string }) => {
  return (
    <div className="py-16 px-2 ">
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        className="flex container items-start rounded-2xl overflow-hidden relative h-[340px] sm:h-[220px] md:h-[200px] hover:brightness-105 select-none"
        style={{
          background: 'linear-gradient(140deg, #123E3F 35.68%, #102222 88.88%)',
        }}
      >
        <Image
          src="/bg-calltoaction.png"
          alt="Call to action"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover z-0"
        />
        <Image
          src="/H.svg"
          alt="Footer"
          className="w-full h-auto sm:h-full sm:object-contain object-cover object-top opacity-90 z-10 mix-blend-soft-light sm:object-right-bottom"
          fill
        />
        <div className="flex flex-col items-stretch w-full sm:flex-row md:items-center md:justify-between">
          <div className="w-full flex flex-col items-center justify-center gap-2 z-20 relative mt-8 sm:mt-0 px-2 md:px-4 md:w-[400px]">
            <Headline
              as="h2"
              variant="white"
              size="lg"
              weight="bold"
              className="font-sans uppercase sm:text-2xl md:text-3xl"
            >
              Não deixe sua saúde para depois
            </Headline>
            <Text>
              Agende sua consulta com um de nossos profissionais hoje mesmo!
            </Text>
          </div>
          <div className="block relative w-full h-[180px] sm:h-[220px] md:h-[200px] z-20 md:w-[450px] lg:w-[600px]">
            <Image
              src="/call-to-action-team2.webp"
              alt="Call to action"
              sizes="100vw"
              fill
              blurDataURL={blur}
              placeholder="blur"
              className="object-cover sm:object-contain md:object-cover object-top pt-1 drop-shadow-2xl"
              quality={100}
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export { CallToAction }

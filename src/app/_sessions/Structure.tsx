import Image from 'next/image'

import { getBlurImageAction } from '@/actions/image-placeholder'
import { Gallery } from '@/components/gallery'
import { Headline } from '@/components/headline'
import { SectionWrapper } from '@/components/section-wrapper'
import { structureGalery } from '@/config/site'

interface StructureSessionProps {
  blur: string
}

export const StructureSession = async ({ blur }: StructureSessionProps) => {
  const galery = await Promise.all(
    structureGalery.map(async (item) => ({
      id: item.id,
      blur: await getBlurImageAction({ src: item.src }),
      src: item.src,
      large: item.large,
      alt: item.alt,
      sizes: item.sizes,
    })),
  )

  return (
    <SectionWrapper
      className="relative justify-start"
      id="estrutura"
      style={{
        background: 'linear-gradient(299deg, #02384D 9.4%, #017470 129.53%)',
      }}
    >
      <Image
        src="/galery/background.jpg"
        alt="Background"
        fill
        placeholder="blur"
        loading="lazy"
        blurDataURL={blur}
        className="opacity-50 object-cover z-0 mix-blend-soft-light grayscale"
      />
      <div className="container px-2 xl:px-0 py-10 md:py-20 flex flex-col gap-8 z-10">
        <header className="flex flex-col items-center justify-center gap-2">
          <Headline as="h2" variant="title" size="lg" weight="bold">
            conheça mais
          </Headline>
          <Headline as="h3" variant="white" size="lg" weight="black">
            Nossas Estrutura
          </Headline>
        </header>
        <Gallery galery={galery} />
      </div>
    </SectionWrapper>
  )
}

import Image from 'next/image'

import { ContactForm } from '@/components/ContactForm'
import { ContactMap } from '@/components/ContactMap'
import { Headline } from '@/components/headline'
import { SectionWrapper } from '@/components/section-wrapper'

interface ContactSectionProps {
  blur: string
}

export const ContactSection = ({ blur }: ContactSectionProps) => {
  return (
    <SectionWrapper
      id="contato"
      className="relative items-start justify-start"
      style={{
        background: 'linear-gradient(299deg, #02384D 9.4%, #017470 129.53%)',
      }}
    >
      <Image
        src="/galery/background.jpg"
        alt="Background"
        fill
        placeholder="blur"
        blurDataURL={blur}
        className="opacity-50 object-cover z-0 mix-blend-soft-light grayscale"
      />
      <div className="container px-2 xl:px-0 pt-20 pb-10 md:py-20 flex flex-col gap-8 z-10">
        <header className="flex flex-col justify-center gap-2">
          <Headline as="h2" variant="title" size="lg" weight="bold">
            precisa de ajuda?
          </Headline>
          <Headline as="h3" variant="white" size="lg" weight="black">
            Entre em contato
          </Headline>
        </header>
        <div className="flex flex-col md:flex-row-reverse gap-6">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </SectionWrapper>
  )
}

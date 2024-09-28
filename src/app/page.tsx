import { getBlurImageAction } from '@/actions/image-placeholder'

import {
  AboutSession,
  CallToAction,
  ContactSection,
  FAQSession,
  Hero,
  PartnersSession,
  ProfessionalsSession,
  SpecialitiesSession,
  StructureSession,
} from './_sessions'
import { getMetadata, getViewport } from '../config/seo'

export const metadata = getMetadata({
  title: 'Humanize Clínica Médica',
  description:
    'Conheça a Humanize Clínica Médica, sua clínica de exames e especialidades médica.',
  images: [
    {
      url: '/og-image.webp',
      width: 1200,
      height: 630,
    },
  ],
})

export const viewport = getViewport()

export default async function Home() {
  const blur = await getBlurImageAction({ src: '/galery/background.jpg' })

  return (
    <>
      <Hero />
      <PartnersSession />
      <AboutSession />
      <SpecialitiesSession />
      <StructureSession blur={blur} />
      <CallToAction />
      <ProfessionalsSession />
      <FAQSession />
      <ContactSection blur={blur} />
    </>
  )
}

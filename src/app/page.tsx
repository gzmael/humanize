import React from 'react'

import dynamic from 'next/dynamic'

import { getBlurImageAction } from '@/actions/image-placeholder'
import { ContactSectionLoading } from '@/components/loadings/ContactSectionLoading'
import { jsonLd } from '@/config/site'

import {
  AboutSession,
  CallToAction,
  // ContactSection,
  FAQSession,
  Hero,
  PartnersSession,
  ProfessionalsSession,
  /* SpecialitiesSession, */
  StructureSession,
} from './_sessions'
import { getMetadata, getViewport } from '../config/seo'

export const metadata = getMetadata({
  title: 'Humanize Centro Médico | Especialidades Médicas e Exames',
  description:
    'Humanize Centro Médico em Brejo Santo: Especialidades Médicas e Exames Laboratoriais. Cuidados de alta qualidade. Agende pelo WhatsApp e siga no Instagram.',
})

export const viewport = getViewport()

const ContactSection = dynamic(
  () => import('./_sessions/Contact').then((mod) => mod.ContactSection),
  {
    ssr: false,
    loading: () => <ContactSectionLoading />,
  },
)

export default async function Home() {
  const blur = await getBlurImageAction({ src: '/galery/background.jpg' })
  const doctorBlur = await getBlurImageAction({
    src: '/hero-team2.webp',
  })

  const callToActionBlur = await getBlurImageAction({
    src: '/call-to-action-team2.webp',
  })

  const aboutBlur = await getBlurImageAction({
    src: '/about-team.webp',
  })

  return (
    <>
      <Hero doctorBlur={doctorBlur} />
      <PartnersSession />
      <AboutSession blur={aboutBlur} />
      {/* <SpecialitiesSession /> */}
      <StructureSession blur={blur} />
      <CallToAction blur={callToActionBlur} />
      <ProfessionalsSession />
      <FAQSession />
      <ContactSection blur={blur} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

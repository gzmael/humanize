import React from 'react'

import dynamic from 'next/dynamic'

import {
  getBlurImageAction,
  getRemoteBlurImageAction,
} from '@/actions/image-placeholder'
import { ContactSectionLoading } from '@/components/loadings/ContactSectionLoading'

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
  title: 'Humanize Clínica Médica',
  description:
    'Conheça a Humanize Clínica Médica, sua clínica de exames e especialidades médica.',
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
    src: '/hero-team.webp',
  })

  const callToActionBlur = await getBlurImageAction({
    src: '/call-to-action-team.webp',
  })

  const aboutBlur = await getRemoteBlurImageAction({
    src: 'https://s6.imgcdn.dev/FKcIV.webp',
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
    </>
  )
}

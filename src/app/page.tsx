import React from 'react'

import {
  getBlurImageAction,
  getRemoteBlurImageAction,
} from '@/actions/image-placeholder'

import {
  AboutSession,
  CallToAction,
  ContactSection,
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

export default async function Home() {
  const blur = await getBlurImageAction({ src: '/galery/background.jpg' })
  const doctorBlur = await getRemoteBlurImageAction({
    src: 'https://s6.imgcdn.dev/FKuBK.webp',
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
      <CallToAction />
      <ProfessionalsSession />
      <FAQSession />
      <ContactSection blur={blur} />
    </>
  )
}

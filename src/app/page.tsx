import { getBlurImageAction } from '@/actions/image-placeholder'

import {
  AboutSession,
  CallToAction,
  Hero,
  PartnersSession,
  ProfessionalsSession,
  SpecialitiesSession,
  StructureSession,
} from './_sessions'
import { getMetadata } from '../config/seo'

export const metadata = getMetadata({
  title: 'Humanize Clínica Médica',
  description:
    'Conheça a Humanize Clínica Médica, sua clínica de exames e especialidades médica.',
})

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
    </>
  )
}

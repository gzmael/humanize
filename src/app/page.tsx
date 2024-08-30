import { AboutSession } from './_sessions/About'
import { ContactSession } from './_sessions/Contact'
import { Hero } from './_sessions/Hero'
import { PartnersSession } from './_sessions/Partners'
import { ProfessionalsSession } from './_sessions/Professionals'
import { SpecialitiesSession } from './_sessions/Specialities'
import { StructureSession } from './_sessions/Structure'
import { getMetadata } from '../config/seo'

export const metadata = getMetadata({
  title: 'Humanize Clínica Médica',
  description:
    'Conheça a Humanize Clínica Médica, sua clínica de exames e especialidades médica.',
})

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSession />
      <AboutSession />
      <SpecialitiesSession />
      <StructureSession />
      <ProfessionalsSession />
      <ContactSession />
    </>
  )
}

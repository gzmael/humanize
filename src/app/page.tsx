import { AboutSession } from './_sessions/About'
import { Hero } from './_sessions/Hero'
import { PartnersSession } from './_sessions/Partners'
import { SpecialitiesSession } from './_sessions/Specialities'
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
    </>
  )
}

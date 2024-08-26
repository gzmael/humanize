import { Hero } from './_sessions/Hero'
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
      <section id="about">SOBRE</section>
      <section id="partners">PARCEIROS</section>
      <section id="specialties">ESPECIALIDADES</section>
      <section id="professionals">PROFISSIONAIS</section>
      <section id="contact">CONTATO</section>
    </>
  )
}

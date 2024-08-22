import { getMetadata } from './config/seo'

export const metadata = getMetadata({
  title: 'Humanize Clínica Médica',
  description:
    'Conheça a Humanize Clínica Médica, sua clínica de exames e especialidades médica.',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header>HEADER</header>
      <section id="home">HERO</section>
      <section id="about">SOBRE</section>
      <section id="partners">PARCEIROS</section>
      <section id="specialties">ESPECIALIDADES</section>
      <section id="professionals">PROFISSIONAIS</section>
      <section id="contact">CONTATO</section>
      <footer>FOOTER</footer>
    </main>
  )
}

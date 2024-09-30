import { getMetadata, getViewport } from '@/config/seo'

export const metadata = getMetadata({
  title: 'Politica de privacidade',
  description: 'Conheça a politica de privacidade da Humanize Clínica Médica.',
})

export const viewport = getViewport()

export default function PoliticaDePrivacidade() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-center px-2 py-10 md:py-0 overflow-hidden">
      POLITICA DE PRIVACIDADE
    </section>
  )
}

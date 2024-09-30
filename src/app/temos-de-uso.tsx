import { getMetadata, getViewport } from '@/config/seo'

export const metadata = getMetadata({
  title: 'Temos de uso',
  description: 'Conheça os temos de uso da Humanize Clínica Médica.',
})

export const viewport = getViewport()

export default function TemosDeUso() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-center px-2 py-10 md:py-0 overflow-hidden">
      TEMOS
    </section>
  )
}

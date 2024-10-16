import Link from 'next/link'

import { Icons } from '@/components/icons'
import { socialLinks } from '@/config/site'

import { Headline } from '../headline'
import { LogoToTop } from '../LogoToTop'
import { Text } from '../text'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const socialIcons = {
    instagram: Icons.instagram,
    whatsapp: Icons.whatsapp,
    facebook: Icons.facebook,
  }

  return (
    <footer className="bg-humanize-500 w-full h-auto flex flex-col items-center">
      <div className="flex flex-col items-center px-2 py-8 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <LogoToTop variant="footer" className="mx-auto" />
          <div className="flex flex-col items-center px-4">
            <Link
              className="text-humanize-950 font-sans font-semibold text-lg text-center"
              href="/politica-de-privacidade"
            >
              Política de Privacidade
            </Link>
            <Link
              className="text-humanize-950 font-sans font-semibold text-lg text-center"
              href="/termos-de-uso"
            >
              Termos de uso
            </Link>
          </div>
          <div className="flex flex-col items-center w-full gap-2">
            <Headline className="font-sans font-bold text-humanize-950">
              SIGA-NOS
            </Headline>
            <div className="flex flex-row justify-center items-center gap-2">
              {Object.entries(socialLinks).map(([key, value]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons]
                return (
                  <Link key={key} href={value} prefetch={false} target="_blank">
                    <Icon className="size-8 text-white" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <Text className="text-center text-humanize-950" scale="sm" as="span">
          &copy; {currentYear} Humanize Centro Médico.{' '}
          <br className="block md:hidden" /> Todos os direitos reservados.
        </Text>
      </div>
      <div className="w-full bg-background py-4">
        <Text className="text-humanize-200 text-center" scale="sm">
          Criado com muito ❤️ por{' '}
          <Link
            href="https://baita.dev.br"
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="text-sky-500 font-semibold"
          >
            Baita Soluções Digitais
          </Link>
          .
        </Text>
      </div>
    </footer>
  )
}

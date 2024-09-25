import Link from 'next/link'

import { Icons } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="bg-[#00C7C0] w-full max-w-[430px] h-auto py-8 px-4 flex flex-col items-center gap-8">
      <Icons.logoDark className="w-4/5 max-w-[322px] h-auto" />
      <div className="flex flex-col items-center">
        <Link
          className="text-humanize-800 font-sans font-semibold text-lg text-center"
          href="/dashboard"
        >
          Política de Privacidade
        </Link>
        <Link
          className="text-humanize-800 font-sans font-semibold text-lg text-center"
          href="/dashboard"
        >
          Termos de uso
        </Link>
      </div>
      <div className="flex flex-col items-center w-full max-w-[414px] gap-2">
        <div className="font-sans font-bold text-2xl text-humanize-800 text-center">
          SIGA-NOS
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Link href="https://instagram.com/seu_perfil">
            <Icons.instagram className="size-8" />
          </Link>
          <Link href="https://whatsapp.com/seu_perfil">
            <Icons.whatsapp className="size-8" />
          </Link>
          <Link href="https://facebook.com/seu_perfil">
            <Icons.facebook className="size-8" />
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[413px] text-center font-sans font-normal text-humanize-800 text-sm/[14px]">
        © 2024 Humanize Clínica Médica. Todos os direitos reservados.
      </div>
      <div className="w-full max-w-[414px] bg-[#262626] py-4">
        <div className="text-[#31D1EE] text-center text-sm/[14px] font-normal font-sans">
          Feito com muito amor por Baita Soluções Digitais.
        </div>
      </div>
    </footer>
  )
}

import { GoogleMapsEmbed } from '@next/third-parties/google'
import Link from 'next/link'

import { Icons } from './icons'

export const ContactMap = () => {
  const list = [
    {
      icon: Icons.phone,
      title: 'Telefone',
      description: '(88) 99286-9798',
      href: 'tel:+5588992869798',
    },
    {
      icon: Icons.whatsapp,
      title: 'WhatsApp',
      description: 'Enviar mensagem',
      href: 'https://wa.me/5588992869798',
    },
    {
      icon: Icons.calendar,
      title: 'Atendimento',
      description: 'Seg à Sex: das 07hs às 18hs',
    },
    {
      icon: Icons.pin,
      title: 'Localização',
      description: 'Abrir no Google Maps',
      href: 'https://maps.app.goo.gl/EEhSrRWWUWHnPADD7',
    },
  ]
  return (
    <aside className="w-full md:w-3/5 flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        {list.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="bg-humanize-700/90 flex items-center gap-1 px-1 py-2 rounded-lg"
            >
              <Icon className="size-6 text-white" />
              <div className="flex flex-col">
                <span className="text-white font-semibold">{item.title}</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm"
                  >
                    {item.description}
                  </Link>
                ) : (
                  <span className="text-white text-xs">{item.description}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="overflow-hidden rounded-lg">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS ?? ''}
          height={420}
          zoom="17"
          maptype="satellite"
          mode="place"
          allowfullscreen={false}
          loading="lazy"
          style="width:100% !important"
          q="Humanize Centro Médico de Brejo Santo"
        />
      </div>
    </aside>
  )
}

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
        <iframe
          title="Humanize Centro Médico de Brejo Santo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7777924930897!2d-38.9882657249744!3d-7.489769892522372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a13f7f6f653619%3A0xb99967ec28ba03f2!2sHumanize%20Centro%20M%C3%A9dico%20de%20Brejo%20Santo!5e0!3m2!1spt-BR!2sbr!4v1727706895723!5m2!1spt-BR!2sbr"
          height="420"
          style={{ border: 0, width: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </aside>
  )
}

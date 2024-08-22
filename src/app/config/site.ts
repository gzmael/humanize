import { FooterItem, MainNavItem } from '@/app/contracts/navigation'

const socialLinks = {
  instagram: 'https://www.instagram.com/humanize.bs/',
  facebook: 'https://www.instagram.com/humanize.bs/',
  whatsapp: 'https://www.instagram.com/humanize.bs/',
}

export const siteConfig = {
  lang: 'pt-br',
  name: 'Humanize Clínica Médica',
  shortDescription: 'Humanize',
  description:
    'MF Peças e Acessórios é sua loja especializada em peças e acessórios para motos, oferecemos uma ampla variedade de itens de alta qualidade e diversidade.',
  url: 'https://humanizeclinicamedica.com.br',
  ogImage: 'https://humanizeclinicamedica.com.br/opengraph-image.png',
  socialLinks,
  keywords: [
    'Clínica',
    'Humanize',
    'Clínica Médica',
    'Exames',
    'Clínica de Exames',
    'Especialidades',
    'Humanize Clínica Médica',
    'Humanize Clínica de Exames',
    'Humanize Especialidades',
    'Especialidades Médicas',
    'Brejo Santo',
    'Ceará',
  ],
  mainNav: [
    {
      title: 'Sobre',
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: 'Seus Dados',
      items: [
        {
          title: 'Termos de Uso',
          href: '/termos',
          external: false,
        },
        {
          title: 'Política de Privacidade',
          href: '/privacidade',
          external: false,
        },
      ],
    },
    {
      title: 'Nossas Redes',
      items: [
        {
          title: 'Instagram',
          href: socialLinks.instagram,
          external: true,
        },
        {
          title: 'Facebook',
          href: socialLinks.facebook,
          external: true,
        },
        {
          title: 'Whatsapp',
          href: socialLinks.whatsapp,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}

import { FooterItem, MainNavItem } from '@/contracts/navigation'

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
    'A Humanize Clínica Médica, localizada em Brejo Santo, Ceará, oferece uma ampla gama de especialidades médicas e exames laboratoriais. Nossa clínica é dedicada a proporcionar cuidados de saúde de alta qualidade, com foco em exames precisos e atendimento especializado.',
  url: 'https://humanizeclinicamedica.com.br',
  ogImage: 'https://humanizeclinicamedica.com.br/opengraph-image.png',
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
      href: '/#sobre',
    },
    {
      title: 'Especialidades',
      href: '/#especialidades',
    },
    {
      title: 'Estrutura',
      href: '/#estrutura',
    },
    {
      title: 'Profissionais',
      href: '/#profissionais',
    },
    {
      title: 'Contato',
      href: '/#contato',
    },
    {
      title: 'Termos de Uso',
      href: '/termos',
      onlyMobile: true,
    },
    {
      title: 'Privacidade',
      href: '/privacidade',
      onlyMobile: true,
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
          title: 'Privacidade',
          href: '/privacidade',
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
  socialLinks: [
    {
      title: 'Instagram',
      href: socialLinks.instagram,
      external: true,
      icon: 'instagram',
    },
    {
      title: 'Facebook',
      href: socialLinks.facebook,
      external: true,
      icon: 'facebook',
    },
    {
      title: 'Whatsapp',
      href: socialLinks.whatsapp,
      external: true,
      icon: 'whatsapp',
    },
  ],
}

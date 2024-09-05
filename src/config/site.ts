import { Icons } from '@/components/icons'
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

export const humanizeData = [
  {
    title: '20',
    description: 'Especialidades',
  },
  {
    title: '15',
    description: 'Exames Laboratoriais',
  },
  {
    title: '+1000',
    description: 'Atendimentos',
  },
  {
    title: '100%',
    description: 'Em Satisfação',
  },
]

export interface SpecialitiesItemProps {
  title: string
  description: string
  icon: keyof typeof Icons
}

export const specialities: SpecialitiesItemProps[] = [
  {
    title: 'Cirurgia Vascular',
    description:
      'Especialidade médica que trata doenças das artérias, veias e vasos linfáticos, incluindo varizes, aneurismas e tromboses.',
    icon: 'heart',
  },
  {
    title: 'Dermatologia e Tricologia',
    description:
      'Tratamento de doenças da pele, cabelos e unhas, incluindo cuidados estéticos, como acne, psoríase, queda de cabelo e outras condições dermatológicas.',
    icon: 'arm',
  },

  {
    title: 'Estomaterapia',
    description:
      'Cuidados com estomas, feridas agudas e crônicas, e incontinências, promovendo a cicatrização e a qualidade de vida dos pacientes.',
    icon: 'stomach',
  },

  {
    title: 'Fisioterapia',
    description:
      'Reabilitação física para melhorar a mobilidade e a qualidade de vida, tratando lesões musculares, articulares e neurológicas.',
    icon: 'physio',
  },
  {
    title: 'Fonoaudiologia',
    description:
      'Diagnóstico e tratamento de distúrbios da comunicação e deglutição, incluindo problemas de fala, audição e linguagem.',
    icon: 'ear',
  },

  {
    title: 'Gastroenterologia',
    description:
      'Tratamento de doenças do sistema digestivo, incluindo estômago, intestinos, fígado e pâncreas, como gastrite, úlceras e hepatites.',
    icon: 'gastro',
  },

  {
    title: 'Ginecologia',
    description:
      'Cuidados com a saúde reprodutiva e sexual da mulher, incluindo prevenção e tratamento de doenças ginecológicas e acompanhamento pré-natal.',
    icon: 'ginecology',
  },

  {
    title: 'Mastologia',
    description:
      'Diagnóstico e tratamento de doenças das mamas, como câncer de mama, mastites e outras condições mamárias.',
    icon: 'mastology',
  },
  {
    title: 'Medicina Estética',
    description:
      'Procedimentos para melhorar a aparência e autoestima dos pacientes, incluindo tratamentos faciais, corporais e minimamente invasivos.',
    icon: 'aesthetics',
  },
  {
    title: 'Medicina Esportiva',
    description:
      'Prevenção e tratamento de lesões relacionadas à prática esportiva, promovendo a saúde e o desempenho dos atletas.',
    icon: 'sport',
  },
  {
    title: 'Neurologia',
    description:
      'Diagnóstico e tratamento de doenças do sistema nervoso, como epilepsia, esclerose múltipla, AVC e outras condições neurológicas.',
    icon: 'brain',
  },

  {
    title: 'Nutrição',
    description:
      'Orientação alimentar para promover a saúde e prevenir doenças, incluindo dietas personalizadas e acompanhamento nutricional.',
    icon: 'nutri',
  },

  {
    title: 'Oftalmologia',
    description:
      'Cuidados com a saúde dos olhos e tratamento de doenças oculares, como catarata, glaucoma, miopia e outras condições visuais.',
    icon: 'eye',
  },
  {
    title: 'Otorrinolaringologia',
    description:
      'Tratamento de doenças do ouvido, nariz e garganta, incluindo sinusite, otite, rinite e outras condições otorrinolaringológicas.',
    icon: 'otorrino',
  },
  {
    title: 'Pediatria',
    description:
      'Cuidados médicos para crianças e adolescentes, incluindo prevenção, diagnóstico e tratamento de doenças infantis.',
    icon: 'pediatria',
  },

  {
    title: 'Psicologia',
    description:
      'Apoio psicológico para promover a saúde mental e emocional, incluindo terapia individual, familiar e de casal.',
    icon: 'psicologia',
  },

  {
    title: 'Psiquiatria',
    description:
      'Diagnóstico e tratamento de transtornos mentais, como depressão, ansiedade, esquizofrenia e outras condições psiquiátricas.',
    icon: 'head',
  },

  {
    title: 'Saúde da Mulher',
    description:
      'Cuidados abrangentes para a saúde feminina em todas as fases da vida, incluindo prevenção e tratamento de doenças específicas da mulher.',
    icon: 'women',
  },
  {
    title: 'Traumatologia',
    description:
      'Tratamento de lesões traumáticas do sistema musculoesquelético, como fraturas, entorses, luxações e outras lesões ortopédicas.',
    icon: 'trauma',
  },
  {
    title: 'Urologia',
    description:
      'Tratamento de doenças do sistema urinário e reprodutor masculino, como infecções urinárias, cálculos renais e disfunções sexuais.',
    icon: 'urolo',
  },
  {
    title: 'Ultrassonografia e Doppler',
    description:
      'Exames de imagem para diagnóstico de diversas condições médicas, incluindo avaliação de órgãos internos e fluxo sanguíneo.',
    icon: 'ultra',
  },
]

export const structureGalery = [
  {
    src: '/galery/foto1.jpg',
    alt: 'Hall da clínica',
  },
  {
    src: '/galery/foto3.jpg',
    alt: 'Recepção da clínica',
  },
  {
    src: '/galery/foto8.jpg',
    alt: 'Recepção da clínica 2',
  },
  {
    src: '/galery/foto4.jpg',
    alt: 'Sala de espera',
  },
  {
    src: '/galery/foto5.jpg',
    alt: 'Escada para segundo andar',
  },
  {
    src: '/galery/foto7.jpg',
    alt: 'Sala de espera com TV e cantina',
  },
  {
    src: '/galery/foto9.jpg',
    alt: 'Sala de espera do segundo andar',
  },
]

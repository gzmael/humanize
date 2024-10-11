import { Icons } from '@/components/icons'
import {
  FooterItem,
  MainNavItem,
  ProfessionalsItem,
} from '@/contracts/navigation'

export const socialLinks = {
  instagram: 'https://www.instagram.com/humanize.bs/',
  facebook: 'https://www.facebook.com/humanize.bs/',
  whatsapp: 'https://wa.me/5588992869798',
}

export const siteConfig = {
  lang: 'pt-br',
  name: 'Humanize Centro Médico',
  shortDescription: 'Humanize',
  description:
    'A Humanize Clínica Médica, localizada em Brejo Santo, Ceará, oferece uma ampla gama de especialidades médicas e exames laboratoriais. Nossa clínica é dedicada a proporcionar cuidados de saúde de alta qualidade, com foco em exames precisos e atendimento especializado.',
  url: 'https://humanizecentromedico.com.br',
  ogImage: 'https://humanizecentromedico.com.br/opengraph-image.png',
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
    /*     {
      title: 'Especialidades',
      href: '/#especialidades',
    }, */
    {
      title: 'Estrutura',
      href: '/#estrutura',
    },
    {
      title: 'Profissionais',
      href: '/#profissionais',
    },
    {
      title: 'FAQ',
      href: '/#faq',
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
          href: '/termos-de-uso',
          external: false,
        },
        {
          title: 'Política de Privacidade',
          href: '/politica-de-privacidade',
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
    title: '21',
    description: 'Especialidades',
  },
  {
    title: '888',
    description: 'Exames Laboratoriais',
  },
  {
    title: '+1800',
    description: 'Atendimentos',
  },
  /*   {
    title: '100%',
    description: 'Em Satisfação',
  }, */
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

export interface StructureGaleryItem {
  id: number
  src: string
  large: string
  alt: string
  sizes: {
    md: {
      width: number
      height: number
    }
    lg: {
      width: number
      height: number
    }
  }
}

export const structureGalery: StructureGaleryItem[] = [
  {
    id: 1,
    src: 'https://s6.imgcdn.dev/qtABu.md.webp',
    large: 'https://s6.imgcdn.dev/qtABu.webp',
    alt: 'Sala de Espera',
    sizes: {
      md: {
        width: 500,
        height: 662,
      },
      lg: {
        width: 1024,
        height: 1355,
      },
    },
  },
  {
    id: 2,
    src: 'https://s6.imgcdn.dev/qtOLL.md.webp',
    large: 'https://s6.imgcdn.dev/qtOLL.webp',
    alt: 'Sala de Exames',
    sizes: {
      md: {
        width: 500,
        height: 662,
      },
      lg: {
        width: 1024,
        height: 1355,
      },
    },
  },
  {
    id: 3,
    src: 'https://s6.imgcdn.dev/qt96a.md.webp',
    large: 'https://s6.imgcdn.dev/qt96a.webp',
    alt: 'Recepção da clínica',
    sizes: {
      md: {
        width: 662,
        height: 500,
      },
      lg: {
        width: 1355,
        height: 1024,
      },
    },
  },
  {
    id: 4,
    src: 'https://s6.imgcdn.dev/qt7Vn.md.webp',
    large: 'https://s6.imgcdn.dev/qt7Vn.webp',
    alt: 'Sala de Oftalmologia',
    sizes: {
      md: {
        width: 500,
        height: 662,
      },
      lg: {
        width: 1024,
        height: 1355,
      },
    },
  },
  {
    id: 5,
    src: 'https://s6.imgcdn.dev/qt0UO.md.webp',
    large: 'https://s6.imgcdn.dev/qt0UO.webp',
    alt: 'Recepção da clínica',
    sizes: {
      md: {
        width: 662,
        height: 500,
      },
      lg: {
        width: 1355,
        height: 1024,
      },
    },
  },
  {
    id: 6,
    src: 'https://s6.imgcdn.dev/qtBog.md.webp',
    large: 'https://s6.imgcdn.dev/qtBog.md.webp',
    alt: 'Sala de Ortodontia',
    sizes: {
      md: {
        width: 500,
        height: 662,
      },
      lg: {
        width: 1024,
        height: 1355,
      },
    },
  },
  {
    id: 7,
    src: 'https://s6.imgcdn.dev/qtSsv.md.webp',
    large: 'https://s6.imgcdn.dev/qtSsv.webp',
    alt: 'Escada para segundo andar',
    sizes: {
      md: {
        width: 662,
        height: 500,
      },
      lg: {
        width: 1355,
        height: 1024,
      },
    },
  },
  {
    id: 8,
    src: 'https://s6.imgcdn.dev/qtr2N.md.webp',
    large: 'https://s6.imgcdn.dev/qtr2N.webp',
    alt: 'Sala de Cirurgia',
    sizes: {
      md: {
        width: 662,
        height: 500,
      },
      lg: {
        width: 1355,
        height: 1024,
      },
    },
  },
  {
    id: 9,
    src: 'https://s6.imgcdn.dev/qtvHq.md.webp',
    large: 'https://s6.imgcdn.dev/qtvHq.webp',
    alt: 'Sala de atendimento',
    sizes: {
      md: {
        width: 500,
        height: 662,
      },
      lg: {
        width: 1024,
        height: 1355,
      },
    },
  },
  /*  {
    id: 10,
    src: 'https://s6.imgcdn.dev/qt2IB.md.webp',
    large: 'https://s6.imgcdn.dev/qt2IB.webp',
    alt: 'Sala de atendimento',
    sizes: {
      md: {
        width: 500,
        height: 662,
      },
      lg: {
        width: 1024,
        height: 1355,
      },
    },
  }, */
]

export const professionals: ProfessionalsItem[] = [
  {
    prefix: 'Dra.',
    name: 'Klarice Teles',
    specialty: 'Pediatra',
    image: '/profissionais/draklarice.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/klaricepediatra/',
        external: true,
        icon: 'instagram',
      },
      {
        title: 'Facebook',
        href: 'https://m.facebook.com/draklariceteles/',
        external: true,
        icon: 'facebook',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Cláudio Lóssio',
    specialty: 'Urologista',
    image: '/profissionais/drlossio.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/drclaudiolossio/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Joice Gomes',
    specialty: 'Nutricionista',
    image: '/profissionais/drjoice.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/joicegomesnutri_/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Yasmin Cruz',
    specialty: 'Cirurgiã Vascular',
    image: '/profissionais/drayasmin.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/drayasminnycruz/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Kattyuse Santos',
    specialty: 'Psicóloga Clínica	',
    image: '/profissionais/drakatyusse.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/kattyuse.psicologa/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Caroline Morais',
    specialty: 'Mastologia e Cirurgia de mama',
    image: '/profissionais/dracaroline.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/dra.carolinemoraismasto/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Mayra Nicodemos',
    specialty: 'Dermatologia e Tricologia',
    image: '/profissionais/dramayra.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/mayranicodemos.dermato/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Bebeto Cardoso',
    specialty: 'Psicologia',
    image: '/profissionais/drbebeto.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/refugio_mental1/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Priscilla Lucena',
    specialty: 'Otorrinolaringologia',
    image: '/profissionais/drapriscilla.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/p/C6wrZdBg64A/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Lucas Araújo',
    specialty: 'Medicina Esportiva',
    image: '/profissionais/drlucas.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/drlucasaaraujo/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Inajah Rangel',
    specialty: 'Medicina Estética',
    image: '/profissionais/drainajah.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/drainajahrangel/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Joaquim Leite',
    specialty: 'Ultrassonografista Geral e Doppler',
    image: '/profissionais/drjoaquim.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/dr.joaquimleite/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Wellington Furtado',
    specialty: 'Oftalmologia',
    image: '/profissionais/drwellington.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/wellingtonbfurtado/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Viviane Aquino',
    specialty: 'Psicóloga Clínica',
    image: '/profissionais/draviviane.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/vivianepsicologia95/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Waydson Basílio',
    specialty: 'Ortopedia e Traumatologia',
    image: '/profissionais/drwaydson.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/dr.waydsonbasilio/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Diego Sampaio',
    specialty: 'Neurocirurgião',
    image: '/profissionais/drdiego.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/drdiegosampaio/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Angelina Morais',
    specialty: 'Ginecologia e Saúde da mulher',
    image: '/profissionais/draangelina.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/draangelinamorais/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Soelígia Sampaio',
    specialty: 'Fisioterapeuta traumato-ortopédica',
    image: '/profissionais/drasoeligia.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/soeligia_sampaio_fisio/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Ana Cecília',
    specialty: 'Estomaterapia',
    image: '/profissionais/dracecilia.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/dra.anacecilia.e.t/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Bruna Matias',
    specialty: 'Gastroenterologista e Endoscopia',
    image: '/profissionais/drabruna.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/drabrunamatias.gastro/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Gerônimo Neto',
    specialty: 'Psquiatra',
    image: '/profissionais/drgeronimo.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/geronimonetoo/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Hugo Matias',
    specialty: 'Cirurgião Digestivo',
    image: '/profissionais/drhugomatias.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/dr_hugo_matias_furtado/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dra.',
    name: 'Denize Milfont',
    specialty: 'Fonoaudióloga',
    image: '/profissionais/dradenize.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/denize_fono/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
  {
    prefix: 'Dr.',
    name: 'Pedro Alencar',
    specialty: 'Cardiologista',
    image: '/profissionais/drpedro.png',
    socialLinks: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/pedroytaloa/',
        external: true,
        icon: 'instagram',
      },
    ],
  },
]

export const faqs = [
  {
    question: 'Como agendar um exame?',
    answer:
      'Para agendar um exame, você pode entrar em contato com a clínica pelo telefone (88) 99286-9798 ou (88) 2138-0294.',
  },
  {
    question: 'Quais são os horários de funcionamento da clínica?',
    answer:
      'A clínica funciona de segunda a sexta-feira, das 07:00 às 17:00 e sábado 07:00 às 12:00',
  },
]

interface PartnersItem {
  name: string
  image: string
  width: number
  height: number
  className?: string
}

export const partners: PartnersItem[] = [
  {
    name: 'AFAGU',
    image: '/parceiros/afagu.svg',
    width: 100,
    height: 100,
  },
  {
    name: 'Pronto Análises',
    image: '/parceiros/pronto-analise.png',
    width: 215,
    height: 100,
  },
  {
    name: 'Sinam',
    image: '/parceiros/sinam.svg',
    width: 272,
    height: 150,
  },
]

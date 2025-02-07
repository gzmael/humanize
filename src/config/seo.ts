import { Metadata, Viewport } from 'next'

import { siteConfig } from './site'

interface MetadataProps {
  secureUrl?: string | URL
  alt?: string
  type?: string
  width?: string | number
  height?: string | number
}

interface MetadataProps {
  title?: string
  description?: string
  url?: string
  keywords?: string[]
}

export const getMetadata = ({
  title = 'Início',
  description = siteConfig.description,
  url = siteConfig.url,
  keywords = [],
}: MetadataProps): Metadata => {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
    title: {
      default: title,
      template: `%s - ${siteConfig.name}`,
    },
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [
      {
        name: 'Jezmael',
        url: 'https://github.com/gzmael',
      },
    ],
    creator: 'Jezmael',
    openGraph: {
      type: 'website',
      locale: siteConfig.lang,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      creator: '@jez.mael',
    },
  }
}

export function getViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    initialScale: 1,
    width: 'device-width',
  }
}

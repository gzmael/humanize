import { Metadata, Viewport } from 'next'

import { siteConfig } from './site'

type OGImage = string | OGImageDescriptor | URL
type OGImageDescriptor = {
  url: string | URL
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
  images?: OGImage[]
  keywords?: string[]
}

export const getMetadata = ({
  title = 'Início',
  description = siteConfig.description,
  images,
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
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
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
    userScalable: false,
  }
}

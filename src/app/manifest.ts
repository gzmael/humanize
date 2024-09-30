import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Humanize Centro Médico',
    short_name: 'Humanize Centro Médico',
    description: 'Humanize Centro Médico',
    start_url: '/',
    lang: 'pt-BR',
    display: 'standalone',
    background_color: '#7DDBD1',
    theme_color: '#7DDBD1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

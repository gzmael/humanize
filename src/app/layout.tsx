import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import { getViewport } from '../config/seo'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-openSans',
  preload: true,
})

export const viewport = getViewport()

const carbona = localFont({
  src: [
    {
      path: './_fonts/Carbona-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_fonts/Carbona-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './_fonts/Carbona-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './_fonts/Carbona-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-carbona',
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${openSans.variable} ${carbona.variable}`}
    >
      <body>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}

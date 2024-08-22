import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import { getViewport } from './config/seo'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-openSans',
})

export const viewport = getViewport()

const carbona = localFont({
  src: './_fonts/Carbona.otf',
  display: 'swap',
  variable: '--font-carbona',
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
      <body>{children}</body>
    </html>
  )
}

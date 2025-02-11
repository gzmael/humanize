import { SpeedInsights } from '@vercel/speed-insights/next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { cookies } from 'next/headers'

import { Analytics } from '@/components/Analytics'
import { PrivacyBox } from '@/components/PrivacyBox'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { ToTop } from '@/components/ToTop'
import { Toaster } from '@/components/ui/sonner'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import { getViewport } from '../config/seo'

import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-openSans',
  preload: true,
  display: 'swap',
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

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = cookies()
  const accepted = cookieStore.get('humanize-site:privacy@v0.1')

  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${openSans.variable} ${carbona.variable}`}
    >
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
      </head>
      <body>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
          <ToTop />
        </div>
        {!accepted && <PrivacyBox />}
        <TailwindIndicator />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

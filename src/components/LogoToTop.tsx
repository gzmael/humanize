'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

interface LogoToTopProps {
  variant?: 'footer' | 'header' | 'mobile'
  callback?: () => void
  className?: string
}

export function LogoToTop({
  variant = 'header',
  callback,
  className,
}: LogoToTopProps) {
  const pathname = usePathname()
  const router = useRouter()

  const logoClass = {
    footer: 'w-full max-w-[322px] h-auto',
    header: 'h-10 w-auto',
    mobile: 'mr-2 h-14 w-full',
  }

  const logoIcon = {
    footer: Icons.logoDark,
    header: Icons.logoDark2,
    mobile: Icons.logoDark2,
  }

  const Icon = logoIcon[variant]

  return (
    <button
      aria-label="Home"
      className={cn('flex items-center', className)}
      onClick={() => {
        if (pathname !== '/') {
          router.push('/')
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        callback?.()
      }}
    >
      <Icon className={logoClass[variant]} aria-hidden="true" />
      <span className="sr-only">{siteConfig.name}</span>
    </button>
  )
}

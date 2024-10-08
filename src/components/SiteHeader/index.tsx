'use client'

import { useEffect, useState } from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    setIsScrolled(window.scrollY > 60)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-colors ease-linear duration-500 bg-transparent',
        isScrolled && 'bg-humanize-900',
      )}
    >
      <div className="container flex items-center justify-center mx-auto">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav mainNavItems={siteConfig.mainNav} />
      </div>
    </header>
  )
}

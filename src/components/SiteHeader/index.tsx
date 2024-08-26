import { siteConfig } from '@/config/site'

import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex items-center justify-center mx-auto">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav mainNavItems={siteConfig.mainNav} />
      </div>
    </header>
  )
}

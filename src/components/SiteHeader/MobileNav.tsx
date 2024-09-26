'use client'

import { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'
import type { MainNavItem } from '@/contracts/navigation'
import { cn } from '@/lib/utils'

import { LogoToTop } from '../LogoToTop'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import { ScrollArea } from '../ui/scroll-area'

interface MobileNavProps {
  mainNavItems?: MainNavItem[]
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const [fullUrl, setFullUrl] = useState('')
  const params = useParams()
  const pathname = usePathname()

  useEffect(() => {
    setFullUrl(`${pathname}${window.location.hash}`)
  }, [params, pathname])

  const socialLinks = siteConfig.socialLinks

  const navWithActive = useMemo(() => {
    return mainNavItems?.map((item) => {
      return {
        ...item,
        active: item.href === fullUrl,
      }
    })
  }, [fullUrl, mainNavItems])

  return (
    <div className="flex items-center justify-between lg:hidden w-full h-16">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-2 text-base focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <Icons.menu className="size-6 text-humanize-100" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-humanize-950 overflow-hidden border-0 flex flex-col"
        >
          <SheetHeader>
            <div className="px-7 z-10">
              <LogoToTop
                variant="header"
                className="mx-auto"
                callback={() => setIsOpen(false)}
              />
            </div>
          </SheetHeader>
          <ScrollArea className="w-full min-h-[60vh]">
            <NavigationMenu
              orientation="vertical"
              className="max-w-full flex-col mb-auto flex-auto justify-start mt-8 z-10"
            >
              <NavigationMenuList className="flex-col w-full">
                {navWithActive?.map((item) => (
                  <NavigationMenuItem
                    key={item.title}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'bg-transparent size-auto text-2xl font-display font-regular tracking-wide',
                        )}
                        active={item.active}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <div className="space-y-4 mt-16 z-10">
                <h1 className="text-center text-2xl font-display font-semibold text-humanize-400 tracking-wide">
                  Siga-nos
                </h1>
                <NavigationMenuList className="space-x-2 items-center justify-centerw-full">
                  {socialLinks?.map((item) => {
                    const Icon = Icons[item.icon as keyof typeof Icons]
                    return (
                      <NavigationMenuItem key={item.title}>
                        <Link
                          href={item.href}
                          legacyBehavior
                          passHref
                          prefetch={false}
                        >
                          <NavigationMenuLink className={cn('h-auto')}>
                            <Icon className="size-6 text-humanize-100" />
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </div>
            </NavigationMenu>
          </ScrollArea>
          <Image
            src="/H.svg"
            alt="Footer"
            className="absolute bottom-0 left-0 object-contain opacity-5 scale-x-125 z-0"
            fill
          />
        </SheetContent>
      </Sheet>

      <LogoToTop variant="header" className="mx-auto" />
    </div>
  )
}

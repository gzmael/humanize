'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

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

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'

interface MobileNavProps {
  mainNavItems?: MainNavItem[]
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 60) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const socialLinks = siteConfig.socialLinks

  return (
    <div
      className="flex items-center justify-between lg:hidden w-full h-16 transition-colors ease-in-out duration-300"
      style={{
        backgroundColor: isScrolled
          ? 'hsl(var(--humanize-900))'
          : 'transparent',
      }}
    >
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
            <div className="px-7">
              <Link
                aria-label="Home"
                href="/#"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Icons.logoDark
                  className="mr-2 h-14 w-full"
                  aria-hidden="true"
                />
                <span className="sr-only font-bold">{siteConfig.name}</span>
              </Link>
            </div>
          </SheetHeader>
          <NavigationMenu
            orientation="vertical"
            className="max-w-full flex-col mb-auto flex-auto justify-start mt-8"
          >
            <NavigationMenuList className="flex-col w-full">
              {mainNavItems?.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent size-auto text-2xl font-display font-regular tracking-wide',
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <div className="space-y-4 mt-16">
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
          <Image
            src="/H.svg"
            alt="Footer"
            className="absolute bottom-0 left-0 object-contain opacity-5 scale-x-125"
            fill
          />
        </SheetContent>
      </Sheet>

      <Icons.logoDark2 className="mx-auto h-10 w-auto" />
    </div>
  )
}

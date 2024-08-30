'use client'

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import type { MainNavItem } from '@/contracts/navigation'
import { cn } from '@/lib/utils'

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [fullUrl, setFullUrl] = useState('')
  const params = useParams()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
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

  useEffect(() => {
    setFullUrl(`${pathname}${window.location.hash}`)
  }, [params, pathname])

  const navWithActive = useMemo(() => {
    return items?.map((item) => {
      return {
        ...item,
        active: item.href === fullUrl,
      }
    })
  }, [fullUrl, items])

  return (
    <div
      className={cn(
        'hidden lg:flex lg:px-3 xl:px-0 justify-between w-full container h-16 transition-colors ease-linear duration-500 z-10',
      )}
      style={{
        backgroundColor: isScrolled
          ? 'hsl(var(--humanize-900))'
          : 'transparent',
      }}
    >
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <Icons.logoDark2 aria-hidden="true" className="h-11 w-44" />
        <span className="sr-only">Início</span>
      </Link>
      <NavigationMenu className="ml-auto">
        <NavigationMenu>
          <NavigationMenuList>
            {navWithActive
              ?.filter((item) => !item.onlyMobile)
              .map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      active={item.active}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'h-auto text-lg font-display font-regular leading-6',
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </NavigationMenu>
    </div>
  )
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={String(href)}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'

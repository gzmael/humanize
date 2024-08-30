export interface NavItem {
  title: string
  href?: string
  external?: boolean
  onlyMobile?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
    icon?: 'instagram' | 'facebook' | 'whatsapp'
  }[]
}

export type MainNavItem = Omit<NavItem, 'href'> & {
  href: string
}
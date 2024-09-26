'use client'

import { Toaster as Sonner } from 'sonner'

import { Icons } from '../icons'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      closeButton
      richColors
      icons={{
        error: <Icons.error className="size-6" />,
        success: <Icons.success className="size-6" />,
      }}
      {...props}
    />
  )
}

export { Toaster }

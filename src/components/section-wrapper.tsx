'use client'

import { ComponentProps, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

import { cn } from '@/lib/utils'

type SectionWrapperProps = ComponentProps<'section'>

export const SectionWrapper = ({
  children,
  id,
  className,
  ...props
}: SectionWrapperProps) => {
  const router = useRouter()
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      router.replace(`/#${id}`, {
        scroll: false,
      })
    }
  }, [id, inView, router])

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'w-full min-h-screen flex items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

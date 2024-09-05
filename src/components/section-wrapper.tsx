'use client'

import { ComponentProps, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

type SectionWrapperProps = ComponentProps<'section'>

export const SectionWrapper = ({
  children,
  id,
  className,
  ...props
}: SectionWrapperProps) => {
  const router = useRouter()
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      router.replace(`/#${id}`, {
        scroll: false,
      })
    }
  }, [id, inView, router])

  return (
    <section id={id} ref={ref} className={className} {...props}>
      {children}
    </section>
  )
}

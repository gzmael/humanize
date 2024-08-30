'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

export const ContactSession = () => {
  const router = useRouter()
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      router.replace('/#contato', {
        scroll: false,
      })
    }
  }, [inView, router])

  return (
    <section id="contato" ref={ref}>
      CONTATO
    </section>
  )
}

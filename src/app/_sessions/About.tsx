'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

export const AboutSession = () => {
  const router = useRouter()
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      router.replace('/#sobre', {
        scroll: false,
      })
    }
  }, [inView, router])

  return (
    <section id="sobre" ref={ref}>
      SOBRE {inView ? 'VISIBLE' : 'NOT VISIBLE'}
    </section>
  )
}

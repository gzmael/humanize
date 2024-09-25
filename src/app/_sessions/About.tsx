'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

import { Headline } from '@/components/headline'
import { Icons } from '@/components/icons'
import { Text } from '@/components/text'
import { cn } from '@/lib/utils'

export const AboutSession = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.6,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
      router.replace('/#sobre', {
        scroll: false,
      })
    }
  }, [inView, router])

  return (
    <section
      id="sobre"
      ref={ref}
      className="flex flex-col items-start justify-center px-2 py-10 md:py-0 overflow-hidden"
    >
      <div className="container flex flex-col md:flex-row-reverse md:items-end gap-10">
        <aside
          className={cn(
            'flex flex-col items-start justify-center gap-4 animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-fill-backwards md:w-1/2',
            isVisible && 'animate-fade-up',
          )}
        >
          <Headline as="h2" variant="title" size="lg" weight="bold">
            sobre nós
          </Headline>
          <Headline as="h3" variant="heading" size="lg" weight="black">
            Time de profissionais especializados
          </Headline>
          <Text
            variant="body"
            scale="lg"
            weight="medium"
            className="leading-snug"
          >
            Mais do que oferecer múltiplas especialidades médicas e exames
            avançados, temos um compromisso genuíno com o bem-estar humano.
          </Text>
        </aside>
        <aside
          className={cn(
            'w-full md:w-1/2 h-72 relative rounded-lg animate-once animate-duration-500 animate-delay-500 animate-ease-linear animate-fill-backwards shadow-lg',
            isVisible && 'animate-fade-up',
          )}
          style={{
            background:
              'linear-gradient(128deg, rgba(49, 209, 238, 0.50) 31.4%, rgba(0, 199, 192, 0.50) 101.8%), lightgray 50% / cover no-repeat',
          }}
        >
          <Image
            src="/about-cover.jpg"
            alt="Sobre nós"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover mix-blend-luminosity rounded-lg"
          />
          <div className="absolute size-24 top-[-50px] right-[-50px] bg-white rounded-full p-1 shadow-lg select-none">
            <Image
              src="/selo.png"
              alt="Selo"
              width={96}
              height={96}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="animate-spin animate-infinite animate-duration-[20000ms] animate-delay-0 animate-ease-linear size-full"
            />
            <Icons.h className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75" />
          </div>
        </aside>
      </div>
    </section>
  )
}

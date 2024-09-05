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
            Nossa missão é fornecer assistência de alta qualidade, com uma
            equipe que acredita na abordagem integral da saúde. Não nos
            limitamos aos sintomas; consideramos a pessoa como um todo.
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
            fill
            className="object-cover mix-blend-luminosity rounded-lg"
          />
          <div className="absolute top-[-50px] right-[-50px] bg-white rounded-full p-1 shadow-lg">
            <Image
              src="/selo.png"
              alt="Selo"
              width={100}
              height={100}
              className="animate-spin animate-infinite animate-duration-[20000ms] animate-delay-0 animate-ease-linear"
            />
            <Icons.h className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75" />
          </div>
        </aside>
      </div>
    </section>
  )
}

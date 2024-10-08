'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

import { Headline } from '@/components/headline'
import { Icons } from '@/components/icons'
import { Text } from '@/components/text'
import { cn } from '@/lib/utils'

interface AboutSessionProps {
  blur: string
}
export const AboutSession = ({ blur }: AboutSessionProps) => {
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
      className="w-full min-h-screen md:min-h-[500px] flex flex-col items-start justify-center px-2 py-10 md:py-0 overflow-hidden"
    >
      <div className="container flex flex-col md:flex-row-reverse md:items-end gap-10">
        <aside
          className={cn(
            'flex flex-col items-start justify-center gap-2 animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-fill-backwards md:pl-4 lg:pl-0 md:w-1/2 fade-in-0',
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
            scale="md"
            weight="medium"
            className="leading-snug"
          >
            Mais do que oferecer múltiplas especialidades médicas e exames
            avançados, temos um compromisso genuíno com o bem-estar humano. Cada
            paciente, seja criança ou adulto, é acolhido com respeito e empatia.
            Nossa equipe dedica-se a cuidar de cada pessoa com o carinho e
            atenção que ela merece, utilizando a estrutura mais moderna da
            cidade para garantir um atendimento completo e humanizado.
          </Text>
        </aside>
        <aside
          className={cn(
            'w-full md:w-1/2 h-72 md:h-80 relative rounded-lg animate-once animate-duration-500 animate-delay-500 animate-ease-linear animate-fill-backwards shadow-lg',
            isVisible && 'animate-fade-up',
          )}
        >
          <Image
            src="https://s6.imgcdn.dev/FKcIV.webp"
            alt="Sobre nós"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            placeholder="blur"
            blurDataURL={blur}
            className="object-cover rounded-lg"
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

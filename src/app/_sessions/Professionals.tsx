import Image from 'next/image'
import Link from 'next/link'

import { Headline } from '@/components/headline'
import { Icons } from '@/components/icons'
import { SectionWrapper } from '@/components/section-wrapper'
import { Text } from '@/components/text'
import { professionals, socialLinks } from '@/config/site'

export const ProfessionalsSession = () => {
  return (
    <SectionWrapper id="profissionais">
      <div className="container px-2 xl:px-0 py-10 md:py-20 flex flex-col gap-8 items-center justify-center">
        <header className="flex flex-col items-center justify-center gap-2">
          <Headline as="h2" variant="title" size="lg" weight="bold">
            conheça nossa
          </Headline>
          <Headline as="h3" variant="heading" size="lg" weight="black">
            Equipe de Profissionais
          </Headline>
        </header>
        <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional) => {
            const encodedUrl = encodeURIComponent(
              `Gostaria de agendar uma consulta com ${professional.prefix === 'Dr.' ? 'o' : 'a'} ${professional.prefix} ${professional.name} no centro médico.`,
            )

            return (
              <div
                key={professional.name}
                className="flex flex-col items-center justify-center gap-4 group cursor-pointer w-full"
              >
                <div
                  className="relative size-36 rounded-full -mb-20 overflow-hidden transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, #CED5DA 0%, #76858C 100%)',
                  }}
                >
                  <Image
                    src={professional.image}
                    alt={`${professional.name} - ${professional.specialty}`}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110 pointer-events-none"
                  />
                </div>
                <div className="flex flex-col items-center border border-transparent justify-center gap-1 group-hover:bg-gradient-to-br from-[#DAF5FA] to-[#acfffc] rounded-lg group-hover:shadow-lg group-hover:border-[#00c7c0] pt-20 w-full pb-4 transition-all duration-300">
                  <Headline
                    as="h4"
                    variant="heading"
                    size="sm"
                    weight="bold"
                    className="font-sans leading-6 text-center"
                  >
                    {professional.specialty}
                  </Headline>
                  <Text
                    scale="sm"
                    className="text-muted/70 uppercase"
                    weight="bold"
                  >
                    {professional.prefix} {professional.name}
                  </Text>
                  {professional.socialLinks.length > 0 && (
                    <div className="flex items-center justify-center gap-2">
                      {professional.socialLinks.map((socialLink) => {
                        const Icon = Icons[socialLink.icon]

                        return (
                          <Link
                            key={socialLink.title}
                            href={socialLink.href}
                            prefetch={false}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center size-8 rounded-full bg-humanize-500 text-white"
                          >
                            <Icon className="size-4" />
                          </Link>
                        )
                      })}
                      <Link
                        href={`${socialLinks.whatsapp}?text=${encodedUrl}`}
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center size-8 rounded-full bg-humanize-500 text-white"
                      >
                        <Icons.whatsapp className="size-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

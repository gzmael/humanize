import { Headline } from '@/components/headline'
import { SectionWrapper } from '@/components/section-wrapper'
import { Skeleton } from '@/components/ui/skeleton'

export function StructureLoading() {
  return (
    <SectionWrapper
      className="relative justify-start"
      id="estrutura"
      style={{
        background: 'linear-gradient(299deg, #02384D 9.4%, #017470 129.53%)',
      }}
    >
      <div className="container px-2 xl:px-0 py-10 md:py-20 flex flex-col gap-8 z-10">
        <header className="flex flex-col items-center justify-center gap-2">
          <Headline as="h2" variant="title" size="lg" weight="bold">
            conheça mais
          </Headline>
          <Headline as="h3" variant="white" size="lg" weight="black">
            Nossas Estrutura
          </Headline>
        </header>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-64 aspect-square" />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

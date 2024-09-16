import { Headline } from '@/components/headline'
import { SectionWrapper } from '@/components/section-wrapper'
import { SpecialitiesItem } from '@/components/specialities-item'
import { specialities } from '@/config/site'

export const SpecialitiesSession = () => {
  return (
    <SectionWrapper id="especialidades">
      <div className="container px-2 xl:px-0 py-10 md:py-20 flex flex-col gap-8 items-center justify-center">
        <header className="flex flex-col items-center justify-center gap-2">
          <Headline as="h2" variant="title" size="lg" weight="bold">
            quais são
          </Headline>
          <Headline as="h3" variant="heading" size="lg" weight="black">
            Nossas Especialidades
          </Headline>
        </header>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {specialities.map((speciality) => (
            <SpecialitiesItem key={speciality.title} {...speciality} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

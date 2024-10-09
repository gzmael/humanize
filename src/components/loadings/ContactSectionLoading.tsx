import { SectionWrapper } from '../section-wrapper'
import { Skeleton } from '../ui/skeleton'

export const ContactSectionLoading = () => {
  return (
    <SectionWrapper
      id="contato"
      className="relative items-start justify-start"
      style={{
        background: 'linear-gradient(299deg, #02384D 9.4%, #017470 129.53%)',
      }}
    >
      <div className="container px-2 xl:px-0 pt-20 pb-10 md:py-20 flex flex-col gap-8 z-10">
        <header className="flex flex-col justify-center gap-2">
          <Skeleton className="w-full h-9" />
          <Skeleton className="w-full h-9" />
        </header>
        <div className="flex flex-col md:flex-row-reverse gap-6">
          <aside className="bg-white py-6 px-3 rounded-lg w-full md:w-2/5">
            <div className="flex flex-col gap-3">
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
            </div>
          </aside>
          <aside className="w-full md:w-3/5 flex flex-col gap-4 items-center">
            <div className="grid w-full grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-humanize-700/90 flex items-center gap-1 px-1 py-2 rounded-lg"
                >
                  <Skeleton key={index} className="w-full h-[60px]" />
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-lg size-full">
              <Skeleton className="w-full h-[527px]" />
            </div>
          </aside>
        </div>
      </div>
    </SectionWrapper>
  )
}

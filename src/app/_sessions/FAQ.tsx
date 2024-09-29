import { Headline } from '@/components/headline'
import { SectionWrapper } from '@/components/section-wrapper'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/config/site'

export const FAQSession = () => {
  return (
    <SectionWrapper
      id="faq"
      style={{
        backgroundColor: '#fff',
        backgroundImage:
          'radial-gradient(circle at bottom left, rgba(106, 189, 192, 1) 0%, hsl(var(--foreground)) 43%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100vh',
        backgroundPosition: 'bottom left',
      }}
    >
      <div className="container px-2 xl:px-0 py-10 md:py-20 flex flex-col gap-8 items-end justify-center">
        <header className="flex flex-col w-full gap-2">
          <Headline as="h2" variant="title" size="lg" weight="bold">
            respostas para
          </Headline>
          <Headline as="h3" variant="heading" size="lg" weight="black">
            Perguntas Frequentes
          </Headline>
        </header>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl grid grid-cols-1 gap-2 justify-end"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-lg transition-all duration-300 shadow border-none px-2 bg-white md:data-[state=open]:-translate-x-4"
            >
              <AccordionTrigger className="py-3 text-humanize-900 font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

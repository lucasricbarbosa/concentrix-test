import { AccordionQuestions } from './accordion-quetions'

export function FrequentlyQuestions() {
  return (
    <section className="bg-brand-inspirational-blue-600 py-[60px] md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col gap-2.5 pb-10">
          <h3 className="text-[28px] font-bold text-white md:text-[40px]">
            Perguntas frequentes
          </h3>
          <p className="text-lg text-white md:text-xl">Tire suas dúvidas</p>
        </div>
        <AccordionQuestions />
      </div>
    </section>
  )
}

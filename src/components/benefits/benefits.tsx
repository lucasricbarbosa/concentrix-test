import { InfoCard } from './info-card'
import notePng from '../../assets/note.png'
import docSearchPng from '../../assets/doc-search.png'
import bankCirclesPng from '../../assets/bank-circles.png'
import { ArrowDownCircle } from '../ui/arrow-down-circle'

export function Benefits() {
  return (
    <section className="bg-brand-gray-100 pt-24 pb-10 md:px-4">
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col gap-8 md:gap-10">
        <h3 className="text-brand-cool-gray-900 flex flex-col text-[28px] max-[768px]:px-4 md:text-[40px]">
          <span className="font-normal">Benefícios para ajudar</span>
          <span className="font-bold">você e sua empresa</span>
        </h3>
        <div className="hide-scrollbar flex gap-5 overflow-auto max-[768px]:px-4 md:grid md:grid-cols-2">
          <div className="flex gap-5 md:grid md:grid-rows-2">
            <InfoCard
              title="Negociação"
              imageSrc={notePng}
              description="Negociação rápida e segura."
            />
            <InfoCard
              title="Segunda via"
              imageSrc={docSearchPng}
              description="Consulta de débitos em atraso."
            />
          </div>
          <PaymentCard />
        </div>
        <ArrowDownCircle />
      </div>
    </section>
  )
}

function PaymentCard() {
  return (
    <div className="bg-brand-cool-gray-600 flex justify-between rounded-2xl md:flex-col">
      <div className="px-7 pt-7">
        <h4 className="text-base font-bold text-white">Pagamento</h4>
        <span className="block pt-2.5 text-[40px] leading-12 font-bold text-white">
          Seu pagamento, como preferir.
        </span>
      </div>
      <div className="flex w-full items-center pr-5 pl-5 md:pr-0">
        <img
          className="max-[768px]:min-h-56 max-[768px]:min-w-56"
          src={bankCirclesPng}
          alt="Bancos populares"
        />
      </div>
    </div>
  )
}

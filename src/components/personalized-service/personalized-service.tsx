import { ArrowDownCircle } from '../ui/arrow-down-circle'
import { FeaturedCard } from '../ui/featured-card'
import featuredBgCard1 from '../../assets/featured-bg-card-1.png'
import featuredBgCard2 from '../../assets/featured-bg-card-2.png'
import wpp3dIcon from '../../assets/whatsapp-3d-icon.png'
import phone3dIcon from '../../assets/phone-3d-icon.png'

export function PersonalizedService() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8 pt-24 pb-10 md:gap-10">
      <div className="flex w-full flex-col items-center justify-center gap-2.5 px-4">
        <h2 className="text-brand-gray-900 text-center text-[28px] font-bold md:text-[40px]">
          Atendimento personalizado
        </h2>
        <p className="text-center text-xl font-normal">
          Diversos canais, para cada necessidade
        </p>
      </div>
      <FeaturedCards />
      <ArrowDownCircle />
    </section>
  )
}

function FeaturedCards() {
  return (
    <div className="hidden grid-cols-2 gap-5 px-4 md:grid">
      <FeaturedCard
        cardBackground={featuredBgCard1}
        description="Agilidade onde estiver."
        title="Ligação"
        icon={phone3dIcon}
      />
      <FeaturedCard
        cardBackground={featuredBgCard2}
        description="Praticidade."
        title="WhatsApp"
        icon={wpp3dIcon}
      />
    </div>
  )
}

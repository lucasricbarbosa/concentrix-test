interface FeaturedCardProps {
  cardBackground: string
  title: string
  description: string
  icon: string
}

export function FeaturedCard({
  cardBackground,
  description,
  icon,
  title,
}: FeaturedCardProps) {
  return (
    <div
      className="w-full rounded-2xl bg-cover bg-center bg-no-repeat px-7 pt-7 pb-48"
      style={{ backgroundImage: `url(${cardBackground})` }}
    >
      <img src={icon} alt={`Ícone sobre ${title} `} />
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-base font-bold text-white">{description}</p>
        <h4 className="text-[40px] font-bold text-white">{title}</h4>
      </div>
    </div>
  )
}

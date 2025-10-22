interface InfoCardProps {
  title: string
  imageSrc: string
  description: string
}

export function InfoCard({ description, imageSrc, title }: InfoCardProps) {
  return (
    <div className="flex aspect-video min-w-[320px] flex-col gap-8 rounded-2xl bg-white p-7 shadow md:aspect-auto md:min-w-auto">
      <h4 className="text-base font-bold">{title}</h4>
      <img loading="lazy" className="size-28" src={imageSrc} alt={title} />
      <p className="max-w-60 text-2xl font-bold">{description}</p>
    </div>
  )
}

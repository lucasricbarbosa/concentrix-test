interface TitleAndDescriptionProps {
  title: string
  description: string
}

export function TitleAndDescription({
  title,
  description,
}: TitleAndDescriptionProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2.5 px-4">
      <h2 className="text-brand-gray-900 text-center text-[28px] font-bold md:text-[40px]">
        {title}
      </h2>
      <p className="text-center text-xl font-normal">{description}</p>
    </div>
  )
}

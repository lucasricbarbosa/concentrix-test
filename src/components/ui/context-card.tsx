interface ContextCardProps {
  title: string
  number: number
  description: string
  image: string
}

export function ContextCard({
  title,
  description,
  image,
  number,
}: ContextCardProps) {
  return (
    <div className="pr-4 md:pr-5">
      <div className="flex h-full w-fit min-w-72 flex-shrink-0 flex-col items-center justify-between gap-8 rounded-2xl bg-white p-8 md:min-w-80 md:p-10">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <span className="text-brand-gray-200 text-5xl font-bold">
            {number}
          </span>
          <h4 className="text-brand-cool-gray-700 text-3xl font-semibold">
            {title}
          </h4>
          <p className="text-brand-gray-500 text-center text-base font-normal">
            {description}
          </p>
        </div>
        <img className="size-40" src={image} alt={`Imagem sobre ${title}`} />
      </div>
    </div>
  )
}

import { cn } from '../../utils/utils'

interface LinkButtonProps {
  link: string
  icon: React.ComponentType<{ className?: string }>
  alt: string
  className?: string
}

export function LinkButton({
  link,
  icon: Icon,
  alt,
  className,
}: LinkButtonProps) {
  return (
    <a
      href={link}
      className={cn(
        'border-brand-cool-gray-900 hover:bg-smart-green-950/70 hover:border-smart-green-950/70 text-brand-cool-gray-900 flex items-center justify-center rounded-lg border p-[12px] transition-colors hover:text-white',
        className,
      )}
    >
      <Icon className="min-w-7" />
      <span className="sr-only">Link para {alt}</span>
    </a>
  )
}

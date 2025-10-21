import { cn } from '../../utils/utils'

interface BackgroundLettersProps {
  text: string
  className?: string
}

export function BackgroundLetters({ text, className }: BackgroundLettersProps) {
  return (
    <span
      className={cn(
        'bg-brand-inspirational-blue-800 w-fit px-5 py-2.5 text-[30px] leading-13 font-bold text-white md:text-[40px]',
        className,
      )}
    >
      {text}
    </span>
  )
}

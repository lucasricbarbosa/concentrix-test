import { MouseIcon } from 'lucide-react'
import heroBackground from '../../assets/concentrix-hero-bg.png'
import { BackgroundLetters } from '../ui/background-letters'
import { HeroForm } from './hero-form'

export function Hero() {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat md:bg-right lg:bg-position-[right_-0.5rem_top_-8rem]"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-10 px-4 pt-24 pb-10">
        <div className="flex h-fit w-full grid-cols-1 flex-col gap-10 md:grid md:grid-cols-2 md:justify-between">
          <div className="flex w-full flex-col gap-2.5">
            <BackgroundLetters text="Tenha aqui" />
            <BackgroundLetters text="a melhor" />
            <BackgroundLetters text="experiência" />
          </div>
          <HeroForm />
        </div>
        <div className="mt-8 flex flex-col items-center gap-1 text-white">
          <MouseIcon
            strokeWidth={1}
            className="animate-bounce-pause text-foreground size-8 font-normal"
          />
          <span className="text-foreground text-lg font-normal">
            Saiba mais
          </span>
        </div>
      </div>
    </main>
  )
}

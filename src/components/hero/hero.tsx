import { MouseIcon } from 'lucide-react'
import heroBackground from '../../assets/concentrix-hero-bg.png'
import { BackgroundLetters } from '../ui/background-letters'
import { HeroForm } from './hero-form'

export function Hero() {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat md:bg-right"
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
        <div className="flex flex-col items-center gap-1">
          <MouseIcon
            strokeWidth={1}
            className="size-8 animate-bounce font-normal text-white"
          />
          <span className="text-lg font-normal text-white">Saiba mais</span>
        </div>
      </div>
    </main>
  )
}

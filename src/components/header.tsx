import concentrixLogo from '../assets/concentrix-logo.svg'

export function Header() {
  return (
    <header className="border-b-brand-unifying-blue-700 w-full border-b-[6px]">
      <div className="mx-auto flex max-w-[1024px] items-center justify-center px-4 py-6">
        <img src={concentrixLogo} alt="Logo da Concentrix" />
      </div>
    </header>
  )
}

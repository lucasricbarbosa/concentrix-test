import { ConcentrixMiniLogo } from '../ui/concentrix-mini-logo'
import { FooterBottom } from './footer-bottom'
import { FooterMiddle } from './footer-middle'

export function Footer() {
  return (
    <footer className="bg-brand-inspirational-blue-50">
      <div className="mx-auto max-w-4xl px-4 py-11">
        <div className="border-brand-cool-gray-300 w-full border-b pb-5">
          <ConcentrixMiniLogo />
        </div>
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  )
}

import { LinkButton } from '../ui/link-button'
import { FooterTopicTitle } from './footer-topic-title'
import { AtIcon } from '../icons/atIcon'
import { WppIcon } from '../icons/wppIcon'
import { PhoneCallIcon } from '../icons/phoneCallIcon'
import { MessageDotsIcon } from '../icons/messageDotsIcon'
import { PixLogoIcon } from '../icons/pixLogo'
import { CreditCardIcon } from '../icons/creditCardIcon'
import { BarcodeIcon } from '../icons/barcodeIcon'
import { GooglePayIcon } from '../icons/googlePayIcon'

export function FooterMiddle() {
  return (
    <div className="grid gap-10 pt-14 lg:grid-cols-3">
      <FooterMiddleAbout />
      <FooterMiddleTaksToUs />
      <FooterMiddlePayment />
    </div>
  )
}

function FooterMiddleAbout() {
  return (
    <div className="flex flex-col gap-5">
      <FooterTopicTitle title="Sobre" />
      <div className="flex flex-col gap-4">
        <a
          target="_blank"
          href="https://www.concentrix.com/what-we-do/"
          className="text-brand-cool-gray-900 w-fit text-base hover:underline"
        >
          Quem somos
        </a>
        <a
          href="https://www.concentrix.com/legal/"
          target="_blank"
          className="text-brand-cool-gray-900 w-fit text-base hover:underline"
        >
          Política de privacidade
        </a>
      </div>
    </div>
  )
}

function FooterMiddleTaksToUs() {
  return (
    <div className="flex flex-col gap-5">
      <FooterTopicTitle title="Fale com a gente" />
      <div className="flex items-center gap-2.5">
        <LinkButton icon={AtIcon} link="#" alt="email da concentrix" />
        <LinkButton icon={WppIcon} link="#" alt="whatsapp da concentrix" />
        <LinkButton
          icon={PhoneCallIcon}
          link="#"
          alt="telefone da concentrix"
        />
        <LinkButton
          icon={MessageDotsIcon}
          link="#"
          alt="enviar uma mensagem para a concentrix"
        />
      </div>
    </div>
  )
}

function FooterMiddlePayment() {
  return (
    <div className="flex flex-col gap-5">
      <FooterTopicTitle title="Fale com a gente" />
      <div className="flex items-center gap-2.5">
        <LinkButton
          icon={PixLogoIcon}
          className="p-1.5"
          link="#"
          alt="email da concentrix"
        />
        <LinkButton
          icon={CreditCardIcon}
          link="#"
          alt="whatsapp da concentrix"
        />
        <LinkButton icon={BarcodeIcon} link="#" alt="telefone da concentrix" />
        <LinkButton
          icon={GooglePayIcon}
          link="#"
          alt="enviar uma mensagem para a concentrix"
          className="p-1.5"
        />
      </div>
    </div>
  )
}

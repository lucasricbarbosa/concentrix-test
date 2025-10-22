import { ConcentrixMiniLogo } from '../ui/concentrix-mini-logo'
import verify3dLogo from '../../assets/verify-3D-icon.png'

export function FooterBottom() {
  return (
    <div className="flex flex-col justify-between gap-10 pt-14 lg:flex-row lg:items-center">
      <span className="text-brand-cool-gray-900">
        © 2023. Todos direitos reservados à Webhelp
      </span>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <ConcentrixMiniLogo />
          <p className="text-brand-cool-gray-900 max-w-32 text-[10px]">
            Plataforma desenvolvida pela{' '}
            <span className="font-semibold">Concentrix</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img loading="lazy" src={verify3dLogo} alt="Ícone sobre segurança" />
          <div>
            <span className="text-brand-inspirational-blue-900 text-xs font-semibold">
              Site protegido
            </span>
            <p className="text-brand-inspirational-blue-900 text-xs">
              Certificado SSL{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { ArrowDownCircle } from '../ui/arrow-down-circle'
import { ContextCard } from '../ui/context-card'
import { TitleAndDescription } from '../ui/title-and-description'
import checkImg from '../../assets/check-img.png'
import cpfInputImg from '../../assets/cpf-input-img.png'
import codImg from '../../assets/doc-img.png'
import keyImg from '../../assets/key-img.png'

export function StartNow() {
  const steps = [
    {
      title: 'Login',
      description: 'Inicie seu acesso',
      image: cpfInputImg,
      color: 'bg-slate-100',
    },
    {
      title: 'Token',
      description:
        'Insira o código recebido em seu celular ou e-mail cadastrado',
      image: checkImg,
      color: 'bg-yellow-100',
    },
    {
      title: 'Contrato',
      description: 'Selecione o contrato que deseja ver a gestão de negócio',
      image: codImg,
      color: 'bg-blue-100',
    },
    {
      title: 'Pronto',
      description: 'Agora já é possível! Faça tudo o que precisa',
      image: keyImg,
      color: 'bg-green-100',
    },
  ]

  return (
    <section className="bg-brand-gray-100 pt-24 pb-10">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="mx-auto max-w-4xl">
          <TitleAndDescription
            title="Comece agora!"
            description="Veja com é fácil e seguro."
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center px-6">
            <div className="-mx-6 overflow-x-auto px-6">
              <div className="flex pb-8">
                {steps.map((step, index) => (
                  <ContextCard
                    number={index + 1}
                    key={step.title}
                    title={step.title}
                    description={step.description}
                    image={step.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ArrowDownCircle />
      </div>
    </section>
  )
}

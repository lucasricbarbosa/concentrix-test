import { useState } from 'react'
import { CpfInput } from '../ui/cpf-input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { validateCPF } from '../../utils/validateCPF'
import { validateBirthdate } from '../../utils/validateBirthdate'
import { DatePicker } from '../ui/date-picker'
import { CnpjInput } from '../ui/cnpj-input'
import { validateCNPJ } from '../../utils/validateCnpj'

export function HeroForm() {
  const [cpf, setCpf] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [cpfError, setCpfError] = useState('')
  const [birthdateError, setBirthdateError] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cnpjError, setCnpjError] = useState('')
  const [activeTab, setActiveTab] = useState('individual')

  const handleCpfChange = (value: string) => {
    setCpf(value)
    setCpfError('')
    setSubmitMessage('')
  }

  const handleCnpjChange = (value: string) => {
    setCnpj(value)
    setCnpjError('')
    setSubmitMessage('')
  }

  const handleBirthdateChange = (value: string) => {
    setBirthdate(value)
    setBirthdateError('')
    setSubmitMessage('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setCpfError('')
    setBirthdateError('')
    setCnpjError('')
    setSubmitMessage('')

    let hasError = false

    if (activeTab === 'individual') {
      if (!cpf) {
        setCpfError('CPF é obrigatório')
        hasError = true
      } else if (!validateCPF(cpf)) {
        setCpfError('CPF inválido')
        hasError = true
      }

      const birthdateValidation = validateBirthdate(birthdate)
      if (!birthdateValidation.valid) {
        setBirthdateError(birthdateValidation.message || 'Data inválida')
        hasError = true
      }
    }

    if (activeTab === 'business') {
      if (!cnpj) {
        setCnpjError('CNPJ é obrigatório')
        hasError = true
      } else if (!validateCNPJ(cnpj)) {
        setCnpjError('CNPJ inválido')
        hasError = true
      }
    }

    if (!hasError) {
      setSubmitMessage('✅ Login realizado com sucesso!')
      const formData =
        activeTab === 'individual'
          ? { tipo: 'Pessoa Física', cpf, birthdate }
          : { tipo: 'Pessoa Jurídica', cnpj }
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="flex w-full md:justify-end">
      <div className="flex w-full flex-col gap-5 rounded-lg bg-white p-5 shadow md:w-[380px]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-brand-cool-gray-600 mb-2.5 text-sm font-normal">
            Tipo de perfil
          </h2>
          <Tabs defaultValue="individual" onValueChange={setActiveTab}>
            <TabsList className="flex w-full gap-2.5 p-0">
              <TabsTrigger className="w-full" value="individual">
                Pessoa Física
              </TabsTrigger>
              <TabsTrigger className="w-full" value="business">
                Pessoa Jurídica
              </TabsTrigger>
            </TabsList>
            <IndividualForm
              cpf={cpf}
              setCpf={handleCpfChange}
              birthdate={birthdate}
              setBirthdate={handleBirthdateChange}
              cpfError={cpfError}
              birthdateError={birthdateError}
            />
            <BussinessForm
              cnpj={cnpj}
              setCnpj={handleCnpjChange}
              cnpjError={cnpjError}
            />
            <button
              type="submit"
              className="bg-brand-inspirational-blue-600 hover:bg-brand-inspirational-blue-800 mt-5 w-full cursor-pointer rounded-md px-4 py-2.5 font-semibold text-white transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Entrar
            </button>

            {submitMessage && (
              <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-3 text-center text-sm text-green-700">
                {submitMessage}
              </div>
            )}
          </Tabs>
        </form>
      </div>
    </div>
  )
}

interface IndividualFormProps {
  cpf: string
  setCpf: (cpf: string) => void
  birthdate: string
  setBirthdate: (date: string) => void
  cpfError: string
  birthdateError: string
}

function IndividualForm({
  cpf,
  setCpf,
  birthdate,
  setBirthdate,
  cpfError,
  birthdateError,
}: IndividualFormProps) {
  return (
    <TabsContent value="individual" className="space-y-4">
      <div className="mt-4 space-y-4">
        <CpfInput id="cpf" value={cpf} onChange={setCpf} error={cpfError} />
        <DatePicker
          value={birthdate ? new Date(birthdate) : undefined}
          onChange={(date) => {
            const formattedDate = date.toISOString().split('T')[0]
            setBirthdate(formattedDate)
          }}
          error={birthdateError}
        />
      </div>
    </TabsContent>
  )
}

interface BusinessFormProps {
  cnpj: string
  setCnpj: (cnpj: string) => void
  cnpjError: string
}

function BussinessForm({ cnpj, setCnpj, cnpjError }: BusinessFormProps) {
  return (
    <TabsContent value="business" className="space-y-4">
      <div className="mt-4 space-y-4">
        <CnpjInput
          id="cnpj"
          value={cnpj}
          onChange={setCnpj}
          error={cnpjError}
        />
      </div>
    </TabsContent>
  )
}

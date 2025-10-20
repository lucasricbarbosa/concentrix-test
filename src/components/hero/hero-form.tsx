import { useState } from 'react'
import { CpfInput } from '../ui/cpf-input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { DateInput } from '../ui/date-input'
import { validateCPF } from '../../utils/validateCPF'
import { validateBirthdate } from '../../utils/validateBirthdate'

export function HeroForm() {
  const [cpf, setCpf] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [cpfError, setCpfError] = useState('')
  const [birthdateError, setBirthdateError] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleCpfChange = (value: string) => {
    setCpf(value)
    setCpfError('')
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
    setSubmitMessage('')

    let hasError = false

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

    if (!hasError) {
      setSubmitMessage('✅ Login realizado com sucesso!')
      console.log('Form submitted:', { cpf, birthdate })
    }
  }

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-white p-5 shadow">
      <form onSubmit={handleSubmit}>
        <h2 className="text-brand-cool-gray-600 mb-2.5 text-sm font-normal">
          Tipo de perfil
        </h2>
        <Tabs defaultValue="individual">
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
          <BussinessForm />
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
        <DateInput
          id="birthdate"
          value={birthdate}
          onChange={setBirthdate}
          error={birthdateError}
        />
      </div>
    </TabsContent>
  )
}

function BussinessForm() {
  return (
    <TabsContent value="business" className="space-y-4">
      <h3 className="text-foreground text-lg font-medium">Password Settings</h3>
      <p className="text-muted-foreground">
        Change your password and manage security settings. Keep your account
        secure with a strong password.
      </p>
    </TabsContent>
  )
}

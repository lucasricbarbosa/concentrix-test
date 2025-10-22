import type * as React from 'react'
import { cn } from '../../utils/utils'

interface CnpjInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export function CnpjInput({
  value = '',
  onChange,
  className,
  error,
  ...props
}: CnpjInputProps) {
  const formatCnpj = (input: string) => {
    const numbers = input.replace(/\D/g, '').slice(0, 14)
    return numbers
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '').slice(0, 14)
    onChange?.(numbers)
  }

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-normal text-gray-600">CNPJ</span>
      <input
        {...props}
        type="text"
        value={formatCnpj(value)}
        onChange={handleChange}
        placeholder="00.000.000/0000-00"
        className={cn(
          'focus:border-brand-inspirational-blue-600 focus:ring-brand-inspirational-blue-600 w-full rounded border border-gray-200 px-4 py-2 transition-all focus:ring-1 focus:outline-none sm:text-sm',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className,
        )}
        maxLength={18}
      />
      {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
    </div>
  )
}

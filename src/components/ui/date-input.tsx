import { cn } from '../../utils/utils'

interface DateInputProps {
  id: string
  value: string
  onChange: (value: string) => void
  label?: string
  error?: string
  className?: string
}

export function DateInput({
  id,
  value,
  onChange,
  label = 'Data de Nascimento',
  error,
  className = '',
}: DateInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <style>{`
        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0;
          cursor: pointer;
        }
      `}</style>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'focus:border-brand-inspirational-blue-600 focus:ring-brand-inspirational-blue-600 w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 shadow-sm transition-colors focus:ring-1 focus:outline-none',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
        )}
        required
      />
      {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
    </div>
  )
}

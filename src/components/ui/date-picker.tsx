import { useState, useRef, useEffect } from 'react'
import { cn } from '../../utils/utils'
import { X } from 'lucide-react'

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date) => void
  placeholder?: string
  className?: string
  error?: string
}

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

export function DatePicker({
  value,
  onChange,
  placeholder = '00/00/0000',
  className,
  error,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value)
  const [currentMonth, setCurrentMonth] = useState(value || new Date())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const handleDateSelect = (day: number) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    )
    setSelectedDate(newDate)
    onChange?.(newDate)
    setIsOpen(false)
  }

  const handleYearChange = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth()))
  }

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    )
  }

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    )
  }

  const currentYear = new Date().getFullYear()
  const yearOptions = Array.from({ length: 100 }, (_, i) => currentYear - i)

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth)
  const today = new Date()
  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    )
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    )
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <span className="text-sm font-normal text-gray-600">Data nascimento</span>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'bg-background hover:border-ring focus:border-brand-inspirational-blue-600 focus:ring-brand-inspirational-blue-600 w-full rounded border border-gray-200 px-4 py-2 text-left transition-colors focus:ring-1 focus:ring-offset-2 focus:outline-none',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
        )}
      >
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'text-sm',
              selectedDate ? 'text-foreground' : 'text-gray-400',
            )}
          >
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
          <svg
            className={cn(
              'text-muted-foreground h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

      {isOpen && (
        <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 absolute z-50 mt-2 w-80 rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePreviousMonth}
                className="rounded-lg p-2 transition-colors hover:bg-gray-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="text-foreground text-sm font-semibold">
                {MONTHS[currentMonth.getMonth()]}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={currentMonth.getFullYear()}
                  onChange={(e) => handleYearChange(Number(e.target.value))}
                  className="text-foreground hover:border-ring focus:ring-ring cursor-pointer rounded-lg border border-gray-300 bg-transparent px-2 py-1 text-sm font-semibold focus:ring-2 focus:outline-none"
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                className="rounded-lg p-2 transition-colors hover:bg-gray-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-muted-foreground py-2 text-center text-xs font-medium"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1
                const isTodayDate = isToday(day)
                const isSelectedDate = isSelected(day)

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDateSelect(day)}
                    className={cn(
                      'relative h-10 cursor-pointer rounded-lg text-sm transition-all duration-200',
                      'hover:scale-105 hover:bg-gray-200',
                      'focus:border-brand-inspirational-blue-600 focus:ring-brand-inspirational-blue-600 focus:ring-1 focus:outline-none',
                      isSelectedDate &&
                        'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold',
                      !isSelectedDate &&
                        isTodayDate &&
                        'border-2 border-gray-200 font-medium',
                      !isSelectedDate && !isTodayDate && 'text-foreground',
                    )}
                  >
                    {day}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex items-center justify-end border-t border-gray-300 pt-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-secondary hover:bg-secondary/80 rounded-lg px-2 py-1.5 text-sm transition-colors"
              >
                <X />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

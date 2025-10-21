import type React from 'react'
import { createContext, useContext, useState, useRef, useEffect } from 'react'

type AccordionContextType = {
  openItems: string[]
  toggleItem: (value: string) => void
  multiple?: boolean
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

interface AccordionProps {
  children: React.ReactNode
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  className?: string
}

export function Accordion({
  children,
  type = 'single',
  defaultValue,
  className = '',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(value)

      if (type === 'single') {
        return isOpen ? [] : [value]
      } else {
        return isOpen ? prev.filter((item) => item !== value) : [...prev, value]
      }
    })
  }

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, multiple: type === 'multiple' }}
    >
      <div className={`divide-border divide-y ${className}`}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  children: React.ReactNode
  value: string
  className?: string
}

export function AccordionItem({
  children,
  value,
  className = '',
}: AccordionItemProps) {
  return (
    <div className={`${className}`} data-value={value}>
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({
  children,
  className = '',
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext()
  const itemElement = useRef<HTMLButtonElement>(null)

  const getValue = () => {
    return (
      itemElement.current
        ?.closest('[data-value]')
        ?.getAttribute('data-value') || ''
    )
  }

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(getValue())
  }, [])

  const isOpen = openItems.includes(value)

  const handleClick = () => {
    const currentValue = getValue()
    if (currentValue) {
      toggleItem(currentValue)
    }
  }

  return (
    <button
      ref={itemElement}
      type="button"
      onClick={handleClick}
      aria-expanded={isOpen}
      className={`flex w-full items-center justify-between py-4 text-left transition-all hover:underline ${className}`}
    >
      {children}
      <svg
        className={`h-8 w-8 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3048_267)">
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="white"
            stroke-miterlimit="10"
          />
          <path
            d="M11 16H21"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 11V21"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3048_267">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

export function AccordionContent({
  children,
  className = '',
}: AccordionContentProps) {
  const { openItems } = useAccordionContext()
  const contentRef = useRef<HTMLDivElement>(null)

  const [value, setValue] = useState('')

  useEffect(() => {
    const itemElement = contentRef.current?.closest('[data-value]')
    const val = itemElement?.getAttribute('data-value') || ''
    setValue(val)
  }, [])

  const isOpen = openItems.includes(value)

  const [height, setHeight] = useState<number | undefined>(
    isOpen ? undefined : 0,
  )

  useEffect(() => {
    if (!contentRef.current) return

    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight
      setHeight(contentHeight)

      const timer = setTimeout(() => {
        setHeight(undefined)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setHeight(contentRef.current.scrollHeight)

      requestAnimationFrame(() => {
        setHeight(0)
      })
    }
  }, [isOpen])

  return (
    <div
      style={{ height }}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${!isOpen && height === 0 ? '' : ''}`}
    >
      <div ref={contentRef} className={`pt-0 pb-4 ${className}`}>
        {children}
      </div>
    </div>
  )
}

export function validateCNPJ(cnpj: string): boolean {
  const numbers = cnpj.replace(/\D/g, '')

  if (numbers.length !== 14) return false

  if (/^(\d)\1+$/.test(numbers)) return false

  let sum = 0
  let multiplier = 5
  for (let i = 0; i < 12; i++) {
    sum += parseInt(numbers[i]) * multiplier
    multiplier = multiplier === 2 ? 9 : multiplier - 1
  }
  let remainder = sum % 11
  const digit1 = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(numbers[12]) !== digit1) return false

  sum = 0
  multiplier = 6
  for (let i = 0; i < 13; i++) {
    sum += parseInt(numbers[i]) * multiplier
    multiplier = multiplier === 2 ? 9 : multiplier - 1
  }
  remainder = sum % 11
  const digit2 = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(numbers[13]) !== digit2) return false

  return true
}

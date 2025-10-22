export function validateBirthdate(dateString: string): {
  valid: boolean
  message?: string
} {
  if (!dateString) {
    return { valid: false, message: 'Data de nascimento é obrigatória' }
  }

  const birthDate = new Date(dateString)
  const today = new Date()

  if (isNaN(birthDate.getTime())) {
    return { valid: false, message: 'Data inválida' }
  }

  if (birthDate > today) {
    return { valid: false, message: 'Data não pode ser futura' }
  }

  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--
  }

  if (age < 18) {
    return { valid: false, message: 'Você deve ter pelo menos 18 anos' }
  }

  return { valid: true }
}

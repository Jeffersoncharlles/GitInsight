export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return 'Data não disponível'

  const date = new Date(dateString)

  if (Number.isNaN(date.getTime())) return 'Data inválida'

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

import { AxiosError } from 'axios'
import { type User, userSchema } from '@/services/types'
import { api } from '@/shared/libs/api'

export const getUser = async (username: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${username}`)

    return userSchema.parse(response.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error('Usuário não encontrado no GitHub.')
      }
      if (error.response?.status === 403) {
        throw new Error(
          'Limite de requisições atingido. Tente novamente mais tarde.',
        )
      }
      throw new Error('Ocorreu um erro de comunicação com o GitHub.')
    }

    throw error instanceof Error
      ? error
      : new Error('Erro inesperado na aplicação.')
  }
}

import { AxiosError } from 'axios'
import { type RepoDetail, repoDetailSchema } from '@/services/types'
import { api } from '@/shared/libs/api'

export const getRepoDetails = async (fullName: string): Promise<RepoDetail> => {
  try {
    const response = await api.get(`repos/${fullName}`)

    return repoDetailSchema.parse(response.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error('Repositório não encontrado no GitHub.')
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

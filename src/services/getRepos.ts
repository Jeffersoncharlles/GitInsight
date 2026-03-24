import { AxiosError } from 'axios'
import { type Repo, reposSchema } from '@/services/types'
import { api } from '@/shared/libs/api'

export const getRepos = async (username: string): Promise<Repo[]> => {
  try {
    const response = await api.get(`/users/${username}/repos`)

    return reposSchema.parse(response.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error('Repositórios do usuário não encontrados no GitHub.')
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

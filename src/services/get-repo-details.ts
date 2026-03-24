import { type RepoDetail, repoDetailSchema } from '@/services/types'
import { api } from '@/shared/libs/api'

export const getRepoDetails = async (fullName: string): Promise<RepoDetail> => {
  const response = await api.get(`repos/${fullName}`)

  return repoDetailSchema.parse(response.data)
}

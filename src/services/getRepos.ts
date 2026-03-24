import { type Repo, reposSchema } from '@/services/types'
import { api } from '@/shared/libs/api'

export const getRepos = async (username: string): Promise<Repo[]> => {
  const response = await api.get(`/users/${username}/repos`)

  return reposSchema.parse(response.data)
}

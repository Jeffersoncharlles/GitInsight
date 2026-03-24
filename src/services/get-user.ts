import { type User, userSchema } from '@/services/types'
import { api } from '@/shared/libs/api'

export const getUser = async (username: string): Promise<User> => {
  const response = await api.get(`/users/${username}`)

  return userSchema.parse(response.data)
}

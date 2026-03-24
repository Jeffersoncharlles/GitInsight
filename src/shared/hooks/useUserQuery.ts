import { useSuspenseQuery } from '@tanstack/react-query'
import { getUser } from '@/services/get-user'

export const useUserQuery = (username: string) => {
  return useSuspenseQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    staleTime: 1000 * 60 * 5, // 5 minutos
    select: (data) => ({
      avatarUrl: data.avatar_url,
      name: data.name,
      login: data.login,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      email: data.email,
      publicRepos: data.public_repos,
      htmlUrl: data.html_url,
    }),
  })
}

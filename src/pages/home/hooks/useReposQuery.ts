import { useSuspenseQuery } from '@tanstack/react-query'
import { getRepos } from '@/services/getRepos'

export const useReposQuery = (username: string, orderBy: 'stars' | 'name') => {
  return useSuspenseQuery({
    queryKey: ['repos', username],
    queryFn: () => getRepos(username),
    select: (repos) => {
      const sortedRepos = [...repos]

      if (orderBy === 'stars') {
        return sortedRepos.sort((firstRepo, secondRepo) => {
          return secondRepo.stargazers_count - firstRepo.stargazers_count
        })
      }
      return sortedRepos.sort((firstRepo, secondRepo) => {
        return firstRepo.name.localeCompare(secondRepo.name)
      })
    },
  })
}

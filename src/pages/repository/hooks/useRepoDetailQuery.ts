import { useSuspenseQuery } from '@tanstack/react-query'
import { getRepoDetails } from '@/services/get-repo-details'

export const useRepoDetailQuery = (fullName: string) => {
  return useSuspenseQuery({
    queryKey: ['repo-detail', fullName],
    queryFn: () => getRepoDetails(fullName),
    retry: false,
  })
}

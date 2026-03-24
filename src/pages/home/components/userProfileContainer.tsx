import { lazy } from 'react'
import { UserProfileSkeleton } from '@/components/skeletons/userProfileSkelton'
import { useUserQuery } from '@/shared/hooks/useUserQuery'

const UserProfile = lazy(() => import('@/components/userProfile'))
export const UserProfileContainer = ({ username }: { username: string }) => {
  const { data: user, isLoading, isError, error } = useUserQuery(username)

  if (isError)
    return (
      <div className="alert alert-danger" role="alert" aria-live="assertive">
        {(error as Error).message ||
          'Ocorreu um erro ao carregar o perfil do usuário.'}
      </div>
    )
  if (isLoading || !user) return <UserProfileSkeleton />

  return <UserProfile user={user} />
}

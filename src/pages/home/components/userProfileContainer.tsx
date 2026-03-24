import { lazy } from 'react'
import { UserProfileSkeleton } from '@/components/userProfileSkelton'
import { useUserQuery } from '@/pages/home/hooks/useUserQuery'

const UserProfile = lazy(() => import('../../../components/userProfile'))
export const UserProfileContainer = ({ username }: { username: string }) => {
  const { data: user, isLoading, isError } = useUserQuery(username)

  if (isError)
    return <div className="alert alert-danger">Usuário não encontrado.</div>
  if (isLoading || !user) return <UserProfileSkeleton />

  return <UserProfile user={user} />
}

import { Suspense } from 'react'
import { useSearchParams } from 'react-router'

import { UserProfileSkeleton } from '@/components/userProfileSkelton'
import { RepositoryListContainer } from '@/pages/home/components/repositoryListContainer'
import { UserProfileContainer } from '@/pages/home/components/userProfileContainer'
import { WelcomeView } from '@/pages/home/components/welcomeView'

export const Home = () => {
  const [searchParams] = useSearchParams()
  const username = searchParams.get('q') || ''

  if (!username) return <WelcomeView />

  return (
    <section className="container  py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfileContainer username={username} />
          </Suspense>
        </div>
        <div className="col-12 col-lg-8">
          <Suspense fallback={<p>Carregando repositórios...</p>}>
            <RepositoryListContainer username={username} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

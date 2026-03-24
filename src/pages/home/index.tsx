import { Suspense } from 'react'
import { useSearchParams } from 'react-router'
import { RepositoryCardSkeleton } from '@/components/skeletons/repositoryCardSkeleton'
import { UserProfileSkeleton } from '@/components/skeletons/userProfileSkelton'
import { RepositoryListContainer } from '@/pages/home/components/repositoryListContainer'
import { UserProfileContainer } from '@/pages/home/components/userProfileContainer'
import { WelcomeView } from '@/pages/home/components/welcomeView'
import { ErrorBoundary } from '@/routes/_error'

export const Home = () => {
  const [searchParams] = useSearchParams()
  const username = searchParams.get('q') || ''

  if (!username) return <WelcomeView />

  return (
    <section className="container  py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <ErrorBoundary
            fallback={(error) => (
              <div className="alert alert-danger" role="alert">
                {error.message}
              </div>
            )}
          >
            <Suspense fallback={<UserProfileSkeleton />}>
              <UserProfileContainer username={username} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="col-12 col-lg-8">
          <ErrorBoundary
            fallback={(error) => (
              <div className="alert alert-danger" role="alert">
                {error.message}
              </div>
            )}
          >
            <Suspense fallback={<RepositoryCardSkeleton />}>
              <RepositoryListContainer username={username} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  )
}

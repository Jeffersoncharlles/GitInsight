import { Suspense } from 'react'
import { RepositoryDataSkeleton } from '@/components/skeletons/repositoryDataSkeleton'
import { UserRepositorySkeleton } from '@/components/skeletons/userRepositorySkeleton'
import { RepositoryContainer } from '@/pages/repository/components/repositoryContainer'
import { UserProfileRepositoryContainer } from '@/pages/repository/components/userProfileRepositoryContainer'
import { ErrorBoundary } from '@/routes/_error'

export const Repository = () => {
  return (
    <section className="row g-4">
      <div className="col-12 col-md-4">
        <ErrorBoundary
          fallback={(error) => (
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          )}
        >
          <Suspense fallback={<UserRepositorySkeleton />}>
            <UserProfileRepositoryContainer />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div className="col-12 col-md-8">
        <ErrorBoundary
          fallback={(error) => (
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          )}
        >
          <Suspense fallback={<RepositoryDataSkeleton />}>
            <RepositoryContainer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  )
}

import { Suspense } from 'react'
import { RepositoryDataSkeleton } from '@/components/skeletons/repositoryDataSkeleton'
import { UserRepositorySkeleton } from '@/components/skeletons/userRepositorySkeleton'
import { RepositoryContainer } from '@/pages/repository/components/repositoryContainer'
import { UserProfileRepositoryContainer } from '@/pages/repository/components/userProfileRepositoryContainer'

export const Repository = () => {
  return (
    <section className="row g-4">
      <div className="col-12 col-md-4">
        <Suspense fallback={<UserRepositorySkeleton />}>
          <UserProfileRepositoryContainer />
        </Suspense>
      </div>

      <div className="col-12 col-md-8">
        <Suspense fallback={<RepositoryDataSkeleton />}>
          <RepositoryContainer />
        </Suspense>
      </div>
    </section>
  )
}

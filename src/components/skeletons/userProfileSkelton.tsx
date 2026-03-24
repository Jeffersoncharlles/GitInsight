import { Skeleton } from '@/components/ui/skeleton'

export const UserProfileSkeleton = () => (
  <div className="card border-0 shadow-sm p-4 text-center">
    <div className="d-flex justify-content-center mb-3">
      <Skeleton width="120px" height="120px" variant="circle" />
    </div>

    <div className="mb-4 d-flex flex-column align-items-center">
      <Skeleton width="60%" height="1.5rem" className="mx-auto mb-2" />
      <Skeleton width="40%" height="1rem" className="mx-auto" />
    </div>

    <hr className="text-muted opacity-25 mb-4" />

    <div className="d-flex justify-content-between px-2">
      <div className="d-flex flex-column align-items-center">
        <Skeleton width="30px" height="1.2rem" className="mb-2" />
        <Skeleton width="60px" height="0.8rem" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <Skeleton width="30px" height="1.2rem" className="mb-2" />
        <Skeleton width="60px" height="0.8rem" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <Skeleton width="30px" height="1.2rem" className="mb-2" />
        <Skeleton width="60px" height="0.8rem" />
      </div>
    </div>
  </div>
)

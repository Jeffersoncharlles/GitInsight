import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const RepositoryDataSkeleton = () => {
  return (
    <Card.Root className="h-100 p-4 shadow-sm border">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div className="w-75 d-flex flex-column gap-2">
          <Skeleton className="h-4 w-75" />
          <Skeleton className="h-2 w-50" />
        </div>
        <Skeleton
          className="rounded"
          style={{ width: '120px', height: '38px' }}
        />{' '}
      </div>

      <Card.Body className="p-0 d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2">
          <Skeleton className="h-2 w-100" />
          <Skeleton className="h-2 w-100" />
          <Skeleton className="h-2 w-75" />
        </div>

        <div className="row g-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-6 col-lg-3">
              <div className="bg-light p-2 border rounded d-flex align-items-center gap-2">
                <Skeleton
                  className="rounded-circle"
                  style={{ width: '24px', height: '24px' }}
                />
                <div className="flex-grow-1">
                  <Skeleton className="h-2 w-75 mb-1" />
                  <Skeleton className="h-1 w-50" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 border-top d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <Skeleton className="h-2 w-25" />
            <div className="d-flex align-items-center gap-2">
              <Skeleton
                className="rounded-circle"
                style={{ width: '12px', height: '12px' }}
              />
              <Skeleton className="h-3 w-25" />
            </div>
          </div>

          <div className="d-flex flex-column gap-2">
            <Skeleton className="h-2 w-25" />
            <div className="d-flex gap-2">
              <Skeleton
                className="rounded-pill"
                style={{ width: '80px', height: '24px' }}
              />
              <Skeleton
                className="rounded-pill"
                style={{ width: '80px', height: '24px' }}
              />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card.Root>
  )
}

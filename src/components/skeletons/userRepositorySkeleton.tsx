import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const UserRepositorySkeleton = () => {
  return (
    <Card.Root className="h-100 p-4 text-center shadow-sm border">
      <Card.Body className="d-flex flex-column align-items-center gap-3 p-0">
        <Skeleton
          className="rounded-circle border p-1"
          style={{ width: '120px', height: '120px' }}
        />
        <div className="w-100">
          <Skeleton className="h-4 w-75 mx-auto mb-2" />
          <Skeleton className="h-2 w-50 mx-auto" />
        </div>
        <Skeleton
          className="rounded-pill w-100 mt-3"
          style={{ height: '38px' }}
        />{' '}
      </Card.Body>
    </Card.Root>
  )
}

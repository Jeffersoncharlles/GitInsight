import { useParams } from 'react-router'
import { Card } from '@/components/ui/card'
import { useUserQuery } from '@/shared/hooks/useUserQuery'

export const UserProfileRepositoryContainer = () => {
  const params = useParams()
  const fullName = params['*'] || ''

  const [username] = fullName.split('/')
  const userQuery = useUserQuery(username)

  return (
    <Card.Root>
      <Card.Body>
        <div className="">
          <div>
            <h1>{userQuery.data.name || username}</h1>
          </div>
        </div>
      </Card.Body>
    </Card.Root>
  )
}

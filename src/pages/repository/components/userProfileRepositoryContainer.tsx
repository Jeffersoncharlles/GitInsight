import { Link, useParams } from 'react-router'
import { Card } from '@/components/ui/card'
import { useUserQuery } from '@/shared/hooks/useUserQuery'

export const UserProfileRepositoryContainer = () => {
  const params = useParams()
  const fullName = params['*'] || ''

  const [username] = fullName.split('/')
  const { data: user, isError, error } = useUserQuery(username)

  if (isError) {
    return (
      <div className="alert alert-danger">
        {(error as Error).message ||
          'Ocorreu um erro ao carregar o perfil do usuário.'}
      </div>
    )
  }

  return (
    <Card.Root>
      <Card.Body>
        <img
          src={user?.avatarUrl}
          alt={user?.login}
          className="rounded-circle mb-3"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <h3 className="h5 mb-1 fw-semibold">{user?.login}</h3>
        <p className="text-muted mb-3">Proprietário</p>

        <div className="d-grid">
          <Link
            to={`https://github.com/${user?.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Ver Perfil no GitHub
          </Link>
        </div>
      </Card.Body>
    </Card.Root>
  )
}

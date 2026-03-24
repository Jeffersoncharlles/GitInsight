import { UserPlus, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'

export type UserProfileProps = {
  user: {
    avatarUrl: string
    name: string | null
    login: string
    bio: string | null
    followers: number
    following: number
    email: string | null
    publicRepos: number
  }
}

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <Card.Root>
      <Card.Body className="text-center">
        <img
          src={user?.avatarUrl}
          alt={user?.name || user?.login}
          className="rounded-circle mb-3 object-fit-cover "
          style={{ width: '120px', height: '120px' }}
        />
        <h2 className="h4 mb-1 fw-semibold">{user?.name || user?.login}</h2>
        <p className="text-muted mb-3">@{user?.login}</p>
        {user.bio && (
          <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
            {user.bio}
          </p>
        )}

        <div className="d-flex justify-content-around align-items-center border-top pt-3">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center mb-1">
              <Users size={18} className="text-primary me-1" />
              <span className="fw-semibold">{user.followers}</span>
            </div>
            <small className="text-muted">Seguidores</small>
          </div>

          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center mb-1">
              <UserPlus size={18} className="text-primary me-1" />
              <span className="fw-semibold">{user.following}</span>
            </div>
            <small className="text-muted">Seguindo</small>
          </div>
        </div>
        <div className="mt-3 pt-3 border-top">
          <span className="badge bg-primary rounded-pill fs-6">
            {user?.publicRepos} Repositórios
          </span>
        </div>
      </Card.Body>
    </Card.Root>
  )
}

export default UserProfile

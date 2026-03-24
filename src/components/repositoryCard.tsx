import { Star } from 'lucide-react'
import { Card } from './ui/card'

interface RepositoryCardProps {
  repo: {
    id: number
    name: string
    description: string | null
    stargazers_count: number
    language: string | null
    html_url: string
  }
}

export const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <Card.Root className="card-hover" style={{ cursor: 'pointer' }}>
      <Card.Body className="d-flex flex-column">
        <h5 className="card-title text-primary mb-2 fw-semibold">
          {repo.name}
        </h5>
        <p className="card-text text-secondary mb-3 flex-grow-1">
          {repo.description || 'Sem descrição'}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          {repo.language && (
            <span className="badge bg-light text-dark border">
              {repo.language}
            </span>
          )}
          <span className="badge bg-warning text-dark d-flex align-items-center">
            <Star size={14} />
            {repo.stargazers_count} stars
          </span>
        </div>
      </Card.Body>
    </Card.Root>
  )
}

export default RepositoryCard

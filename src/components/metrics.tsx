import { AlertCircle, GitFork, Star, Tag } from 'lucide-react'

interface MetricsProps {
  repository: {
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    topics: string[]
  }
}

export const Metrics = ({ repository }: MetricsProps) => {
  return (
    <div className="row g-3 mb-4">
      <div className="col-6 col-md-3">
        <div className="d-flex align-items-center p-3 bg-light rounded">
          <Star size={24} className="text-warning me-2" />
          <div>
            <div className="fw-semibold fs-5">
              {repository.stargazers_count.toLocaleString()}
            </div>
            <small className="text-muted">Estrelas</small>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="d-flex align-items-center p-3 bg-light rounded">
          <GitFork size={24} className="text-primary me-2" />
          <div>
            <div className="fw-semibold fs-5">
              {repository.forks_count.toLocaleString()}
            </div>
            <small className="text-muted">Forks</small>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="d-flex align-items-center p-3 bg-light rounded">
          <AlertCircle size={24} className="text-danger me-2" />
          <div>
            <div className="fw-semibold fs-5">
              {repository.open_issues_count.toLocaleString()}
            </div>
            <small className="text-muted">Issues</small>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="d-flex align-items-center p-3 bg-light rounded">
          <Tag size={24} className="text-success me-2" />
          <div>
            <div className="fw-semibold fs-5">{repository.topics.length}</div>
            <small className="text-muted">Topics</small>
          </div>
        </div>
      </div>
    </div>
  )
}

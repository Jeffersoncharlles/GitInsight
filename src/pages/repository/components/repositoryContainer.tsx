import { Circle, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'
import { Metrics } from '@/components/metrics'
import { Card } from '@/components/ui/card'
import { useRepoDetailQuery } from '@/pages/repository/hooks/useRepoDetailQuery'
import { formatDate } from '@/shared/utils/format-date'
import { languageColors } from '@/shared/utils/languageColors'

export const RepositoryContainer = () => {
  const params = useParams()
  const fullName = params['*'] || ''

  const isInvalidUrl =
    !fullName?.trim() ||
    !fullName.includes('/') ||
    fullName.split('/').length !== 2

  const {
    data: repository,
    isError,
    isLoading,
    error,
  } = useRepoDetailQuery(fullName)

  if (isInvalidUrl) {
    return <Navigate to="/" replace />
  }
  if (isError)
    return (
      <div className="alert alert-danger">
        {(error as Error).message ||
          'Ocorreu um erro ao carregar os repositórios. Tente novamente mais tarde.'}
      </div>
    )

  if (isLoading) return <div className="alert alert-danger">loading.....</div>

  return (
    <div className="row g-3 mb-4">
      <Card.Root>
        <Card.Body>
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-3">
            <div className="w-100 w-sm-auto text-break">
              <h1 className="h4 fw-bold mb-1">{repository.name}</h1>
              <p className="text-muted small mb-0">{repository.full_name}</p>
            </div>
            <Link
              to={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm d-flex align-items-center justify-content-center gap-2 px-3 w-100 w-sm-auto ms-sm-auto"
            >
              <ExternalLink size={18} />

              <span>Ver no GitHub</span>
            </Link>
          </div>
          <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
            {repository.description}
          </p>
          <Metrics repository={repository} />

          {repository.language && (
            <div className="mb-4">
              <h6 className="fw-semibold mb-2">Linguagem Principal</h6>
              <div className="d-flex align-items-center">
                <Circle
                  size={14}
                  fill={languageColors[repository.language] || '##858585'}
                  stroke={languageColors[repository.language] || '##858585'}
                  className="me-2"
                />
                <span className="badge bg-light text-dark border fs-6">
                  {repository.language}
                </span>
              </div>
            </div>
          )}

          {repository.topics && repository.topics.length > 0 && (
            <div className="mb-4">
              <h6 className="fw-semibold mb-3">Topics</h6>
              <div className="d-flex flex-wrap">
                {repository.topics.map((topic, index) => (
                  <span
                    key={String(index)}
                    className="badge bg-primary me-2 mb-2"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-3 border-top mt-auto">
            <p className="text-muted small mb-0">
              Última atualização:{' '}
              <strong>{formatDate(repository.updated_at)}</strong>
            </p>
          </div>
        </Card.Body>
      </Card.Root>
    </div>
  )
}

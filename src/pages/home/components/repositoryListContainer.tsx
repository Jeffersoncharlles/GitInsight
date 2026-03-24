import { useState } from 'react'
import { Link } from 'react-router'
import RepositoryCard from '@/components/repositoryCard'
import { RepositoryCardSkeleton } from '@/components/skeletons/repositoryCardSkeleton'
import { useReposQuery } from '@/pages/home/hooks/useReposQuery'
import type { OrderBy } from '@/services/types'

export const RepositoryListContainer = ({ username }: { username: string }) => {
  const [orderBy, setOrderBy] = useState<OrderBy>('stars')
  const {
    data: repos,
    isLoading,
    isError,
    error,
  } = useReposQuery(username, orderBy)

  if (isError)
    return (
      <div className="alert alert-danger">
        {(error as Error).message ||
          'Ocorreu um erro ao carregar os repositórios. Tente novamente mais tarde.'}
      </div>
    )
  if (isLoading) return <RepositoryCardSkeleton />

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="h5 mb-0 fw-semibold">Repositórios</h3>
        <select
          name=""
          id="sort"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value as OrderBy)}
        >
          <option value="stars">Mais Estrelas</option>
          <option value="name">Nome (A-Z)</option>
          <option value="date">Mais Recente</option>
        </select>
      </div>

      <div className="row g-3">
        {repos?.map((repo) => (
          <div key={repo.id} className="col-12 col-md-6 col-lg-4">
            <Link
              to={`/repository/${repo.full_name}`}
              className="text-decoration-none text-reset d-block h-100"
            >
              <RepositoryCard repo={repo} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

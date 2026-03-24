import { Link } from 'react-router'
import RepositoryCard from '@/components/repositoryCard'
import { RepositoryCardSkeleton } from '@/components/skeletons/repositoryCardSkeleton'
import { useReposQuery } from '@/pages/home/hooks/useReposQuery'

export const RepositoryListContainer = ({ username }: { username: string }) => {
  const { data: repos, isLoading, isError } = useReposQuery(username, 'stars')

  if (isError)
    return (
      <div className="alert alert-danger">Erro ao carregar repositórios.</div>
    )
  if (isLoading)
    return (
      <div className="row g-4">
        {[...Array(6)].map((_, index) => (
          <div key={String(index)} className="col-12 col-md-6 col-lg-4">
            <RepositoryCardSkeleton />
          </div>
        ))}
      </div>
    )

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="h5 mb-0 fw-semibold">Repositórios</h3>
        <select name="" id="">
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

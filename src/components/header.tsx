import { ArrowLeft } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router'
import { SearchHeader } from '@/components/searchHeader'
import { Button } from '@/components/ui/button'

export const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isHome = pathname === '/'
  return (
    <header
      className="py-5 d-flex align-items-center shadow-sm border-bottom transition-all bg-primary text-white"
      style={{ minHeight: '245px' }}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          {!isHome && (
            <div className="col-auto position-absolute start-0 z-1 ms-3">
              <Button
                onClick={() => navigate(-1)}
                className="btn-light border shadow-sm d-flex align-items-center gap-2"
              >
                <ArrowLeft size={18} /> Voltar
              </Button>
            </div>
          )}

          <div className="col-12 text-center  ">
            <Link to="/" className="text-decoration-none text-inherit">
              <h1 className="text-center  fs-3 fw-semibold text-white">
                GitInsight
              </h1>
            </Link>

            {isHome && (
              <div className="mt-4 row justify-content-center">
                <div className="col-12 col-lg-8">
                  <SearchHeader />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

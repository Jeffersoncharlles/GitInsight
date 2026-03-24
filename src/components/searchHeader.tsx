import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const searchSchema = z.object({
  username: z
    .string()
    .min(3, 'Username e requerido e deve conter pelo menos 3 caracteres'),
})

type SearchFormData = z.infer<typeof searchSchema>

export const SearchHeader = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    values: {
      username: query,
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.trim() === '') {
      navigate('/', { replace: true })
    }
  }

  const onSubmit = (data: SearchFormData) => {
    navigate(`/?q=${encodeURIComponent(data.username)}`)
  }

  const { onChange, ...usernameRegister } = register('username')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <Input.Root>
            <Input.Input
              aria-label="Buscar usuário do GitHub"
              className=""
              placeholder="Search..."
              {...usernameRegister}
              onChange={(e) => {
                onChange(e)
                handleInputChange(e)
              }}
            />
            <Input.Icon>
              <Search />
            </Input.Icon>
            <Button inputButton type="submit">
              Buscar
            </Button>
          </Input.Root>
          <div
            className={`d-block text-start mt-2 ${errors.username ? 'visible' : 'invisible'}`}
          >
            <span className="badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 fw-normal rounded-pill px-4 py-2 fs-6">
              {errors.username?.message || 'placeholder'}
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}

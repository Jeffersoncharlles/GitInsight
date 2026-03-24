import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { getUser } from '@/services/get-user'
import { useUserQuery } from '@/shared/hooks/useUserQuery'

jest.mock('@/services/get-user')

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useUserQuery Hook', () => {
  it('should fetch user data successfully', async () => {
    ;(getUser as jest.Mock).mockResolvedValue({
      login: 'jefferson',
      avatar_url: 'http://github.com/jeff.png',
    })

    const { result } = renderHook(() => useUserQuery('jefferson'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data?.avatarUrl).toBe('http://github.com/jeff.png')
  })
})

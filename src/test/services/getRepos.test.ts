import { getRepos } from '@/services/getRepos'
import { api } from '@/shared/libs/api'
import { mockReposResponse } from '@/test/mocks/mock-repos'

jest.mock('@/shared/libs/api', () => ({
  api: {
    get: jest.fn(),
  },
}))

describe('getRepos Service', () => {
  it('should fetch repos data successfully', async () => {

    ;(api.get as jest.Mock).mockResolvedValue({ data: mockReposResponse })

    const repos = await getRepos('jeffersoncharlles')
    expect(repos.length).toBe(2)
  })
})

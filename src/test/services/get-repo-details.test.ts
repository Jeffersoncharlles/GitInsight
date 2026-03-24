import { getRepoDetails } from '@/services/get-repo-details'

import { api } from '@/shared/libs/api'
import { mockRepoDetailResponse } from '@/test/mocks/mock-repos'

jest.mock('@/shared/libs/api', () => ({
  api: {
    get: jest.fn(),
  },
}))

describe('getRepoDetails Service', () => {
  it('should fetch repo details successfully', async () => {

    ;(api.get as jest.Mock).mockResolvedValue({ data: mockRepoDetailResponse })

    const repo = await getRepoDetails('jeffersoncharlles/git-insight')

    expect(repo.name).toBe('git-insight')
  })
  it('should handle fetch repo details error ', async () => {

    ;(api.get as jest.Mock).mockRejectedValue(
      new Error('Failed to fetch repo details'),
    )

    await expect(
      getRepoDetails('jeffersoncharlles/git-insight'),
    ).rejects.toThrow('Failed to fetch repo details')
  })
})

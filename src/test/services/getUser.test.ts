import { getUser } from '@/services/get-user'
import { api } from '@/shared/libs/api'
import { mockUser } from '@/test/mocks/mock-user'

jest.mock('@/shared/libs/api', () => ({
  api: {
    get: jest.fn(),
  },
}))

describe('getUser Service', () => {
  it('should fetch user data successfully', async () => {

    ;(api.get as jest.Mock).mockResolvedValue({ data: mockUser })

    const user = await getUser('jeffersoncharlles')
    expect(user.login).toBe('jeffersoncharlles')
  })
})

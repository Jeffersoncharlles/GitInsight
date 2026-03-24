export const mockReposResponse = [
  {
    id: 123456,
    name: 'fintrack-pro',
    full_name: 'Jeffersoncharlles/fintrack-pro',
    description: 'Sistema de controle financeiro com Clean Architecture',
    stargazers_count: 50,
    language: 'TypeScript',
    html_url: 'https://github.com/Jeffersoncharlles/fintrack-pro',
    updated_at: '2026-03-20T14:30:00Z',
  },
  {
    id: 789012,
    name: 'git-insight',
    full_name: 'Jeffersoncharlles/git-insight',
    description: null,
    stargazers_count: 10,
    language: null,
    html_url: 'https://github.com/Jeffersoncharlles/git-insight',
    updated_at: '2026-03-24T10:00:00Z',
  },
]

export const mockRepoDetailResponse = {
  name: 'git-insight',
  full_name: 'Jeffersoncharlles/git-insight',
  description: 'Dashboard para análise de perfis do GitHub',
  stargazers_count: 15,
  forks_count: 5,
  language: 'TypeScript',
  html_url: 'https://github.com/Jeffersoncharlles/git-insight',
  owner: {
    login: 'Jeffersoncharlles',
    avatar_url: 'https://github.com/Jeffersoncharlles.png',
  },
  topics: ['react', 'typescript', 'zod', 'tanstack-query'],
  open_issues_count: 2,
  updated_at: '2026-03-24T12:00:00Z',
}

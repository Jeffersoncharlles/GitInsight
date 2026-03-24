import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import { RoutesPage } from '@/routes'
import { queryClient } from '@/shared/libs/react-query'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

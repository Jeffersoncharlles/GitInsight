import { Route, Routes } from 'react-router'
import { LayoutRoot } from '@/pages/_layout'
import { Home } from '@/pages/home'
import { Repository } from '@/pages/repository'

export const RoutesPage = () => {
  return (
    <Routes>
      <Route element={<LayoutRoot />}>
        <Route index path="/" element={<Home />} />
        <Route path="/repository/*" element={<Repository />} />
      </Route>
    </Routes>
  )
}

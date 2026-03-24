import { Outlet } from 'react-router'

import { Header } from '../components/header'

export const LayoutRoot = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="container py-5">
        <Outlet />
      </main>
    </div>
  )
}

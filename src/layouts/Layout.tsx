import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <div>from Layout</div>
        <Outlet />
    </>
  )
}

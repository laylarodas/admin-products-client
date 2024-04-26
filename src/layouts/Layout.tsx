import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <header className=' bg-slate-800'>
            <div className=' max-w-6xl mx-auto py-10'>
                <h1 className=' text-4xl font-bold text-white'>Product Manager</h1>
            </div>
        </header>
        <main className=' mt-10 max-w-6xl mx-auto p-10 bg-white shadow'>
            <Outlet />
        </main>
        
    </>
  )
}

import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <> 
      <div className='flex justify-between '>
        <h2 className=' text-4xl font-semibold text-slate-500'>Products</h2>
        <Link to="products/new" className=' rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'>Add Product</Link>
      </div>
    </>
  )
}

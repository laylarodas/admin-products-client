import { Link, useLoaderData } from 'react-router-dom'
import { getProducts } from '../services/ProductService'
import { ProductDetail } from '../components/ProductDetail'
import { Product } from '../types'

export async function loader() {

  const products = await getProducts()

  return products
}

export const Products = () => {

  const products = useLoaderData() as Product[];



  return (
    <>
      <div className='flex justify-between '>
        <h2 className=' text-4xl font-semibold text-slate-500'>Products</h2>
        <Link to="products/new" className=' rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'>Add Product</Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white text-left">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
              {products.map(product => (
                <ProductDetail 
                  key={product.id}
                  product={product}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

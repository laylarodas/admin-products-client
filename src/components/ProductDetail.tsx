import { Form, useNavigate, ActionFunctionArgs, redirect, useFetcher } from 'react-router-dom'
import { formatCurrency } from "../helpers"
import { Product } from "../types"
import { deleteProduct } from '../services/ProductService'


type ProductDetailProps = {
    product: Product
}

export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {

        await deleteProduct(+params.id)
        return redirect('/')
    }
}

export const ProductDetail = ({ product }: ProductDetailProps) => {

    const fetcher = useFetcher();

    const navigate = useNavigate();

    const isAvailable = product.availability

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method='POST'>
                    <button
                        type='button'
                        name='availability'
                        value={product.availability.toString()}
                        className={`${isAvailable ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
                    >
                        {isAvailable ? 'Available' : 'Not available'}
                    </button>
                </fetcher.Form>
                
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`products/${product.id}/edit`)}
                        className='bg-orange-500 hover:bg-orange-400 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                    >Edit</button>

                    <Form 
                        className='w-full' 
                        method='POST' 
                        action={`products/${product.id}/delete`}
                        onSubmit={(e) => {
                            if(!confirm('Delete?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="Delete"
                            className='bg-red-600 hover:bg-red-500 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        />
                    </Form>
                </div>
            </td>
        </tr>
    )
}

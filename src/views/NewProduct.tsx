import { Link, Form, useActionData, ActionFunctionArgs, redirect } from 'react-router-dom'
import { ErrorMessage } from '../components/ErrorMessage'
import { addProduct } from '../services/ProductService'

export async function action({request} : ActionFunctionArgs){

  const data = Object.fromEntries(await request.formData());

 
  let error = ''
  if(Object.values(data).includes('')){
    error = 'All fields are required'
  }

  if(error.length){
    return error
  }

  await addProduct(data)
  
  return redirect('/')
}


export const NewProduct = () => {

  const error = useActionData() as string;

  return (
    <>

      <div className='flex justify-between items-center'>
        <h2 className=' text-4xl font-semibold text-slate-500 '>Register Product</h2>
        <Link to="/" className='my-10 rounded-md text-sm font-bold text-indigo-600  hover:text-indigo-500'>&#8594; Back to Product</Link>


      </div>

      {
        error && <ErrorMessage>{error}</ErrorMessage>
      }

      <Form
        className="mt-10"
        method='POST'
      >

        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="name"
          >Product Name:</label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Product name"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="price"
          >Price:</label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Product price. ex. 200, 300"
            name="price"
          />
        </div>
        <input
          type="submit"
          className="mt-5  bg-indigo-600 py-2 px-8 text-white font-bold text-lg cursor-pointer rounded hover:bg-indigo-500"
          value="Register Product"
        />
      </Form>
    </>


  )
}

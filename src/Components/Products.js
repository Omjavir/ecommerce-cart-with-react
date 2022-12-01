import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import { CartState } from './Context'


const Products = () => {
  const { state } = CartState();
  const { products } = state;

  return (
    <div className='product' style={{ width: "100%", display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((prod, i) => (
        <Link to={`product/${prod.id}`}>
          <div className="max-w-sm bg-white border justify-center border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-10">
            <div className='justify-center'>
              <img className="rounded-t-lg h-96 p-10" src={prod.image} alt="" />
            </div>
            <div className="p-5">
              <div>
                <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white no-underline">{prod.title.slice(0, 45)}....</h6>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prod.category}</p>
              <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                ₹{Math.round(prod.price)}/-
              </p>
            </div>
          </div>

        </Link>
      ))
      }
    </div >
  )
}

export default Products
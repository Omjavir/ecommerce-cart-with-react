import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartState } from './Context';
import './styles.css'

const Cart = () => {
  const { state, dispatch } = CartState();
  const { cart } = state;
  const [total, setTotal] = useState(0)
  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        qty, id
      }
    })
  }
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    })
  }
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px' }}>
      {cart.length > 0 ?
        (<div className='flex flex-wrap' style={{ width: '100%' }}>
          {cart.map(carItem => (
            <div class="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-wrap">
              <div>
                <img class="rounded-t-lg p-5" src={carItem.image} alt="" />
              </div>
              <div class="p-5">
                <p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{carItem.title}</h5>
                </p>
                <div style={{ marginTop: '7%' }}>
                  <button onClick={() => changeQty(carItem.id, carItem.qty + 1)}>+</button>
                  <span style={{ marginLeft: "10px", marginRight: '10px', fontSize: "20px" }}>{carItem.qty}</span>
                  <button onClick={() => changeQty(carItem.id, carItem.qty - 1)}>-</button>
                </div>
                <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  ₹ {Math.round(carItem.price)}/-
                </div>
              </div>
            </div>
          ))}
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Subtotal ₹{Math.round(total)}/-</h1>
                <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={() => clearCart()}>Clear Cart</button>
              </div>
            </div>
          </section>
        </div>
        )
        :
        (<b style={{ width: '80%', fontSize: '30px', textAlign: 'center' }}>Cart is empty <br />
          <Link to={'/'}> <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={() => clearCart()}>Fill Cart</button></Link>
        </b>
        )
      }
    </div>
  )
}

export default Cart
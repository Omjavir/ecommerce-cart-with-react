import React, { useEffect, useState } from 'react'
import { CartState } from './Context';

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
  const clearCart = () =>{
    dispatch({
      type:"CLEAR_CART",
    })
  }
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])
  return (
    <div style={{ display: 'flex', marginTop: '30px' }}>
      {cart.length > 0 ?
        (<div style={{ width: '80%' }}>
          {cart.map(carItem => (
            <div style={{ display: "flex", boxShadow: "0px 3px 10px grey", width: "95%", justifyContent: 'space-between', margin: '20px' }} key={carItem.id}>
              <img src={carItem.image} style={{ height: "20vh", width: '20%', padding: '10px' }} alt="" />
              <p style={{ marginTop: "80px", width: '40%', fontSize: '20px' }}>{carItem.title}</p>
              <div style={{ marginTop: '7%' }}>
                <button onClick={() => changeQty(carItem.id, carItem.qty + 1)}>+</button>
                <span style={{ marginLeft: "10px", marginRight: '10px', fontSize: "20px" }}>{carItem.qty}</span>
                <button onClick={() => changeQty(carItem.id, carItem.qty - 1)}>-</button>
              </div>
              <p style={{ marginTop: "80px", marginRight: '40px', fontSize: '20px' }}>₹ {Math.round(carItem.price)}/-</p>
            </div>
          ))}
        </div>)
        :
        (<b style={{ width: '80%', fontSize: '30px', textAlign: 'center' }}>Cart is empty</b>)
      }
      <div style={{ width: '20%', textAlign: 'center', fontSize: '25px', height: '100vh', boxShadow: "0px 3px 10px grey" }}>
        <b>Subtotal<br />₹ {Math.round(total)}/-</b>
        <br />
        <button style={{ backgroundColor: "purple", padding: '10px', fontSize: '20px', borderRadius: '10px', textAlign: 'center', marginLeft: '20px', marginTop: '20px', color: 'whitesmoke' }} onClick={() => clearCart()}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
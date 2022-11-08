import React from 'react'
import { Link } from 'react-router-dom';
import { CartState } from './Context'


const Products = () => {
  const { state } = CartState();
  const { products } = state;

  return (
    <div style={{ width: "85%", display: "flex", flexWrap: 'wrap', margin: 'auto' }}>
      {products.map((prod, i) => (
        <Link to={`product/${prod.id}`}><div style={{ width: '300px', height: "460px", textAlign: 'center', margin: '10px', boxShadow: '0px 2px 5px grey' }} key={i}>
          <img src={prod.image} style={{ width: "100%", height: '30vh' }} alt="" />
          <p style={{ fontSize: "20px" }}>{prod.title.slice(0, 25)}...</p>
          <p style={{ fontSize: "15px" }}>{prod.description.slice(0, 35)}...</p>
          <p style={{ fontSize: "15px" }}>{prod.category}</p>
          <p style={{ fontSize: "15px" }}>{prod.rating.count} reviews</p>
          <p style={{ fontSize: "20px" }}>₹{Math.round(prod.price)}/-</p>
          {/* <button style={{ backgroundColor: "blueviolet", padding: '6px', color: 'white', fontSize: '20px', borderRadius: '10px' }} onClick={() => dispatch({
            type: "ADD_TO_CART",
            payload: {
              id: prod.id,
              title: prod.title,
              image: prod.image,
              price: prod.price,
              qty: 1
            }
          })}>Add to Cart</button> */}
        </div></Link>
      ))
      }
    </div >
  )
}

export default Products
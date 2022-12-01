import React from 'react'
import { CartState } from './Context'

const Filters = () => {
  const { dispatch } = CartState()
  return (
    <div className='filter' style={{ backgroundColor: "lightgreen", width: "15%" }}>
      <h3 style={{ fontSize: '25px' }}>Sort by price</h3>
      <p style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => dispatch({ type: "HIGH_TO_LOW" })}>High to Low</p>
      <p style={{ fontSize: '20px', cursor: 'pointer' }}>Low to High</p>
    </div>
  )
}

export default Filters
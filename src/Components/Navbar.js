import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from './Context'

const Navbar = () => {
  const { state } = CartState();
  const { cart } = state;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "lightsteelblue", position: 'sticky' }}>
      <p style={{ margin: '20px', fontSize: "30px" }}><Link to={'/'}> E-CommercE</Link></p>
      <p style={{ margin: '20px' }}><Link to={'/cart'}><AiOutlineShoppingCart size={30} /></Link>
        <span style={{ fontSize: "25px" }}>{cart.length}</span></p>
    </div>
  )
}

export default Navbar
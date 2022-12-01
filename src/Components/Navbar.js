import React from 'react'
import { Badge } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from './Context'

const Navbar = () => {
  const { state } = CartState();
  const { cart } = state;
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={'/'} class="flex items-center">
            <img src="https://thumbs.dreamstime.com/b/e-commerce-logornyou-can-use-icons-commercial-use-mobile-app-pc-e-commerce-logo-you-can-use-icons-194797385.jpg" class="h-16 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">E-commerce</span>
          </Link>
          <div class="flex" id="navbar-default">
            <p><Link to={'/cart'}><AiOutlineShoppingCart size={40} /></Link></p><Badge className='' bg="secondary">{cart.length}</Badge>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
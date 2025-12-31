import { Heart, ShoppingBag, ShoppingBagIcon, ShoppingBasket, ShoppingCart, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { DropdownMenuDemo } from './UserMenu'

const Navbar = () => {
  return (
    <nav className='bg-background border-b-2'>
      <div className='container flex justify-between items-center p-4'>
        <a className='flex gap-3 items-center'>
          <ShoppingBag size={20} className='text-primary' />
          Shopora
        </a>
        <ul className='flex gap-3 '>
          <li>
            <NavLink to={"/"} className='text-main'>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/support"}>Support</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <ul className='flex items-center gap-3'>
          <li>
            <NavLink to={"/wishlist"}>
              <Heart size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <ShoppingCart size={20} />
            </NavLink>
          </li>
          <li>
            <DropdownMenuDemo />
          </li>




        </ul>
      </div>



    </nav>
  )
}

export default Navbar
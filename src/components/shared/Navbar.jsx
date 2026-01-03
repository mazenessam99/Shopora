import { MenuIcon, ShoppingBag, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DropdownMenuDemo } from './UserMenu'
import { Button } from '../ui/button'
import { NAV_LINKS } from '@/constants'
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from '../ui/mode-toggle'
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <nav className=' border-b-2 shadow-sm sticky top-0 z-50'>
      <div className='container flex justify-between items-center p-4'>
        <NavLink to="/" className="flex gap-3 items-center text-2xl font-bold text-primary">
          <ShoppingBag size={24} />
          Shopora
        </NavLink>
        <ul className='hidden md:flex gap-3' aria-label="Main navigation">
          {NAV_LINKS.map((nav, key) => (
            <li key={key}>
              <NavLink to={nav.path} className={({ isActive }) =>
                ` hover:text-primary transition cursor-pointer ${isActive ? "text-primary font-semibold" : "text-main"
                }`
              }
              >
                {nav.label}</NavLink>
            </li>
          ))}
        </ul>


        <ul className='hidden md:flex items-center gap-3'>

          <li className=''>
            <NavLink to={"/cart"} className='text-main'>
              <Button variant="outline" size="icon" className="rounded-full cursor-pointer"><ShoppingCart size={20} /></Button>
            </NavLink>
          </li>

          <li><ModeToggle /></li>
          <li>
            <DropdownMenuDemo />
          </li>




        </ul>
        <div className='md:hidden flex gap-3 items-center'>
          <ModeToggle />
          <Button className='flex md:hidden w-9 h-9 rounded-full' onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <MenuIcon className=' ' size={20} />
          </Button>
          
        </div>




      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ y: "-20px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-20px", opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-16 left-0 md:hidden bg-background border-t-2 p-4 w-full z-50 shadow-lg"
            >
              <ul className="flex flex-col gap-3" aria-label="Main navigation">
                {NAV_LINKS.map((nav, key) => {
                  const Icon = nav.icon;
                  return (
                    <li key={key}>
                      <NavLink
                        to={nav.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 transition-colors duration-200 ${isActive ? "text-primary font-semibold" : "text-main hover:text-primary"
                          }`
                        }
                        onClick={() => setIsMobileOpen(false)} >
                        <Icon size={17} />
                        {nav.label}
                      </NavLink>
                    </li>
                  );
                })}
                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `flex items-center gap-2 transition-colors duration-200 ${isActive ? "text-primary font-semibold" : "text-main hover:text-primary"
                      }`
                    }
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <ShoppingCart size={17} />
                    Cart
                  </NavLink>
                </li>

              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>





    </nav>
  )
}

export default Navbar
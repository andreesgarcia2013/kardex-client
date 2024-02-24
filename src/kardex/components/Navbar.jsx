import React, { useState } from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAuth } from '../../auth/context/authContext';
import { useNavigate } from 'react-router-dom';


export const Navbar = ({navItems=[]}) => {
  const [nav, setNav] = useState(false);
  const navigate=useNavigate()
  const { logout, token } = useAuth();
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const onLogout =()=>logout(token);
  // Array containing navigation items


  return (
    <div className='bg-blue-950 flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-white'>KARDEX</h1>

      {/* Escritorio */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            onClick={()=>navigate(item.route)}
            className='p-4 hover:bg-green-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black '
          >
            {item.text}
          </li>
        ))}
        <li
            onClick={onLogout}
            className='p-4 hover:bg-green-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black '
          >Salir</li>
      </ul>

      {/* Movil */}
      <div onClick={handleNav} className='block  md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-2/3 h-full border-r border-r-gray-900 bg-blue-950 ease-in-out duration-500'
            : 'ease-in-out w-2/3 duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-white m-4'>KARDEX.</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-green-300 duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
        <li
            onClick={onLogout}
            className='p-4 border-b rounded-xl hover:bg-green-300 duration-300 hover:text-black cursor-pointer border-gray-600'
          >Salir</li>
      </ul>
    </div>
  );
}

 import React from 'react'
 import { Link } from 'react-router-dom'
 const NavbarTow = () => {
  return (
    <>
    <nav className=' py-5 bg-[#4CC9FE] flex justify-around items-center'>
        <h1 className=' text-2xl font-bold text-yellow-50'> Local Store</h1>
    <ul className=' flex justify-center gap-5'>
      <li className=' text-xl font-bold text-[#fff] active:scale-[1.1]'> <Link to={'/'}> Blog</Link></li>
      <li className=' text-xl font-bold text-[#fff] active:scale-[1.1]'> <Link to={'/LayoutTow/ProductSalses'}> ProductSalses</Link></li>
      <li className=' text-xl font-bold text-[#fff] active:scale-[1.1]'> <Link to={'/LayoutTow/SalsesMan'}> SalsesMan</Link></li>
      <li className=' text-xl font-bold text-[#fff] active:scale-[1.1]'> <Link to={'/LayoutTow/Services'}> Services</Link></li>
    </ul>
    </nav>
    
    
    </>  )
 }

 export default NavbarTow
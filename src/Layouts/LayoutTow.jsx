 import React from 'react'
 import NavbarTow from '../Components/NavbarTow'
 import { Outlet } from 'react-router-dom'

 const LayoutTow = () => {
  return (
    <>
    <NavbarTow/>
    <Outlet/>
    
    </>
  )
 }

 export default LayoutTow
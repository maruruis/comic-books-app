import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-primary text-dark'>
        <Navbar/>
      
         <div id='main-container' className='container mx-auto'>
           <Outlet/>
        </div>
        
        <Footer/>
    </div>
  )
}

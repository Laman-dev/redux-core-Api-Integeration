import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from '../components/AllProducts/AllProducts'
import Cart from '../components/Cart/Cart'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'

function AllPages() {
  return (
    <>
    

    <BrowserRouter>
          <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AllProducts' element={<AllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </BrowserRouter>
 
    </>
  )
}

export default AllPages
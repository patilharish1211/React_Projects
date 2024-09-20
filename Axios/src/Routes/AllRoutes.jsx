import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Product from '../Components/Product'
import AddProduct from '../Components/AddProduct'
import Privatepage from '../Components/Privatepage'
import Description from '../Components/Description'

export const AllRoutes = () => {




  return (

    <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/product' element={
        <Privatepage >
          <Product />
        </Privatepage >
      }></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/addproduct' element={< AddProduct />}></Route>
      <Route path='/singlepage/:id' element={<Description />}></Route>
      <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>

    </Routes>

  )
}


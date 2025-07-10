import React from 'react'
import Home from '../Componets/Home'
import { Route, Routes } from "react-router-dom";
import Product from '../Componets/Product';
import Login from '../Componets/Login';
import About from '../Componets/About';
import Description from '../Componets/Description';
import Private from '../Componets/Private';


function AllRouter() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/product" element={
          <Private>
        <Product />
        </Private>
        }  />
        <Route path="/login" element={<Login />}  />
        <Route path="/description/:id" element={<Description />}  />
        <Route path="*" element={"Page Not Found"}  />
    </Routes>
    </div>
  )
}


export default AllRouter
import React from 'react'
import Home from '../Componets/Home'
import { Route, Routes } from "react-router-dom";
import Login from '../Componets/Login';
import About from '../Componets/About';
import Private from '../Componets/Private';
import ProductList from '../Componets/ProductList';
import ProductDetails from '../Componets/ProductDetails';
import EditProduct from '../Componets/EditProduct';
import DeleteProduct from '../Componets/DeleteProduct';


function AllRouter() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/edit/:id" element={<EditProduct />}  />
        <Route path="/delete/:id" element={<DeleteProduct />}  />
        <Route path="/product" element={
          <Private>
        <ProductList />
        </Private>
        }  />
        <Route path="/login" element={<Login />}  />
        <Route path="/description/:id" element={<ProductDetails />}  />
        <Route path="*" element={"Page Not Found"}  />
    </Routes>
    </div>
  )
}


export default AllRouter
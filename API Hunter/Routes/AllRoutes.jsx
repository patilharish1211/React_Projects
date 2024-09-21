import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import SingleProductPage from './SingleProductPage';
import Login from "./Login"
import PrivateRoute from "../Components/PrivateRoute"

const AllRoutes = () => {
  return (
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={  <PrivateRoute> <Dashboard /></PrivateRoute>} />
      <Route path="/products/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes
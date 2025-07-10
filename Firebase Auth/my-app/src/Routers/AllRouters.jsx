import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../components/PrivateRoutes'
import Login from '../components/Login'
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import SignUp from '../components/SignUp';
import Home from '../components/Home';

function AllRouters() {
  return (
    <>
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default AllRouters
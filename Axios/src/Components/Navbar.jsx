import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
            }
        }} to={"/"}>Home</NavLink>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
            }
        }} to={"/product"}>Product</NavLink>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
            }
        }} to={"/addproduct"}>AddProduct</NavLink>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
            }
        }} to={"/login"}>Login</NavLink>
    </div>
  )
}

export default Navbar
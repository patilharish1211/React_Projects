import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar" style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
        <NavLink to='/' className="neon-text">Home</NavLink>
        <NavLink to='/about' className="neon-text">About</NavLink>
        <NavLink to='/product' className="neon-text">Product</NavLink>
      </div>
    </div>
  );
}

export default Navbar;

// Displays the navigation bar.
// NavLink:- Creates navigation links with dynamic styling based on the active route. Uses react-router-dom for navigation.
// Links:-   Includes navigation to Home, About, Product, Login, and Add Product pages. Icons from FontAwesome are used for visual appeal.
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : '#FFFFF3',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none'
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: '20px', backgroundColor: '#DDA15E', height: '80px', alignItems: 'center' }}>
      <NavLink style={linkStyle} to="/">Home</NavLink>
      <NavLink style={linkStyle} to="/about">About</NavLink>
      <NavLink style={linkStyle} to="/product">Product</NavLink>
      <NavLink style={linkStyle} to="/login">
        <FontAwesomeIcon icon={faUser} /> Login
      </NavLink>
      <NavLink style={linkStyle} to="/addproduct">
        <FontAwesomeIcon icon={faPlus} /> Add Product
      </NavLink>
    </div>
  );
}

export default Navbar;

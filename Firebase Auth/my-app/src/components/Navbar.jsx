// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from "firebase/auth";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar className='d-flex justify-content-between' style={{backgroundColor:"#1d2026"} } variant="dark" expand="lg">
      <Container >
      <img src="https://i.postimg.cc/RZSD7FZd/logo.png" alt="" class="logo" />
        <Navbar.Brand style={{marginLeft:"35%"}} as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Button variant="danger" onClick={handleSignOut}>Log Out</Button>
              </>
            ) : (
              <Nav.Link  as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

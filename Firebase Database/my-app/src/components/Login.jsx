// src/components/Login.jsx
import React from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="mt-5">
      <h1 className='text-center'>Login</h1>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <div className='text-center mt-3'>
          <Button style={{border:"none", backgroundColor:"transparent"}} onClick={handleGoogleSignIn}>
            <GoogleButton />
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;

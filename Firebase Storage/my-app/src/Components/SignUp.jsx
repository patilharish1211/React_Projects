import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully created and signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);  // Optionally show an alert if there's an error
      });
  };

  return (
    <>
      <Container className="mt-5">
        <h1 className='text-center'>Sign Up Page</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="Enter email" 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm  Password</Form.Label>
            <Form.Control 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder="Confirm Password" 
            />
          </Form.Group>

          <Button onClick={onSubmit} variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>

        <div className='text-center mt-3'>
          <Button style={{border:"none", backgroundColor:"transparent"}} onClick={handleGoogleSignIn}>
            <GoogleButton />
          </Button>
        </div>
      </Container>
    </>
  )
}

export default SignUp;

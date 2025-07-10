import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';

const Login = () => {
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
   
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/dashboard");
      })
      .catch((err) => {
          console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <h1 className='text-center'>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={onSubmit} variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <div className='text-center mt-3'>
          <Button style={{border:"none", backgroundColor:"transparent"}} onClick={handleGoogleSignIn}>
            <GoogleButton />
          </Button>
          <h5><Link to={"/singup"}>Don't Have Account ?</Link></h5>

        </div>
      </Form>
    </Container>
  );
};

export default Login;

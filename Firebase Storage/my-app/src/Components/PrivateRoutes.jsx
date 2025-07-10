// src/components/PrivateRoutes.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const PrivateRoutes = ({ children }) => {
  const [user] = useAuthState(auth);

  // return user ? children : <Navigate to="/login" />;
  return user ? <Navigate to="/login" /> :  children;
};

export default PrivateRoutes;

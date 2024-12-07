import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Retrieve the token

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/" />;
  }

  return children;  // If token exists, render the protected content (children)
};

export default PrivateRoute;

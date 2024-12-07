import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token')); // Check if token exists before removing
localStorage.removeItem('token');
console.log(localStorage.getItem('token')); // Check if token is removed
  // Make sure this matches the key used during login
    console.log('User logged out successfully!');

    // Redirect to the login page (root path)
    navigate('/');
  };

  useEffect(() => {
    handleLogout();
  }, []);  // This will trigger logout immediately when the Logout component is rendered

  return (
    <div>
      <h2>Logging out...</h2>
      <p>You will be redirected to the login page shortly.</p>
    </div>
  );
};

export default Logout;

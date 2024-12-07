import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import DashboardLayoutBasic from './components/DashboardLayoutBasic';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';  // PrivateRoute is used for protected routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardLayoutBasic /></PrivateRoute>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

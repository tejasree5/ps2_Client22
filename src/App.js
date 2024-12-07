import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayoutBasic from './components/DashboardLayoutBasic';
import navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute';  // PrivateRoute is used for protected routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute><DashboardLayoutBasic /></PrivateRoute>} />
        <Route path="/navbar"  element={<PrivateRoute><Navbar /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

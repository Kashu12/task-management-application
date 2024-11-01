import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Route for Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Route for Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Route for Analytics */}
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;

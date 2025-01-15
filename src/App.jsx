import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Panel from './components/Panel';
import ForgotPassword from './components/Forgot-password';
import ResetPassword from './components/Reset-password';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* Más rutas para las otras vistas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

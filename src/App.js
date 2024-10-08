// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  
import Signup from './components/Signup';  
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import About from './components/About';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import ForgotPassword from './components/ForgotPassword';  // Import the ForgotPassword component
function App() {
  return (
    <Router>
      <div>
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<Login role="user" />} />  
          <Route path="/admin-login" element={<AdminLogin onClose={() => {}} onForgotPassword={() => {}} />} /> 
          <Route path="/signup" element={<Signup />} />  
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />  
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

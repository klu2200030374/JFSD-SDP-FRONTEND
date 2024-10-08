import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  
import './footer.css';  
import logo from '../assests/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} style={{height:"50px",width:"50px",borderRadius:"60px",borderColor:"#56a7a7"}}/>
        <h1 className="navbar-logo">Indian Heritage</h1>
        <div className="navbar-container1">
        
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

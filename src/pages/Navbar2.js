import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/virtual-tours">Virtual Tours</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

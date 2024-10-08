import React from "react";
import './Navbar.css'; 
function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">We'd love to hear from you! Reach out to us via any of the following methods:</p>
      
      <div className="contact-details">
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>Indian Heritage Street, Culture City</p>
          <p>Email: indianculture@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
        
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://linkedin.com" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

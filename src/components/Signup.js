import React, { useState } from 'react';
import './LoginSignup.css';

const Signup = ({ onLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with", {
      firstName,
      gender,
      age,
      country,
      email,
      password,
      phoneNumber
    });
    // Add your signup logic here
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />

          <label>Gender:</label>
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)} 
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Age:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />

          <label>Country:</label>
          <input 
            type="text" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required 
          />

          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />

          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />

          <button className="login-signup-button" type="submit">Signup</button>
        </form>

        <p className="login-link" style={{ marginLeft: "60px" }}>
          Already have an account?{' '}
          <a href="/login" onClick={onLogin}>Login</a> {/* Triggering login page view */}
        </p>
      </div>
    </div>
  );
};

export default Signup;

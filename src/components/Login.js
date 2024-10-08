import React, { useState } from 'react';
import './LoginSignup.css';

// Helper function to generate CAPTCHA
const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Login = ({ role, onClose, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Initialize CAPTCHA
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // CAPTCHA validation
    if (captchaInput !== captcha) {
      setError('Invalid CAPTCHA');
      setCaptcha(generateCaptcha()); // Reset CAPTCHA on error
      setLoading(false);
      return;
    }

    // Simulate API call to validate username, password, and role
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock login validation for 'user' role, this can be extended for other roles
          if (
            (role === 'user' && (username !== 'user' || password !== 'user'))
          ) {
            reject(new Error('Invalid username or password'));
          } else {
            resolve('Login successful');
          }
        }, 1000);
      });

      console.log(`Role: ${role}, Username: ${username}, Password: ${password}`);
      onClose(); // Call onClose after successful login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <h2> Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* CAPTCHA UI */}
          <label htmlFor="captcha" className="captcha-label">
            CAPTCHA: <strong style={{ color: 'red', fontSize: '20px' }}>{captcha}</strong>
          </label>
          <input
            type="text"
            id="captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <div className="login-actions">
            <button type="submit" className="login-signup-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;

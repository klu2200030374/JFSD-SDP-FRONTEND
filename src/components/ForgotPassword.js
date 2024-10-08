// src/components/ForgotPassword.jsx

import React, { useState } from 'react';
import './ForgotPassword.css'; // Import your CSS file

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setError('');

        // Simulate API call
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email === 'test@example.com') {
                        resolve('Email sent');
                    } else {
                        reject(new Error('Email not found'));
                    }
                }, 1000);
            });
            setSuccess(true);
            setEmail('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2>Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Reset link sent to your email!</p>}
                    <button type="submit" className="forgot-password-button">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";  // Import axios
import loginBanner from '../../assets/LoginBanner.svg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Use navigate for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
  
    console.log('Login payload:', { email, password });
  
    try {
      const response = await axios.post('https://fda-backend-64r7.onrender.com/api/auth/login', {
      // const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log('Login successful:', response.data);
      localStorage.setItem('username', email.split('@')[0]);
      localStorage.setItem('token', response.data.token);
  
      navigate('/home');
    } catch (err) {
      if (err.response) {
        console.error('Backend Error:', err.response.data);
      }
      setError('Invalid credentials. Please try again.');
    }
  };
  
  

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left Container */}
        <div className="login-left">
          <div className="login-form">
            <h1 className="login-title">
              Order <span className="highlight">UK</span>
            </h1>
            <h2>Welcome Back 👋</h2>
            <p>
              Today is a new day. It's your day. You shape it. <br /> Sign in to
              start ordering.
            </p>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Example@email.com"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <button type="submit" className="login-button">
                Sign in
              </button>
            </form>
            {error && <p className="error-text">{error}</p>} {/* Display error message */}
            <p className="signup-text">
              Don't have an account?{" "}
              <a href="/register" className="signup-link">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Right Container */}
        <div className="login-right">
          <div className="login-image">
            <img src={loginBanner} alt="Login Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

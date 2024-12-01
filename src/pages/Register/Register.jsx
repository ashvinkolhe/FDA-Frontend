/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import registerBanner from '../../assets/LoginBanner.svg';
import { useNavigate } from 'react-router-dom'; // useNavigate hook for navigation
import "./Register.css";
  
const Register = () => {
  const [formData, setFormData] = useState({
    username: '', // Use 'username' instead of 'name'
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();  // useNavigate hook for navigation

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Updating ${id} to ${value}`); // Debugging change event
    setFormData((prevState) => ({
      ...prevState,
      [id]: value // Dynamically update the respective field
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData); // Debugging form data before submission
    
    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simple check if any field is empty
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('Registration successful:', response);

      // Store JWT token in localStorage after successful registration
      localStorage.setItem("authToken", response.data.token); 

      // Redirect user to the login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error('Registration failed:', error);
      
      // If the backend returns a specific error message, display it
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Display the backend error message
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <div className="login-form">
            <h1 className="login-title">
              Order <span className="highlight">UK</span>
            </h1>
            <h2>Create an Account 👋</h2>
            <p>Start your journey with us today. It's your time to shine. <br /> Register to start ordering.</p>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <form onSubmit={handleRegister}>
              <div className="input-group">
                <label htmlFor="username" className="input-label">Username</label> {/* Changed name to username */}
                <input
                  id="username"  // Changed name to username
                  type="text"
                  value={formData.username}  // Changed name to username
                  placeholder="Your Username"
                  className="input-field"
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="input-label">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  placeholder="Example@email.com"
                  className="input-field"
                  onChange={handleChange}
                  autoComplete="username"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password" className="input-label">Password</label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  placeholder="At least 8 characters"
                  className="input-field"
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                <input
                  id="confirmPassword"  // Ensure the id matches the state property
                  type="password"
                  value={formData.confirmPassword}  // Ensure the value is controlled
                  placeholder="Confirm your password"
                  className="input-field"
                  onChange={handleChange}  // Same handler as password
                  autoComplete="new-password"
                />
              </div>

              <button type="submit" className="login-button">Sign up</button>
            </form>
            <p className="signup-text">
              Already have an account?{" "}
              <a href="/login" className="signup-link">Sign in</a>
            </p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-image">
            <img src={registerBanner} alt="Register Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

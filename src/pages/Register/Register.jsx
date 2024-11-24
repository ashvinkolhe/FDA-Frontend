/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import registerBanner from '../../assets/LoginBanner.svg'; // Change the image for the registration page

import "./Register.css"; // You can either reuse this CSS or create a new one for Register

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left Container */}
        <div className="login-left">
          <div className="login-form">
            <h1 className="login-title">
              Order <span className="highlight">UK</span>
            </h1>
            <h2>Create an Account 👋</h2>
            <p>
              Start your journey with us today. It's your time to shine.{" "}
              <br /> Register to start ordering.
            </p>
            <form>
              {/* Name Input Field */}
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  className="input-field"
                />
              </div>

              {/* Email Input Field */}
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Example@email.com"
                  className="input-field"
                />
              </div>

              {/* Password Input Field */}
              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  className="input-field"
                />
              </div>

              {/* Confirm Password Input Field */}
              <div className="input-group">
                <label htmlFor="confirm-password" className="input-label">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="input-field"
                />
              </div>

              <button type="submit" className="login-button">
                Sign up
              </button>
            </form>
            <p className="signup-text">
              Already have an account?{" "}
              <a href="/login" className="signup-link">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Right Container */}
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

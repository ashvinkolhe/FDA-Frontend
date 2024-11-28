/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import loginBanner from '../../assets/LoginBanner.svg'

import "./Login.css";

const Login = () => {
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
        <form>
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
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>
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

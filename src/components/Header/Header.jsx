/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Order<span>UK</span></div>
      <nav className="navigation">
        <ul>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#restaurants">Restaurants</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
      <div className="actions">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;

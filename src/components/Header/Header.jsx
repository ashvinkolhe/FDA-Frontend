/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [username, setUsername] = useState(null); // State to store username (first name)
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the username (first name) is stored in localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Run this only once after component mounts

  const handleLogout = () => {
    // Clear the localStorage and redirect to login page
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUsername(null); // Clear the username state
    navigate("/login");
  };

  return (
    <>
      {/* Top Header Section */}
      <div className="top-header">
        <div className="promo">
          🌟 Get 5% Off your first order, <strong>Promo: ORDER5</strong>
        </div>
        <div className="location">
          📍 Regent Street, A4, A4201, London{" "}
          <a href="#change-location" className="change-location">
            Change Location
          </a>
        </div>
        <button className="cart-button">
          <i className="fas fa-shopping-cart"></i> My Cart
        </button>
      </div>

      {/* Main Header Section */}
      <header className="main-header">
        <div className="logo" onClick={() => navigate("/home")}>
          Order<span className="logo-accent">UK</span>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <a href="#browse-menu" className="nav-link">
                Browse Menu
              </a>
            </li>
            <li>
              <a href="#special-offers" className="nav-link">
                Special Offers
              </a>
            </li>
            <li>
              <a href="#restaurants" className="nav-link">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#track-order" className="nav-link">
                Track Order
              </a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          {username ? (
            <div className="user-actions" onClick={() => navigate("/profile")}>
              <span className="greeting">Hey {username.charAt(0).toUpperCase() + username.slice(1)}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              <i className="fas fa-user"></i> Login/Signup
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

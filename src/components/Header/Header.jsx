/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Header.jsx */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // On logout, redirect to home
    navigate("/");
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
          Order<span className="logo-accent" >UK</span>
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
            <div className="user-actions">
              <span className="greeting">Hey {username}</span>
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

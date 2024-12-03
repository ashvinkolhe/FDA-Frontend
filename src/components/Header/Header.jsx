/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Header.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO1 from "../../assets/LOGO1.svg";
import MaleUser from "../../assets/MaleUser.svg";
import ViewCart from "../../assets/ViewCart.svg";
import CartBasket from "../../assets/CartBasket.svg";
import Location from "../../assets/Location.svg";
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

  const   handleAddToCart = () => {
    const product = { title, description, price, image };
    onAddToCart(product);
  };

  return (
    <>
      {/* Top Header Section */}
      <div className="top-header">
        <div className="promo">
          🌟 Get 5% Off your first order, <strong>Promo: ORDER5</strong>
        </div>
        <div className="location">
        <img src={Location} alt="Location" className="Location-icon" />
           Regent Street, A4, A4201, London{" "}
          <a href="#change-location" className="change-location">
            Change Location
          </a>
        </div>
        <div className="cart-container">
          <button className="cart-button" onClick={handleAddToCart}>
            <img src={CartBasket} alt="Cart Basket" className="cart-basket-icon" />
            My Cart
          </button>
          <img
            src={ViewCart}
            alt="View Cart"
            className="view-cart-icon"
            onClick={handleAddToCart} // Navigate to cart page on click
          />
        </div>
      </div>

      {/* Main Header Section */}
      <header className="main-header">
        <div className="logo" onClick={() => navigate("/home")}>
          <h1 className="logo">
            <img src={LOGO1} alt="Logo" />
          </h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">Browse Menu</Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">Special Offers</Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">Restaurants</Link>
            </li>
            <li>
              <Link to="/home" className="nav-link">Track Order</Link>
            </li>
          </ul>
        </nav>
        <div className="actions">
          {username ? (
            <div className="user-actions">
              <Link to="/profile" className="greeting-container">
                <img src={MaleUser} alt="MaleUser" className="user-icon" />
                <span className="greeting">Hey {username.charAt(0).toUpperCase() + username.slice(1)}</span>
              </Link>
              {/* <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button> */}
            </div>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              <i className="fas fa-user"></i> <img src={MaleUser} alt="MaleUser" /> Login/Signup
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

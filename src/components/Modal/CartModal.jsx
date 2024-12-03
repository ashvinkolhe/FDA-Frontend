/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./CartModal.css";

const CartModal = ({ cartItems = [], onRemoveItem }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate unique items and their quantities
  const uniqueItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Redirect to the checkout page
  const handleCheckout = () => {
    if (uniqueItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      navigate("/checkout"); // Redirect to the checkout page
    }
  };

  return (
    <div className="cart-modal">
            <div className="share-section">
        <div className="share-text">
          <span>Share this cart</span>
          <br />
          <span>with your friends</span>
        </div>
        <button className="copylink">Copy Link</button>
      </div>
      <h2 className="cart-title">My Basket</h2>
      <div className="cart-items">
        {uniqueItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          uniqueItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <span className="cart-item-title">
                  {item.title} {item.quantity > 1 && `x${item.quantity}`}
                </span>
                <span className="cart-item-price">₹{item.price}</span>
              </div>
              <button
                className="remove-item"
                onClick={() => onRemoveItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
      <div className="coupon-section">
        <label htmlFor="coupon-code" className="coupon-section2">Choose your free item..</label>
        <input
          type="text"
          id="coupon-code"
          className="rounded-input"
          placeholder="Apply Coupon Code here"
        />
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          Total to Pay: ₹
          {uniqueItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </div>
        <button
          className="checkout-button"
          disabled={uniqueItems.length === 0}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Remove from "../../assets/Remove.svg";
import ForwardButton1 from "../../assets/ForwardButton1.svg";
import ForwardButton2 from "../../assets/ForwardButton2.svg";
import DeliveryScooter from "../../assets/DeliveryScooter.svg";
import NewStore from "../../assets/NewStore.svg";
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

    {item.quantity > 1 && (
      <span className="quantity-circle">{item.quantity}x</span>
    )}    {item.title} 
    <span className="cart-item-price">₹{item.price}</span>
  </div>
  <button
    className="remove-item"
    onClick={() => onRemoveItem(item.id)}
  >
    <img src={Remove} alt="Remove Item" className="remove-item-icon" />
  </button>
</div>

          ))
        )}
      </div>
       <div className="cart-total">
          Total to Pay: ₹
          {uniqueItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
       </div>

       <div className="coupon-section">
  <label htmlFor="coupon-code" className="coupon-section2">
    Choose your free item...
    <img src={ForwardButton1} alt="ForwardButton" className="forward-button1" />
  </label>
  <label className="coupon-section2">
    Apply Coupon Code here
    <img src={ForwardButton2} alt="ForwardButton" className="forward-button2" />
  </label>
</div>
      <div className="delivery-section">   
      <div className="delivery-section-left">
        <img src={DeliveryScooter} alt="Delivery Scooter Icon" className="delivery-scooter-icon" />
        <h>Delivery</h>
        <p>Starts at 17:50</p>
      </div>
      <div className="delivery-section-right">
        <img src={NewStore} alt="Clock Icon" className="clock-icon" />
        <p>Collection</p>
        <p>Starts at 16:50</p>
      </div>
      </div> 

      <div className="cart-summary">
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

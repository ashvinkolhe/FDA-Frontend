/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PopularRestaurants from "../../components/Cards/PopularRestaurants";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./CheckoutPage.css";

const CheckoutPage = ({ cartItems = [], onRemoveItem, onUpdateQuantity }) => {
  const [address, setAddress] = useState(""); // State for delivery address
  const navigate = useNavigate(); // Initialize navigate function for navigation

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Handle quantity changes for an item
  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      onUpdateQuantity(id, quantity);
    }
  };

  // Handle payment button click
  const handlePayment = () => {
    if (!address.trim()) {
      alert("Please enter a delivery address before proceeding to payment.");
      return;
    }
    navigate("/payment"); // Redirect to PaymentPage
  };

    // Handle navigation back to CheckoutPage
    const handleBackToProductPage = () => {
      navigate("/products"); // Navigate to CheckoutPage
    };

  return (
    <div className="order-details">
      {/* Main Content Section */}
      <main>
        <h2 className="order-details-title" onClick={handleBackToProductPage}> ← Your Order Details</h2>
        <div className="order-container">
          {/* Order Items Section */}
          <div className="order-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="order-item-image"
                  />

                  {/* Item Details */}
                  <div className="order-item-details">
                    <h3>{item.title}</h3>
                    <p>₹{item.price}</p>

                    {/* Quantity Adjustment */}
                    <div className="quantity-container">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Item Button */}
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

          {/* Order Summary Section */}
          <div className="order-summary">
            {/* Delivery Address */}
            <div className="address-section">
              <label htmlFor="address">Delivery Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter delivery address..."
              />
            </div>

            {/* Summary Details */}
            <div className="summary-details">
              <div>
                <span>Items:</span>
                <span>{cartItems.length}</span>
              </div>
              <div>
                <span>Subtotal:</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>

            {/* Payment Button */}
            <button className="payment-button" onClick={handlePayment}>
              Choose Payment Method
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
              {/* Popular Restaurants Section */}
              <PopularRestaurants title="Similar Restaurants" />

      </footer>
    </div>
  );
};

export default CheckoutPage;

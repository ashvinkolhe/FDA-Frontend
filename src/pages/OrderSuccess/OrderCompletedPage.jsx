/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderCompletedPage.css";

// Helper function to generate unique Order ID
const generateOrderID = () => {
  return `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

const OrderCompletedPage = ({ orderedItems = [] }) => {
  const navigate = useNavigate();
  const orderId = generateOrderID();

  return (
    <div className="order-completed-container">
      <div className="order-completed-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
          className="success-icon"
        />
        <h1>Order Placed Successfully</h1>
        <p>
          Your order is confirmed and on its way. Get set to savor your chosen
          delights!
        </p>
        <p className="order-id">Order ID: {orderId}</p>
        <div className="order-items">
          {orderedItems.map((item, index) => (
            <p key={index} className="order-item">
              {item}
            </p>
          ))}
        </div>
        <button className="back-home-btn" onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderCompletedPage;

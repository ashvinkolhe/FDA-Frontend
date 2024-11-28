/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use the useNavigate hook
import "./PaymentPage.css";

const PaymentPage = ({ amountToPay = 240 }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(amountToPay);
  const navigate = useNavigate(); // Initialize the navigate function

  const paymentMethods = [
    { id: "zeldo", name: "ZeldoPay" },
    { id: "maestro", name: "MaestroCard" },
    { id: "paypal", name: "PayPal" },
    { id: "stripe", name: "Stripe" },
  ];

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }

    // Redirect to the order page
    // alert(`Payment of ₹${paymentAmount} via ${selectedMethod} is being processed!`);
    navigate("/order"); // Correct usage of navigate
  };

  return (
    <div className="payment-page">
      <header className="header">
        <h1>Orderix</h1>
      </header>

      <main>
        <h2 className="payment-title">Choose and Pay</h2>
        <div className="payment-container">
          <div className="payment-methods">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`payment-method ${
                  selectedMethod === method.id ? "selected" : ""
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div>
                  <input
                    type="radio"
                    id={method.id}
                    name="paymentMethod"
                    checked={selectedMethod === method.id}
                    onChange={() => setSelectedMethod(method.id)}
                  />
                  <label htmlFor={method.id}>{method.name}</label>
                </div>
                {method.details && <span>{method.details}</span>}
              </div>
            ))}
            <div className="add-card">
              <span>+ Add Debit Card</span>
            </div>
          </div>

          <div className="payment-summary">
            <div>
              <label htmlFor="amount">Amount to be Paid:</label>
              <input
                type="number"
                id="amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                readOnly
              />
            </div>
            <button onClick={handlePayment} className="proceed-button">
              Proceed Payment
            </button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default PaymentPage;

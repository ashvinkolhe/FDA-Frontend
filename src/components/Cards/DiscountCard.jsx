/* eslint-disable no-unused-vars */
import React from "react";
import "./DiscountCard.css";

// Sample images
import DiscountCard1 from "../../assets/DiscountCard1.svg";
import DiscountCard2 from "../../assets/DiscountCard2.svg";
import DiscountCard3 from "../../assets/DiscountCard3.svg";

const DiscountCards = () => {
  return (
    <div className="discount-cards-container">
      <div className="cards-grid">
        {/* Card 1 */}
        <div className="card-item">
          <img src={DiscountCard1} alt="Chef Burgers London" />
          <div className="discount-badge">-40%</div>
          <div className="card-details">
            <div className="card-description">
              <h3>Chef Burgers London</h3>
              <p>First Order Discount</p>
            </div>
            <div className="add-to-cart-btn">
              <span>+</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-item">
          <img src={DiscountCard2} alt="Grand Ai Cafe London" />
          <div className="discount-badge">-20%</div>
          <div className="card-details">
            <div className="card-description">
              <h3>Grand Ai Cafe London</h3>
              <p>First Order Discount</p>
            </div>
            <div className="add-to-cart-btn">
              <span>+</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-item">
          <img src={DiscountCard3} alt="Butterbrot Cafe London" />
          <div className="discount-badge">-17%</div>
          <div className="card-details">
            <div className="card-description">
              <h3>Butterbrot Cafe London</h3>
              <p>First Order Discount</p>
            </div>
            <div className="add-to-cart-btn">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCards;

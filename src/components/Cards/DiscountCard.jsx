/* eslint-disable no-unused-vars */
import React from "react";
import "./DiscountCard.css";

// Sample images
import DiscountCard1 from "../../assets/DiscountCard1.svg";
import DiscountCard2 from "../../assets/DiscountCard2.svg";
import DiscountCard3 from "../../assets/DiscountCard3.svg";
import AddToCart from "../../assets/AddToCart.svg";

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
              <p className="card-description-location">McDonald’s East London</p>
              <h1>First Order Discount</h1> {/* Changed from h3 to h1 */}
            </div>
            <div className="product-card-add-to-cart">
              <img src={AddToCart} alt="Add to cart" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-item">
          <img src={DiscountCard2} alt="Grand Ai Cafe London" />
          <div className="discount-badge">-20%</div>
          <div className="card-details">
            <div className="card-description">
              <p className="card-description-location">McDonald’s East London</p>
              <h1>Vegan Discount</h1> {/* Changed from h3 to h1 */}
            </div>
            <div className="product-card-add-to-cart">
              <img src={AddToCart} alt="Add to cart" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-item">
          <img src={DiscountCard3} alt="Butterbrot Cafe London" />
          <div className="discount-badge">-17%</div>
          <div className="card-details">
            <div className="card-description">
              <p className="card-description-location">McDonald’s East London</p>
              <h1>Free Ice Cream Offer</h1> {/* Changed from h3 to h1 */}
            </div>
            <div className="product-card-add-to-cart">
              <img src={AddToCart} alt="Add to cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCards;

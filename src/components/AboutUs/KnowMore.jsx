/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./KnowMore.css";

// Assuming you have these images saved in the assets folder
import partnerImage from "../../assets/partnerImage.svg";
import riderImage from "../../assets/riderImage.svg";
import orderImage from "../../assets/orderImage.svg";
import trackImage from "../../assets/trackImage.svg";
import orderCompleteImage from "../../assets/orderCompleteImage.svg";

const KnowMore = () => {
  return (
    <div className="know-more">
      {/* Top Section */}
      <div className="top-section">
        <div className="card partner-card">
          <img src={partnerImage} alt="Partner with us" />
          <div className="card-info">
            <h2>Partner with us</h2>
            <p>Earn more with lower fees</p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="card rider-card">
          <img src={riderImage} alt="Ride with us" />
          <div className="card-info">
            <h2>Ride with us</h2>
            <p>Avail exclusive perks</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="faq-title">
          <h3>Frequent Questions</h3>
          <h3>Who we are?</h3>
          <h3>Partner Program</h3>
          <h3>Help & Support</h3>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <button>How does Order.UK work?</button>
          <button>What payment methods are accepted?</button>
          <button>Can I track my order in real-time?</button>
          <button>Are there any special discounts or promotions available?</button>
          <button>Is Order.UK available in my area?</button>
        </div>

        {/* Right Side CTA Cards */}
        <div className="cta-cards">
          <div className="cta-card">
            <img src={orderImage} alt="Place an Order" />
            <div className="cta-info">
              <h3>Place an Order!</h3>
              <p>Place order through our website or Mobile app</p>
            </div>
          </div>
          <div className="cta-card">
            <img src={trackImage} alt="Track Progress" />
            <div className="cta-info">
              <h3>Track Progress</h3>
              <p>You can track your order status with delivery time</p>
            </div>
          </div>
          <div className="cta-card">
            <img src={orderCompleteImage} alt="Get your Order!" />
            <div className="cta-info">
              <h3>Get your Order!</h3>
              <p>Receive your order at a lightning fast speed!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat">
          <h3>546+</h3>
          <p>Registered Riders</p>
        </div>
        <div className="stat">
          <h3>789,900+</h3>
          <p>Orders Delivered</p>
        </div>
        <div className="stat">
          <h3>690+</h3>
          <p>Restaurants Partnered</p>
        </div>
        <div className="stat">
          <h3>17,457+</h3>
          <p>Food items</p>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;

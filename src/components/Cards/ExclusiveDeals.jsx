/* eslint-disable no-unused-vars */
import React from "react";
import "./ExclusiveDeals.css";

// Sample images
import restaurant1 from "../../assets/restaurant1.svg";
import restaurant2 from "../../assets/restaurant2.svg";
import restaurant3 from "../../assets/restaurant3.svg";

const ExclusiveDeals = () => {
  return (
    <div className="exclusive-deals">
      <div className="exclusive-header">
        <h2>Up to -40% 🤑 Order.uk exclusive deals</h2>
        <div className="filters">
          <button className="filter-btn">Vegan</button>
          <button className="filter-btn">Sushi</button>
          <button className="filter-btn active">Pizza & Fast food</button>
          <button className="filter-btn">Others</button>
        </div>
      </div>
      <div className="exclusive-cards">
        {/* Card 1 */}
        <div className="card">
          <img src={restaurant1} alt="Chef Burgers London" />
          <div className="card-content">
            {/* <h3>Chef Burgers London</h3>
            <span>-40%</span> */}
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={restaurant2} alt="Grand Ai Cafe London" />
          <div className="card-content">
            {/* <h3>Grand Ai Cafe London</h3>
            <span>-20%</span> */}
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={restaurant3} alt="Butterbrot Cafe London" />
          <div className="card-content">
            {/* <h3>Butterbrot Cafe London</h3>
            <span>-17%</span> */}
          </div>
        </div>

        {/* Card 4*/}
        <div className="card">
          <img src={restaurant2} alt="Grand Ai Cafe London" />
          <div className="card-content">
            {/* <h3>Grand Ai Cafe London</h3>
            <span>-20%</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDeals;

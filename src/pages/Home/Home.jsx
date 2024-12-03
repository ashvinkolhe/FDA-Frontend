/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css"; // You can include this CSS or create a new one for the Home page
import HomeBanner1 from "../../assets/HomeBanner1.svg";
import HomeBanner2 from "../../assets/HomeBanner2.svg";
import OrderingApp from "../../assets/OrderingAPP.svg";
import ExclusiveDeals from "../../components/Cards/ExclusiveDeals";
import PopularCategories from "../../components/Cards/PopularCategories";
import PopularRestaurants from "../../components/Cards/PopularRestaurants";
import KnowMore from "../../components/AboutUs/KnowMore";

const Home = () => {
  return (
    <div className="home">
      {/*  Banner Section */}
      <section className="home-banner">
        <div className="home-banner-left">
          <h2>Order Restaurant food, takeaway and groceries.</h2>
          <h1>
            Feast Your Senses, <span className="highlight">Fast and Fresh</span>
          </h1>
          <p>Enter a postcode to see what we deliver</p>
          <form className="home-banner-form">
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
        <div className="home-banner-right">
          <div className="home-banner-images">
            <img
              src={HomeBanner1}
              alt="Woman eating pizza"
              className="home-banner-image1-large"
            />
            <img
              src={HomeBanner2}
              alt="Woman eating noodles"
              className="home-banner-image2-small"
            />
          </div>

          <div className="home-order-notifications">
            <div className="home-notification">
              <p className="order-title">Order</p>
              <p>We’ve Received your order!</p>
              <span>Awaiting Restaurant acceptance</span>
            </div>
            <div className="home-notification">
              <p className="order-title">Order</p>
              <p>Order Accepted! ✅</p>
              <span>Your order will be delivered shortly</span>
            </div>
            <div className="home-notification">
              <p className="order-title">Order</p>
              <p>Your rider’s nearby 🎉</p>
              <span>They’re almost there – get ready!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <ExclusiveDeals />

      {/* Categories Section */}
      <PopularCategories/>

      {/* Popular Restaurants Section */}
      <PopularRestaurants title="Popular Restaurants" />

      <section className="home-order-section">
        <img src={OrderingApp} alt="OrderingApp" />
      </section>

      {/* Promotional Section */}
      <KnowMore />
    </div>
  );
};

export default Home;

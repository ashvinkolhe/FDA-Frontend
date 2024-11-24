/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css"; // You can include this CSS or create a new one for the Home page
import HomeBanner1 from "../../assets/HomeBanner1.svg";
import HomeBanner2 from "../../assets/HomeBanner2.svg";
import OrderingApp from "../../assets/OrderingApp.svg";
import ExclusiveDeals from "../../components/Cards/ExclusiveDeals";
import PopularCategories from "../../components/Cards/PopularCategories";
import PopularRestaurants from "../../components/Cards/PopularRestaurants";
import KnowMore from "../../components/AboutUs/KnowMore";


const Home = () => {
  return (
    <div>
      {/*  Banner Section */}
      <section className="banner">
        <div className="banner-left">
          <h2>Order Restaurant food, takeaway and groceries.</h2>
          <h1>
            Feast Your Senses, <span className="highlight">Fast and Fresh</span>
          </h1>
          <p>Enter a postcode to see what we deliver</p>
          <form className="banner-form">
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
        <div className="banner-right">
          <div className="banner-images">
            <img
              src={HomeBanner1}
              alt="Woman eating pizza"
              className="banner-image"
            />
            <img
              src={HomeBanner2}
              alt="Woman eating noodles"
              className="banner-image"
            />
          </div>
          <div className="order-notifications">
            <div className="notification">
              <p className="order-title">Order</p>
              <p>We’ve Received your order!</p>
              <span>Awaiting Restaurant acceptance</span>
            </div>
            <div className="notification">
              <p className="order-title">Order</p>
              <p>Order Accepted! ✅</p>
              <span>Your order will be delivered shortly</span>
            </div>
            <div className="notification">
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
      <PopularRestaurants/>

          <section className="Order-section">
            <img src={OrderingApp} alt="OrderingApp" />
          </section>

      {/* Promotional Section */}
      <KnowMore/>

    </div>
  );
};

export default Home;

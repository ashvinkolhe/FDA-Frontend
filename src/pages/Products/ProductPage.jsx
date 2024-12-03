/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BannerPP from "../../assets/BannerPP.svg"; 
import ProductCard from "../../components/Cards/ProductCard";
import CartModal from "../../components/Modal/CartModal";
import LocationMap from "../../components/AboutUs/LocationMap";
import Timing from "../../components/AboutUs/Timing";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import PopularRestaurants from "../../components/Cards/PopularRestaurants";
import SearchMore from "../../assets/SearchMore.svg";
import Review from "../../assets/Review.svg";
import Clock from "../../assets/Clock.svg";
import Motocross from "../../assets/Motocross.svg";
import OrderCompleted from "../../assets/OrderCompleted.svg";
import DiscountCard from "../../components/Cards/DiscountCard";
import "./ProductPage.css";

const ProductPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/foodItems.json") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching food items");
        setLoading(false);
      });
  }, []);

  const getItemsByCategory = (category) => {
    return foodItems.filter((item) => item.category === category);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const index = prevCartItems.findIndex((item) => item.id === id);
      if (index > -1) {
        const updatedCart = [...prevCartItems];
        updatedCart.splice(index, 1);
        return updatedCart;
      }
      return prevCartItems;
    });
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="product-page">
{/* Banner Section */}
<section className="banner">
  <div className="banner-content">
    <p>I'm lovin' it!</p>
    <h1>McDonald’s East London</h1>
    <div className="banner-details">
      <div className="detail-item">
        <img src={OrderCompleted} alt="Order Completed Icon" />
        <p>Minimum Order: 12 GBP</p>
      </div>
      <div className="detail-item">
        <img src={Motocross} alt="Motocross Icon" />
        <p>Delivery in 20-25 Minutes</p>
      </div>
    </div>
    <button className="banner-button">
      <img src={Clock} alt="clock Icon" className="clock Icon" />
      Open until 3:00 AM
    </button>
    <img src={Review} alt="Review Icon" className="banner-extra-info" />
  </div>

  <div className="banner-image-container">
    <img src={BannerPP} alt="McDonald's" />
  </div>
</section>

      {/* Offers Header */}
      <div className="offers-header">
  <h2>All Offers from McDonald’s East London</h2>
  <div className="search-container">
    <img src={  SearchMore} alt="Search Icon" className="search-icon" />
    <input
      type="text"
      className="  search-bar"
      placeholder="  Search from menu..."
    />
  </div>
</div>

      {/* Category Navigation */}
      <nav className="category-nav">
        {[
          "Offers",
          "Burgers",
          "Fries",
          "Snacks",
          "Salads",
          "Cold drinks",
          "Happy Meal®",
          "Desserts",
          "Hot drinks",
          "Sauces",
          "Orbit®",
        ].map((category, index) => (
          <button
            key={index}
            className={`category-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </nav>
        
      <DiscountCard/>

      {/* Offers Section */}
      <div className={`main-content ${cartItems.length > 0 ? "with-cart" : ""}`}>
        <div className="product-sections">
          <section className="product-category">
            <h2>Burgers</h2>
            <div className="food-cards">
              {getItemsByCategory("burger").map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          </section>

          <section className="product-category">
            <h2>Fries</h2>
            <div className="food-cards">
              {getItemsByCategory("fries").map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          </section>

          <section className="product-category">
            <h2>Cold Drinks</h2>
            <div className="food-cards">
              {getItemsByCategory("cold drinks").map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      {cartItems.length > 0 && (
        <CartModal cartItems={cartItems} onRemoveItem={handleRemoveFromCart} />
      )}
      <Timing/>
      <LocationMap />
      <CustomerReviews/>
      <PopularRestaurants title="Similar Restaurants" />
    </div>
  );
};

export default ProductPage;

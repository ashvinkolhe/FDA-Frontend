/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BannerPP from "../../assets/BannerPP.svg";
import ProductCard from "../../components/Cards/ProductCard";
import CartModal from "../../components/Modal/CartModal";
import "./ProductPage.css";

const ProductPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/foodItems.json")
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

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="product-page">
      <section className="banner">
        <img src={BannerPP} alt="OrderingApp" />
      </section>

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
            <h2>Pizzas</h2>
            <div className="food-cards">
              {getItemsByCategory("pizza").map((item) => (
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
    </div>
  );
};

export default ProductPage;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ProductCard.css";
import AddToCart from "../../assets/AddToCart.svg";

const ProductCard = ({ title, description, price, image, onAddToCart }) => {
  const   handleAddToCart = () => {
    const product = { title, description, price, image };
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-card-left">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-description">{description}</p>
        <span className="product-card-price">₹ {price}</span>
      </div>
      <div
        className="product-card-right"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="product-card-add-to-cart" onClick={handleAddToCart}>
          <img src= {AddToCart} alt="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

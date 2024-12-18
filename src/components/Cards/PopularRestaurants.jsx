/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularRestaurants.css";

// Manually importing images
import McDonalds from "../../assets/McDonalds.svg";
import PapaJohns from "../../assets/PapaJohns.svg";
import KFC from "../../assets/KFC.svg";
import TexasChicken from "../../assets/TexasChicken.svg";
import BurgerKing from "../../assets/BurgerKing.svg";
import Shaurma from "../../assets/Shaurma.svg";

// Array of restaurants with image paths and names
const restaurants = [
  { id: 1, name: "McDonald's London", image: McDonalds },
  { id: 2, name: "Papa Johns", image: PapaJohns },
  { id: 3, name: "KFC West London", image: KFC },
  { id: 4, name: "Texas Chicken", image: TexasChicken },
  { id: 5, name: "Burger King", image: BurgerKing },
  { id: 6, name: "Shaurma 1", image: Shaurma },
];

const PopularRestaurants = ({ title }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = () => {
    // Redirect to the product page
    navigate("/products");
  };

  return (
    <div className="popular-restaurants">
      <h2 className="popular-restaurants-title">{title}</h2>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <div
            className="restaurant-card"
            key={restaurant.id}
            onClick={handleCardClick} // Navigate to the product page on click
          >
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;

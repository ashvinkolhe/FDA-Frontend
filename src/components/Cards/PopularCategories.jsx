/* eslint-disable no-unused-vars */
import React from "react";
import "./PopularCategories.css";

// Import images at the top
import BurgersFastfood from "../../assets/BurgersFastfood.svg";
import Salads from "../../assets/Salads.svg";
import Pizza from "../../assets/Pizza.svg";
import Breakfast from "../../assets/Breakfast.svg";
import Soups from "../../assets/Soups.svg";

const categories = [
  { id: 1, name: "Burgers & Fast food", image: BurgersFastfood, restaurants: 21 },
  { id: 2, name: "Salads", image: Salads, restaurants: 32 },
  { id: 3, name: "Pizza", image: Pizza, restaurants: 4 },
  { id: 4, name: "Breakfast", image: Breakfast, restaurants: 4 },
  { id: 5, name: "Soups", image: Soups, restaurants: 32 },
];

const PopularCategories = () => {
  return (
    <div className="popular-categories">
      <h2>Order.uk Popular Categories 😍</h2>
      <div className="category-cards">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <div className="category-info">
              <h3>{category.name}</h3>
              <span>{category.restaurants} Restaurants</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;

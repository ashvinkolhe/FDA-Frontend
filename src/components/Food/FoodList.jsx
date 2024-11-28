/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./FoodList.css";

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);

  // Fetch food items from JSON
  useEffect(() => {
    fetch("/foodItems.json") // Update the path to the correct JSON file
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  return (
    <div className="food-list">
      {foodItems.map((item) => (
        <FoodCard
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FoodList;

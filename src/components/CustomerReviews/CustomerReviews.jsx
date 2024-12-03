/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "St Glx",
      location: "South London",
      date: "24th September, 2023",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "John Doe",
      location: "New York City",
      date: "15th August, 2023",
      text: "The service was decent, but the waiting time could be improved. However, the food quality was great as always.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      location: "Toronto",
      date: "10th July, 2023",
      text: "Loved the ambiance and the staff was super friendly! The food was served quickly and tasted amazing.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Emily Brown",
      location: "Sydney",
      date: "5th June, 2023",
      text: "The experience was satisfactory, but the tables could have been cleaner. Overall, not bad.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Liam Johnson",
      location: "Berlin",
      date: "20th May, 2023",
      text: "Great food and quick service! I visit this location often and have never been disappointed.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Olivia Wilson",
      location: "Tokyo",
      date: "10th April, 2023",
      text: "The menu options were diverse, and the staff ensured that my dietary preferences were met. Highly recommended!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Noah Davis",
      location: "Paris",
      date: "28th March, 2023",
      text: "The service was average, but the food was top-notch. I would definitely return.",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="customer-reviews">
      <div className="customer-reviews-header">
        <h2>Customer Reviews</h2>
        <div className="navigation">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>

      <div className="reviews-container">
        {reviews
          .slice(currentIndex, currentIndex + 3)
          .map(({ name, location, date, text, avatar }, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <img src={avatar} alt={`${name}'s avatar`} />
                <div>
                  <h3>{name}</h3>
                  <p>{location}</p>
                </div>
              </div>
              <div className="review-details">
                <p>{text}</p>
              </div>
              <div className="review-footer">
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  {date}
                </span>
                <span>★★★★★</span>
              </div>
            </div>
          ))}
      </div>

      <div className="average-rating">
        <h3>3.4</h3>
        <p>1,360 reviews</p>
      </div>
    </div>
  );
};

export default CustomerReviews;

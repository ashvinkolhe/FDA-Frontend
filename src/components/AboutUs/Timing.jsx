/* eslint-disable no-unused-vars */
// AboutUs.js
import React from "react";
import "./Timing.css";
import Clock from "../../assets/Clock.svg";
import Tracking from "../../assets/Tracking.svg";
import IDVerified from "../../assets/IDVerified.svg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-section">
        <h3>
          <img src={Tracking} alt="Delivery" className="section-icon" />
          Delivery Information
        </h3>
        <ul>
          <li>Monday: 12:00 AM–3:00 AM</li>
          <li>Tuesday: 8:00 AM–3:00 AM</li>
          <li>Wednesday: 8:00 AM–3:00 AM</li>
          <li>Thursday: 8:00 AM–3:00 AM</li>
          <li>Friday: 8:00 AM–3:00 AM</li>
          <li>Saturday: 8:00 AM–3:00 AM</li>
          <li>Sunday: 8:00 AM–12:00 AM</li>
          <li>Estimated time until delivery: 20 min</li>
        </ul>
      </div>
      <div className="about-section">
        <h3>
          <img src={IDVerified} alt="Contact" className="section-icon" />
          Contact Information
        </h3>
        <p>
          If you have allergies or other dietary restrictions, please contact
          the restaurant. The restaurant will provide food-specific information
          upon request.
        </p>
        <p>Phone number: +934443-43</p>
        <p>
          Website: <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a>
        </p>
      </div>
      <div className="Operational-section">
        <h3>
          <img src={Clock} alt="Clock" className="section-icon" />
          Operational Times
        </h3>
        <ul>
          <li>Monday: 8:00 AM–3:00 AM</li>
          <li>Tuesday: 8:00 AM–3:00 AM</li>
          <li>Wednesday: 8:00 AM–3:00 AM</li>
          <li>Thursday: 8:00 AM–3:00 AM</li>
          <li>Friday: 8:00 AM–3:00 AM</li>
          <li>Saturday: 8:00 AM–3:00 AM</li>
          <li>Sunday: 8:00 AM–3:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

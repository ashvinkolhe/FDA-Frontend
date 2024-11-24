/* eslint-disable no-unused-vars */
import React from "react";
import AppStore from "../../assets/AppStore.svg";
import PlayStore from "../../assets/PlayStore.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h1 className="logo">Order<span>.UK</span></h1>
          <div className="app-links">
            <img src={AppStore} alt="App Store" />
            <img src={PlayStore} alt="Google Play" />
          </div>
          <p>
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className="footer-center">
          <h4>Get Exclusive Deals in your Inbox</h4>
          <div className="subscribe">
            <input type="email" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
          </div>
          <p>We won’t spam, read our <a href="#">email policy</a>.</p>
        </div>
        <div className="footer-right">
          <h4>Legal Pages</h4>
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Order.UK Copyright 2024, All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Pricing</p>
        <p>Do not sell or share my personal information</p>
      </div>
    </footer>
  );
};

export default Footer;

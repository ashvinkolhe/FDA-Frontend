/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from "react";
import AppStore from "../../assets/app_store.png";
import PlayStore from "../../assets/PlayStore.svg";
import LOGO2 from "../../assets/LOGO2.svg";
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"
import TikTok from "../../assets/TikTok.svg"
import Snapchat from "../../assets/Snapchat.svg"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
        <h1 className="logo">
          <img src={LOGO2} alt="Logo" />
        </h1>
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
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={TikTok} alt="TikTok" />
          <img src={Snapchat} alt="Snapchat" />
        </div>
        <div className="footer-right">
          <h4>Legal Pages</h4>
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Modern Slavery Statement
          </a>
        </div>
        <div className="footer-right">
          <h4>Important Links</h4>
          <a href="#"> Add your restaurant</a>
          <a href="#">Sign up to deliver</a>
          <a href="#">Create a business account</a>
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

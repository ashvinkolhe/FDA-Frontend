/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductPage from "./pages/Products/ProductPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import PaymentPage from "./pages/Payment/PaymentPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import OrderCompletedPage from "./pages/OrderSuccess/OrderCompletedPage";

const App = () => {
  const location = useLocation(); // Get the current location

  // Check if the current route is Login or Register
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Conditionally render Header only if not on Login or Register page */}
      {!isAuthPage && <Header />}
      <Routes>
        
        {/* Redirect root URL to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Application Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order" element={<OrderCompletedPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
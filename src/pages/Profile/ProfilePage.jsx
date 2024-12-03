/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
    image: '', // Image URL will be fetched from the backend
    paymentMethods: [], // Assuming payment methods are part of the profile
  });
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState(null); // State for image file

  // Fetch profile data when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (token) {
          const response = await axios.get('/api/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfileData(response.data); // Update state with user profile data
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevState) => ({ ...prevState, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    if (isEditable) {
      // Save the profile data when switching from edit to save
      saveProfileData();
    }
    setIsEditable(!isEditable);
  };

  // Save profile data to the backend
  const saveProfileData = async () => {
    const token = localStorage.getItem('userToken');
    const formData = new FormData();
    formData.append('name', profileData.name);
    formData.append('email', profileData.email);
    formData.append('gender', profileData.gender);
    formData.append('country', profileData.country);
    if (imageFile) {
      formData.append('image', imageFile); // Append image if present

    }

    try {
      const response = await axios.put('/api/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle response (e.g., success message, etc.)
      console.log(response.data);
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  // Logout function to clear local storage and redirect user
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    window.location.href = '/login';
  };

  // Handle navigation back to PaymentPage
  const handleBackToPaymentPage = () => {
    navigate('/payment'); // Navigate to CheckoutPage
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-details-title" onClick={handleBackToPaymentPage}> ← My Profile</h2>

      <div className="profile-header">
        <img
          src={profileData.image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-image"
        />
      
        <button onClick={toggleEditMode} className="edit-button">
          {isEditable ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="profile-info">
        <div className="profile-field">
          <label>Full Name:</label>
          {isEditable ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.name}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Email Address:</label>
          {isEditable ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.email}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Gender:</label>
          {isEditable ? (
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <span>{profileData.gender}</span>
          )}
        </div>

        <div className="profile-field">
          <label>Country:</label>
          {isEditable ? (
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.country}</span>
          )}
        </div>

        <div className="payment-methods">
          <h4>Saved Payment Methods</h4>
          {profileData.paymentMethods && profileData.paymentMethods.length > 0 ? (
            profileData.paymentMethods.map((method, index) => (
              <div key={index} className="payment-method">
                <span>{method.cardNumber}</span> <span>{method.cardType}</span>
              </div>
            ))
          ) : (
            <p>No payment methods saved.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

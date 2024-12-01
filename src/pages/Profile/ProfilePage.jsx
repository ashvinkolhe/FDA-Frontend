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
  });
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch profile data when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Assuming you're storing the user token in local storage after login
        const token = localStorage.getItem('userToken');
        if (token) {
          const response = await axios.get('/api/profile', {
            headers: {
              Authorization: `Bearer ${token}`, // Send token with the request
            },
          });
          setProfileData(response.data); // Update state with user profile data
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProfileData();
  }, []);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  // Logout function to clear local storage and redirect user
  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove token from localStorage
    window.location.href = '/login'; // Redirect to login page
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={profileData.image || 'https://via.placeholder.com/150'} // Default image if not provided
          alt="Profile"
          className="profile-image"
        />
        <button onClick={toggleEditMode} className="edit-button">
          Edit
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
          {/* Assuming saved payment methods would be part of the profile data */}
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

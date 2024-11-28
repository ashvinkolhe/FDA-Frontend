/* eslint-disable no-unused-vars */
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./LocationMap.css";

const currentLocationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [32, 32],
});

const mcDonaldsIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/65/65588.png",
  iconSize: [32, 32],
});

const LocationMap = () => {
  const currentLocation = [51.5074, -0.1278]; // Replace with dynamic location
  const mcDonaldsLocation = [51.5055, -0.0847]; // McDonald's South London

  return (
    <div className="location-map">
      {/* Left Panel for Details */}
      <div className="details-panel">
        <h2>McDonald’s South London</h2>
        <p>Tooley St, London Bridge</p>
        <p>London SE1 2TF</p>
        <p>United Kingdom</p>
      </div>

      {/* Right Panel for the Map */}
      <div className="map-container">
        <MapContainer center={currentLocation} zoom={14} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={currentLocation} icon={currentLocationIcon}>
            <Popup>Your Current Location</Popup>
          </Marker>
          <Marker position={mcDonaldsLocation} icon={mcDonaldsIcon}>
            <Popup>
              McDonald’s South London<br />
              Tooley St, London Bridge<br />
              London SE1 2TF
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMap;

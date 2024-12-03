/* eslint-disable no-unused-vars */
// LocationMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./LocationMap.css";

const LocationMap = () => {
  return (
    <div className="location-map">
      <div className="map-details">
        <h2>McDonald’s South London</h2>
        <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
        <p>Phone number: +934443-43</p>
        <p>
          Website: <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a>
        </p>
      </div>
      <div className="map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>McDonald’s South London</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationMap;

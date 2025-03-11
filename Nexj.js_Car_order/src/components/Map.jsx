"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Use require instead of import for Leaflet icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for Leaflet's default icon not working in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Map = ({ getSource, getDestination }) => {
  const [isClient, setIsClient] = useState(false);

  // Check if we are in the client to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Do not render map during SSR
  }

  return (
    <MapContainer
      center={getSource || [51.505, -0.09]}
      zoom={4}
      scrollWheelZoom={false}
      className="h-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getSource && <Marker position={getSource} />}
      {getDestination && <Marker position={getDestination} />}
    </MapContainer>
  );
};

export default Map;

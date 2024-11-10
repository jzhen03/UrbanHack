import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ['places']; // Add any libraries you need

const MapProvider = ({ children }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps</div>;
  }

  return children;
};

export default MapProvider;
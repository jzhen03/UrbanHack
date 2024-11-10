// Map.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, Marker } from '@react-google-maps/api';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Map() {
  const [coordinates, setCoordinates] = useState({ latitude: 42.65, longitude: -73.75 });
  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const res = await axios.post('http://localhost:8020/search', coordinates);
      setHospitals(res.data.hospitals);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, [coordinates]);

  const mapStyles = {
    height: '80vh',
    width: '75%',
    margin: 'auto',
    paddingTop: '40px',
    padding: '20px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#CA2225',
    position: 'relative',
  };

  const defaultCenter = {
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  };

  return (
    <div>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={{
              lat: hospital.location.lat,
              lng: hospital.location.lng,
            }}
            title={hospital.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default React.memo(Map);

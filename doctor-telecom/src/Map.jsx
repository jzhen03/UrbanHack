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
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '800px',
    maxHeight: '600px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '20px',
    overflow: 'hidden'
  };

  const defaultCenter = {
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  };

  const customMapStyle = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.medical",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    }
  ];

  const getCustomMarkerSymbol = (color) => ({
    path:"M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z", 
    fillColor: color, // Desired fill color
    fillOpacity: 1,
    strokeWeight: 2, 
    strokeColor: '#FFFFFF', 
    scale: 0.05, 
    anchor: new window.google.maps.Point(12, 24), 
  });

  const getGradientColor = (value) => {
    const val = Math.min(Math.max(value, 0), 1);
  
    const red = Math.round(255 * (1 - val));
    const green = Math.round(255 * val);
    const blue = 0; 
  
    const toHex = (c) => c.toString(16).padStart(2, '0');
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  };

  return (
    <>
    <h2 style={{textAlign: "center"}}>Nearby Hospital and Doctor Availability</h2>
    <div>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} options={{ styles: customMapStyle }}>
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={{
              lat: hospital.location.lat,
              lng: hospital.location.lng,
            }}
            title={hospital.name}
            icon={getCustomMarkerSymbol(getGradientColor(Math.random()))}
          />
        ))}
      </GoogleMap>
    </div>
    </>
  );
}

export default React.memo(Map);

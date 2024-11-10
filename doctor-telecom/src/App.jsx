// App.jsx
import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home.jsx';
import Navbar from './navbar.jsx';
import Chatbot from './Chatbot.jsx';
import Map from './Map.jsx';
import MapProvider from './MapProvider.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SlackChannel from './SlackChannel.jsx'; // Updated import
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; // Import ChatScope styles
import PatientData from "./PatientData.jsx";
import patientData from "./data/PatientData.js";
import { Container, Typography } from "@mui/material";

function App() {

  const channelId = import.meta.env.VITE_SLACK_CHANNEL_ID;

  return (
    <>
      <Router>
      <div className = "app">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aichatbot' element={<Chatbot/>}/>
            <Route path='/slackchannel' element={<SlackChannel channelId={channelId} />}/>
            <Route path='/map' element={<MapProvider><Map/></MapProvider>}/>
            <Route path='/patientdata' element={<Container>
                <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 4 }}>
                  Patient Profile
                </Typography>
                <PatientData patient={patientData} />
              </Container>}/>
          </Routes>
        </div>
      </div>
      
      </Router>
    </>
  );
}

export default App;

// App.jsx
import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home.jsx';
import Navbar from './navbar.jsx';
import Chatbot from './Chatbot.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SlackChannel from './SlackChannel.jsx'; // Updated import
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; // Import ChatScope styles

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
          </Routes>
        </div>
      </div>
      
      </Router>
    </>
  );
}

export default App;

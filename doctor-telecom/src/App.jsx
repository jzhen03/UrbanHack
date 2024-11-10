// App.jsx
import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './navbar.jsx';
import Chatbot from './Chatbot.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
import SlackChannel from './SlackChannel.jsx'; // Updated import
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; // Import ChatScope styles

function App() {

  const channelId = import.meta.env.VITE_SLACK_CHANNEL_ID;

  return (
    <>
      <Router>
      <Navbar/>
      {/* <Chatbot/> */}
      <SlackChannel channelId={channelId} />
      </Router>
    </>
  );
}

export default App;

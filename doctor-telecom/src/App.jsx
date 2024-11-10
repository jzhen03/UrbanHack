<<<<<<< HEAD
import React from 'react';
import './App.css';
import SlackChannel from './SlackChannel.jsx'; // Updated import
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; // Import ChatScope styles

function App() {
  // Access Slack channel ID from environment variables
  const channelId = import.meta.env.VITE_SLACK_CHANNEL_ID;

  return (
    <>
      {/* SlackChannel component with Slack messaging */}
      <SlackChannel channelId={channelId} />
=======
// App.jsx
import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './navbar.jsx';
import Chatbot from './Chatbot.jsx';
import Navigation from './Navigation.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
import SlackChannel from './SlackChannel.jsx'; // Updated import
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; // Import ChatScope styles

function App() {

  const channelId = import.meta.env.VITE_SLACK_CHANNEL_ID;

  return (
    <>
      <Router>
      <Navbar/>
      <Chatbot/>
      <SlackChannel channelId={channelId} />
      </Router>
>>>>>>> e15d0b8b78a10fa5426ee8aa3b7b7295ff31e310
    </>
  );
}

export default App;

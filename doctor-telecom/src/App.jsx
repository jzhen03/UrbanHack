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
    </>
  );
}

export default App;

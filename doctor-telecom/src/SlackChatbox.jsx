import React, { useState } from 'react';
import './SlackChatbox.css'; // Import CSS for styling

const SlackChatBox = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    if (input.trim() === '') return; // Prevent sending empty messages
    setSending(true);
    setError(null);
    try {
      await onSend(input);
      setInput(''); // Clear input field on success
    } catch (err) {
      setError('Failed to send message.');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbox">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        disabled={sending}
      />
      <button onClick={handleSend} disabled={sending}>
        {sending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default SlackChatBox;
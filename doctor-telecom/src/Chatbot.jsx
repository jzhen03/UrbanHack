import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      // Send the prompt to your server
      const res = await axios.post('http://localhost:8020/chat', { prompt });

      // Update the conversation state with the user's prompt and assistant's response
      setConversation([
        ...conversation,
        { sender: 'User', message: prompt },
        { sender: 'Assistant', message: res.data },
      ]);

      // Clear the input field
      setPrompt("");
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally, handle the error by displaying a message in the conversation
      setConversation([
        ...conversation,
        { sender: 'User', message: prompt },
        { sender: 'Assistant', message: 'Sorry, an error occurred. Please try again later.' },
      ]);
      setPrompt("");
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.conversation}>
        {conversation.map((entry, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: entry.sender === 'User' ? 'flex-end' : 'flex-start',
              backgroundColor: entry.sender === 'User' ? '#DCF8C6' : '#FFF',
            }}
          >
            <strong>{entry.sender}:</strong> {entry.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
}

const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '600px',
    margin: '0 auto',
  },
  conversation: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#ECE5DD',
  },
  message: {
    maxWidth: '80%',
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    wordWrap: 'break-word',
  },
  form: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Chatbot;

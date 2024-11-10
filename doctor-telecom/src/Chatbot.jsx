import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([{sender:"MedLink Bro", message:"Hi, I'm MedLink Bro, your personal diagonsis assistant! I specialize in confirming and helping you with basic diagonsis and treatment plans to help you treat less severe cases."}]);

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
        { sender: 'MedLink Bro', message: res.data },
      ]);

      // Clear the input field
      setPrompt("");
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally, handle the error by displaying a message in the conversation
      setConversation([
        ...conversation,
        { sender: 'User', message: prompt },
        { sender: 'MedLink Bro', message: 'Sorry, an error occurred. Please try again later.' },
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
              marginLeft: entry.sender === 'User' ? 'auto' : '0',
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
      width: 'calc(100% - 270px - 40px)',
      maxWidth: '75%',
      maxHeight: '80%',
      margin: '20px 20px 20px 270px',
      padding: '20px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#CA2225'
    },
    conversation: {
      flex: 1,
      padding: '10px',
      overflowY: 'auto',
      backgroundColor: '#ECE5DD',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    message: {
      maxWidth: '80%',
      margin: '5px',
      padding: '10px',
      borderRadius: '10px',
      wordWrap: 'break-word',
    },
    form: {
      display: 'flex',
      padding: '10px',
      backgroundColor: '#FFF',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
    },
    input: {
      flex: 1,
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      marginLeft: '10px',
      borderRadius: '5px',
      backgroundColor: '#4CAF50',
      color: '#FFF',
      border: 'none',
      cursor: 'pointer',
    },
  };
  

export default Chatbot;

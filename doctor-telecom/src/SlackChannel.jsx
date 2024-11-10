import React, { useEffect, useState, useRef } from 'react';
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  ConversationHeader,
  Avatar,
} from '@chatscope/chat-ui-kit-react';
import { FaUserDoctor } from "react-icons/fa6";
import './SlackChannel.css'; 

const SlackChannel = ({ channelId }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null); 
  const token = import.meta.env.VITE_SLACK_API_TOKEN; 
  const messageListRef = useRef(null); 

  // Function to fetch messages from Slack
  const fetchMessages = async () => {
    try {
      const msgs = await getMessages(channelId);
      const messagesWithUser = await Promise.all(
        msgs.map(async (msg) => {
          const username = await getUsername(msg.user);
          return { ...msg, username };
        })
      );
      setMessages(messagesWithUser.reverse()); // Reverse to show oldest first
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // Function to send a new message
  const sendMessage = async (text) => {
    if (text.trim() === '') return; 
    try {
      setTyping(true); 
      await postMessage(channelId, text);
      setTyping(false);
      fetchMessages();
    } catch (err) {
      console.error(err);
      setError(err.message);
      setTyping(false);
    }
  };

  // Function to fetch current user ID
  const getCurrentUserId = async () => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://slack.com/api/auth.test`,
        {
          headers: { 'Authorization': `Bearer ${token}` },
        }
      );
      const data = await response.json();
      console.log("CurrentUserID:", data);
      if (data.ok) {
        setCurrentUserId(data.user_id);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error fetching current user info:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getCurrentUserId();
    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 500000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, [channelId]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollToBottom();
    }
  }, [messages]);

  return (
    <>
    <h2 style={{textAlign: "center"}}>Consult with another Doctor</h2>
    <div className="slack-channel-container">
      <ConversationHeader>
        <Avatar
        name="John Doe"
        size="lg" 
        status="available" 
        active={true}
        >
          <FaUserDoctor size="3em" />
        </Avatar>
        <ConversationHeader.Content>
        <h3>Dr. John Doe</h3>
      </ConversationHeader.Content>
      </ConversationHeader>
      <ChatContainer>
        <MessageList
          ref={messageListRef}
          scrollBehavior="smooth"
          typingIndicator={
            typing ? <TypingIndicator content="Sending message..." /> : null
          }
        >
          {messages.map((msg) => (
            <Message
              key={msg.ts}
              model={{
                message: msg.text,
                sentTime: new Date(parseFloat(msg.ts) * 1000).toLocaleTimeString(),
                sender: msg.username || 'Unknown User',
                direction: msg.user === currentUserId ? 'outgoing' : 'incoming',
              }}
            />
          ))}
          {}
        </MessageList>
        <MessageInput
          placeholder="Type your message here"
          onSend={sendMessage}
        />
      </ChatContainer>
      {error && <p className="error">Error: {error}</p>}
    </div>
    </>
  );
};

// Function to fetch messages
const getMessages = async (channelId) => {
  const token = import.meta.env.VITE_SLACK_API_TOKEN; 
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://slack.com/api/conversations.history?channel=${channelId}&limit=50`,
    {
      headers: { 'Authorization': `Bearer ${token}` },
    }
  );
  const data = await response.json();
  console.log('Fetched Messages:', data);
  if (data.ok) {
    return data.messages;
  } else {
    throw new Error(data.error);
  }
};

// Function to send message
const postMessage = async (channelId, text) => {
  const token = import.meta.env.VITE_SLACK_API_TOKEN;
  const response = await fetch(
    'https://cors-anywhere.herokuapp.com/https://slack.com/api/chat.postMessage',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: channelId,
        text: text,
      }),
    }
  );
  const data = await response.json();
  if (!data.ok) {
    throw new Error(data.error);
  }
  return data;
};

// Function to fetch username from user ID using users.profile.get
const getUsername = async (userId) => {
  const token = import.meta.env.VITE_SLACK_API_TOKEN; 
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://slack.com/api/users.profile.get?user=${userId}`,
      {
        headers: { 'Authorization': `Bearer ${token}` },
      }
    );
    const data = await response.json();
    console.log("USERNAME:", data);
    
    if (data.ok && data.profile) {
      return data.profile.display_name || data.profile.real_name || 'Unknown User';
    } else {
      return 'Unknown User';
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    return 'Unknown User';
  }
};

export default SlackChannel;

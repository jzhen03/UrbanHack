// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './navbar.jsx';
import Chatbot from './Chatbot.jsx';
import Navigation from './Navigation.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Chatbot/>
      </Router>
    </>
  )
}

export default App

// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Chatbot from './Chatbot.jsx';
import Navigation from './Navigation.jsx';

function App() {
  const [count, setCount] = useState(0);
  const message = "What's your purpose?";
  const answer = Chatbot(message);
  console.log(answer);

  return (
    <>
      <Router>
      <Navbar/>
      <Navigation/>
      <Chatbot/>
      <div className="main-content">
        
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      </Router>
    </>
  )
}

export default App

import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from './logo.png';
import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <h1>
        Solidity Galaxy Brain
      </h1>
      <div>
        <a href="https://anchor.fm/soliditygalaxybrain">subscribe to podcast</a>
        <br/>
        <a href="https://twitter.com/nnnnicholas">follow @nnnnicholas on twitter</a>
      </div>
    </div>
  );
}

export default App;

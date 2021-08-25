import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './App.module.scss';
import Art from '../public/podcastArtwork.png';

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
    <div className={style.App}>
      <div id={style.imageContainer}>
        <a href="https://anchor.fm/soliditygalaxybrain"> <img src={Art} /></a>
      </div>
      <div id="linkContainer">
        <ul>
          <li>
            <a href="https://anchor.fm/soliditygalaxybrain">🎧 Subscribe to podcast</a>
          </li>
          <li>
            <a href="https://twitter.com/nnnnicholas">🦜 Follow @nnnnicholas on twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

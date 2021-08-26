import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './App.module.scss';
import Art from '../public/podcastArtwork.png';
import Spotify from '../public/spotify.png';
import Anchor from '../public/anchor.png';
import RSS from '../public/rss.png';


function App() {
  return (
    <div className={style.App}>
      <div id={style.imageContainer}>
        <a href="https://open.spotify.com/show/3VbztlkEqFgRibZlO2HhCe"> <img src={Art} /></a>
      </div>
      <div className={style.description}>Conversations with Solidity developers about the contracts they've written and the contracts they admire.</div>
      <div id="linkContainer">
        <ul>
          <li>
            <p>
              <a href="https://open.spotify.com/show/3VbztlkEqFgRibZlO2HhCe"><img className={style.rss} src={Spotify} /> Spotify</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://anchor.fm/soliditygalaxybrain"><img className={style.rss} src={Anchor} /> Anchor</a>
            </p>
          </li>
          <li>
            <p> <a href="https://anchor.fm/s/68fdf56c/podcast/rss"><img className={style.rss} src={RSS} /> RSS</a></p>
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

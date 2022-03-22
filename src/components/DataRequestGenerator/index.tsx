import React, { useEffect, useState } from 'react';
import './style.scss';

export default function DataRequestGenerator(): JSX.Element {
  const [name, setName] = useState('');
  const [profileLink, setProfileLink] = useState('');
  const [username, setUsername] = useState('');
  const [recentlyAddedSong, setRecentlyAddedSong] = useState('');
  const [recentlyAddedSongArtist, setRecentlyAddedSongArtist] = useState('');
  const [viewOutput, setViewOutput] = useState(false);

  if (viewOutput) {
    return (
      <div>
        <h1>{name}</h1>
        <h2>{profileLink}</h2>
        <h3>{username}</h3>
        <h4>{recentlyAddedSong}</h4>
        <h5>{recentlyAddedSongArtist}</h5>
        <button onClick={() => setViewOutput(false)}>Back</button>
      </div>
    );
  }

  return (
    <>
      <h2>Draft your listening data request text below</h2>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="profileLink">Profile Link</label>
        <input
          id="profileLink"
          value={profileLink}
          onChange={(e) => setProfileLink(e.target.value)}
          placeholder="Your Profile Link"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Username"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="recentlyAddedSong">
          Recently added song to your library
        </label>
        <input
          id="recentlyAddedSong"
          value={recentlyAddedSong}
          onChange={(e) => setRecentlyAddedSong(e.target.value)}
          placeholder="Name of the song that you recently added to your library"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="recentlyAddedSongArtist">
          Artist of the recently added song
        </label>
        <input
          id="recentlyAddedSongArtist"
          value={recentlyAddedSongArtist}
          onChange={(e) => setRecentlyAddedSongArtist(e.target.value)}
          placeholder="Artist of the song that you recently added to your library"
        />
      </fieldset>
      <button onClick={() => setViewOutput(true)}>Generate</button>
    </>
  );
}

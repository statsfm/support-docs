import React, { useState, useEffect } from 'react';

import './style.css';
import {
  loginWithSpotify,
  copiedElement,
  copyElement,
  openInMailApp,
  linkToYourSpotifyProfile,
  spotifyUsername,
  nameOftheLastSongSaved,
  artistOfThatSong,
  spotifyUsernameFormatted,
} from './translations';

export default function DataRequestGenerator(): JSX.Element {
  const [name, setName] = useState('<your name>');
  const [profileLink, setProfileLink] = useState<string>(undefined);
  const [username, setUsername] = useState<string>(undefined);
  const [recentlyAddedSong, setRecentlyAddedSong] = useState<string>(undefined);
  const [recentlyAddedSongArtist, setRecentlyAddedSongArtist] =
    useState<string>(undefined);
  const [outputElement, setOutputElement] = useState<HTMLSpanElement>(null);
  const [viewCopiedText, setViewCopiedText] = useState(false);
  const [token, setToken] = useState('');

  const spotifyClientId = '52242e73817e4096ad71500937a1fb58';
  const spotifyScopes = 'user-read-private user-library-read';

  const spotifyLoginUrl = [
    'https://accounts.spotify.com/authorize?client_id=',
    spotifyClientId,
    '&response_type=token&redirect_uri=',
    encodeURIComponent(
      `${window.location.protocol}//${window.location.host.replace(
        'www.',
        ''
      )}/spotify_callback`
    ),
    '&scope=',
    spotifyScopes,
  ].join('');

  async function spotifyCallbackMessageHandler(event: MessageEvent) {
    if (
      event.origin !==
      `${window.location.protocol}//${window.location.host.replace('www.', '')}`
    )
      return;
    if (
      event.data.type === 'spotify_callback' &&
      event.data.token !== undefined
    ) {
      setToken(event.data.token);
      const [me, savedTrack] = await Promise.all([
        await fetch('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${event.data.token}`,
          },
        })
          .then((res) => res.json())
          .catch(() => undefined),
        await fetch('https://api.spotify.com/v1/me/tracks?limit=1', {
          headers: {
            Authorization: `Bearer ${event.data.token}`,
          },
        })
          .then((response) => response.json())
          .then(async (data) => (await data)?.items[0]?.track)
          .catch(() => undefined),
      ]);
      if (me !== undefined && savedTrack !== undefined) {
        setName(
          me.display_name.substring(0, 1).toUpperCase() +
            me.display_name.substring(1)
        );
        setProfileLink(me.external_urls.spotify);
        setUsername(me.display_name);
        setRecentlyAddedSong(savedTrack.name);
        setRecentlyAddedSongArtist(savedTrack.artists[0].name);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('message', spotifyCallbackMessageHandler);
    return () => {
      window.removeEventListener('message', spotifyCallbackMessageHandler);
    };
  }, []);

  return (
    <>
      <div
        style={{
          borderLeft:
            'solid var(--ifm-blockquote-border-left-width) var(--ifm-blockquote-border-color)',
          paddingLeft: 'var(--ifm-blockquote-padding-horizontal)',
        }}
      >
        <span
          style={{
            whiteSpace: 'pre-wrap',
            color: 'rgb(143, 143, 143)',
          }}
          ref={(spanElement) => setOutputElement(spanElement)}
        >
          Hi,
          <br />
          <br />I would like to receive a copy of my extended lifetime streaming
          history in technical endsong.json format. The data requested from the
          privacy tab on the spotify.com/account page only includes the data of
          last year, and I want my lifetime data (so the endsong.json files).
          <br />
          <br />A link to my Spotify profile is{' '}
          <span style={{ color: 'var(--ifm-font-color-base)' }}>
            {profileLink ?? linkToYourSpotifyProfile}
          </span>{' '}
          and my username is{' '}
          <span style={{ color: 'var(--ifm-font-color-base)' }}>
            {username ?? spotifyUsername}
          </span>
          . A song I've recently added to my library is "
          <span style={{ color: 'var(--ifm-font-color-base)' }}>
            {recentlyAddedSong ?? nameOftheLastSongSaved}
          </span>
          " by{' '}
          <span style={{ color: 'var(--ifm-font-color-base)' }}>
            {recentlyAddedSongArtist ?? artistOfThatSong}
          </span>
          .<br />
          <br />
          And just to be sure: I don't want the data I can request myself with
          the button on my account page, I'm looking for the "endsong.json"
          files.
          <br />
          <br />
          Best regards,
          <br />
          <span style={{ color: 'var(--ifm-font-color-base)' }}>
            {name ?? spotifyUsernameFormatted}
          </span>
        </span>
      </div>
      <br />
      <div className="row">
        {!token ? (
          <div className="col">
            <button
              className="data-request-button button button--primary"
              onClick={() => {
                window.open(
                  spotifyLoginUrl,
                  'Login with Spotify',
                  'width=800,height=600'
                );
              }}
            >
              {loginWithSpotify}
            </button>
          </div>
        ) : null}
        <div className="col">
          <button
            className="data-request-button copyButton button button--primary"
            onClick={() => {
              const el = outputElement;
              copyTextToClipboard(el.innerText);
              setViewCopiedText(true);
              setTimeout(() => {
                setViewCopiedText(false);
              }, 2000);
            }}
          >
            {viewCopiedText ? copiedElement : copyElement}
          </button>
        </div>
        {token ? (
          <div className="col">
            <button
              className="data-request-button button button--primary"
              onClick={() => {
                const el = outputElement;
                window.location.href = `mailto:support@spotify.com?subject=Endsong request (extended listening history)&body=${encodeURIComponent(
                  el.innerText
                )}`;
              }}
            >
              {openInMailApp}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

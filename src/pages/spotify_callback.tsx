import React from 'react';

export default function SpotifyCallback(): JSX.Element {
  const hashObject = window.location.hash
    .substring(1)
    .split('&')
    .map((v) => v.split('='))
    .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {}) as {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
  window.location.hash = '';
  if (window.opener) {
    window.opener.postMessage(
      {
        type: 'spotify_callback',
        token: hashObject.access_token,
      },
      `${window.location.protocol}//${window.location.host.replace('www.', '')}`
    );
    setTimeout(() => window.close(), 50);
  }
  return (
    <div>
      <h1>Spotify Callback</h1>
      <p>This window should close automatically...</p>
    </div>
  );
}

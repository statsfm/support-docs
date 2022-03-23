import Translate from '@docusaurus/Translate';
import React, { useState } from 'react';
import DataRequestInput from './DataRequestInput';
import './style.css';

export default function DataRequestGenerator(): JSX.Element {
  const [name, setName] = useState('');
  const [profileLink, setProfileLink] = useState('');
  const [username, setUsername] = useState('');
  const [recentlyAddedSong, setRecentlyAddedSong] = useState('');
  const [recentlyAddedSongArtist, setRecentlyAddedSongArtist] = useState('');
  const [viewOutput, setViewOutput] = useState(false);
  const [outputElement, setOutputElement] = useState<HTMLPreElement>(null);
  const [viewCopiedText, setViewCopiedText] = useState(false);

  const everythingFilledIn = () =>
    name &&
    profileLink &&
    username &&
    recentlyAddedSong &&
    recentlyAddedSongArtist
      ? true
      : false;

  const copyElement = (
    <div className="col col--2">
      <Translate id="datarequestgenerator.output.copiedtext.text">
        Copied!
      </Translate>
    </div>
  );

  if (viewOutput) {
    return (
      <>
        <pre ref={(preElement) => setOutputElement(preElement)}>
          Hi,
          <br />I would like to receive a copy of my extended lifetime streaming
          history in technical endsong.json format. The data requested from the
          privacy tab on the spotify.com/account page only includes the data of
          last year, and I want my lifetime data (so the endsong.json files). A
          link to my Spotify profile is {profileLink} and my username is{' '}
          {username}. A song I've recently added to my library is "
          {recentlyAddedSong}" by {recentlyAddedSongArtist}. And just to be
          sure: I don't want the data I can request myself with the button on my
          account page, I'm looking for the "endsong.json" files.
          <br />
          Best regards,
          <br />
          {name}
        </pre>
        <div className="row">
          <div className="col col--3">
            <button
              className="button button--primary"
              onClick={() => {
                if (everythingFilledIn()) {
                  const el = outputElement;
                  if (el) {
                    copyTextToClipboard(el.innerText);
                    setViewCopiedText(true);
                    setTimeout(() => {
                      setViewCopiedText(false);
                    }, 2000);
                  }
                }
              }}
              disabled={everythingFilledIn() ? false : true}
            >
              <Translate id="datarequestgenerator.output.copybutton.text">
                Copy to clipboard
              </Translate>
            </button>
          </div>
          {viewCopiedText ? copyElement : null}
        </div>
      </>
    );
  }

  return (
    <>
      <p>
        <DataRequestInput
          id="name"
          translate={
            <Translate id="datarequestgenerator.inputs.name.label">
              Name
            </Translate>
          }
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </p>
      <p>
        <DataRequestInput
          id="profileLink"
          translate={
            <Translate id="datarequestgenerator.inputs.profileLink.label">
              Profile Link
            </Translate>
          }
          onChange={(e) => setProfileLink(e.target.value)}
          value={profileLink}
        />
      </p>
      <p>
        <DataRequestInput
          id="username"
          translate={
            <Translate id="datarequestgenerator.inputs.username.label">
              Username
            </Translate>
          }
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </p>
      <p>
        <DataRequestInput
          id="recentlyAddedSong"
          translate={
            <Translate id="datarequestgenerator.inputs.recentlyAddedSong.label">
              Recently added song to your library
            </Translate>
          }
          onChange={(e) => setRecentlyAddedSong(e.target.value)}
          value={recentlyAddedSong}
        />
      </p>
      <p>
        <DataRequestInput
          id="recentlyAddedSongArtist"
          translate={
            <Translate id="datarequestgenerator.inputs.recentlyAddedSongArtist.label">
              Artist of the recently added song
            </Translate>
          }
          onChange={(e) => setRecentlyAddedSongArtist(e.target.value)}
          value={recentlyAddedSongArtist}
        />
      </p>
      <button
        className="button button--primary"
        onClick={() => {
          if (everythingFilledIn()) {
            setViewOutput(true);
          }
        }}
        disabled={everythingFilledIn() ? false : true}
      >
        Generate
      </button>
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

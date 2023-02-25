import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import * as statsfm from '@statsfm/statsfm.js';

export default function StepThree(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState<boolean>(undefined);
  const [justEnabledStreamSync, setJustEnabledStreamSync] =
    useState<boolean>(undefined);
  const [isStreamSyncEnabled, setIsStreamSyncEnabled] =
    useState<boolean>(undefined);
  const [user, setUser] = useState<statsfm.UserPrivate>(undefined);
  const [token, setToken] = useState<string>(undefined);
  const api = new statsfm.Api();

  const statsfmLoginUrl = [
    'https://api.stats.fm/api/v1/auth/redirect/spotify?',
    'redirect_uri=',
    encodeURIComponent(
      `${window.location.protocol}//${window.location.host.replace(
        'www.',
        ''
      )}/statsfm_callback`
    ),
    '&scope=user-read-private',
  ].join('');

  async function statsfmCallbackMessageHandler(
    event: MessageEvent<{ type: string; token?: string }>
  ) {
    if (
      event.origin !==
      `${window.location.protocol}//${window.location.host.replace('www.', '')}`
    )
      return;
    if (
      event.data.type === 'statsfm_callback' &&
      event.data.token !== undefined
    ) {
      setLoggedIn(true);
      setToken(event.data.token);
      api.http.config.accessToken = event.data.token;
      const _user = await api.me.get();
      setUser(_user);
      setIsStreamSyncEnabled(_user.syncEnabled);
    }
  }

  async function enableStreamSync() {
    let _user = user;
    _user.syncEnabled = true;
    api.http.config.accessToken = token;
    _user = await api.me.updateMe(_user);
    setUser(_user);
    setIsStreamSyncEnabled(_user.syncEnabled);
    setJustEnabledStreamSync(true);
  }

  useEffect(() => {
    window.addEventListener('message', statsfmCallbackMessageHandler);
    return () => {
      window.removeEventListener('message', statsfmCallbackMessageHandler);
    };
  }, []);

  return (
    <>
      <p>
        <Translate
          id="importguide.stepthree.text"
          values={{
            supportLink: (
              <Link to="/docs/streams/sync">
                <Translate id="importguide.stepthree.sync.link">
                  on this page
                </Translate>
              </Link>
            ),
          }}
        >
          {`The files you receive from Spotify miss the last couple days of data. You can turn on the Sync streaming history setting
          after you have requested your files to make sure you do not miss any
          data. You can do so in the settings page on the mobile app or use the
          button below. You can read more about streaming history synchronisation {supportLink}.`}
        </Translate>
      </p>
      {loggedIn === undefined && (
        <button
          className="statsfm-button button button--primary"
          onClick={() => {
            window.open(
              statsfmLoginUrl,
              'Login with Spotify',
              'width=800,height=600'
            );
          }}
        >
          <Translate id="importguide.stepthree.login">
            Login to enable stream sync
          </Translate>
        </button>
      )}
      {loggedIn === true && isStreamSyncEnabled === false && (
        <button
          className="statsfm-button button button--primary"
          onClick={enableStreamSync}
        >
          <Translate id="importguide.stepthree.enable">
            Enable stream sync
          </Translate>
        </button>
      )}
      {loggedIn === true && isStreamSyncEnabled === true && (
        <button className="statsfm-button button button--primary" disabled>
          {justEnabledStreamSync === true ? (
            <Translate id="importguide.stepthree.justenabled">
              Stream sync has been enabled
            </Translate>
          ) : (
            <Translate id="importguide.stepthree.alreadyenabled">
              Stream sync is already enabled
            </Translate>
          )}
        </button>
      )}
    </>
  );
}

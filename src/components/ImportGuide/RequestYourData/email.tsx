import React from 'react';
import Admonition from '@theme/Admonition';
import DataRequestGenerator from '@site/src/components/DataRequestGenerator';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function EmailDataRequest(): JSX.Element {
  return (
    <>
      <Admonition type="tip" title="Tip">
        <Translate id="importguide.stepone.email.tip">
          Sending this email from your Spotify account's email address makes
          this process a lot easier and quicker. Otherwise they may ask for
          another way to identify yourself (naming a song you've recently added
          to your library may suffice already).
        </Translate>
      </Admonition>
      <Translate
        id="importguide.stepone.email.description"
        values={{
          endsong: <code>endsong.json</code>,
          spotifyemail: (
            <Link href="mailto:support@spotify.com">support@spotify.com</Link>
          ),
        }}
      >
        {
          "In order to request the {endsong} files, you'll need to send a simple email to {spotifyemail}. You can login with your Spotify below to generate the email automatically or fill in the text yourself after copying it."
        }
      </Translate>
      <BrowserOnly>{() => <DataRequestGenerator />}</BrowserOnly>
    </>
  );
}

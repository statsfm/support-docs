import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import React from 'react';

export default function StepThree(): JSX.Element {
  return (
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
        {
          "The files you receive from Spotify miss the last 2-5 days of data. For example: if you've requested the data on June 1st and you've received the data on June 14th, the data will include streams until about June 12th. You can turn on the setting _Sync streaming history_ after you've requested your files to make sure you don't miss any data. You can do so in Settings > Algorithms, import & stream sync >_Sync streaming history. Make sure to set this to Enabled. You can read more about streaming history synchronisation {supportLink}."
        }
      </Translate>
    </p>
  );
}

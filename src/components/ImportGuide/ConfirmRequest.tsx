import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';

export default function StepTwo(): JSX.Element {
  return (
    <>
      <p>
        <Translate id="importguide.steptwo.text">
          As soon as your request is accepted by Spotify, you'll receive a link
          to confirm the request in your email. Confirm it, and Spotify will
          start gathering your data.
        </Translate>
      </p>
      <img
        alt={translate({
          message:
            'Email showing the confirmation link to confirm your request',
          id: 'importguide.steptwo.image',
        })}
        src="/img/import/step2.png"
      />
    </>
  );
}

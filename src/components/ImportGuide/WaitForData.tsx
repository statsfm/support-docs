import React from 'react';
import Translate from '@docusaurus/Translate';

export default function StepFour(): JSX.Element {
  return (
    <>
      <Translate
        id="importguide.stepfour.text"
        values={{
          quote: (
            <blockquote>
              We're currently gathering a copy of your personal data. This
              shouldn't take longer than 30 days. But don't worry, we'll send
              you an email when it's ready.
            </blockquote>
          ),
        }}
      >
        {
          "This can take a while. As Spotify states: {quote}That's still quite a long wait, but trust me: it's worth it :)"
        }
      </Translate>
    </>
  );
}

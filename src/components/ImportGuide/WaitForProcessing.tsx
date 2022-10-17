import React from 'react';
import Translate from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';

export default function StepSeven(): JSX.Element {
  return (
    <>
      <p>
        <Translate id="importguide.stepseven.text">
          Once your streams have reached the stats.fm servers, they need to be
          processed. Duplicate streams will be filtered out, and there will be a
          lot of calculations made for each stream in order to save it securely
          in the database. This can take a while. Depending on the amount of
          streams and the amount of people importing their streams at once this
          can take just a few seconds up to a couple of hours.
        </Translate>
      </p>
      <Admonition type="tip">
        <p>
          <Translate id="importguide.stepseven.admonition.text">
            If you don't like staring at a webpage for a long time, you can
            close the tab while your streams are being processed.
          </Translate>
        </p>
      </Admonition>
    </>
  );
}

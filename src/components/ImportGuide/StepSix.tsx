import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';
import React from 'react';

export default function StepSix(): JSX.Element {
  return (
    <>
      <Admonition type="danger">
        <p>
          <Translate
            id="importguide.stepsix.admonition.text"
            values={{
              endsong: <code>endsong.json</code>,
            }}
          >
            {'You can only upload one {endsong} file at a time.'}
          </Translate>
        </p>
      </Admonition>
      <p>
        <Translate
          id="importguide.stepsix.one"
          values={{
            endsong: <code>endsong.json</code>,
            importpage: (
              <Link to="https://stats.fm/import">https://stats.fm/import</Link>
            ),
          }}
        >
          {
            'When you have your extracted .JSON files ready, go to {importpage}, login and click "Import a new file" button. Then, select your first {endsong} file. You have to upload files one by one.'
          }
        </Translate>
      </p>
      <p>
        <Translate id="importguide.stepsix.two">
          After clicking selecting the file, your file will be sent to the
          Spotistats servers to be processed. This can take a few minutes.
          Meanwhile you can already upload your next file.
        </Translate>
      </p>
      <img
        alt={translate({
          message:
            'Import page showing uploaded imports and the button to import a new file',
          id: 'importguide.stepsix.image',
        })}
        src="/img/import/step6.png"
      />
    </>
  );
}

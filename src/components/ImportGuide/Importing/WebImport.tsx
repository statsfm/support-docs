import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';

export default function WebImport(): JSX.Element {
  return (
    <>
      <Admonition type="info">
        <p>
          <Translate
            id="importguide.webimport.onlyoneendsongfile"
            values={{
              endsong: <code>endsong.json</code>,
            }}
          >
            {
              'You can only upload one {endsong} file at a time via the website.'
            }
          </Translate>
        </p>
      </Admonition>
      <p>
        <Translate
          id="importguide.webimport.steps.one"
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
        <Translate id="importguide.webimport.steps.two">
          After clicking selecting the file, your file will be sent to the
          stats.fm servers to be processed. This can take a few minutes.
          Meanwhile you can already upload your next file.
        </Translate>
      </p>
      <p>
        <Translate id="importguide.webimport.steps.three">
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
          <Translate id="importguide.webimport.closetab.text">
            If you don't like staring at a webpage for a long time, you can
            close the tab while your streams are being processed.
          </Translate>
        </p>
      </Admonition>
    </>
  );
}

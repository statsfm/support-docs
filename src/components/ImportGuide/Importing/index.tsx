import React from 'react';
import { useLocation } from '@docusaurus/router';
import Admonition from '@theme/Admonition';
import Translate from '@docusaurus/Translate';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WebImport from './WebImport';
import AppImport from './AppImport';
import Link from '@docusaurus/Link';

export default function ImportingStep(): JSX.Element {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get('importtab') ?? 'web';
  return (
    <>
      <Admonition type="info">
        <p>
          <Translate id="importguide.importingstep.info.text">
            After you downloaded the files to your device and extracted them,
            you can choose between either uploading the files via the stats.fm
            web import page or via the integrated in-app import on mobile.
          </Translate>
        </p>
      </Admonition>
      <p></p>
      <Tabs
        defaultValue={
          ['web', 'app'].includes(tab.toLowerCase()) ? tab.toLowerCase() : 'app'
        }
      >
        <TabItem value="web" label="Web Import">
          <WebImport />
        </TabItem>
        <TabItem value="app" label="App Import">
          <AppImport />
        </TabItem>
      </Tabs>
      <p>
        No importable <code>endsong.json</code> files present in the files you
        received? Check out <Link to="../faq/no-endsong">this article</Link>.
      </p>
      <p>
        <Translate id="importguide.importingstep.streamprocessing">
          Once your streams have reached the stats.fm servers, they need to be
          processed. Duplicate streams will be filtered out, and there will be a
          lot of calculations made for each stream in order to save it securely
          in the database. This can take a while. Depending on the amount of
          streams and the amount of people importing their streams at once, this
          can take just a few seconds up to a couple of hours. For every
          uploaded file, you will receive a notification from the stats.fm app
          about the status of the uploaded file.
        </Translate>
      </p>
      <p>
        <Translate id="importguide.importingstep.failedfiles">
          File import failed? Please attempt to upload the errored file(s)
          again.
        </Translate>
      </p>
    </>
  );
}

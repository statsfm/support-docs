import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';

export default function AppImport(): JSX.Element {
  return (
    <>
      <Admonition type="info">
        <p>
          <Translate id="importguide.appimport.onlyoneendsongfile">
            stats.fm also offers you to import your files directly via the app.
            Compared to the web import it also allows you to import the entire
            .zip folder with all the relevant files automatically instead of a
            manual file-by-file upload.
          </Translate>
        </p>
      </Admonition>
      <p>
        <Translate id="importguide.appimport.openimportpage">
          To import your files via the app, open the stats.fm app. Then click on
          the settings icon in the top right of the screen. In the menu that
          opens, click on "Import files".
        </Translate>
      </p>
      <p>
        <Translate
          id="importguide.appimport.choosefile"
          values={{
            filename: <code>endsong.json</code>,
            zipfilename: <code>my_spotify_data.zip</code>,
          }}
        >
          {
            'On the page you just landed on, you are able to choose between uploading the zip file ({zipfilename}) or the files ({filename}) individually.'
          }
        </Translate>
      </p>
      <img
        alt={translate({
          message:
            'Screenshot of the stats.fm app with the "Import files" page in focus',
          id: 'importguide.appguide.importfiles.image',
        })}
        width={300}
        src="/img/import/app-import-screen.png"
      />
      <p>
        <Translate id="importguide.appimport.uploadfiles">
          Once you have chosen your preferred method, the file picker will open,
          locate the file you want to upload and click on it. Finally, the files
          are prepared to be uploaded in the Upload queue, confirm the upload by
          utilizing the Upload button and the files are being processed.
        </Translate>
      </p>
      <img
        alt={translate({
          message:
            'Screenshot of the stats.fm app with the "Import files" page in focus, with files in the upload queue',
          id: 'importguide.appimport.uploadqueue.image',
        })}
        width={300}
        src="/img/import/app-import-queue.png"
      />
    </>
  );
}

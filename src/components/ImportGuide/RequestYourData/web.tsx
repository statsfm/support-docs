import React from 'react';
import Admonition from '@theme/Admonition';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function WebDataRequest(): JSX.Element {
  return (
    <>
      <Admonition type="info" title="NEW">
        <Translate id="importguide.stepone.web.newoption">
          This method has been recently introduced since Spotify now allows you
          to request your data via the website. This is the easiest and most
          reliable way to request your data. You can still try the other methods
          if you want to.
        </Translate>
      </Admonition>
      <p>
        <Translate
          id="importguide.stepone.web.description"
          values={{
            endsong: <code>endsong.json</code>,
          }}
        >
          {
            'In order to request the {endsong} files, simply press the correct buttons on the Spotify website.'
          }
        </Translate>
      </p>
      <ol>
        <li>
          <p>
            <Translate
              id="importguide.stepone.web.stepone"
              values={{
                privacyPage: (
                  <Link to="https://www.spotify.com/account/privacy/">
                    <Translate id="importguide.stepone.web.stepone.privacypage.link">
                      Privacy page
                    </Translate>
                  </Link>
                ),
              }}
            >
              {'To get started, open the {privacyPage} on the Spotify website.'}
            </Translate>
          </p>
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.web.steptwo">
              Scroll down to the "Download your data" section.
            </Translate>
          </p>
          <img
            alt={translate({
              message:
                'Screenshot of the Spotify privacy page with the "Download your data" section in focus',
              id: 'importguide.stepone.web.steptwo.image',
            })}
            width={500}
            src="/img/import/privacy-step2.png"
          />
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.web.stepthree">
              Make sure to untick the box in the "Account data" panel.
            </Translate>
          </p>
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.web.stepfour">
              Make sure to tick the box in the "Extended streaming history"
              panel.
            </Translate>
          </p>
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.web.stepfive">
              At the end, your configuration should look like this:
            </Translate>
          </p>
          <img
            alt={translate({
              message:
                'Screenshot of the Spotify privacy page with the "Download your data" section in focus with the correct configured options',
              id: 'importguide.stepone.web.stepfive.image',
            })}
            width={500}
            src="/img/import/privacy-step5.png"
          />
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.web.stepsix">
              Press the "Request data" button.
            </Translate>
          </p>
        </li>
      </ol>
    </>
  );
}

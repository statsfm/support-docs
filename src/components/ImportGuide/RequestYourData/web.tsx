import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function WebDataRequest(): JSX.Element {
  return (
    <>
      <p>
        <Translate id="importguide.stepone.web.description">
          {
            'In order to request the extended streaming history files, simply press the correct buttons on the Spotify website.'
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
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.web.stepthree">
              Configure the page so it looks like the screenshot below (Unticked
              the "Account data" and ticked the "Extended streaming history"
              boxes).
            </Translate>
          </p>
          <img
            alt={translate({
              message:
                'Screenshot of the Spotify privacy page with the "Download your data" section in focus with the correct configured options, unticked "Account data" and ticked "Extended streaming history"',
              id: 'importguide.stepone.web.stepthree.image',
            })}
            width={500}
            src="/img/import/privacy-step3.png"
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

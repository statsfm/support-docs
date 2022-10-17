import React from 'react';
import Admonition from '@theme/Admonition';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function ChatDataRequest(): JSX.Element {
  return (
    <>
      <Admonition type="tip" title="Tip">
        <Translate id="importguide.stepone.livechat.logintip">
          Make sure to be logged in with your Spotify account.
        </Translate>
      </Admonition>
      <p>
        <Translate
          id="importguide.stepone.livechat.description"
          values={{
            endsong: <code>endsong.json</code>,
          }}
        >
          {
            "In order to request the {endsong} files, simply contact Spotify's support via their live chat. Past experience has shown that this method to initiate the request for the files is more reliable, simpler and less error-prone than via the mail."
          }
        </Translate>
      </p>
      <ol>
        <li>
          <p>
            <Translate
              id="importguide.stepone.livechat.stepone"
              values={{
                supportLink: (
                  <Link to="https://support.spotify.com/contact-spotify-privacy/">
                    <Translate id="importguide.stepone.livechat.stepone.spotifysupport.link">
                      Spotify Support page
                    </Translate>
                  </Link>
                ),
              }}
            >
              {
                'To get started, open the {supportLink}. Then, click on "Start messaging" to start a live chat conversation. This will start a connection with a bot that will guide you through the process.'
              }
            </Translate>
          </p>
          <img
            alt={translate({
              message:
                'Spotify Live chat page with a mouse hovering over the "Start Messaging" button',
              id: 'importguide.stepone.livechat.stepone.image',
            })}
            width={700}
            src="/img/import/livechat-step1.png"
          />
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.livechat.steptwo.text">
              When asked about the topic or the issue, select "Data & privacy".
              If no such option is coming up, just type "Data & privacy" in the
              chat and hit Enter.
            </Translate>
          </p>
          <img
            alt={translate({
              message:
                'Spotify Live chat image of the text "Data & privacy" being typed in the chat',
              id: 'importguide.stepone.livechat.steptwo.image',
            })}
            width={250}
            src="/img/import/livechat-step2.png"
          />
        </li>
        <li>
          <p>
            <Translate id="importguide.stepone.livechat.stepthree.text">
              After that, select the option "Download / access my data".
            </Translate>
          </p>

          <img
            alt={translate({
              message:
                'Spotify Live chat image of answering "Download / access my data" in the chat and then seeing the responses',
              id: 'importguide.stepone.livechat.stepthree.image',
            })}
            width={250}
            src="/img/import/livechat-step3.png"
          />
        </li>
        <li>
          <Translate id="importguide.stepone.livechat.stepfour.text">
            In the next step you are asked if you would like technical log
            information / extended streaming history. This is the data package
            you need! To request it, click the option "No, I want more data".
          </Translate>
        </li>
        <li>
          <Translate id="importguide.stepone.livechat.stepfive.text">
            Have a little conversation with the agent that you get assigned, and
            make sure that they are giving you the right files!
          </Translate>
        </li>
        <li>
          <Translate id="importguide.stepone.livechat.stepsix.text">
            Finally, you'll receive an email to confirm that data request. You
            can close the chat.
          </Translate>
        </li>
      </ol>
    </>
  );
}

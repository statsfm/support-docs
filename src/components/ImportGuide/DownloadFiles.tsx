import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';

export default function StepFive(): JSX.Element {
  return (
    <>
      <p>
        <Translate
          id="importguide.stepfive.text"
          values={{
            link: (
              <Link to="https://www.youtube.com/watch?v=do3u3tXAbWQ">
                <Translate id="importguide.stepfive.youtubezip.link">
                  on this page
                </Translate>
              </Link>
            ),
          }}
        >
          {
            "Once your data is ready to download, you'll get an email with a link to download a .ZIP file. You need to extract this file before proceeding. You can learn how to extract .ZIP files {link}."
          }
        </Translate>
      </p>

      <Admonition type="danger">
        <p>
          <Translate
            id="importguide.stepfive.admonition.text"
            values={{
              boldtext: (
                <strong>
                  <Translate id="importguide.stepfive.admonition.text.boldtext">
                    Never share your files with others!
                  </Translate>
                </strong>
              ),
            }}
          >
            {
              '{boldtext} The data may contain a lot of personal information, depending on what Spotify has sent you.'
            }
          </Translate>
        </p>
      </Admonition>
      <img
        alt={translate({
          message: 'Email showing the download link to your data',
          id: 'importguide.stepfive.image',
        })}
        src="/img/import/step5.png"
      />
    </>
  );
}

import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import React from 'react';

function VideoContent() {
    return (
      <div>
        <Section className="VideoContent" background="tint">
          <br />
          <TwoColumns
            columnOne={
              <TextColumn
                title="Talks and Videos"
                text={textContent.talks}
                moreContent={<TwitterButton accountName="reactnative" />}
              />
            }
            columnTwo={
              <div className="vidWrapper">
                <iframe
                  src="https://www.youtube.com/embed/NCAY0HIfrwc"
                  title="Mobile Innovation with React Native, ComponentKit, and Litho"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            }
          />
          <br />
          <TwoColumns
            columnOne={
              <>
                <p>
                  The{' '}
                  <a href="https://opensource.facebook.com/">
                    Meta Open Source team
                  </a>{' '}
                  has put together a short overview of React Native, where they
                  explained the project in beginner's terms.
                </p>
              </>
            }
            columnTwo={
              <div className="vidWrapper">
                <iframe
                  src="https://www.youtube.com/embed/wUDeLT6WXnQ"
                  title="Explain Like I'm 5: React Native"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            }
          />
        </Section>
      </div>
    );
  }

  export default VideoContent;
import React from 'react';
import HubspotForm from 'react-hubspot-form';

import LoadingAnimation from './LoadingAnimation';

export default function HubspotNewsletter() {
  return (
    <>
      <div id="hubspotForm">
        <HubspotForm
          region= "eu1"
          portalId="143310234"
          formId="4b157dba-1384-486d-a7ed-a00cc29854a6"
          onSubmit={() => console.log('Submit!')}
          loading={
            <div className="py-40 md:py-40 md:px-10 px-mb-10">
              <LoadingAnimation />
              <p className="mt-20 text-xs text-center text-gray-400 font-sans">
                If the content does not appear correctly, <br />
                follow this{' '}
                <a
                  href="https://share.hsforms.com/1XvID2DisShOLAtc3xvaexw4iqge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  link
                </a>
                .
              </p>
            </div>
          }
        />
      </div>
    </>
  );
}

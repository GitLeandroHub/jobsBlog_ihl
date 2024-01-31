import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import NewsletterModal from '../components/NewsletterModal';
import elementLogo from '../images/logo-element-dark.svg';

interface ContactPageProps {
  data: any;
}

export default function ContactPage({ data }: ContactPageProps) {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="bg-parityWhite bg-hero-pattern-dark bg-cover bg-center -mt-32">
        <div className="container">
          <div className="flex flex-col">
            <div className="pt-56">
              <h3 className="text-textDark text-center font-normal md:text-5xl md:mb-8">
                {intl.formatMessage({ id: 'contact-page-title' })}
              </h3>
              
              <div className="pt-12 pb-4 md:flex md:place-content-center">
  
  <form action="https://formsubmit.co/miguel@invisiblehandlab.com" method="POST" enctype="multipart/form-data">
    <div className="form-group">
      <label htmlFor="firstName">First Name *</label>
      <input type="text" name="firstName" className="hs_email" required/>
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name *</label>
      <input type="text" name="lastName" className="hs_email" required/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email *</label>
      <input type="email" name="email" className="hs_email" required/>
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" className="hs_email"/>
    </div>
    <div className="form-group">
      <label htmlFor="location">Location (City) *</label>
      <input type="text" name="location" className="hs_email" required/>
    </div>
   
    <div className="form-group">
      <label htmlFor="resume">Resume/CV *</label>
      <input type="file" name="resume" accept=".pdf, .doc, .docx, .txt, .rtf" className="hs_email"/>
    </div>
    <div className="form-group">
      <label htmlFor="coverLetter">Cover Letter</label>
      <input type="file" name="coverLetter" accept=".pdf, .doc, .docx, .txt, .rtf" className="hs_email"/>
    </div>
    <div className="form-group">
      <label htmlFor="linkedin">LinkedIn Profile</label>
      <input type="text" name="linkedin" className="hs_email"/>
    </div>
    <div className="form-group">
      <label htmlFor="website">Website</label>
      <input type="text" name="website" className="hs_email"/>
    </div>
    <button type="submit" className="btn-dark btn-lg btn-block mt-4 mb-4" style={{ backgroundColor: '#FF4081', color: '#ffffff', padding: '0.5rem 1rem' }}>
      Submit Application
    </button>
  </form>

</div>

            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite border-t">
        <div className="container">
          <div className="flex flex-col justify-center text-center py-16 md:py-24">
            <h3 className="font-normal mb-8 md:text-4xl">{intl.formatMessage({ id: 'contact-page-footer-title' })}</h3>
            <div className="mb-4">
              <NewsletterModal sourcePage="contact" />
            </div>
            <p className="text-sm text-textLight">
              {intl.formatMessage({ id: 'contact-page-footer-subcta-one' })}{' '}
              <LocalizedLink className="text-parityPink" to="/blog">
                {intl.formatMessage({ id: 'contact-page-footer-subcta-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        email
        gitter
        element
        pressEmail
      }
    }
  }
`;
import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Button from '../components/Button';
import Social from '../components/Social';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import TransparentButton from '../components/TransparentButton';


import JobBoard from '../components/JobBoardComponent';


export default function JobsPage() {
  const intl = useIntl();

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'jobs-page-seo' })} />
      <section className="block h-hero min-h-heroMin">
        <div className="absolute h-hero min-h-heroMin z-0 w-full top-0 left-0 bg-hero-rustJobs bg-cover bg-center"></div>
        <div className="container relative text-center text-white h-5/6 flex flex-col justify-center">
          <h3 className="text-white font-normal md:text-5xl md:mb-8">
            {intl.formatMessage({ id: 'jobs-page-hero-title' })}
          </h3>
          <h4 className="text-white font-normal leading-relaxed px-4 mx-auto mb-8 text-lg md:text-2xl md:px-24 max-w-3xl">
            {intl.formatMessage({ id: 'jobs-page-hero-sub-title' })}
          </h4>
          <TransparentButton extraClass="mb-10 md:mb-4" link="/jobs/#jobboard">
            {intl.formatMessage({ id: 'jobs-page-hero-cta' })}
          </TransparentButton>
          <p className="font-normal text-xs">
            {intl.formatMessage({ id: 'about-page-hero-sub-cta-1' })}&nbsp;
            <LocalizedLink className="font-bold" to="/contact/">
              {intl.formatMessage({ id: 'about-page-hero-sub-cta-2' })}
            </LocalizedLink>
          </p>
        </div>
        
      </section>
      
      <section id="jobboard" className="pb-8">
        <div className="container">
          
          
          <JobBoard />
        </div>
      </section>
      
      <section className="border-t h-full">
        <div className="container">
          <div className="flex flex-col items-center pt-12 md:pt-28 md:pb-16 text-center">
            <div className="container -mt-10">
              <h4 className="text-2xl md:text-4xl font-normal mb-10 ">
                {intl.formatMessage({ id: 'jobs-page-footer-cta-title1' })}
              </h4>
            </div>
            <Button link="/contact" extraClass="mb-10">
              {intl.formatMessage({ id: 'jobs-page-footer-cta-button-text1' })}
            </Button>
            <section className="border-t h-full">
              <div className="container">
                <h4 className="text-2xl md:text-4xl font-normal mb-10 mt-10">
                  {intl.formatMessage({ id: 'jobs-page-footer-cta-title' })}
                </h4>
                <Button link="/blog" extraClass="mb-10">
                  {intl.formatMessage({ id: 'jobs-page-footer-cta-button-text' })}
                </Button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLink } from 'gatsby-theme-i18n';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

import Header from './Header';
import HeaderLight from './HeaderLight';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';
import Banner from '../Banner';
import MDXButton from '../MDXButton';

interface LayoutProps {
  children: React.ReactNode;
  theme?: string;
}

const components = {
  a: MdxLink,
  MDXButton,
};

export default function Layout(props: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    document.body.style.visibility = 'hidden';

    const handleLoad = () => {
      document.body.style.visibility = 'visible';
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    const acceptCookieButton = document.querySelector('.cm-btn-success');
    
    acceptCookieButton?.addEventListener('click', () => {
      initializeAndTrack(location);
    });
  }, [location]);

  return (
    <>
      <Banner />
      {props.theme === 'light' ? <HeaderLight /> : <Header />}
      <main>
        <ScrollToTop />
        <MDXProvider components={components}>{props.children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
}
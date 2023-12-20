import React from 'react';
import Layout from '../../components/layouts/Layout';
import GavQoute from '../../components/sections/TechnologyPage/GavQoute';
import FeaturedBlogs from '../../components/FeaturedBlogs';
import Social from '../../components/Social';
import SEO from '../../components/layouts/SEO';
import { useIntl } from 'react-intl';

export default function TechnologiesPage() {
  const intl = useIntl();

  return (
    <Layout theme="">
      <SEO title={intl.formatMessage({ id: 'technology-page-seo' })} />
      <FeaturedBlogs />
      <Social />
    </Layout>
  );
}

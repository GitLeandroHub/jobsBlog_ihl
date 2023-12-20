import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import HeroPattern from '../components/sections/Homepage/HeroPattern';






import FeaturedBlog from '../components/FeaturedBlogs';
import FooterCTA from '../components/FooterCTA';

import SEO from '../components/layouts/SEO';
import { useIntl } from 'react-intl';

export default function Index() {
  const intl = useIntl();

  return (
    <Layout theme="">
      <SEO title={intl.formatMessage({ id: 'homepage-hero-title' })} />
      <HeroPattern />






      <FeaturedBlog />


    </Layout>
  );
}

// TODO add graphql types
export const query = graphql`
  query($locale: String!) {
    allFile(filter: { sourceInstanceName: { eq: "blog" }, childMdx: { fields: { locale: { eq: $locale } } } }) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;

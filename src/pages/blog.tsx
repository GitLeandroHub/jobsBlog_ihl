import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Layout from '../components/layouts/Layout';
import BlogExcerpt from '../components/BlogExcerpt';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import StaticButton from '../components/StaticButton';

interface BlogPageProps {
  data: any;
  pageContext: any;
}

export default function BlogPage(props: BlogPageProps) {
  const intl = useIntl();
  const { data } = props;
  const [visibleBlogs, setVisibleBlogs] = useState(10);

  // Adjust the hero section's bottom padding to avoid overlap
  const heroSectionStyle = {
    paddingBottom: '5rem', // Increase bottom padding to push content down
  };

  // Additional style to ensure the content section moves down accordingly
  const contentSectionStyle = {
    marginTop: '-5rem', // Adjust the margin to pull the section up or down as needed
    paddingTop: '18rem', // Add padding to compensate for the negative margin, ensuring content isn't hidden
    backgroundAttachment: 'scroll', // Change to 'scroll' to move with the rest of the page
  };

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'blog-page-seo' })} />
      <section className="block h-hero min-h-heroMin" style={heroSectionStyle}>
        <div className="absolute h-full w-full top-0 left-0 bg-hero-blogPage bg-cover bg-center"></div>
        <div className="container relative text-center text-white flex flex-col justify-center items-center" style={{ height: '100vh' }}>
          <h3 className="text-white font-bold md:text-5xl md:mb-8">
            {intl.formatMessage({ id: 'blog-page-title' })}
          </h3>
          <h4 className="text-white font-normal leading-relaxed px-4 mb-8 text-lg md:text-2xl md:px-24">
            {intl.formatMessage({ id: 'blog-page-description' })}
          </h4>
        </div>
      </section>
      <section className="mx-4 h-full md:bg-hero-pattern-2 bg-top bg-auto" style={contentSectionStyle}>
        {data.allMdx.edges.slice(0, visibleBlogs).map((edge: any, index: any) => {
          return (
            <article key={index}>
              <BlogExcerpt
                title={edge.node.frontmatter.blogTitle}
                link={edge.node.frontmatter.slug}
                date={edge.node.frontmatter.date_published}
                mdTags={edge.node.frontmatter.tags}
                image={edge.node.frontmatter.image}
                excerpt={edge.node.excerpt}
                timeToRead={edge.node.timeToRead}
              />
            </article>
          );
        })}
        <div className="flex justify-center my-10">
          {visibleBlogs < data.allMdx.edges.length ? (
            <div onClick={() => setVisibleBlogs(visibleBlogs + 10)}>
              <StaticButton>Load more</StaticButton>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date_published, order: DESC }) {
      edges {
        node {
          frontmatter {
            blogTitle
            date_published(formatString: "MMMM DD, YYYY")
            tags
            image
            slug
          }
          excerpt(pruneLength: 220)
          timeToRead
        }
      }
    }
  }
`;

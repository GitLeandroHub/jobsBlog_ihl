const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://invisiblehandlab.org/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'Invisible Hand Lab',
    siteUrl: siteUrl,
    blogUrl: `${siteUrl}/blog`,
    defaultLang: `en-US`,
    image: `${siteUrl}/images/hand-blog-ne.jpeg`,
    description:
      'InvisibleHandLab - Community-driven, blockchain-based solutions.',
    keywords: ['Blockchain', 'Polkadot', 'Substrate', 'Web3.0', 'InvisibleHandLab'],
    author: 'Invisiblehandlab WebDev Team',
    pressEmail: 'press@ihl.com',
    email: 'press@ihl.com',
    twitter: 'https://twitter.com/InvisibleHandLab',
    linkedIn: 'https://www.linkedin.com/company/invisiblehandlab',
    element: 'https://app.element.io/',
    github: 'https://github.com/invisiblehandlab/',
    telegram: 'https://t.me/invisible_hand_lab',
    gitter: 'https://gitter.im/paritytech/parity',
    relayChain: 'https://relaychain.fm/',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.blogTitle,
                  description: edge.node.excerpt,
                  image: edge.node.frontmatter.image,
                  category: edge.node.frontmatter.tags,
                  ttl: edge.node.timeToRead,
                  date: edge.node.frontmatter.date_published,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: [frontmatter___date_published]}) {
                  edges {
                    node {
                      excerpt
                      html
                      timeToRead
                      frontmatter {
                        tags
                        slug
                        image
                        date_published(formatString: "MMMM DD, YYYY")
                        author
                        blogTitle
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'InvisibleHandLab Blog Feed',
            link: 'https://invisiblehandlab.org/',
            language: `en-US`,
            webMaster: 'Imad Arain',
            managingEditor: 'Zach Cavanaugh',
            categories: [
            ],
            copyright: 'Copyright 2024 InvisibleHandLab',
            feed_url: 'https://invisiblehandlab.kinera.network/rss.xml',
            ttl: '60',
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: `en`,
        configPath: `${__dirname}/content/config.json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./content/react-intl/en.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `InvisibleHandLab`,
        short_name: `InvisibleHandLab`,
        start_url: `/`,
        background_color: `#F1F3F2`,
        theme_color: `#FF1864`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layouts/Layout.tsx`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-twitter',
  ],
};

module.exports = {
  siteMetadata: {
    title: `Wintons The Blinds Company`,
    description: `Beautifully Crafted Blinds For Your Home`,
    siteUrl: "http://localhost:8000/",
    wordPressSiteUrl: "https://admin.wintonsblinds.co.uk/",
    author: `@cristianxsa`,
    fbAppId: "",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:400,700,900`, `Francois One\:400`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://admin.wintonsblinds.co.uk/graphql`,
        verbose: true,
        develop: {
          nodeUpdateInterval: 3000,
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            // a critical error is a WPGraphQL query that returns an error and no response data. Currently WPGQL will error if we try to access private posts so if this is false it returns a lot of irrelevant errors.
            onlyReportCriticalErrors: true,
          },
        },
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit: 1000,
            /* process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000, */
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://localhost:8000/",
        sitemap: `http://localhost:8000/sitemap.xml`,
        policy: [{ userAgent: "*", allow: ["/"] }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Blinds Company`,
        short_name: `Wintons`,
        start_url: `/`,
        background_color: `#eaeaea`,
        theme_color: `#1e1e1e`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

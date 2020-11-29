/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `T & a Blog`,
    description: `T & a Blog is my creative space to spill the tea on all things travel, beauty, food and more. I’m here to share my adventures, ramblings, tips and thoughts about anything and everything on this roller coaster ride called life.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_IE",
          url: "https://tandablog.com",
          site_name: "T & a Blog",
          description: "T & a Blog is my creative space to spill the tea on all things travel, beauty, food and more. I’m here to share my adventures, ramblings, tips and thoughts about anything and everything on this roller coaster ride called life."
        },
      }
    },

    `gatsby-transformer-remark`
  ]
}

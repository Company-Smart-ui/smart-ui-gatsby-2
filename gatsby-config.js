module.exports = {
  siteMetadata: {
    title: `smart-ui-gatsby-2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  //     {
  //   resolve: 'gatsby-source-wordpress',
  //   options: {
  //     "url": "https://wdev.smart-ui.pro/graphql"
  //   }
  // },
   "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }
  ,
      'gatsby-plugin-minify-classnames',
      {
          resolve: `gatsby-plugin-alias-imports`,
          options: {
              alias: {
                  "@src": "src",
              },
              extensions: [
                  "js , scss",
              ],
          }
      }

  ]
};
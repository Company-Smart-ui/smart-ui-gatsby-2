
const strapiConfig = {
    apiURL: 'https://stark-refuge-01750.herokuapp.com/' ,
    accessToken:  '9a50ad95c89407920b468f977558d9a52e70c88b21eddeeb97b65c82b695ce42d9c0afa6a9623aa1b45ab31c6aa2592e173bcef5a3c883c35bb8818110eb7179c6dd94ac903aecc5323f847845f1d2c455a96d22225bfccde2f8aa469c45a66d78307af131e72a23f2d4cd65153cae7e5cbd65782ece1ac3e3ab3a9f625a3f27',
    collectionTypes: [   ],
    singleTypes: [ 'home' ],
    queryLimit: 1000,
};


module.exports = {
  siteMetadata: {
    title: `smart-ui-gatsby-2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [

      {
          resolve: `gatsby-source-strapi`,
          options: strapiConfig,
      },
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
      // 'gatsby-plugin-minify-classnames',
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
      },
      {
          resolve: `gatsby-plugin-react-i18next`,
          options: {
              languages: [`en`, `uk-UA`],
              defaultLanguage: `en`,
              debug:true
          }
      }

  ]
};

const strapiConfig = {
    apiURL: 'http://localhost:1337' ,
    accessToken: '352de73c0867ea6e184ee51a25df2388a0fb7a1fa05034bb10d03d91c948916db71e4c14c78c05aaffe8b591a07f7abfd93eb22b0e7c4d08e6141bb1db001fab458efff5a5c876643372a75517914faea85a8114b2549e380e71b23ebe831607bf99db6d42b9d5a90bba2e8b467b3d359d879534a6a2adb875ca7bdf5c4fa3b0',

    collectionTypes: [
        {
            singularName: "post",
            i18n: {
                locale: 'all', // Fetch all localizations
            },
        },
        {
            singularName: "portfolio-project",
            i18n: {
                locale: 'all', // Fetch all localizations
            },
        },
         ],
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
              debug:false
          }
      }

  ]
};
import * as React from "react";
import {Portfolio} from "../screens/portfolio/portfolio";

import {graphql} from "gatsby";

export const query = graphql`
  query ($language: String ,$pageName:[String] ) {
   locales: allLocale(filter: {language: {eq: $language}, ns: {in: $pageName}}) {
      edges {
        node { 
          ns
          language
          data 
        }
      }
    }
  }
`

const PortfolioPage = ( ) => {

  return    <Portfolio/>


}

export default PortfolioPage
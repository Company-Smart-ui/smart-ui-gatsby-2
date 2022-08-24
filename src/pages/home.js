import * as React from "react"
import {HomePage} from "../screens/hompage/homePage";
import {graphql} from "gatsby";

export const query = graphql`
  query ($language: String ,$pageName:String ) {
   locales: allLocale(filter: {language: {eq: $language}, ns: {eq: $pageName}}) {
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
const Home = ( ) => {
    return     <HomePage/>


}

export default Home
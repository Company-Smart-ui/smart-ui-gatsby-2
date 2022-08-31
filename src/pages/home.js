import * as React from "react"
import {HomePage} from "../screens/hompage/homePage";
import {graphql} from "gatsby";
import {SEO} from "../components/SEO/SEO";

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
const Home = ( ) => {
    return  <>
        <title>Not found</title>
        <HomePage/>
    </>


}

export default Home

export const Head = () => (
    <SEO />
)
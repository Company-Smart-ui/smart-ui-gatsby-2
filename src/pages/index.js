import * as React from "react"
import {HomePage} from "../screens/hompage/homePage";
import {graphql} from "gatsby";
import {Seo} from "../components/SEO/SEO";
import componentDidMount from "../global/chatbot";

export const query = graphql`
  query ($language: String  ) {
   locales: allLocale(filter: {language: {eq: $language}, ns: {in:["home" , "global"]}}) {
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

export const Head = () => (
    <Seo title={'Home'}>
      {componentDidMount()}
      </Seo>
)
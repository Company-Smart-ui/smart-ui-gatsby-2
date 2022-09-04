import * as React from "react"
import {Login} from "../screens/login/login";
import {graphql} from "gatsby";
import {Seo} from "../components/SEO/SEO";
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

const LoginPage = ( ) => {
    return     < Login/>


}

export default LoginPage

export const Head = (data) =>{
    return (
        <Seo title={data.pageContext.pageName[0]} />
    )
}
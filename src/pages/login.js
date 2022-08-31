import * as React from "react"
import {Login} from "../screens/login/login";
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

const LoginPage = ( ) => {
    return     < Login/>


}

export default LoginPage
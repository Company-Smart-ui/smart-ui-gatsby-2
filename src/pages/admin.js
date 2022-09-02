import * as React from "react"
import {Admin} from "../screens/admin/admin";
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

const AdminPage = ( ) => {
    return     <Admin/>

}

export default AdminPage
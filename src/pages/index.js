import * as React from "react"

import {useEffect} from "react";
import {graphql, navigate} from "gatsby";
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
const IndexPage = ( ) => {

 useEffect(()=>{
   navigate('/home/')
 },[])
  return    <></>


}

export default IndexPage

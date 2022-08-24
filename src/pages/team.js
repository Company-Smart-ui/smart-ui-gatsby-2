import React  from 'react';
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
const Team = ( ) => {

    return <div>


    </div>
};

export default Team
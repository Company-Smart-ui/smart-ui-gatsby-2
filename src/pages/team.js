import React from 'react';
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
const Team = () => {
    return <div style={{height: 800, background: '#fff'}}>


    </div>
};

export default Team

export const Head = (data) => {
    return (
        <Seo title={data.pageContext.pageName[0]}/>
    )
}
import * as React from "react";
import {Portfolio} from "../screens/portfolio/portfolio";

import {graphql} from "gatsby";
import {Seo} from "../components/SEO/SEO";
import axios from "axios";
import {API} from "../api/API";

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

const PortfolioPage = ({serverData}) => {

    return <Portfolio serverData={serverData}/>


}

export default PortfolioPage

export const Head = (data) => {
    return (
        <Seo title={data.pageContext.pageName[0]}/>
    )
}

export async function getServerData() {
    const resp = await axios(API.SINGLE_PROJECTS)
        .catch(function (error) {
            console.log(error.toJSON());
            return {
                status: 500,
                headers: {},
                props: {}
            }
        })
    return {
        props: resp.data,
    }
}
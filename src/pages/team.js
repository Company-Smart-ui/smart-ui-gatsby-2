import React, {useTransition} from 'react';
import {graphql} from "gatsby";
import {useTranslation} from "react-i18next";



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
const Team = (props) => {
    const {t}= useTranslation();
     console.log(props)
    return <div>
        {t('h1')}

    </div>
};

export default Team
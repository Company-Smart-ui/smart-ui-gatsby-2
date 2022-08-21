import React, {useTransition} from 'react';
import {graphql} from "gatsby";
import {useTranslation} from "react-i18next";

import {Link, useI18next } from 'gatsby-plugin-react-i18next';

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
    const {t}= useTranslation();
    return <div>
        {t('h1')}

    </div>
};

export default Team
import React from 'react';
import * as style from './langSwitch.module.scss'
import {Link, useI18next} from "gatsby-plugin-react-i18next";


export const LangSwitch = ({delay}) => {
    const {languages, originalPath ,language} = useI18next();
    return    <ul className={style.langSwitch}>
            {languages.map((lng) => (
                <li style={{transitionDelay:delay+'s'}} className={ " langItem " } key={lng}>
                    <Link   to={originalPath} className={(lng===language?" active ": "   ")  } language={lng}>
                        {lng==='uk-UA'?'ua':lng}
                    </Link>
                </li>
            ))}
        </ul>

};
 
import React from 'react';
import * as style from './langSwitch.module.scss'
import {Link, useI18next} from "gatsby-plugin-react-i18next";


export const LangSwitch = ({delay}) => {
    const {languages, originalPath ,language} = useI18next();
    return    <ul className={style.langSwitch}>
            {languages.map((lng, key) => (
                <li style={{animationDelay:(delay*0.05+0.3)+0.05*(key+1)+"s"}} className={ " langItem " } key={lng}>
                    <Link   to={originalPath} className={(lng===language?" active ": "   ")  } language={lng}>
                        {lng==='uk-UA'?'ua':lng}
                    </Link>
                </li>
            ))}
        </ul>

};
 
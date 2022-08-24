import React from 'react';
import * as style from './loader.module.scss'
import Icon from './loader.svg'
export const Loader = () => {

    return <div className={style.loader}>
        <img src={Icon} alt=""/>
    </div>
};
 
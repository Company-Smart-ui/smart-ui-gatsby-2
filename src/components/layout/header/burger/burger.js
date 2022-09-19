import React from 'react';
import * as style from './burger.module.scss'

export const Burger = ({isOpen, onToggle, className}) => {

    return  <button onClick={onToggle} className={[  style.burger , isOpen? style.active:" ", className, 'burger' ].join(" ") }>
        <span/>
        <span/>
        <span/>
    </button>
};

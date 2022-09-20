import React from 'react';
import * as style from './burger.module.scss'

export const Burger = ({isOpen, onToggle}) => {

    return  <button onClick={onToggle} className={`${style.burger} ${isOpen? style.active:" "} burger`}>
        <span/>
        <span/>
        <span/>
    </button>
};

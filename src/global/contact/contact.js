import React from 'react';
import * as style from './contact.module.scss'
import {CONTACTS} from "../data";



const Single =({link , img , alt })=>{
    return <li>
        <a target={"_blank"} rel={"noreferrer"} href={link}> <img src={img} alt={alt}/></a>
    </li>
}

export const Contact = () => {

    return     <ul className={style.contact}>
        {CONTACTS.map((item , i)=>{
            return <Single key={i} {...item} />
        })}

    </ul>
};



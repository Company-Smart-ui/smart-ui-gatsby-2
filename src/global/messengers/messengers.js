import React from 'react';
import * as style from "./messengers.module.scss";
import {MESSENGERS} from "../data";
import {NAVIGATION} from "../../components/layout/header/header.js";


 const Single = ({info})=>{
    return <li style={{transitionDelay:(Object.entries(NAVIGATION).length+2)/5+"s"}} >   <a rel="noreferrer"  title={info.alt} target={"_blank"} href={info.link}> <img src={info.img} alt={info.alt}/>   </a>  </li>
}

export const Messenger = ({data = MESSENGERS}) => {
    return <ul className={style.messengers + " messengers"}>
    {data.map((m , i )=>   <Single info={m} key={i}/>)}
    </ul>
}

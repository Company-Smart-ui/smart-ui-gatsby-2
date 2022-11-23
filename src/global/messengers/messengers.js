import React from 'react';
import * as style from "./messengers.module.scss";


 const Single = ({info, delay})=>{
    return <li style={{animationDelay:delay + "s"}} >   <a rel="noreferrer"  title={info.alt} target={"_blank"} href={info.link}> <img src={info.img} alt={info.alt}/>   </a>  </li>
}

export const Messenger = ({data, delay}) => {
    return <ul className={style.messengers + " messengers"}>
    {data.map((m, i)=>   <Single info={m} key={i} delay={(delay*0.05+0.3)+0.05*(i+1)}/>)}
    </ul>
}

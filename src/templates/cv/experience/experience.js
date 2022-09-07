import * as React from "react"
import * as style from "./experience.module.scss";

export function ItemJob({infoJob}) {
    const { nameCompany, time, nameJob } = infoJob;
    return <div className={style.itemJob}>
        <div className="wrap">
            <h3 className="name-company">{nameCompany}</h3>
            <p>{time}</p>
        </div>
        <h3 className="name-job">{nameJob}</h3>
    </div>
}
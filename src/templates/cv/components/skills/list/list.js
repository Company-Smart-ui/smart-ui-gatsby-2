import * as React from "react";
import * as style from "./list.module.scss";

export const List = (props) => {
    const array = props.content;
    const mainArray = array.map((t) => t.text).join(" ").split(",");
    let column = Math.round(mainArray.length / 5) || 1;
    column = column > 3 ? 3 : column;
    return (
        <div className={`${style.list} ${props.classes && props.classes}`}>
            <h4>{props.title}</h4>
            <ul style={{columnCount: column}} className={style.listItem}>
                {mainArray.map((text, key) => <li key={key}>{text.trim()}</li>)}
            </ul>

        </div>
    );
};

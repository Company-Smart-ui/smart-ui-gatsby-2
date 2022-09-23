import * as React from "react";

export const Block = (props) => {
    return (
        <div className={`block${props.class ? ' ' + props.class : ''}`}>
            <h3 className="subtitle">{props.title}</h3>
            {props.text && (
                <p>{props.text}</p>
            )}
            {props.children}
        </div>
    )
}
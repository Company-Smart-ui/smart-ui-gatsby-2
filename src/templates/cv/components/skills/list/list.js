import * as React from "react";
import * as style from "./list.module.scss";

export const List = (props) => {
  const array = props.content;
  const size = 5;
  const subarray = [];
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }

  return (
    <div className={`${style.skillList} ${props.classes && props.classes}`}>
      <h4>{props.title}</h4>
      {subarray.map((i, key) => {
        return (
          <ul key={key}>
            {i.map((l, key) => {
              return <li key={key}>{l.text}</li>;
            })}
          </ul>
        );
      })}
    </div>
  );
};

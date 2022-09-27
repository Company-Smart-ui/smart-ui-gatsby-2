import * as React from "react";
import * as style from "./list.module.scss";

export const List = (props) => {
  const array = props.content;
  const subarray = [];
  const mainArray = [];
  for (let i = 0; i < Math.ceil(array.length / 5); i++) {
    subarray[i] = array.slice(i * 5, i * 5 + 5);
  }
  for (let t = 0; t < Math.ceil(subarray.length / 3); t++) {
    mainArray[t] = subarray.slice(t * 3, t * 3 + 3);
  }

  return (
    <div className={`${style.list} ${props.classes && props.classes}`}>
      <h4>{props.title}</h4>
      <div className={style.listWrapp}>
        {mainArray.map((i, key) => {
          return (
            <div key={key} className={style.listItem}>
              {i.map((t, key) => {
                return (
                  <ul key={key}>
                    {t.map((l, key) => {
                      return <li key={key}>{l.text.trim()}</li>;
                    })}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

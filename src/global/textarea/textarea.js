import React from 'react';
import * as style from "./textarea.module.scss";

export const Textarea = ({placeholder = ''}) => {
    return <div className={style.field + ' textarea'}>
    <textarea defaultValue={''} placeholder={placeholder}></textarea>
    <fieldset>
      <legend>{placeholder}</legend>
    </fieldset>
  </div>
}
import React from 'react';
import * as style from "./formField.module.scss";

export const FormField = ({placeholder = '', children}) => {
    return <div className={style.field}>
      {children}
    <fieldset>
      <legend>{placeholder}</legend>
    </fieldset>
  </div>
}
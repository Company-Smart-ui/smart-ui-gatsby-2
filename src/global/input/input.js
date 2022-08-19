import React from 'react';
import * as style from "./input.module.scss";

export const Input = ({placeholder = '', type = 'text'}) => {
    return <div className={style.field + ' input'}>
    <input defaultValue={''} placeholder={placeholder} type={type} />
    <fieldset>
      <legend>{placeholder}</legend>
    </fieldset>
  </div>
}
import React from "react";
import ReactSelect from "react-select";
import * as styles from "./select.module.scss";
export const ItemsPerPage = ({ value, changeHandler, options }) => {
  return (
    <>
      <ReactSelect
        classNamePrefix="s"
        className={styles.select + " select__container "}
        components={{
          IndicatorSeparator: () => null,
        }}
        isSearchable={false}
        value={value}
        onChange={changeHandler}
        options={options}
      />
    </>
  );
};

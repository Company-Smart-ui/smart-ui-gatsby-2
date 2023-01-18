import React, { useState, useEffect } from "react";
import * as style from "./questions.module.scss";
import { Card } from "./Card";
import { useTranslation } from "react-i18next";

export const Questions = () => {
  const { t } = useTranslation();
  const [options, setOptions] = useState([]);
  const accordionList = t("questions_accondion", { returnObjects: true }) || [];

  const getListOptions = () => {
    const optionsList = Array.isArray(accordionList) && accordionList.map(() => {
      return {
        isOpen: false,
      };
    });

    return optionsList;
  };


  const dropdownHandler = (idx) => {
    const newOptions = options.map((option, i) => {
      if (idx === i) {
        return {
          ...option,
          isOpen: !option.isOpen,
        };
      }
      return option;
    });

    setOptions(newOptions);
  };


  useEffect(() => {
    const list = getListOptions();

    // eslint-disable-next-line
    setOptions(list);
  }, []);

  return (
    <div className={`${style.questions} vertical-padding`}>
      <div className="container">
        <h2 className="h2 mobile">FAQ</h2>
        <h2 className="h2 tablet">{t("questions_title")}</h2>
        <div className="cards-wrapper">
            {Array.isArray(accordionList) && accordionList.map(
              (el, i) =>
                i < accordionList.length && (
                  <Card
                    key={i}
                    el={el}
                    options={options}
                    dropdownHandler={dropdownHandler}
                    idx={i}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};

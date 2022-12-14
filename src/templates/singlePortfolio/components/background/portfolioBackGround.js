import * as React from "react";
import * as style from "./portfolioBackGround.module.scss";
import flag from "./flag.svg";
import logoSmartUIMobile from "./smart-ui-logo-mobile.svg";

export const Background = () => {
  return (
    <>
      <div className={`noise ${style.noise}`}></div>
      <div>
        <div className={`flag ${style.flag}`}>
          <img
            className="flag__mobile"
            src={logoSmartUIMobile}
            alt="logoSmartUI"
          />
          <img className="flag__desktop" src={flag} alt="logoSmartUI" />
        </div>
      </div>
    </>
  );
};

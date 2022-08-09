import React from "react";
import * as style from "./homePage.module.scss";
import { Hero } from "./hero/hero";
import { Strategy } from "./strategy/strategy";
import { WhatWeDo } from "./whatWeDo/whatWeDo";

export const HomePage = () => {
  return (
    <div className={style.home}>
      <Hero />
      <WhatWeDo />
      <Strategy />
    </div>
  );
};

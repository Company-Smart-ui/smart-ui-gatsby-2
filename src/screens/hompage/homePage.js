import React from "react";
import * as style from "./homePage.module.scss";
import { Hero } from "./hero/hero";
import { Strategy } from "./strategy/strategy";
import { WhatWeDo } from "./whatWeDo/whatWeDo";
import { Tools } from "./tools/tools";

export const HomePage = () => {
  return (
    <div className={style.home}>
      <Hero />
      <WhatWeDo />
      <Tools/>
      <Strategy />
    </div>
  );
};

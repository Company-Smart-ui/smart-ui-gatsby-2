import React from "react";
import * as style from "./homePage.module.scss";
import { Hero } from "./hero/hero";
import { Strategy } from "./strategy/strategy";
import { WhatWeDo } from "./whatWeDo/whatWeDo";
import { Tools } from "./tools/tools";
import { MeetOur } from './meetOur/meetOur';
import { OurAdvantages } from './ourAdvantages/ourAdvantages';
import { RecentWorks } from "./recentWorks/recentWorks";
import { ClientReviews } from "./clientReviews/clientReviews";
import { Questions } from './questions/questions';

export const HomePage = () => {
  return (
    <div className={style.home}>

      <Hero />
      <WhatWeDo />
      <Tools/>
      <Strategy />
      <MeetOur />
      <OurAdvantages />
      <RecentWorks />
      <ClientReviews />
      <Questions />
    </div>
  );
};

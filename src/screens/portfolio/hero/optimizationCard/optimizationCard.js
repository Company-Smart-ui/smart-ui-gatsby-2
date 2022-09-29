import React from "react";
import { PageSpeed } from "../../../../components/pageSpeed/pageSpeed";
import Info from "../img/info.svg";
import PageSpeedLogo from "../img/pagespeed_logo.png";
import * as style from "./optimizationCard.module.scss";

export const OptimizationCard = ({ result }) => {
  return (
    <div className={style.optimizationCard}>
      <div className="wrapper">
        <div className="img">
          <img src={PageSpeedLogo} alt="pagespeed_logo" />
        </div>
        <div className="speed-wrapper">
          <div className="speed">PageSpeed Insights</div>
          <div className="description">
            Learn more about website performance
          </div>
        </div>
        <div className="info">
          <img src={Info} alt="info" />
        </div>
      </div>
      <div className="widget">
        <div className="control">
          <PageSpeed result={result} largeResult />
        </div>
        <div className="title">Efficiency</div>
        <div className="check">Website optimization check</div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Modal } from "../../../components/layout/modal/modal";
import * as style from "./hero.module.scss";
import Speed from "./speed.svg";
import { Link } from "gatsby";
import { Card } from "./card/Card";
import { worksList } from "./card/WorksList";
import { ProjectsList } from "../projectsList/projectsList";
import Info from './info.svg';
import PageSpeed from './pagespeed_logo.png';

const modalText = {
  title: "Contact the lead developer",
  subtitle:
    "Please leave one of your contacts, lead developer will contact you.",
  input: "Contact the lead developer",
  textarea: "Your message*",
  resetBtn: "No, cancel",
  submit: "Yes, confirm",
};

const filterOptions = [
  { title: "All", link: "#" },
  { title: "Angular", link: "#" },
  { title: "Gatsby", link: "#" },
  { title: "HTML", link: "#" },
  { title: "React", link: "#" },
  { title: "Next.Js", link: "#" },
  { title: "Wordpress", link: "#" },
];

export const Hero = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className={style.hero}>
      <div className="bCircle" />
      <div className="noise" />
      <div className="container">
        <div className="yCircle left md-only" />
        <div className={style.overlay}>
          <h1>Our portfolio</h1>
          <p className="subtitle">
            We help to develop business, using complex modern effective it
            solutions, tools of web development and Internet marketing.
          </p>
          <div className="optimization-card">
            <div className="wrapper">
              <div className="img">
              <img src={PageSpeed} alt="pagespeed_logo"/>
              </div>
              <div className="speed-wrapper">
              <div className="speed">PageSpeed Insights</div>
              <div className="description">Learn more about website performance</div>
              </div>
              <div className="info">
                <img src={Info} alt="info" />
              </div>
            </div>
            <div className="wrapper vidget">
              <div>98</div>
              <div className="title">Effincy</div>
              <div className="title check">Website optimization check</div>
            </div>
          </div>
          <Modal
            text={"Contact the lead developer"}
            dataText={modalText}
            isShow={false}
          />
          <div className={style.speed}>
            <div className={style.top}>
              {/*<img src={Speed} alt="speed logo"/>*/}
              {/* <div className={style.text}>
                            <p>PageSpeed Insights</p>
                            <p>Learn more about website performance</p>
                        </div>  */}
              {filterOptions.map(({ title }, index) => {
                return (
                  <button
                    key={title}
                    className={`filter-buttons ${
                      index === activeFilter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(index)}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="cards-list">
          {worksList.map((el) => (
            <Card key={el.title} content={el} />
          ))}
        </div>
        <div className="overlay">
          <ProjectsList worksList={worksList} />
        </div>
        {/* <div className={style.main}>
                        <div className={style.index}>98</div>
                        <p>
                        <strong>Efficiency</strong>
                        Website optimization check
                        </p>
                      </div> */}
      </div>
    </section>
  );
};

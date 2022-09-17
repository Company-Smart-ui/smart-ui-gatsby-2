import * as React from "react";
import * as style from "./cv.module.scss";
import chatIcon from "./chat-white.png";
import { shelestInfo } from "./cvPdf/teamInfo/ShelestInfo";

const Cv = () => {
  const {
    hardSkills,
    experience,
    description,
    personalSkills1,
    personalSkills2,
    personalSkills3,
    personalSkills4,
    personalSkills5,
    personalSkills6,
    job,
    name,
    lastName,
    photoUser,
    engLevel,
    engLevelFull,
    uaLevel,
    uaLevelFull,
    ruLevel,
    ruLevelFull,
  } = shelestInfo;

  const listHardSkills = hardSkills?.map(({ hardSkill, percent, years }, i) => (
    <li key={i}>
      <p>{hardSkill}</p>
      <div className="line-experience">
        <div className="line-skill" style={{ width: `${percent}%` }}>
          <span className="years">+{years}</span>
        </div>
      </div>
    </li>
  ));

  const listExperience = experience?.map(({ time, work, company }, i) => (
    <div className="wrap" key={i}>
      <div className="company">
        <h4>{company}</h4>
        <p className="time">{time}</p>
      </div>
      <p className="work">{work}</p>
    </div>
  ));

  const descriptions = description?.map((text) => <p>{text}</p>);
  const listPersonalSkills1 = personalSkills1?.map((personalSkillItem, i) => (
    <li key={i}>{personalSkillItem}</li>
  ));
  const listPersonalSkills2 = personalSkills2?.map((personalSkillItem, i) => (
    <li key={i}>{personalSkillItem}</li>
  ));
  const listPersonalSkills3 = personalSkills3?.map((personalSkillItem, i) => (
    <li key={i}>{personalSkillItem}</li>
  ));
  const listPersonalSkills4 = personalSkills4?.map((personalSkillItem, i) => (
    <li key={i}>{personalSkillItem}</li>
  ));
  const listPersonalSkills5 = personalSkills5?.map((personalSkillItem, i) => (
    <li key={i}>{personalSkillItem}</li>
  ));
  const listPersonalSkills6 = personalSkills6?.map((personalSkillItem, i) => (
    <li key={i}>{personalSkillItem}</li>
  ));

  return (
    <div className={style.cv}>
      {/*<CVPdf/>*/}
      <button className="button button__chat">
        <img src={chatIcon} alt="chatIcon" />
      </button>
      <div className="container">
        <div className="hero">
          <div className="photo">
            <picture>
              <img src={photoUser} alt="photoUser" />
            </picture>
            <button className="button">Chat</button>
          </div>
          <div className="description">
            <div className="wrap-name">
              <h1>
                <span>{name} </span> {lastName}
              </h1>
              <p className="job">{job}</p>
            </div>
            <div className="content">{descriptions}</div>
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            <div className="skill__hard">
              <div className="title">
                <h3>Hard skills</h3>
                <span>experiensce years +5</span>
              </div>
              <ul>{listHardSkills}</ul>
            </div>
            <div className="language">
              <h3 className="title">language</h3>
              <div className="wrap">
                <div className="language__item">
                  <p className="language__name">English {engLevel}</p>
                  <p>{engLevelFull}</p>
                </div>
                <div className="language__item">
                  <p className="language__name">Ukrainian {uaLevel}</p>
                  <p>{uaLevelFull}</p>
                </div>
                <div className="language__item">
                  <p className="language__name">Russian {ruLevel}</p>
                  <p>{ruLevelFull}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill">
            <h3 className="title">PERSONAL SKILLS</h3>
            <div className="wrap">
              <div className="skill__list skill__main">
                <h4>main</h4>
                <ul>{listPersonalSkills1}</ul>
                <ul>{listPersonalSkills2}</ul>
                <ul>{listPersonalSkills3}</ul>
              </div>
              <div className="skill__list">
                <h4>additional</h4>
                <ul>{listPersonalSkills4}</ul>
                <ul>{listPersonalSkills5}</ul>
                <ul>{listPersonalSkills6}</ul>
              </div>
            </div>
          </div>
          <div className="skill experience">
            <h3 className="title">EXPERIENCE</h3>
            {listExperience}
          </div>
        </div>
        <div className="wrap__cv-button">
          {/*<BlobProvider document={<CVPdfItem infoPdf={shelestInfo} />}>*/}
          {/*  {({ url, loading }) => {*/}
          {/*    if (url && !loading) {*/}
          {/*      return (*/}
          {/*        <a className="button" href={url} download>*/}
          {/*          Download CV*/}
          {/*        </a>*/}
          {/*      );*/}
          {/*    }*/}
          {/*  }}*/}
          {/*</BlobProvider>*/}
          <button className="button">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Cv;

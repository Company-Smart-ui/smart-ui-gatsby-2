import * as React from "react";
import * as style from "./skills.module.scss";
import { Block } from "./skillBlock/skillBlock";
import { List } from "./list/list";

export const Skills = (props) => {
  return (
    <div className={style.skills}>
      <Block title={props.personalSkillTitle}>
        <List
          classes="skillMain"
          title={props.mainTitle}
          content={props.personalSkill.main}
        />
        <List
          title={props.additionalTitle}
          content={props.personalSkill.additional}
        />
      </Block>
      {/* <Block
        title={props.hardSkillTitle}
        classes="skillHard"
        subTitle={`${props.experiensceYearsTitle} ${props.experiensceYears}+`}
      >
        <ul>
          {props.hardSkill.map((i, key) => {
            const percent =
              (i.experiensce_years / props.experiensceYears) * 100;
            return (
              <li key={key}>
                <p>{i.text}</p>
                <div className={style.lineExperience}>
                  <div
                    className={style.lineSkill}
                    style={{ width: `${percent}%` }}
                  >
                    <span className={style.years}>{i.experiensce_years}+</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Block>
      <Block classes={style.language} title={props.language}>
        <div className={style.languageItem}>
          <p className={style.languageName}>{props.english}</p>
          <p>{props.englishLevel}</p>
        </div>
        {props.otherLanguage.map((i, key) => {
          return (
            <div className={style.languageItem} key={key}>
              <p className={style.languageName}>{i.text}</p>
              <p>{i.level}</p>
            </div>
          );
        })}
      </Block>
      <Block classes="experience" title={props.experienceTitle}>
        {props.experience.map((i, key) => {
          return (
            <div className={style.wrap} key={key}>
              <div className={style.company}>
                <h4>{i.company}</h4>
                <p className={style.time}>{i.year}</p>
              </div>
              <p className={style.work}>{i.position}</p>
            </div>
          );
        })}
      </Block> */}
    </div>
  );
};

import * as React from "react";
import * as style from "./skills.module.scss";
import { Block } from "./skillBlock/skillBlock";
import { List } from "./list/list";

export const Skills = (props) => {
  return (
    <div className={style.skills}>
      {props.personalSkill && (
        <Block
          title={props.personalSkillTitle}
          full
          classes={style.personalSkills}
        >
          <>
            {props.personalSkill.main && (
              <List
                classes="skillMain"
                title={props.mainTitle}
                content={props.personalSkill.main}
              />
            )}
            {props.personalSkill.additional && (
              <List
                title={props.additionalTitle}
                content={props.personalSkill.additional}
              />
            )}
          </>
        </Block>
      )}

      <div className={style.skillGrid}>
        {props.hardSkill && (
          <Block
            title={props.hardSkillTitle}
            classes={style.skillHard}
            subTitle={
              props.experiensceYears &&
              `${props.experiensceYearsTitle} ${props.experiensceYears}+`
            }
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
                        data-title={i.experiensce_years}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Block>
        )}
        <Block classes={style.language} title={props.language}>
          <div className={style.languageItem}>
            <p className={style.languageName}>{props.english}</p>
            <p>{props.englishLevel}</p>
          </div>
          {props.otherLanguage?.map((i, key) => {
            return (
              <div className={style.languageItem} key={key}>
                <p className={style.languageName}>{i.text}</p>
                <p>{i.level}</p>
              </div>
            );
          })}
        </Block>
      </div>

      {props.experience.length > 0 && (
        <Block classes={style.experience} title={props.experienceTitle}>
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
        </Block>
      )}
    </div>
  );
};

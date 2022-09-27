import * as React from "react";
import * as style from "./skills.module.scss";
import { Block } from "./skillBlock/skillBlock";
import { List } from "./list/list";

export const Skills = (props) => {
  const {
    hardSkillTitle,
    hardSkill,
    experiensceYearsTitle,
    experiensceYears,
    languageTitle,
    englishTitle,
    englishLevel,
    otherLanguage,
    personalSkillTitle,
    personalSkill,
    mainTitle,
    additionalTitle,
    experienceTitle,
    experience,
  } = props.info;

  return (
    <div className={style.skills}>
      {personalSkill && (
        <Block title={personalSkillTitle} full classes={style.personalSkills}>
          <>
            {personalSkill.main && (
              <List
                classes="skillMain"
                title={mainTitle}
                content={personalSkill.main}
              />
            )}
            {personalSkill.additional && (
              <List
                title={additionalTitle}
                content={personalSkill.additional}
              />
            )}
          </>
        </Block>
      )}

      <div className={style.skillGrid}>
        {hardSkill && (
          <Block
            title={hardSkillTitle}
            classes={style.skillHard}
            subTitle={
              experiensceYears &&
              `${experiensceYearsTitle} ${experiensceYears}+`
            }
          >
            <ul>
              {hardSkill.map((i, key) => {
                const percent = (i.experiensce_years / experiensceYears) * 100;
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
        <Block classes={style.language} title={languageTitle}>
          <div className={style.languageItem}>
            <p className={style.languageName}>{englishTitle}</p>
            <p>{englishLevel}</p>
          </div>
          {otherLanguage?.map((i, key) => {
            return (
              <div className={style.languageItem} key={key}>
                <p className={style.languageName}>{i.text}</p>
                <p>{i.level}</p>
              </div>
            );
          })}
        </Block>
      </div>

      {experience.length > 0 && (
        <Block classes={style.experience} title={experienceTitle}>
          {experience.map((i, key) => {
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

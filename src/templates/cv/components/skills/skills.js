import * as React from "react";
import * as style from "./skills.module.scss";
import {Block} from "./skillBlock/skillBlock";
import {List} from "./list/list";

export const Skills = (props) => {
    const {
        technologyExperience,
        experienceYearsTitle,
        experienceYears,
        languageTitle,
        englishTitle,
        englishLevel,
        otherLanguage,
        mainTitle,
        additionalTitle,
        hardSkills,
        workExperience,
    } = props.info;
    return (
        <div className={style.skills}>
            {hardSkills && (
                <Block title={"Hard Skills "} full classes={style.personalSkills}>
                    <>
                        {hardSkills.main && (
                            <List
                                classes="skillMain"
                                title={mainTitle}
                                content={hardSkills.main}
                            />
                        )}
                        {hardSkills.additional && (
                            <List
                                title={additionalTitle}
                                content={hardSkills.additional}
                            />
                        )}
                    </>
                </Block>
            )}

            <div className={style.skillGrid}>
                {technologyExperience?.length > 0 && (
                    <Block
                        title={"Technology experience"}
                        classes={style.skillHard}
                        subTitle={
                            experienceYears &&
                            `${experienceYearsTitle} ${experienceYears}+`
                        }
                    >
                        <ul>
                            {technologyExperience.map((i, key) => {
                                let percent = (i.experiensce_years / 5) * 100;
                                if (percent > 100) {
                                    percent = 100
                                }
                                return (
                                    <li key={key}>
                                        <p>{i.text}</p>
                                        <div className={style.lineExperience}>
                                            <div
                                                className={style.lineSkill}
                                                style={{width: `${percent}%`}}
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
                    {otherLanguage &&
                        otherLanguage?.map((i, key) => {
                            return (
                                <div className={style.languageItem} key={key}>
                                    <p className={style.languageName}>{i.text}</p>
                                    <p>{i.level}</p>
                                </div>
                            );
                        })}
                </Block>
            </div>

            {typeof workExperience === "object" && workExperience.length > 0 && (
                <Block classes={style.experience} title={"work experience"}>
                    {workExperience.map((i, key) => {
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

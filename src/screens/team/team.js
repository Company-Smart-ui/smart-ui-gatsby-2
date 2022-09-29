import * as React from "react";
import * as style from "./team.module.scss";
import { TeamItem } from "./teamItem/teamItem";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

export const AllTeam = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTeam {
        nodes {
          english_level
          direction
          level
          name
          price
          cv_photo {
            localFile {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const item = data.allStrapiTeam.nodes;
  const { t } = useTranslation();
  return (
    <div className={style.team}>
      <div className={style.logo}></div>
      <div className="noise"></div>
      <div className={style.teamWrapper}>
        <h1>Specialists for outstaff</h1>
        <div className={style.gridWrapper}>
          <div className={`${style.gridHead} lg-only`}>
            <span></span>
            <div className={style.centerRow}>
              <span>{t("tr_team_name")}</span>
              <span>{t("tr_team_direction")}</span>
              <span>{t("tr_team_level")}</span>
              <span>{t("tr_team_english")}</span>
            </div>
            <span></span>
          </div>
          <div className={style.gridBody}>
            {item.map((i, k) => {
              return (
                <TeamItem
                  key={k}
                  img={
                    i.cv_photo.localFile.childrenImageSharp[0].gatsbyImageData
                  }
                  name={i.name}
                  nameTitle={t("tr_team_name")}
                  direction={i.direction}
                  directionTitle={t("tr_team_direction")}
                  level={i.level}
                  levelTitle={t("tr_team_level")}
                  price={i.price}
                  english={i.english_level}
                  englishTitle={t("tr_team_english")}
                  link={i.name}
                  more={t("tr_more")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

import * as React from "react";
import * as style from "./team.module.scss";
import { TeamItem } from "./teamItem/teamItem";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
      allStrapiGlobal {
        nodes {
          tr_team_direction
          tr_team_english
          tr_team_level
          tr_team_name
        }
      }
    }
  `);
  const global = data.allStrapiGlobal.nodes[0];
  const item = data.allStrapiTeam.nodes;
  return (
    <div className={style.team}>
      <div className={style.logo}>
        <StaticImage alt={'smart ui logo'}
          src="./logo.svg"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="noise"></div>
      <div className={style.teamWrapper}>
        <h1>Specialists for outstaff</h1>
        <div className={style.gridWrapper}>
          <div className={`${style.gridHead} lg-only`}>
            <span></span>
            <div className={style.centerRow}>
              <span>{global.tr_team_name}</span>
              <span>{global.tr_team_direction}</span>
              <span>{global.tr_team_level}</span>
              <span>{global.tr_team_english}</span>
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
                  nameTitle={global.tr_team_name}
                  direction={i.direction}
                  directionTitle={global.tr_team_direction}
                  level={i.level}
                  levelTitle={global.tr_team_level}
                  price={i.price}
                  english={i.english_level}
                  englishTitle={global.tr_team_english}
                  link={i.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

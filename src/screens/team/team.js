import * as React from "react";
import * as style from "./team.module.scss";
import {TeamItem} from "./teamItem/teamItem";
import { useStaticQuery, graphql } from "gatsby";

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
                tr_team_action
                tr_team_direction
                tr_team_english
                tr_team_level
                tr_team_name
                tr_team_photo
            }
        }
    }
    `);
    const global = data.allStrapiGlobal.nodes[0];
    const item = data.allStrapiTeam.nodes;
    return (
        <div className={style.team}>
            <div className="noise"></div>
            <div className={style.teamWrapper}>
                <h1>Specialists for outstaff</h1>
                <div className={style.gridWrapper}>
                    <div className={`${style.gridHead} lg-only`}>
                        <span></span>
                        <span>{global.tr_team_name}</span>
                        <span>{global.tr_team_direction}</span>
                        <span>{global.tr_team_level}</span>
                        <span>{global.tr_team_english}</span>
                        <span></span>
                    </div>
                    <div className={style.gridBody}>
                        {item.map((i, k) => {
                            return (
                                <TeamItem 
                                key={k}
                                img={i.cv_photo.localFile.childrenImageSharp[0].gatsbyImageData}
                                name={i.name} nameTitle={global.tr_team_name}
                                direction={i.direction} directionTitle={global.tr_team_direction}
                                level={i.level} levelTitle={global.tr_team_level}
                                price={i.price}
                                english={i.english_level} englishTitle={global.tr_team_english}
                                link={'#'}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
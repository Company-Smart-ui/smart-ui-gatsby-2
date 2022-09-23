import * as React from "react";
import * as style from "./cv.module.scss";
import { useEffect, useState } from "react";
import { getImage } from "gatsby-plugin-image";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
// import { BlobProvider } from "@react-pdf/renderer";
// import { CVPdfItem } from "./cvPdf/cvPdfItem";
import { graphql } from "gatsby";

export const query = graphql`
  query ($language: String, $pageId: String) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["global"] } }
    ) {
      edges {
        node {
          ns
          language
          data
        }
      }
    }
    global: allStrapiGlobal {
      edges {
        node {
          tr_hard_skills
          tr_team_english
          tr_personal_skills
          tr_main
          tr_experience
          tr_experiensce_years
          tr_additional
          tr_language
        }
      }
    }
    cv: allStrapiTeam(filter: { id: { eq: $pageId } }) {
      edges {
        node {
          id
          name
          description {
            data {
              description
            }
          }
          direction
          cv_photo {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          english_level
          language {
            text
            level
          }
          hard_skills {
            experiensce_years
            skills {
              text
              experiensce_years
            }
          }
          experience {
            company
            year
            position
          }
          personal_skills {
            main {
              text
            }
            additional {
              text
            }
          }
        }
      }
    }
  }
`;
const Cv = (props) => {
  const team = props?.data?.cv?.edges[0]?.node;
  const global = props?.data?.global?.edges[0]?.node;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  return (
    <div className={style.cv}>
      {/*<CVPdf/>*/}
      <div className="container">
        <Hero
          img={getImage(
            team.cv_photo.localFile.childImageSharp.gatsbyImageData
          )}
          name={team.name}
          chat="Chat"
          direction={team.direction}
          description={team.description.data.description}
        />
        <Skills
          hardSkillTitle={global.tr_hard_skills}
          hardSkill={team.hard_skills.skills}
          experiensceYearsTitle={global.tr_experiensce_years}
          experiensceYears={team.hard_skills.experiensce_years}
          language={global.tr_language}
          english={global.tr_team_english}
          englishLevel={team.english_level}
          otherLanguage={team.language}
          personalSkillTitle={global.tr_personal_skills}
          personalSkill={team.personal_skills}
          experienceTitle={global.tr_experience}
          mainTitle={global.tr_main}
          additionalTitle={global.tr_additional}
          experience={team.experience}
        />
        <div className={style.wrapCvButton}>
          {/* {ready && (
            <BlobProvider document={<CVPdfItem infoPdf={shelestInfo} />}>
              {({ url, loading }) => {
                if (url && !loading) {
                  return (
                    <a className="button" href={url} download>
                      Download CV
                    </a>
                  );
                }
              }}
            </BlobProvider>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Cv;

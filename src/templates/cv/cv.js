import * as React from "react";
import { useState, useRef, Suspense } from "react";
import * as style from "./cv.module.scss";
import { getImage } from "gatsby-plugin-image";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { graphql } from "gatsby";

const PdfDownloader = React.lazy(() =>
  import("./helpers/pdfDownloader").then((module) => ({
    default: module.PdfDownloader,
  }))
);

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
          phone
          email
          telegram
          description {
            data {
              description
            }
          }
          direction
          cv_photo {
            url
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
          technology_experience {
            skills {
              text
              experiensce_years
            }
          }
          work_experience {
            company
            year
            position
          }
          hard_skills {
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
  const userInfo = {
    numberPhone: team?.phone ? team?.phone : "",
    emailUser: team?.email ? team?.email : "",
    telegramUser: team?.telegram ? team?.telegram : "",
    photoUser: team?.cv_photo ? team?.cv_photo.url : "",
    photoUserGatsby: team?.cv_photo
      ? team?.cv_photo?.localFile?.childImageSharp?.gatsbyImageData
      : "",
    userDescription: team?.description?.data
      ? team?.description?.data?.description
      : "",
    userName: team?.name ? team?.name : "",
    userDirection: team?.direction ? team?.direction : "",
    technologyExperience: team?.technology_experience?.skills || [],
    experienceYearsTitle: global?.tr_experiensce_years,
    languageTitle: global?.tr_language,
    englishTitle: global?.tr_team_english,
    englishLevel: team?.english_level ? team?.english_level : "",
    otherLanguage: team?.language ? team?.language : "",
    personalSkillTitle: global?.tr_personal_skills,
    hardSkills: team?.hard_skills || {},
    mainTitle: global?.tr_main,
    additionalTitle: global?.tr_additional,
    workExperience: team?.work_experience,
    experience: 5,
  };

  const linkRef = useRef();

  const handleDownloadClick = () => {
    if (ready) return;
    setReady(true);
  };

  return (
    <div className={style.cv}>
      <div className="container">
        <Hero
          img={
            userInfo.photoUserGatsby ? getImage(userInfo.photoUserGatsby) : ""
          }
          name={userInfo.userName}
          chat="Chat"
          direction={userInfo.userDirection}
          description={userInfo.userDescription ? userInfo.userDescription : ""}
        />
        <Skills info={userInfo} />
        <div className={style.wrapCvButton}>
          <a
            ref={linkRef}
            id="download"
            className="button"
            onClick={handleDownloadClick}
          >
            Download CV
          </a>
          {ready && (
            <Suspense>
              <PdfDownloader linkRef={linkRef} userInfo={userInfo} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cv;

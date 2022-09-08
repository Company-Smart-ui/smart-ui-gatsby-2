import { graphql, useStaticQuery } from "gatsby";

export const useProjectsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSingleProject {
        nodes {
          google_page_speed
          id
          main_img {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          seo_description
          project_name
          seo_title
          site_url
          technologies {
            name
          }
          technology {
            icon {
              name
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            name
          }
        }
      }
    }
  `);
  return data.allStrapiSingleProject.nodes;
};
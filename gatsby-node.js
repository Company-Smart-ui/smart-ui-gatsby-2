const axios = require("axios");
const ENDPOINT = "https://stark-refuge-01750.herokuapp.com/api/";
const PAGES_API = ["home", "portfolio", "global"];
const LANGUAGES = ["en", "uk-UA"];
const path = require(`path`);
const { graphql } = require("gatsby");

const createField = async ({ lang }) => {
  const pages = [];
  for (let page of PAGES_API) {
    const fetchData = () =>
      axios.get(ENDPOINT + page + "?locale=" + lang + "&populate=deep");
    const field = await fetchData();
    pages.push({
      ns: page,
      data: JSON.stringify(field?.data?.data?.attributes),
      language: lang,
    });
  }
  return pages;
};
const everyLang = async () => {
  let everyLang = [];
  for (let lang of LANGUAGES) {
    const localedPages = await createField({ lang });

    everyLang = [...everyLang, ...localedPages];
  }
  return everyLang;
};

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const everyPagesLang = await everyLang();
  return everyPagesLang.map((page, i) =>
    createNode({
      ...page,
      id: createNodeId(page.ns + i),
      internal: {
        type: `Locale`,
        contentDigest: createContentDigest(page),
      },
    })
  );
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      pageName: [page.context.i18n.originalPath.replace(/\//g, ""), "global"],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const singlePortfolio = path.resolve(
    `src/templates/singlePortfolio/singlePortfolio.js`
  );
  const result = await graphql(`
    query {
      allStrapiSingleProject {
        edges {
          node {
            id
            project_name
          }
        }
      }
    }
  `);
  result.data.allStrapiSingleProject.edges.forEach((edge) => {
    createPage({
      path: `project/${edge.node.project_name
        .replace(/[ ,./!@#$%^&*(?)=:;'"]/g, "_")
        .toLowerCase()}`,
      component: singlePortfolio,
      context: {
        pageId: edge.node.id,
      },
    });
  });

  const cv = path.resolve(
    `src/templates/cv/cv.js`
  );
  const resultCv = await graphql(`
    query {
      allStrapiTeam {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);
  resultCv.data.allStrapiTeam.edges.forEach((edge) => {
    createPage({
      path: `team/${edge.node.name
        .replace(/[ ,./!@#$%^&*(?)=:;'"]/g, "_")
        .toLowerCase()}`,
      component: cv,
      context: {
        pageId: edge.node.id,
      },
    });
  });
};

// const paginatePortfolio = async ({actions, graphql}) => {
//   const portfolioTemplate = path.resolve(`src/screens/portfolio/portfolio.js`);
//   const {errors, data} = await graphql(`
//     query {
//       allStrapiSingleProject {
//         pageInfo {
//           currentPage
//           hasNextPage
//           hasPreviousPage
//           itemCount
//           pageCount
//           perPage
//           totalCount
//         }
//         totalCount
//       }
//     }
//   `);
//
//   console.log('Data!!!', data);
//
//   if (errors) {
//     throw new Error("There was an error...");
//   }
// };


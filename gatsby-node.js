const axios = require("axios");
const ENDPOINT = 'https://stark-refuge-01750.herokuapp.com/api/'
const PAGES_API = ['home' ,'portfolio'];
const LANGUAGES = ['en', 'uk-UA'];


const createField = async ({lang} )=> {
    const pages =[];
    for (let page of PAGES_API) {
        const fetchData = () => axios.get(ENDPOINT +page + "?locale=" + lang);
        const field = await fetchData();
        pages.push({
            ns: page,
            data: JSON.stringify(field?.data?.data?.attributes),
            language: lang
        })
    }
 return pages
}
const everyLang =async ()=>{
    let  everyLang =[]
    for (let lang of LANGUAGES) {
        const localedPages = await createField({lang})

        everyLang = [...everyLang ,...localedPages]
    }
    return everyLang
}


exports.sourceNodes =async ({actions: {createNode}, createNodeId, createContentDigest}) => {
  const everyPagesLang = await  everyLang();
    return everyPagesLang.map((page, i) => createNode({
        ...page,
        id: createNodeId(page.ns+ i),
        internal: {
            type: `Locale`,
            contentDigest: createContentDigest(page)
        }
    }));
};



exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    deletePage(page)


    createPage({
        ...page,
        context: {
            ...page.context,
            pageName:page.context.i18n.originalPath.replace(/\//g, "" ),
        },
    })
}
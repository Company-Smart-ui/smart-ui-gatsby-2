require("@fontsource/dm-sans")

require("@fontsource/poppins")
require("@fontsource/poppins/500.css")

const React = require("react")
const {Layout} = require("./src/components/layout/layout")
// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
    document.body.style.transform="rotate3d(0, 1, 0, 45deg)"
    setTimeout(()=>{
        document.body.style.transform="rotate3d(0, 0, 0, 0)"
    },1000)
    // console.log("new pathname", location.pathname)
    // console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
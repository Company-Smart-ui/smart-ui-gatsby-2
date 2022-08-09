require("@fontsource/dm-sans")
require("@fontsource/dm-sans/700.css")

require("@fontsource/poppins")
require("@fontsource/poppins/500.css")

const React = require("react")
const {Layout} = require("./src/components/layout/layout")
// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {

    // console.log("new pathname", location.pathname)
    // console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
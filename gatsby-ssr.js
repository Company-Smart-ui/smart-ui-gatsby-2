const React = require("react")
const Layout = require("./src/components/layout/layout").default
const P404 = require("./src/pages/404").default


exports.wrapPageElement = ({ element }) => {
    const newElement = React.cloneElement(
        element||  <P404/> ,  // I18nextProvider
        element.props,
        React.cloneElement(
            element?.props?.children||  <P404/> ,  // I18nextContext.Provider
            element?.props?.children?.props ,
            React.createElement(
                Layout,
                undefined,
                element?.props?.children?.props?.children||  <P404/> ,
            ),
        ),
    );
    return newElement;
};


const webpack = require("webpack");
const pkg = require("./package.json");

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  showSidebar: true,
  usageMode: "expand",
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: "#065fd4",
      linkHover: "#00adef",
    },
    font: ["Helvetica", "sans-serif"],
  },
  styles: {
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      header: {
        marginBottom: 0,
      },
      tabs: {
        marginBottom: 0,
      },
    },
  },
  dangerouslyUpdateWebpackConfig(config) {
    config.cache = false;
    config.module.rules.push({
      test: /.\.md$/,
      type: "javascript/auto",
    });
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
        "react-styleguidist/lib/loaders/utils/client/requireInRuntime"
      )
    );
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
        "react-styleguidist/lib/loaders/utils/client/evalInContext"
      )
    );
    return config;
  },
};

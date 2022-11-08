const path = require('path');


module.exports = {
  stories: [
    // Paths to the story files
    "../components/**/*.stories.@(js|jsx|mdx)",
    "../layouts/**/*.stories.@(js|jsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-axios",
  ],
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@utils": path.resolve(__dirname, "../utils")
    };

    return config;
  }
};

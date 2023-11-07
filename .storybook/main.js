const path = require("path");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|jsx|tsx)"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

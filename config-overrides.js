/* config-overrides.js */
const Dotenv = require("dotenv-webpack");

module.exports = function override(config, env, Dotenv) {
  //do stuff with the webpack config...
  plugins: [new Dotenv()];
  return config;
};

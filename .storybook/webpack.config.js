const path = require('path');
var rls = require("../.config/rules.js");
var extns = require("../.config/extensions.js");
var plgs = require("../.config/plugins.js");

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules = config.module.rules.concat(rls);
  console.log(config.module.rules);
  config.resolve.extensions = config.resolve.extensions.concat(extns);
  config.resolve.modules.push(
        path.resolve(__dirname, '../src')
      ,path.resolve(__dirname, '../node_modules')
      ,path.resolve(__dirname, '../node_modules/bootstrap/dist/css')//resolving bootstrap style files
  );
  config.plugins = config.plugins.concat(plgs);
  return config;
};
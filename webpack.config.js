var rls = require("./.config/rules.js");
var extns = require("./.config/extensions.js");
var plgs = require("./.config/plugins.js");
var webpack = require("webpack");
const autoprefixer = require('autoprefixer');

const path = require('path');

module.exports = {
  entry: {
        vendor: ['bootstrap', 'react', 'react-dom', 'classnames', 'react-i18next', 'i18next', 'jquery', 'react-rte', 'reactstrap']
        ,ufo : ['./src/entrypoint.js']
  }
  ,resolve: {
    extensions: extns,
    modules: [
      path.resolve(__dirname, 'src')
      ,path.resolve(__dirname, 'node_modules')
      ,path.resolve(__dirname, 'node_modules/bootstrap/dist/css')//resolving bootstrap style files
    ]
  }
  ,module: {
    rules: rls
  }
  , output: {
        path: __dirname+"/target",
        filename: '[name].js',
        publicPath: 'scripts/'
  }
  , plugins: [
     new webpack.optimize.CommonsChunkPlugin({"name":"vendor", "filename":"vendor.js"})
  ].concat(plgs)
};

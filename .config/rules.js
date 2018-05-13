
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
];

const rules = [
       { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
//      ,{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
      ,{ test: /\.(js|jsx)$/, use: 'babel-loader'}
      ,{ test: /\.(svgjs)$/, use: 'react-svg-loader'}
      ,{ test: /\.(svg)$/, use: 'url-loader'}
      ,{ test: /\.(stl|jpg|gif)$/, use: 'url-loader'}
      ,{ test: /\.(png|woff|woff2|eot|ttf|xhtml)$/, use: 'url-loader?limit=100000' }
];
module.exports=rules;

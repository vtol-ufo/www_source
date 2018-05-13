var webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports=[new ExtractTextPlugin('stylesheet/[name].css')
     ,new webpack.ProvidePlugin({
            $: "jquery"
            ,jQuery: "jquery"
            ,'window.jQuery': 'jquery'
            ,Popper: ['popper.js', 'default']
	    ,Tether: "tether"
        })];
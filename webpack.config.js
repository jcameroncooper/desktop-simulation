var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var path = require('path');


var htmlOption = {
    title:"Desktop Simulation 2",
    template: "src/public/index.html",
}

module.exports = {
    mode: 'development',
    resolve:{
        roots:[path.join(__dirname,"src")]
    },
    entry:{
        'main':['./src/main.js']
    },
    output:{
        path:path.resolve(__dirname, "dist"),
        publicPath:'./',
        filename:'[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/i,
                use: ['vue-style-loader', 'css-loader', "less-loader"],
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    }
                  }
                ]
            },
        ]
    },
    devtool:"cheap-module-source-map",
    devServer: {
      contentBase: './dist',
    },
    plugins:[
        new HtmlWebpackPlugin(htmlOption),
        new VueLoaderPlugin(),
    ]
}
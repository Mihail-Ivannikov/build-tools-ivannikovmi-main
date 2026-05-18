const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src", "style.css"), to: path.resolve(__dirname, "dist", "css") },
            ],
    }),
    ],

    
};


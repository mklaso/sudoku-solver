const path = require("path"); // gets current absolute path, using path.resolve(__dirname, ...)
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const miniExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const miniExtractPlugin = new ExtractTextPlugin({
//     filename: "style.css"
// })

module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: miniExtractPlugin.loader,
                    },
                    'css-loader', 'sass-loader'
                ]
                // use: miniExtractPlugin.extract({
                //     use: ['css-loader', 'sass-loader']
                // })
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ]
}



// module.exports = {
//   entry: ["babel-polyfill", "./js/index.js"],
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "./bundle.js",
//   },
//   devServer: {
//     contentBase: "./dist",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       template: "./index.html",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/, //reg exp testing for all javascript files (ends with .js)
//         exclude: /node_modules/, //dont wan't to include the javascript files in node_modules (thousands of files)
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };

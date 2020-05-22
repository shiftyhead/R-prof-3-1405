const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'main.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: 'body'
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ]
      }
 };
 


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports={
    entry: {
        //точка входа
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output:{
        path: path.join(__dirname, 'dist'),
        publicPath:'',
        filename: path.join('js', 'bundle.js')
    },
    target:'web', //тип сборки
    module:{
        rules:[
            //правила для jsx
            {
                test: /\.(js|jsx)$/, //для любых файлов
                exclude: /node_modules/, //кроме этой папки
                loader:'babel-loader',
                options:{ //для babel
                    presets:["@babel/preset-env", "@babel/preset-react"],
                    plugins:[
                        [
                            "@babel/plugin-proposal-class-properties", 
                            {"loose":true}
                        ]
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins:[
          new MiniCssExtractPlugin({
            filename: '[name].css', //сохраняет имя файлов
            chunkFilename: '[id].css', //последовательость
          }),
          new HtmlWebpackPlugin({  
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'public', 'index.html')
          })
    ]
}
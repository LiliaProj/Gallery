const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// require('normalize-css');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: "css-loader",
                        options: { url: false, sourceMap: true}
                    }
                    , 
                    {
                        loader: 'postcss-loader',
                        options: {
                            // plugins: [
                            //     autoprefixer({
                            //         // browsers:['ie >= 8', 'last 4 version']
                            //     })
                            // ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {outputPath: 'assets/images', publicPath: '../images', useRelativePaths: true}
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {outputPath: 'assets/fonts', publicPath: '../fonts', useRelativePaths: true}
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
};
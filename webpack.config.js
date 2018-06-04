const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require('fs');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

const conf = {
    entry: [
        './src/js/index.js',
        './src/sass/index.sass',
    ],
    output: {
        filename: 'index.js',
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    },
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: 'img/[name].[ext]'}
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/sass'),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            // {
            //     test: /\.html$/,
            //     include: path.resolve(__dirname, 'src/html/includes'),
            //     use: ['raw-loader']
            // },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            //template: './src/index.html',
            template: path.join(__dirname,'src') + '/index.pug',
        }),
        new ExtractTextPlugin({
            filename: './css/index.css',
            allChunks: true,
        }),
        new CopyWebpackPlugin(
        [
            {
                from: './src/fonts',
                to: './fonts'
            },
            {
                from: './src/favicon',
                to: './favicon'
            },
            {
                from: './src/img',
                to: './img'
            },
            {
                from: './src/json',
                to: './json'
            },
            {
                from: './src/css',
                to: './css'
            },
        ]),
    ].concat(htmlPlugins),
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
                 ? 'source-map'
                 : 'eval-sourcemap';

    return conf;
};

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        common: './src/common.js',
        login: './src/login.js',
        register: './src/register.js',
        student: './src/student.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            chunks: [
                'common',
                'index',
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/login.html'),
            filename: 'login.html',
            chunks: [
                'common',
                'login',
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/register.html'),
            filename: 'register.html',
            chunks: [
                'common',
                'register',
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/student.html'),
            filename: 'student.html',
            chunks: [
                'common',
                'student',
            ],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/map'), // 源文件目录
                    to: path.resolve(__dirname, 'dist/map') // 目标目录
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'asset/images/[name].[hash][ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // 处理字体文件
                type: 'asset/resource', // 使用资源模块
                generator: {
                    filename: 'asset/fonts/[name].[hash][ext]', // 输出路径和文件名
                },
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
}
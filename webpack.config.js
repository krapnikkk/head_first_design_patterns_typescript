const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dirname = "10_Composite";
module.exports = {
    mode: 'development',
    entry: `./${dirname}/Main.ts`,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, `dist/${dirname}`)
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        //引入模块的时候可以少写后缀
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, `dist/${dirname}`),
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            filename: 'index.html',
            template: './index.html',
            inject: 'body'
        })
    ]
}
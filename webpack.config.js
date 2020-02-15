const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:'./08_Facade/Main.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist/08_Facade')
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        //引入模块的时候可以少写后缀
        extensions:['.tsx','.ts','.js']
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname, "dist/08_Facade"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'08_Facade'
        })
    ]
}
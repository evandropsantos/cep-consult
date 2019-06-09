const path = require('path');
const WebpackStrip = require("webpack-strip");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const rules = [];
const baseConfig = obj => Object.assign({}, { test: /\.js$/, exclude: /node_modules/, }, obj);

module.exports = (env, argv) => {
    rules.push( baseConfig({ 
        use: {
            loader: 'babel-loader', 
            options: {cacheDirectory: true}
        } 
    }));

    rules.push(
        {   
            test: /\.(s*)css$/,
            use: [
                argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader", 
                {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["./public/statics/scss/components"]
                    }
                }
            ]
        }
    )

    if(argv.mode === 'production') 
        rules.push( baseConfig({ 
            use: { 
                loader: WebpackStrip.loader('debug', 'console.log') 
            } 
        }));

    return {
        entry: './public/statics/scripts/index.js'
        ,
        output: {
            path: path.resolve('public/build'),
            filename: 'bundle.js'
        },
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        plugins: [ new MiniCssExtractPlugin( {
            filename: "style.css"} 
        )],
        module: { rules },
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/
        },
        performance: { hints: false },
        devtool: argv.mode !== 'production' && 'source-map'
    }
}
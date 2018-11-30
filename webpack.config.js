const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = () => {
    const config = {
        devServer: {
            contentBase: "./dist",
            port: 9000,
        },
        mode: "development",
        entry: {
            main: "./src/index.js",
        },
        output: {
            filename: "[name].js",
            path: path.join(__dirname, "dist"),
            devtoolModuleFilenameTemplate: info =>
                path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                }
            ],
        },
        stats: {
            colors: true,
        },
        devtool: "source-map",
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
        ],
    };

    return config;
};

module.exports = webpackConfig();

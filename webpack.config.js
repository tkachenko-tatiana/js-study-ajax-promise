const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = () => {
    const entry = "./exports.js";

    const config = {
        mode: "development",
        entry: entry,
        output: {
            path: path.resolve(__dirname, "public/js"),
            devtoolModuleFilenameTemplate: info =>
                path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                      loader: "babel-loader",
                    }
                  }
            ],
        },
        resolve: {
            extensions: [".js"],
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
        stats: {
            colors: true,
        },
        devtool: "source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            compress: true,
            port: 9000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
        ],
    };

    return config;
};

module.exports = webpackConfig();

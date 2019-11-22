
const path = require("path");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractTextPlugin = new ExtractTextPlugin({
  filename: "min.css",
  allChunks: false
});

let purifyCSS = new PurifyCSS({
  paths: glob.sync([
    // 要做CSS Tree Shaking的路径文件
    path.resolve(__dirname, "./*.html"), // 请注意，我们同样需要对 html 文件进行 tree shaking
    path.resolve(__dirname, "./src/**/*.tsx")
  ])
});
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
       
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    mode: "production",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [extractTextPlugin, purifyCSS],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // All css 文件都在这里被处理
            { test: /\.css?$/, use: ExtractTextPlugin.extract({
                fallback: {
                    loader: "style-loader",
                    options: {
                    // singleton: true
                    }
                },
                use: {
                    loader: "css-loader",
                    options: {
                    // minimize: true
                    }
                }
            })},
            { test: /\.less?$/,use: ExtractTextPlugin.extract({
                fallback: {
                    loader: "style-loader",
                    options: {
                    // singleton: true
                    }
                },
                use: [{
                    loader:"css-loader",
                    options: {
                    // minimize: true
                    }
                },{
                    loader:"less-loader",
                    options: {
                    // minimize: true
                    }
                }], 
            })},
            { test: /\.json?$/,loader: "json-loader" },
            { test: /\.(png|jpg|gif|woff|svg|eot|woff2|ttf)$/,loader: ["url-loader?limit=8192"]},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
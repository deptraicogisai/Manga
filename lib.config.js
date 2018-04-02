module.exports = {
    entry: {
        main_lib: ["./src/main_lib.ts"]
    },
    output: {
        path: __dirname + "/dist/application",
        publicPath: "/dist/application",
        filename: "[name].js"
    },

// Enable sourcemaps for debugging webpack's output.
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }
    ,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader?' + JSON.stringify({transpileOnly: true})
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    }
    ,

// When importing a module whose path matches one of the following, just
// assume a corresponding global variable exists and use that instead.
// This is important because it allows us to avoid bundling all of our
// dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}
module.exports = {
    entry: {
        app: ['babel-polyfill', "./src/main.tsx"]
    },
    output: {
        path: __dirname + "/dist/application",
        publicPath: "/dist/application",
        filename: "[name].js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".png"],
        modules: [
            'node_modules'
        ]
    },
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=./images/[name].[ext]'}
        ]
    },
    devtool: "#inline-source-map",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
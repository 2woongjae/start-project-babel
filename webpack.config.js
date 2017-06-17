const path = require('path');

module.exports = {
    // input 설정
    entry: './src/index.jsx',

    // output 설정
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // 
    resolve: {
        extensions: [".js", ".jsx"]
    },

    // transformations 설정
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    // server 설정
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
};
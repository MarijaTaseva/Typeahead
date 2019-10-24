const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
    entry:  [
      "./src/index.js"
    ],
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
          { 
              test: /\.(js|jsx)$/, 
              exclude: /node_modules/, 
              loader: "babel-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] 
            }
        ]
      },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html",
          favicon: './public/favicon.ico'
        })
      ],
    devtool: argv.mode === 'development' ? 'source-map' : false
    }
)
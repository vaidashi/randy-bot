const path = require('path');

module.exports = {
  entry: {
    main: "./public/javascript/index/script.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "main.bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};

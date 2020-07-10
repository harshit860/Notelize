const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
//   resolve: {
//     extensions: ['', '.js', '.jsx','.css']
// },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader']
    },
    {
      test: /\.jpg$/,
      use: ['file-loader']
    },
    {
      test: /\.png$/,
      use: ['file-loader']
    }
  
  ]
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'dist'),
    // port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" //source html
    })
  ]
};

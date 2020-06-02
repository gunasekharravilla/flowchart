const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  return {
    entry: {
      index: path.resolve('src/index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve('build'),
    },
    watch: true,
    devtool: 'inline-source-map',
    devServer: {
      open: true,
      hot: true,
      port: 8080,
      historyApiFallback: true,
      watchOptions: {
        poll: true,
      },
    },
    performance: {
      hints: false,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.css', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(tsx|jsx|js|ts)$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        },
      ],
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/,
        }),
      ],
    },
  };
};

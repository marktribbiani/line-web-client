const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
  return [
    {
      entry: {
        index: './src/index.js',
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src'),
              to: path.resolve(__dirname, 'dist'),
            },
          ],
        }),
      ],
      module: {
        rules: [
          {
            test: /\.((c|sa|sc)ss)$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: { auto: true },
                },
              },
              'sass-loader',
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.txt$/i,
            use: [
              {
                loader: 'raw-loader',
              },
            ],
          },
        ],
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
      },
      optimization: {
        minimize: true,
        minimizer: [],
      },
    },
  ];
};

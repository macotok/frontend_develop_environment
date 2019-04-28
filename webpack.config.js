const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const Autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    entry: {
      app: [
        './src/js/app.js',
        './src/sass/style.scss',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    devServer: {
      contentBase: './dist/html/',
      watchContentBase: true,
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  Autoprefixer(
                    {
                      browsers: ['last 2 versions', 'Android >= 4'],
                    },
                  ),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './webfonts',
              publicPath: '../webfonts',
            },
          }],
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new UglifyJsPlugin(),
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/img/'),
          to: path.resolve(__dirname, 'dist/img/'),
        },
        {
          from: path.resolve(__dirname, 'src/webfonts/'),
          to: path.resolve(__dirname, 'dist/webfonts/'),
        },
      ]),
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '95-100',
        },
      }),
    ],
  },
];

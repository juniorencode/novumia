const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const optimization = {
  minimize: true,
  minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
}

const devServer = {
  static: { directory: path.join(__dirname, 'dist') },
  compress: true,
  port: 3002
  // open: true
}

module.exports = (_, { mode }) => {
  const isProduction = mode === 'production'

  return {
    entry: isProduction ? './src/index.js' : './src/main.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? './index.js' : './main.js',
      publicPath: '/',
      library: 'library-react-test',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.html$/,
          use: { loader: 'html-loader' }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type: 'asset',
          generator: {
            filename: './static/images/[hash][ext]'
          }
        },
        {
          test: /\.(woff|woff2)$/,
          type: 'asset',
          generator: {
            filename: './static/fonts/[hash][ext]'
          }
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      !isProduction &&
        new HtmlWebpackPlugin({
          template: './index.html',
          filename: './index.html'
        }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css'
      }),
      new CleanWebpackPlugin()
    ],
    optimization: isProduction ? optimization : {},
    devServer: !isProduction ? devServer : {}
  }
}

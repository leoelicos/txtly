const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')
const { InjectManifest } = require('workbox-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
      // editor: './src/js/editor.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      // generate html file and inject bundles
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Editor'
      }),

      // inject custom SW
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),

      // Create manifest
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text Editor',
        short_name: 'Editor',
        description: 'Edit your text!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons')
          }
        ]
      })
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          // babel loader for ES6
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
            }
          }
        }
      ]
    }
  }
}

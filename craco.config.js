const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser'
        })
      )

      return webpackConfig
    }
  }
}

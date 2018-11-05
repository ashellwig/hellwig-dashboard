// Dotenv for environment variables.
const Dotenv = require('dotenv-webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: './.env.local',
        safe: false,
        systemvars: false,
        silent: false
      })
    ]
  },
  // Elm webpack loader
  chainWebpack: config => {
    config.module
      .rule('elm')
      .test(/\.elm$/)

      .use('elm-webpack-loader')
      .loader('elm-webpack-loader')
      .end()
  }
}

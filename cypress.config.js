const { defineConfig } = require('cypress')
const webpackConfig = require('./webpack.config')

module.exports = defineConfig({
  e2e: {
    webpackConfig,
    framework: 'react',
    bundler: 'webpack',
    supportFile: false,
    specPattern: 'cypress/integration/*.spec.js',
    baseUrl: 'http://localhost:3000',
  }
})
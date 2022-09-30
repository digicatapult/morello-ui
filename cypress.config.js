const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // TODO disable videos in github workflows
    supportFile: false,
    specPattern: 'cypress/integration/*.spec.js',
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
})

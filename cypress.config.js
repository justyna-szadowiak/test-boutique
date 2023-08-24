const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './cypress/fixtures',
  video: true,
  videosFolder: './cypress/videos',
  watchForFileChanges: true,
  e2e: {
    baseUrl: 'http://localhost:5000',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins')(on, config)
    }
  },
});

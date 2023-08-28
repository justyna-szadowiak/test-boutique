const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './cypress/fixtures',
  video: true,
  videosFolder: './cypress/videos',
  watchForFileChanges: true,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:5500',
    setupNodeEvents(on, config) { }
  }
});

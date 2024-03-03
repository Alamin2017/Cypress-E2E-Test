const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iqjavs',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
    },
    
    testIsolation: false
  },
});

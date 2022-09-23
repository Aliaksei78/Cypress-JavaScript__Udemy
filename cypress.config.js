const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mwxkit',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/my_End-2-End_tests/*.js'
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ky8zo5',
  e2e: { 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl:'https://automationexercise.com',
    env:{
      apiUrl:'https://automationexercise.com/api'
    }
  }
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'su3y4g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://automationexercise.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env:{
      apiUrl:'https://automationexercise.com/api'
    }, 
  },
});

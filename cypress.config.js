const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ky8zo5"
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:'https://automationexercise.com',

    env:{
      apiUrl:'https://automationexercise.com/api'
    },

    viewportWidth: 1920,
    viewportHeight: 1080
  },
});

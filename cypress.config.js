const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "",
    setupNodeEvents(on, config) {},
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      overwrite: false,
      html: false,
      json: true,
    },
  }
  
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    setupNodeEvents(on, config) {
      // Configure JUnit reporter
      require('cypress-mochawesome-reporter/plugin')(on); // Add mochawesome plugin setup

      // Any additional node event listeners or plugins can go here
    },
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter', // Use mochawesome as the default reporter
    reporterOptions: {
      reportDir: 'cypress/reports',               // Directory for mochawesome reports
      overwrite: false,                           // Do not overwrite reports
      html: true,                                 // Generate an HTML report
      json: true,                                 // Generate a JSON report
      charts: true,                               // Enable charts in the report
      embeddedScreenshots: true,                  // Embed screenshots into the report
      inlineAssets: true,                         // Inline assets like styles and scripts in the report
    },
  },
});

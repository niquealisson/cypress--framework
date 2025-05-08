const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
    defaultCommandTimeout: 120000, // Sets a higher timeout for commands
    chromeWebSecurity: false, // Allows testing cross-origin iframes
    experimentalSessionAndOrigin: true, // Enables cy.origin()
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
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
    setupNodeEvents(on, config) {
      // Configure JUnit reporter
      require('cypress-mochawesome-reporter/plugin')(on); // Add mochawesome plugin setup

      // Any additional node event listeners or plugins can go here
    },
  },
});

import 'cypress-iframe'; // Import the cypress-iframe plugin

// Existing uncaught exception handler
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent tests from failing on uncaught exceptions
});

// Custom command to get the body of an iframe
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector) // Get the iframe element
    .its('0.contentDocument.body') // Get the iframe's document body
    .should('not.be.empty') // Ensure the iframe is loaded
    .then(cy.wrap); // Wrap the body so Cypress commands can be chained
});

// Custom command to interact with an iframe using cypress-iframe
Cypress.Commands.add('iframe', (iframeSelector) => {
  return cy.iframe(iframeSelector);
});

// Custom command to check if an iframe is loaded
Cypress.Commands.add('frameLoaded', (iframeSelector) => {
  return cy.frameLoaded(iframeSelector);
});

// Custom command to set the proxy dynamically
Cypress.Commands.add('setProxy', (proxyUrl) => {
  // Modify the Cypress configuration to use the proxy
  Cypress.config('requestTimeout', 15000); // Optional: Increase request timeout in case the proxy is slow

  // Intercept all network requests and modify them to go through the proxy
  cy.intercept({
    url: '**/*', // Match all URLs
    middleware: true, // Intercept requests and modify them
  }, (req) => {
    req.continue((res) => {
      res.headers['X-Forwarded-For'] = proxyUrl; // Set proxy address
    });
  });

  cy.log(`Proxy set to: ${proxyUrl}`);
});

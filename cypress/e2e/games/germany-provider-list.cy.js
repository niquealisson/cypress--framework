import nextoSelectors from '../../selectors/css.js';

describe('Germany Providers Test', () => {
  beforeEach(() => {
    // Set the locale for Germany
    cy.setCookie('locale', 'de-DE');

    // Dynamically set the proxy for Germany from the environment variable
    const germanyProxy = process.env.CYPRESS_PROXY || "http://germany-proxy.com:8080"; // Default to Germany proxy if not set

    if (germanyProxy) {
      // Set the proxy dynamically for each test
      cy.setProxy(germanyProxy);
      cy.log(`Using proxy: ${germanyProxy}`);
    }
  });

  // Test providers that should appear
  nextoSelectors.germany_providers.forEach(({ name, expectedName }) => {
    const urlName = expectedName || name.toUpperCase().replace(/ /g, '_');

    it(`Should test the provider: ${name}`, () => {
      const url = `${nextoSelectors.baseUrl}/casino/all_games?brands=${urlName}`;

      // Visit the provider's URL
      cy.visit(url);

      // Log the current provider for debugging
      cy.log(`Testing provider: ${name} with URL: ${url}`);

      // Verify the URL contains the expected path
      cy.url().should('include', `/casino/all_games?brands=${urlName}`);

      // Assert the button exists for this provider
      cy.get('button span').contains(name).should('exist');
    });
  });

  // Uncomment this block if you want to test excluded providers as well
  // Test providers that should NOT appear
  // nextoSelectors.germany_excluded_providers.forEach(({ name, expectedName }) => {
  //   const urlName = expectedName || name.toUpperCase().replace(/ /g, '_');

  //   it(`Should test the provider that should NOT appear: ${name}`, () => {
  //     const url = `https://nextocasino.com/casino/all_games?brands=${urlName}`;

  //     // Visit the provider's URL
  //     cy.visit(url);

  //     // Log the current provider for debugging
  //     cy.log(`Testing provider that should NOT appear: ${name} with URL: ${url}`);

  //     // Verify the URL contains the expected path
  //     cy.url().should('include', `/casino/all_games?brands=${urlName}`);

  //     // Assert the button does not exist for this provider
  //     cy.get('button span').contains(name).should('not.exist');
  //   });
  // });
});

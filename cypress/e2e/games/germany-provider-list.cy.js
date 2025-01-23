import nextoSelectors from '../../selectors/css.js';

describe('Germany Providers Test', () => {
  beforeEach(() => {
    cy.setCookie('locale', 'no-NO'); // Set the locale for Norway
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

  // // Test providers that should NOT appear
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


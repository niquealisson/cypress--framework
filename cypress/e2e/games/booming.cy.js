describe('Games, Booming', () => {

  it('should test multiple games in the Booming provider and measure load times', () => {
    cy.visit('https://nextocasino.com/?modal=login'); 

    // Enter valid email
    cy.get('input[name="email"]').type('test123@test.com');

    // Enter valid password
    cy.get('input[name="password"]').type('Ts123456');

    // Click the submit button using the specific class
    cy.get('button._secondary_i1e1t_9[type="submit"]').click();
    cy.wait(2500);

    // Close any popups
    cy.get('button[class="absolute right-3 top-3"]').click();

    // Navigate to Booming provider games
    cy.get('button[class="w-full py-2.5 px-3 border-1 rounded-lg text-sm transition-colors text-left bg-color-f border-color-g hover:border-color-e text-color-b"]').click();
    cy.wait(2500);

    cy.get('button[class="_providersFilterBrand_1xjny_11"]').contains('Booming').click();
    cy.get('button[class="text-xs md:text-sm text-color-b px-3 py-2 bg-color-f flex items-center space-x-4 transition-colors border-1 border-transparent hover:border-color-g"] span')
      .should('have.text', 'Booming');

    // Loop x games (eq(0) to eq(20))
    Cypress._.times(21, (index) => {
      cy.log(`Interacting with game index: ${index}`);

      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(index)
        .trigger('mouseover');

      // Click the "Play now" button
      cy.get('span.block.truncate').contains('Play now').click();

      // Record start time
      const startTime = Date.now();
      cy.wait(20000);
      // Wait for the game to load
      cy.get('iframe[title="Play"]', { timeout: 60000 }).then(($iframe) => {
        const iframeBody = $iframe.contents().find('body');

        cy.wrap(iframeBody).within(() => {
          // Check if the game wrapper is visible, indicating the game has loaded
          cy.get('#gameWrapper').should('be.visible'); // Use the game wrapper's ID to confirm the game is working
        });
      });

      // Record end time and calculate load time
      const endTime = Date.now();
      const loadTime = endTime - startTime;
      cy.log(`Game index ${index} took ${loadTime} ms to load.`);

      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
    });
  });
});




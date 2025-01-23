describe('Games, Booming', () => {

    it('It should test the game number 1', () => {
      cy.visit('https://nextocasino.com/?modal=login');
  
      // Enter valid email
      cy.get('input[name="email"]').type('germany-test@test.com');
  
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
  
  
  
      cy.log(`Interacting with game index:0`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(0)
        .trigger('mouseover');
  
      // Click the "Play now" button
      cy.get('span.block.truncate').contains('Play now').click();
  
      // Record start time
      const start = Date.now();
      const dateNow = new Date();
      const hourNow = dateNow.getHours();
      const minNow = dateNow.getMinutes();
      const secNow = dateNow.getSeconds();
      const milSecNow = dateNow.getMilliseconds();
      const starTime = `${hourNow}:${minNow}:${secNow}:${milSecNow}`
      //const startTime = Date.now();
      cy.log(`dateNow: ${dateNow.toLocaleTimeString()}`)
      cy.wait(20000);
      // Wait for the game to load
      cy.get('iframe[title="Play"]', { timeout: 100000 }).then(($iframe) => {
        const iframeBody = $iframe.contents().find('body');
  
        cy.wrap(iframeBody).within(() => {
          // Check if the game wrapper is visible, indicating the game has loaded
          cy.get('#gameWrapper').should('be.visible'); // Use the game wrapper's ID to confirm the game is working
        });
      });
  
      // Record Final time
      const endTime = Date.now();
      const finalTime = new Date();
      const hourFinal = finalTime.getHours();
      const minFinal = finalTime.getMinutes();
      const secFinal = finalTime.getSeconds();
      const finalDate = `${hourFinal}:${minFinal}:${secFinal}`
  
      const sumTime = endTime - start
      cy.log(`Load time ${sumTime}`);
  
  
  
      cy.log(`game number 1 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(6000);
  
    });
  
    it('It should test the game number 2', () => {
      cy.visit('https://nextocasino.com/?modal=login');
  
      // // Enter valid email
      cy.get('input[name="email"]').type('germany-test@test.com');
  
      // // Enter valid password
      cy.get('input[name="password"]').type('Ts123456');
  
      // // Click the submit button using the specific class
      cy.get('button._secondary_i1e1t_9[type="submit"]').click();
      cy.wait(2500);
  
      // // Close any popups
      cy.get('button[class="absolute right-3 top-3"]').click();
  
      // // Navigate to Booming provider games
      cy.get('button[class="w-full py-2.5 px-3 border-1 rounded-lg text-sm transition-colors text-left bg-color-f border-color-g hover:border-color-e text-color-b"]').click();
      cy.wait(2500);
  
      cy.get('button[class="_providersFilterBrand_1xjny_11"]').contains('Booming').click();
      cy.get('button[class="text-xs md:text-sm text-color-b px-3 py-2 bg-color-f flex items-center space-x-4 transition-colors border-1 border-transparent hover:border-color-g"] span')
        .should('have.text', 'Booming');
  
  
  
      cy.log(`Interacting with game index:1`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(1)
        .trigger('mouseover');
  
      // Click the "Play now" button
      cy.get('span.block.truncate').contains('Play now').click();
  
      // Record start time
      const start = Date.now();
      const dateNow = new Date();
      const hourNow = dateNow.getHours();
      const minNow = dateNow.getMinutes();
      const secNow = dateNow.getSeconds();
      const milSecNow = dateNow.getMilliseconds();
      const starTime = `${hourNow}:${minNow}:${secNow}:${milSecNow}`
      //const startTime = Date.now();
      cy.log(`dateNow: ${dateNow.toLocaleTimeString()}`)
      cy.wait(20000);
      // Wait for the game to load
      cy.get('iframe[title="Play"]', { timeout: 100000 }).then(($iframe) => {
        const iframeBody = $iframe.contents().find('body');
  
        cy.wrap(iframeBody).within(() => {
          // Check if the game wrapper is visible, indicating the game has loaded
          cy.get('#gameWrapper').should('be.visible'); // Use the game wrapper's ID to confirm the game is working
        });
      });
    });
});
    
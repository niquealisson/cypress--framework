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
  
      // Record Final time
      const endTime = Date.now();
      const finalTime = new Date();
      const hourFinal = finalTime.getHours();
      const minFinal = finalTime.getMinutes();
      const secFinal = finalTime.getSeconds();
      const finalDate = `${hourFinal}:${minFinal}:${secFinal}`
  
      const sumTime = endTime - start
      cy.log(`Load time ${sumTime}`);
  
  
  
      cy.log(`Game number 2 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 3', () => {
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
  
  
  
      cy.log(`Interacting with game index:2`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(2)
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
  
  
  
      cy.log(`Game number 3 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 4', () => {
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
  
  
  
      cy.log(`Interacting with game index:3`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(3)
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
  
    it('It should test the game number 5', () => {
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
  
  
  
      cy.log(`Interacting with game index:4`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(4)
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
  
  
  
      cy.log(`Game number 2 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 6', () => {
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
  
  
  
      cy.log(`Interacting with game index:5`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(5)
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
  
  
  
      cy.log(`Game number 6 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 7', () => {
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
  
  
  
      cy.log(`Interacting with game index:6`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(6)
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
  
  
  
      cy.log(`game number 7 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(6000);
  
    });
  
    it('It should test the game number 8', () => {
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
  
  
  
      cy.log(`Interacting with game index:7`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(7)
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
  
  
  
      cy.log(`Game number 8 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 9', () => {
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
  
  
  
      cy.log(`Interacting with game index:8`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(8)
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
  
  
  
      cy.log(`Game number 9 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
    it('It should test the game number 10', () => {
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
  
  
  
      cy.log(`Interacting with game index:9`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(9)
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
  
  
  
      cy.log(`game number 10 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(6000);
  
    });
  
    it('It should test the game number 11', () => {
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
  
  
  
      cy.log(`Interacting with game index:10`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(10)
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
  
  
  
      cy.log(`Game number 11 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 12', () => {
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
  
  
  
      cy.log(`Interacting with game index:11`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(11)
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
  
  
  
      cy.log(`Game number 12 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 13', () => {
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
  
  
  
      cy.log(`Interacting with game index:12`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(12)
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
  
  
  
      cy.log(`game number 12 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(6000);
  
    });
  
    it('It should test the game number 14', () => {
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
  
  
  
      cy.log(`Interacting with game index:13`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(13)
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
  
  
  
      cy.log(`Game number 14 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 15', () => {
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
  
  
  
      cy.log(`Interacting with game index:14`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(14)
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
  
  
  
      cy.log(`Game number 15 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 16', () => {
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
  
  
  
      cy.log(`Interacting with game index:15`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(15)
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
  
  
  
      cy.log(`game number 16 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(6000);
  
    });
  
    it('It should test the game number 17', () => {
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
  
  
  
      cy.log(`Interacting with game index:17`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(17)
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
  
  
  
      cy.log(`Game number 18 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
    
    it('It should test the game number 18', () => {
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
    
    
    
        cy.log(`Interacting with game index:17`);
    
        // Hover over the game card
        cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(17)
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
    
    
    
        cy.log(`Game number 18 took ${finalTime.toLocaleTimeString()} ms to load.`);
    
        // If no error, navigate back to the games list
        cy.go('back'); // Use browser navigation to return to the list
        cy.wait(3000);
    
      });
  
    it('It should test the game number 19', () => {
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
  
  
  
      cy.log(`Interacting with game index:18`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(18)
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
  
  
  
      cy.log(`Game number 19 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(3000);
  
    });
  
    it('It should test the game number 20', () => {
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
  
  
  
      cy.log(`Interacting with game index:19`);
  
      // Hover over the game card
      cy.get('div[class="absolute inset-0 transition-opacity _actions_5chgo_1 opacity-0"]').eq(19)
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
  
  
  
      cy.log(`game number 20 took ${finalTime.toLocaleTimeString()} ms to load.`);
  
      // If no error, navigate back to the games list
      cy.go('back'); // Use browser navigation to return to the list
      cy.wait(6000);
  
    });
  
  });
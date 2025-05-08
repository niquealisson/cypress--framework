describe('Main Page functionalities', () => {

    beforeEach(() => {
        cy.visit('https://nextocasino.com'); // Visit your home page before each test
    });

    it('1. Verifies navigation to Casino page', () => {
        // Open the menu by clicking the menu bar icon
        cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
        cy.wait(2000); // Wait for the menu to open

        // Ensure the "Casino" link is visible and click on it
        cy.get('a[href="/casino"]')
            .should('be.visible')
            .eq(1)  // Specify which element to click if there are multiple
            .click({ force: true }); // Force the click if needed

        // Verify the URL includes '/casino' after clicking
        cy.url().should('include', '/casino');

        // Return to the home page after the test
        cy.visit('https://nextocasino.com'); // Go back to the home page
    });

    it('2. Verifies navigation to Live Casino page', () => {
        // Open the menu by clicking the menu bar icon
        cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
        cy.wait(2000); // Wait for the menu to open

        // Ensure the "Live Casino" link is visible and click on it
        cy.get('a[href="/casino/live_casino"]')
            .should('be.visible')
            .eq(3)  // Specify which element to click if there are multiple
            .click({ force: true }); // Force the click if needed

        // Verify the URL includes '/live-casino' after clicking
        cy.url().should('include', '/live_casino');

        // Return to the home page after the test
        cy.visit('https://nextocasino.com'); // Go back to the home page
    });

    it('3. Verifies navigation to Alternar page', () => {
        // Open the menu by clicking the menu bar icon
        cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
        cy.wait(2000); // Wait for the menu to open

        // Ensure the "Live Casino" link is visible and click on it
        cy.get('a[href="/sports/altenar?page=overview"]')
            .should('be.visible')
            .eq(1)  // Specify which element to click if there are multiple
            .click({ force: true }); // Force the click if needed

        // Verify the URL includes '/alternar' after clicking
        cy.url().should('include', '/altenar');

        // Return to the home page after the test
        cy.visit('https://nextocasino.com'); // Go back to the home page

    });

    it('4. Verifies navigation to Delasport page', () => {
        // Open the menu by clicking the menu bar icon
        cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
        cy.wait(2000); // Wait for the menu to open

        // Ensure the "Delasport" link is visible and click on it
        cy.get('a[href="/sports/delasport"]')
            .should('be.visible')
            .eq(0)  // Specify which element to click if there are multiple
            .click({ force: true }); // Force the click if needed

        // Verify the URL includes '/alternar' after clicking
        cy.url().should('include', '/delasport');

        // Return to the home page after the test
        cy.visit('https://nextocasino.com'); // Go back to the home page
    });

    // it('4. Verifies navigation to Livespins page', () => {
    //     // Open the menu by clicking the menu bar icon
    //     cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
    //     cy.wait(2000); // Wait for the menu to open

    //     // Ensure the "Delasport" link is visible and click on it
    //     cy.get('a[href="/sports/delasport"]') 
    //       .should('be.visible')
    //       .eq(0)  // Specify which element to click if there are multiple
    //       .click({ force: true }); // Force the click if needed

    //     // Verify the URL includes '/alternar' after clicking
    //     cy.url().should('include', '/delasport');

    //     // Return to the home page after the test
    //     cy.visit('https://nextocasino.com'); // Go back to the home page


    it('5. Verifies navigation to Promotions page', () => {
        // Open the menu by clicking the menu bar icon
        cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
        cy.wait(2000); // Wait for the menu to open

        // Ensure the "Delasport" link is visible and click on it
        cy.get('a[href="/promotions"]')
            .should('be.visible')
            .eq(1)  // Specify which element to click if there are multiple
            .click({ force: true }); // Force the click if needed

        // Verify the URL includes 'Promotion' after clicking
        cy.url().should('include', '/promotions');

        // Return to the home page after the test
        cy.visit('https://nextocasino.com'); // Go back to the home page
    });

    it('6. Verifies navigation to calendar page', () => {
        // Open the menu by clicking the menu bar icon
        cy.get('svg.transition-colors.text-color-e.hover\\:text-color-b.w-6.h-6.-mx-1').click();
        cy.wait(2000); // Wait for the menu to open

        // Ensure the "Delasport" link is visible and click on it
        cy.get('a[href="/calendar"]')
            .should('be.visible')
            .eq(1)  // Specify which element to click if there are multiple
            .click({ force: true }); // Force the click if needed

        // Verify the URL includes 'Calendar' after clicking
        cy.url().should('include', '/calendar');

        // Return to the home page after the test
        cy.visit('https://nextocasino.com'); // Go back to the home page

    });


    it('7. Verifies visibility and clicks on "All Games" element', () => {

        // Wait for the menu to load and ensure the "All games" section is visible
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').first() // Ensure we're targeting the first element
            .should('be.visible') // Ensure the container is visible
            .within(() => {
                // Check if "All games" is present
                cy.get('div.font-medium.text-color-b.whitespace-nowrap.text-sm.sm\\:text-base')
                    .should('have.text', 'All games'); // Verify the text "All games"

                // Check if the number of games is present (e.g., "1904 Games")
                cy.get('div.text-xs.text-color-e.transition-colors._counter_1xjny_5')
                    .should('include.text', 'Games'); // Verify the number of games
            });

        // Click on the "All games" section
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').first() // Again target the first element
            .click({ force: true }); // Click on the container (forces click if element is not interactable)


    });


    it('8. Verifies visibility and clicks on "Live casino" element', () => {

        // Wait for the menu to load and ensure the "Live casino" section is visible
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(2) // Ensure we're targeting the first element
            .should('be.visible') // Ensure the container is visible
            .within(() => {
                // Check if "Live casino" is present
                cy.get('div.font-medium.text-color-b.whitespace-nowrap.text-sm.sm\\:text-base')
                    .should('have.text', 'Live casino'); // Verify the text "All games"

                // Check if the number of games is present (e.g., "1904 Games")
                cy.get('div.text-xs.text-color-e.transition-colors._counter_1xjny_5')
                    .should('include.text', 'Games'); // Verify the number of games
            });

        // Click on the "Slot games" section
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(2) // Again target the first element
            .click({ force: true }); // Click on the container (forces click if element is not interactable)


    });

    it('9. Verifies visibility and clicks on "Slot games" element', () => {

        // Wait for the menu to load and ensure the "Slot Games" section is visible
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(1) // Ensure we're targeting the first element
            .should('be.visible') // Ensure the container is visible
            .within(() => {
                // Check if "Slot games" is present
                cy.get('div.font-medium.text-color-b.whitespace-nowrap.text-sm.sm\\:text-base')
                    .should('have.text', 'Slot games'); // Verify the text "All games"

                // Check if the number of games is present (e.g., "1904 Games")
                cy.get('div.text-xs.text-color-e.transition-colors._counter_1xjny_5')
                    .should('include.text', 'Games'); // Verify the number of games
            });

        // Click on the "Slot games" section
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(1) // Again target the first element
            .click({ force: true }); // Click on the container (forces click if element is not interactable)


    });

    it('10. Verifies visibility and clicks on "Top Table & Crash Games" element', () => {

        // Wait for the menu to load and ensure the "Top Table & Crash Games" section is visible
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(3) // Ensure we're targeting the first element
            .should('be.visible') // Ensure the container is visible
            .within(() => {
                // Check if "Slot games" is present
                cy.get('div.font-medium.text-color-b.whitespace-nowrap.text-sm.sm\\:text-base')
                    .should('have.text', 'Top Table & Crash Games'); // Verify the text "All games"

                // Check if the number of games is present
                cy.get('div.text-xs.text-color-e.transition-colors._counter_1xjny_5')
                    .should('include.text', 'Games'); // Verify the number of games
            });

        // Click on the "Top Table & Crash Games" section
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(3) // Again target the first element
            .click({ force: true }); // Click on the container (forces click if element is not interactable)

    });

    it('11. Verifies visibility and clicks on "Lucky games" element', () => {

        // Wait for the menu to load and ensure the "Top Table & Crash Games" section is visible
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(4) // Ensure we're targeting the first element
            .should('be.visible') // Ensure the container is visible
            .within(() => {
                // Check if "Lucky games" is present
                cy.get('div.font-medium.text-color-b.whitespace-nowrap.text-sm.sm\\:text-base')
                    .should('have.text', 'Lucky games'); // Verify the text "All games"

                // Check if the number of games is present
                cy.get('div.text-xs.text-color-e.transition-colors._counter_1xjny_5')
                    .should('include.text', 'Games'); // Verify the number of games
            });

        // Click on the "Lucky games    " section
        cy.get('div.flex.flex-col.justify-between.ml-2.lg\\:ml-4').eq(4) // Again target the first element
            .click({ force: true }); // Click on the container (forces click if element is not interactable)

    });


    it('12. Verifies visibility, clicks on Terms and Conditions link, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(0)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'Terms & Conditions')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/terms_and_conditions');
    });


    it('13. Verifies visibility, clicks on TPrivacy policy, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(1)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'Privacy policy')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/privacy_policy');
    });

    it('14. Verifies visibility, clicks on Privacy policy, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(1)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'Privacy policy')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/privacy_policy');
    });


    it('15. Verifies visibility, clicks on Responsible gaming, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(2)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'Responsible gaming')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/responsible_gaming');
    });

    it('16. Verifies visibility, clicks on About us, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(3)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'About Us')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/about_us');
    });

    it('15. Verifies visibility, clicks on Contact us, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(4)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'Contact us')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/contact_us');
    });

    it('16. Verifies visibility, clicks on FAQ, and checks URL', () => {

        // Scroll the "Terms and Conditions" link into view before interacting with it
        cy.get('div.py-3.px-3').eq(5)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'FAQ')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/templates/faq');
    });

    it('17. Verifies visibility, clicks on payments, and checks URL', () => {

        cy.get('div.py-3.px-3').eq(6)  // Ensure we target the first matching div
            .scrollIntoView()  // Scroll the div into view
            .should('be.visible');  // Ensure the container is visible

        // Find the "Terms & Conditions" link using text content for better accuracy
        cy.contains('a', 'Payments & Withdrawals')
            .should('be.visible')  // Ensure the link is visible
            .click({ force: true });  // Force the click if needed

        // Verify that the URL includes the expected path
        cy.url().should('eq', 'https://nextocasino.com/payments');
    });

    it('18. Verifies the existence of shuttle button and checks URL', () => {
            // Wait for the parent container and scroll it into view
            cy.get('div.flex.flex-col.text-center.bg-color-f.rounded-lg.transition-colors.overflow-hidden.p-6.space-y-6')
                .scrollIntoView()
                .should('be.visible'); // Ensure the container is visible
        
            // Wait for the link inside the container to load
            cy.get('a')
                .contains('SHUFFLE') // Match the button text inside the <a> tag
                .should('be.visible') // Ensure the link is visible
                .click({ force: true }); // Click the link, forcing if needed
        
            // Verify the URL after clicking
            cy.url().should('include', '/play/real/'); // Use partial URL to account for dynamic paths
       
        
    });

    it('19. Clicks on the Providers filter button and verifies functionality', () => {
        // Locate the Providers button using its unique text or class
        cy.get('button').contains('Providers').should('be.visible'); // Ensure button is visible
    
        // Click on the Providers button
        cy.get('button').contains('Providers').click();
    
    //     // Optionally, verify a specific provider appears in the filter
    //     cy.get('div').contains('Some Provider Name') // Replace with an actual provider name
    //         .should('be.visible');
    });
    
 
    it('20. Verifies "Show all" for Slot games', () => {

        // Locate and click the "Show all" button for Slot Games
        cy.get('div._showAll_qgay7_27') // Locate "Show all" button(s)
            .contains('Show all') // Ensure it contains "Show all"
            .should('be.visible') // Ensure it's visible
            .first() // Choose the first "Show all" button (for Slot Games)
            .scrollIntoView() // Scroll the button into view
            .click(); // Click the "Show all" button for Slot Games

        // Verify the URL for Slot Games page
        cy.url().should('include', '/casino/slot_games');
        
        // Return to the home page before starting the second test
        cy.visit('https://nextocasino.com'); // Go back to the home page
    });

    });
    


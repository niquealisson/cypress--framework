describe('Account Tests - After Successful Login', () => {
    beforeEach(() => {
      // Open the login page
      cy.visit('https://nextocasino.com/?modal=login');
  
      // Perform login
      cy.get('input[name="email"]').type('test@test.com'); // Enter email
      cy.get('input[name="password"]').type('Ts123456'); // Enter password
      cy.get('button[type="submit"]').click(); // Click submit button
  
      // Handle the welcome popup (if present)
      cy.get('svg.w-8.h-8.text-color-e').should('be.visible').click(); // Close the modal
  
      // Navigate to the profile page
      cy.get('svg.w-5.h-5.text-color-b').click(); // Click the user icon
      cy.get('a.block.text-sm.w-full.text-left.px-4.py-2') // Locate and click "My Profile"
        .contains('my profile')
        .click();
  
      // Verify the profile page is loaded
      cy.url().should('include', '/account/profile/personal_info');
    });
  
    it('1. Verifies personal details and KYC status', () => {
      // Check Name and Surname fields
        cy.get('div.font-bold.text-sm.truncate.mb-1') 
        .contains('Test Test')
        .should('be.visible');
  
      // Check KYC status
      cy.contains('KYC unverified').should('be.visible');
    });
  
    it('2. Verifies real and bonus money amounts', () => {
      // Check real money amount
      cy.contains('Real money').should('be.visible');
      cy.contains('€541.47').should('be.visible');
  
      // Check bonus money amount
      cy.contains('Bonus money').should('be.visible');
      cy.contains('€50.00').should('be.visible');
    });
  
    it('3. Verifies account menu options', () => {
      // My account section
      cy.contains('My account').should('be.visible');
      cy.contains('Personal info').should('be.visible');
      cy.contains('Documents').should('be.visible');
      cy.contains('Change password').should('be.visible');
      cy.contains('Messages').should('be.visible');
    });
  
    it('4. Verifies promotions section', () => {
      // Promotions section
      cy.contains('Promotions').should('be.visible');
      cy.contains('Available').should('be.visible');
      cy.contains('Active').should('be.visible');
      cy.contains('1').should('be.visible'); // Check the count of active promotions
    });
  
    it('5. Verifies financials menu options', () => {
      // Financials section
      cy.contains('Financials').should('be.visible');
      cy.contains('Deposit').should('be.visible');
      cy.contains('Withdraw').should('be.visible');
      cy.contains('Pending withdraws').should('be.visible');
    });
  
    it('6. Verifies responsible gaming menu options', () => {
      // Responsible gaming section
      cy.contains('Responsible gaming').should('be.visible');
      cy.contains('Time-Out / Self-exclusion').should('be.visible');
      cy.contains('Deposit limits').should('be.visible');
      cy.contains('Loss Limits').should('be.visible');
      cy.contains('Wager Limits').should('be.visible');
      cy.contains('Session limits').should('be.visible');
      cy.contains('Reality check').should('be.visible');
    });
  
    it('7. Verifies history menu options', () => {
      // History section
      cy.contains('History').should('be.visible');
      cy.contains('Account statement').should('be.visible');
      cy.contains('Profit & Loss').should('be.visible');
    });
  });
  
//https://royalcoala18.com/v 

describe('Login Page', () => {
  
    beforeEach(() => {
      cy.visit('https://royalcoala18.com/'); // Open the login page
    });
  
    // 1. Positive scenario: successful login with valid credentials and leads to another page
    it('1. should login successfully with valid credentials', () => {
    // Enter valid email
    cy.get('input[name="email"]').type(Cypress.env('universal_user_name'));
    
    // Enter valid password
    cy.get('input[name="password"]').type(Cypress.env('universal_password'));
    
    // Click the submit button using the specific class
        cy.get('button._secondary_i1e1t_9[type="submit"]').click();
  
  
    // Verify that the user is redirected to the correct page
        cy.url().should('include', 'https://nextocasino.com/'); // Adjust the expected URL as needed
    });

    // 2. Validate error message for invalid email
    it('2. should display an error for invalid email format', () => {
        cy.get('input[name="email"]').type('invalid-email-format'); // Enter an invalid email
        cy.get('input[name="password"]').type('ValidPassword123'); // Enter password
        cy.get('button[type="submit"]').click(); // Click submit button
    
        // Check for the specific error message when an invalid email is entered
        cy.get('.text-sm.block.text-color-i.mt-1').should('contain', 'Email must be a valid email');
    });

    // 3. Validate error message for incorrect password
    it('3. should display an error for incorrect password', () => {
        cy.get('input[name="email"]').type(Cypress.env('universal_user_name'));
        cy.get('input[name="password"]').type('Wrongpassword1'); // Enter invalid password
        cy.get('button[type="submit"]').click(); // Click submit button
    
        // Check for the specific error message when an invalid password is entered
        cy.get('h3.text-sm.text-color-i').should('contain', 'Wrong email or password');
    });

    // 4. Test empty email field error
    it(' 4. should display error for empty email field', () => {
        cy.get('input[name="email"]').clear(); // Ensures email field is empty
        cy.get('input[name="password"]').type('ValidPassword123'); // Enter valid password
        cy.get('button[type="submit"]').click(); // Click submit button
    
        // Check for an error message specific to the empty email field
        cy.get('.text-sm.block.text-color-i.mt-1').should('contain', 'Email is a required field');
    });

    // 5. Test empty password field error
    it('5. should display error for empty password field', () => {
        cy.get('input[name="email"]').type('universal_user_name'); // Enter valid email
        cy.get('input[name="password"]').clear(); // Ensure password field is empty
        cy.get('button[type="submit"]').click(); // Click submit button
    
        // Check for an error message specific to the empty password field
        cy.get('.text-sm.block.text-color-i.mt-1').should('contain', 'Password is a required field');
    });

    // 6. Test: Validate redirection to registration page when "Register Now" button is clicked
    it('6. should redirect to the registration page when "Register Now" button is clicked', () => {
        cy.visit('https://nextocasino.com/?modal=login'); // Visit the login page

        // Click on the "Register Now" button
        cy.contains('button', 'Register now').click();


        // Verify that the user is redirected to the registration page
        cy.url().should('include', 'https://nextocasino.com/?modal=register'); // 
    });

   
    
  // 7. Validate "Forgot Your Password" functionality
    it('7. should redirect to the forgot password page when "Forgot Your Password" is clicked', () => {
    // Click the "Forgot your password?" button
    cy.get('button.text-color-e.underline.text-xs').click(); // Select the button by its class

    cy.get('._modal_72swt_1._sm_72swt_9').should('be.visible'); // Ensure the modal is displayed

  });

    // 8. Test handling of long input in email and password fields
    it('8. should handle long input in email and password fields gracefully', () => {
        const longEmail = 'veryloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaangemailaddressfortestingpurposes@example.com';
        const longPassword = 'a'.repeat(256); // A long password with 256 characters

        // Enter a long email
        cy.get('input[name="email"]').type(longEmail);
        // Enter a long password
        cy.get('input[name="password"]').type(longPassword); 
        // Click the submit button
        cy.get('button[type="submit"]').click();

        // Check for appropriate handling (e.g., no crashes, validation error, or normal login flow)
        //   
    });


      // 9. Verify password masking
      it('9. should toggle password visibility when clicking the icon and type to confirm visibility', () => {
        // Get the password field and alias it
        const passwordField = cy.get('input[name="password"]').as('passwordField');
        
        // Initially, the password field should have type="password"
        cy.get('@passwordField').should('have.attr', 'type', 'password');
        
        // Type a password
        cy.get('@passwordField').type('TestPassword123');
        
        // Assert the value is entered (hidden, because type is password)
        cy.get('@passwordField').invoke('val').should('eq', 'TestPassword123');
    
        // Now click on the visibility toggle button (SVG)
        cy.get('svg.w-4.h-4').as('toggleIcon');
        cy.get('@toggleIcon').click();  // Toggle visibility
        
        // After clicking, the password field should have type="text" (visible)
        cy.get('@passwordField').should('have.attr', 'type', 'text');
        
        // Confirm that the password is visible (by checking its value directly)
        cy.get('@passwordField').invoke('val').should('eq', 'TestPassword123'); // Ensure the typed value is visible
    
        // Click again to hide the password
        cy.get('@toggleIcon').click();
    
        // The password should again be hidden (type="password")
        cy.get('@passwordField').should('have.attr', 'type', 'password');
        
        // Confirm that the value is still there but hidden
        cy.get('@passwordField').invoke('val').should('eq', 'TestPassword123'); // Ensure the typed value is still correct, but hidden
      });
    


});

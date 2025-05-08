describe('Password Visibility Toggle', () => {

  beforeEach(() => {
    cy.visit('https://nextocasino.com/?modal=login'); // Visit your login page
  });

  it('should toggle password visibility when clicking the icon and type to confirm visibility', () => {
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
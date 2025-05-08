class LoginPage {
    visit() {
        cy.visit('https://nextocasino.com/?modal=login');
    }

    enterEmail(email) {
        cy.get('input[name="email"]').type(email);
    }

    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickLoginButton() {
        cy.get('button[type="submit"]').click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/');
        cy.contains('Welcome').should('be.visible');
    }

    verifyLoginError() {
        cy.contains('Wrong email or password').should('be.visible');
    }
}

export default new LoginPage();

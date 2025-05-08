import LoginPage from '../../../support/pageObjects/LoginPage';

describe('Login Page Test', () => {
    let users;

    before(() => {
        cy.fixture('users/users.json').then((data) => {
            users = data;
        });
    });

    it('should allow user to log in with valid credentials', () => {
        const { username, password } = users.validUser;
        LoginPage.visit();
        LoginPage.enterEmail(username);
        LoginPage.enterPassword(password);
        LoginPage.clickLoginButton();
        LoginPage.verifyLoginSuccess();
    });

    it('should show error message for invalid login attempt', () => {
        const { username, password } = users.invalidUser;
        LoginPage.visit();
        LoginPage.enterEmail(username);
        LoginPage.enterPassword(password);
        LoginPage.clickLoginButton();
        LoginPage.verifyLoginError();
    });
});

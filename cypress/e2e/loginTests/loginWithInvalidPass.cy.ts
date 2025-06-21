import { Dashboard } from "../../support/pageObject/dashboard";
import { HomePage } from "../../support/pageObject/homePage";
import { LoginPage } from "../../support/pageObject/loginPage";
import { URLs } from "../../fixtures/links";
import { LoginCredentials, Warnings } from "../../fixtures/testData";


describe('Invalid Login', () => {

    it('should validate user cannot log in with wrong password', () => {

        const loginPage = new LoginPage();
        const homePage = new HomePage();
        const dashboard = new Dashboard();

        cy.visit(URLs.base);
        homePage.logIn().click();

        loginPage.emailField().type(LoginCredentials.validEmail);
        loginPage.passwordField().type('wrong');
        loginPage.signInButton().click();
        loginPage.warningText().contains(Warnings.invalidCredential);

    });
}
)
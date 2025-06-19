import { Dashboard } from "../../support/pageObject/dashboard";
import { HomePage } from "../../support/pageObject/homePage";
import { RegistrationPage } from "../../support/pageObject/registrationPage";
import { URLs } from "../../fixtures/links";
import { LoginCredentials } from "../../fixtures/testData";


describe('Valid Registration', () => {

    it ('should validate user can regiter'), ()=> {

        const registrationPage = new RegistrationPage();
        const homePage = new HomePage();
        const dashboard = new Dashboard();

        cy.visit(URLs.base);
        homePage.register().click();


    }
}
)
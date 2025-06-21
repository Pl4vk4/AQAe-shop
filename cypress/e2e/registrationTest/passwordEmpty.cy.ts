import { HomePage } from "../../support/pageObject/homePage";
import { RegistrationPage } from "../../support/pageObject/registrationPage";
import { URLs } from "../../fixtures/links";
import { generateUser } from "../../fixtures/testData";
import { Warnings } from "../../fixtures/testData";

describe('Empty password', () => {
    it('should validate user cannot register with empty password', () => {
        const registrationPage = new RegistrationPage();
        const homePage = new HomePage();
        const newUser = generateUser();

        cy.visit(URLs.base);
        homePage.register().click();

        // Fill in the registration form - but leave password empty
        registrationPage.usernameField().type(newUser.name);
        registrationPage.emailField().type(newUser.email);
        // Password field is intentionally left empty
        
        // Check for password confirmation field but leave it empty as well
        cy.get('body').then($body => {
            if ($body.find('#passwordConfirm').length > 0) {
                // Don't type anything in the password confirmation field
            }
        });
        
        // Click the register button
        registrationPage.registerButton().click();
        
        // Verify registration fails
        cy.url().should('include', 'register'); // Should still be on registration page
        registrationPage.warningBelowField().contains(Warnings.emptyPassword);
        
        
        // Verify validation error for password field
        //registrationPage.passwordField().invoke('prop', 'validationMessage')
            //.should('not.be.empty'); // Browser validation message should exist
        
        // Check for specific error message if the app shows custom validation messages
        //cy.get('body').then($body => {
           // if ($body.find('.text-sm').length > 0) {
                // Look for validation messages related to password
                //cy.contains('.text-sm', /password|Password/).should('be.visible');
            //}
        //});
    });
});

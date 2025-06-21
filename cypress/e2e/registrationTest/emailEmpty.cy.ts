import { HomePage } from "../../support/pageObject/homePage";
import { RegistrationPage } from "../../support/pageObject/registrationPage";
import { URLs } from "../../fixtures/links";
import { generateUser } from "../../fixtures/testData";

describe('Empty email', () => {
    it('should validate user cannot register with empty email', () => {
        const registrationPage = new RegistrationPage();
        const homePage = new HomePage();
        const newUser = generateUser();

        cy.visit(URLs.base);
        homePage.register().click();

        // Fill in the registration form - but leave email empty
        registrationPage.usernameField().type(newUser.name);
        // Email field is intentionally left empty
        registrationPage.passwordField().type(newUser.password);
        
        // Check for password confirmation field
        cy.get('body').then($body => {
            if ($body.find('#passwordConfirm').length > 0) {
                cy.get('#passwordConfirm').type(newUser.password);
            }
        });
        
        // Click the register button
        registrationPage.registerButton().click();
        
        // Verify registration fails
        cy.url().should('include', 'register'); // Should still be on registration page
        
        // Verify validation error for email field
        registrationPage.emailField().invoke('prop', 'validationMessage')
            .should('not.be.empty'); // Browser validation message should exist
        
        // Check for specific error message if the app shows custom validation messages
        cy.get('body').then($body => {
            if ($body.find('.text-sm').length > 0) {
                // Look for validation messages related to email
                cy.contains('.text-sm', /email|Email/).should('be.visible');
            }
        });
    });
});

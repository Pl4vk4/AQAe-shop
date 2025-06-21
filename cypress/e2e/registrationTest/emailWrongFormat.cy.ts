import { HomePage } from "../../support/pageObject/homePage";
import { RegistrationPage } from "../../support/pageObject/registrationPage";
import { URLs } from "../../fixtures/links";
import { generateUser } from "../../fixtures/testData";

describe('Invalid email format', () => {
    it('should validate user cannot register with invalid email format', () => {
        const registrationPage = new RegistrationPage();
        const homePage = new HomePage();
        const newUser = generateUser();
        const invalidEmail = 'invalid-email-format';

        cy.visit(URLs.base);
        homePage.register().click();

        // Fill in the registration form with invalid email format
        registrationPage.usernameField().type(newUser.name);
        registrationPage.emailField().type(invalidEmail);
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
                // Look for validation messages related to email format
                cy.contains('.text-sm', /email|Email|format|invalid/).should('be.visible');
            }
        });
    });
});

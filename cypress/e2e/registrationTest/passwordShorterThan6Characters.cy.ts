import { HomePage } from "../../support/pageObject/homePage";
import { RegistrationPage } from "../../support/pageObject/registrationPage";
import { URLs } from "../../fixtures/links";
import { generateUser } from "../../fixtures/testData";

describe('Password shorter than 6 characters', () => {
    it('should validate user cannot register with a password shorter than 6 characters', () => {
        const registrationPage = new RegistrationPage();
        const homePage = new HomePage();
        const newUser = generateUser();
        const shortPassword = '12345'; // 5 characters, less than minimum 6

        cy.visit(URLs.base);
        homePage.register().click();

        // Fill in the registration form with short password
        registrationPage.usernameField().type(newUser.name);
        registrationPage.emailField().type(newUser.email);
        registrationPage.passwordField().type(shortPassword);
        
        // Check for password confirmation field
        cy.get('body').then($body => {
            if ($body.find('#passwordConfirm').length > 0) {
                cy.get('#passwordConfirm').type(shortPassword);
            }
        });
        
        // Click the register button
        registrationPage.registerButton().click();
        
        // Verify registration fails
        cy.url().should('include', 'register'); // Should still be on registration page
        
        // Check for validation error on password field
        // Some browsers might have built-in validation for minlength
        registrationPage.passwordField().invoke('prop', 'validationMessage')
            .then((validationMessage) => {
                // If browser validation exists, it should have a message
                // If not, we'll check for app-specific validation in the next step
                cy.log(`Password validation message: ${validationMessage}`);
            });
        
        // Check for specific error message if the app shows custom validation messages
        cy.get('body').then($body => {
            if ($body.find('.text-sm').length > 0) {
                // Look for validation messages related to password length
                cy.contains('.text-sm', /password|Password|length|characters|short/).should('be.visible');
            }
        });
    });
});

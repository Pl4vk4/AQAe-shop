export class RegistrationPage {
    registrationForm() {
        return cy.get('.surface-card');
    }

    mainTitle() {
        return cy.get('.mb-5 > .flex');
    }

    infoText() {
        return cy.get('.text-gray-600');
    }

    loginLink() {
        return cy.get('.mb-5 > .font-medium');
    }

    usernameFieldLabel() {
        return cy.get(':nth-child(1) > .block');
    }

    usernameField() {
        return cy.get('#username');
    }

    emailFieldLabel() {
        return cy.get(':nth-child(2) > .block');
    }

    emailField() {
        return cy.get('#email') ;
    }

    passwordFieldLabel() {
        return cy.get(':nth-child(3) > .block') ;
    }

    passwordField() {
        return cy.get('#password') ;
    }

    registerButton() {
        return cy.get('.flex > .w-full') ;
    }

    warningBelowField() {
        return cy.get('.text-sm') ;
    }
}


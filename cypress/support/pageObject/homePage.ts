export class HomePage {
    logo() {
        return cy.get('img').should('have.attr', 'src', '/images/logo/-white.png');;
    };

    dashboardButton() {
        return cy.get('.ml-4');
    }
   
    register() {
        return cy.get('.mr-2 > [href="https://automaticityacademy.ngrok.app/register"]');
    };

    logIn() {
        return cy.get('#loginBtn');
    };

    mainTitle() {
        return cy.get('.text-5xl');
    };
    
    subTitle() {
        return cy.get('.text-left > .text-xl'); 
    }

    robotImg() {
        return cy.get('img').should('have.attr', 'src', '/images/hero/gearhead.webp');
    };

    signUp() {
        return cy.get('.p-button');
    };

    copyrightLink() {
        return cy.get('a[href="https://www.automaticity.rs/"]');
    }

    linkedin() {
        return cy.get('a[href="https://www.linkedin.com/company/automaticity-it/mycompany/"]');
        
    }

    instagram() {
        return cy.get('a[href="https://www.instagram.com/automaticity.qa/"]');
    }

    mailTo() {
        return cy.get('a[href="mailto:office@automaticity.rs"]');
    }
    facebook() {
        return cy.get('a[href="https://www.facebook.com/automaticity.qa"]');
    };

    text1() {
        return cy.get('.mb-2');
    }

    text2() {
        return cy.get('.mb-4');
    }

    text3() {
        return cy.get('.mt-6');

    }
}
import { CheckoutPage } from "../../support/pageObject/checkoutPage";
import { Dashboard } from "../../support/pageObject/dashboard";
import { LoginPage } from "../../support/pageObject/loginPage";
import { HomePage } from "../../support/pageObject/homePage";
import { URLs } from "../../fixtures/links";
import { LoginCredentials, searchItem } from "../../fixtures/testData";
import { faker } from "@faker-js/faker";



describe('User purchases an item from Shop', () => {
  it('should validate user can follow all steps in checkout and purchase an item', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const dashboard = new Dashboard();
    const checkout = new CheckoutPage();

    
    //login
    cy.visit(URLs.base);
    homePage.logIn().click();
    loginPage.emailField().type(LoginCredentials.validEmail);
    loginPage.passwordField().type(LoginCredentials.validPass);
    loginPage.signInButton().click();
    cy.url().should('eq', URLs.dashboard);

    //search
    //cy.wait(8000);
    dashboard.searchField().type(searchItem.existingItem,  { delay: 100 });

    //send to basket
    dashboard.addToCartButton().first().click();

    //go to basket
    dashboard.shoppingCartButton().click();

    //go to checkout
    dashboard.checkoutButton().click();
    cy.wait(5000);
    checkout.nextBtn1().click({ multiple: true });

    //enter data for 1st step of checkout
    checkout.makeChangesBtn().click();
    checkout.firstNameField().clear().type(faker.person.firstName(), { delay: 100 } );


  });
})

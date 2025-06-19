export class Dashboard {
    
  hamburgerMenu() {
      return cy.get('.relative > div > span.inline-flex > .inline-flex'); 
    }
  
  logoutButton() {
      return cy.get('button.block'); 
    }

    searchField() {
      return cy.get('#search');
    }

    productName() {
      return cy.get('a > .text-sm');
    }

    productPrice() {
      return cy.get('.border-t-2 > .font-semibold');
    }


    addToCartButton() {
      return cy.get('.px-1.ml-auto.p-button.p-component');
    }

    successToaster() {
      return cy.get('.Toastify');
    }

    shoppingCartButton() {
      return cy.get('.flex > :nth-child(1) > .inline-flex');
    }

    shoppingCartSideBar() {
      return cy.get('.sidebar > .flex-1');
    }

    cartText() {
      return cy.get('.block .text-primary');
    }

    clearButton() {
      return cy.get('.ml-2');
    }

    itemCard() {
      return cy.get('.flex .flex-column');
    }

    cartProductName() {
      return cy.get('.my-1 .text-primary');
    }

    cartProductPrice() {
      return cy.get('.my-1 .text-primary');
    }

   checkoutButton() {
    return cy.get('.mt-auto > .flex > .bg-gray-200');
   }

    totalPrice() {
      return cy.get('.text-lg .mb-4');
    }
  }
  
  

export class CheckoutPage {
    
    // Review Step
    progress() {
        return cy.get('.py-4'); 
      }
    
    infoText() {
        return cy.get('.bg-white .p-4 .my-6 .rounded-lg .shadow-2xl'); 
      }

    salesmanImg() {
        return cy.get('.ml-auto');
    };
  
    textInCloud1() {
        return cy.get('.p-4 > :nth-child(1)');
      }
      
    nextBtn1() {
        return cy.get('.bg-gray-200 > .p-button-label');

    }
  
      // Shipping Step
  
      textInCloud2() {
        return cy.get('p');
      }

      makeChangesBtn() {
        return cy.get('[aria-label="Make changes"]');
        
      }

      firstNameField() {
        return cy.get('#first_name');
      }

      lastNameField() {
        return cy.get('#last_name');
      }

      emailField() {
        return cy.get('#email');
      }

      phoneNumberField() {
        return cy.get('#phone_number');
      }

      streetAndNumberField() {
        return cy.get('#street_and_number');
      }

      cityField() {
        return cy.get('#city');
      }

      postalCodeField() {
        return cy.get('#postal_code');
      }

      countryField() {
        return cy.get('#country');
      }

      updateBtn1() {
        return cy.get('[aria-label="Update"]');
      }

      nextBtn2() {
        return cy.get('[type="submit"]');
      }
      
      // Billing Step

      cardHolderField() {
        return cy.get('#cardholder');
      }
      
      cardTypeField() {
        return cy.get('#card_type');
      }

      cardNumberField() {
        return cy.get('#card_number');
      }

      cvvField() {
        return cy.get('#cvv');
      }

      cardExpirationMonthField() {
        return cy.get('#card_expiration_month');
      }

      cardExpirationYearField() {
        return cy.get('#card_expiration_year');
      }

      nextBtn3() {
        return cy.get('[type="submit"]');;
      }

      updateBtn2() {
        return cy.get('button[aria-label="Update"]');
      }

      // Finalize Purchase Step

      shippingInformationCard() {
        return cy.get('.max-w-7xl > :nth-child(1)');
      }

      reviewFirstName() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(1) > .font-semibold');
      }

      reviewLastName() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(2) > .font-semibold');
      }

      reviewEmail() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(3) > .font-semibold');
      }

      reviewPhone() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(4) > .font-semibold');
      }

      reviewAddress() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(5) > .font-semibold');
      }

      reviewCity() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(6) > .font-semibold');
      }

      reviewPostalCode() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(7) > .font-semibold');
      }

      reviewCountry() {
        return cy.get(':nth-child(1) > .mt-4 > :nth-child(8) > .font-semibold');
      }

      billingInformationCard() {
        return cy.get('.max-w-7xl > :nth-child(2)');
      }

      reviewCardHolder() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(1) > .font-semibold');
      }

      reviewCardType() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(2) > .font-semibold');
      }

      reviewVardNumber() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(3) > .font-semibold');
      }

      reviewCvv() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(4) > .font-semibold');
      }
      
      reviewExpirationDate() {
        return cy.get(':nth-child(2) > .mt-4 > :nth-child(5) > .font-semibold');
      }

      itemInformationCard() {
        return cy.get('.max-w-7xl > :nth-child(3)');
      }

      reviewProductName() {
        return cy.get('.border-b-2 > .flex > .font-semibold');
      }

      reviewTotalPrice() {
        return cy.get(':nth-child(3) > .mt-4 > :nth-child(2)');
      }

      placeOrderBtn() {
        return cy.get('.bg-white > .p-button-label');
      }

}
      
     
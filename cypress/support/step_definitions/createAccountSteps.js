import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

When('User click on Create New Account link.', () => {
    cy.get('a[href*="customer/account/create"]').first().click();
  })

When('User enters account details {string}, {string}, {string}, {string}.', (fName,lName,email, password) => {
  cy.get('input[id="firstname"]').type(fName);
  cy.get('input[id="lastname"]').type(lName);
  cy.get('input[id="email_address"]').type(email);
  cy.get('input[id="password"]').type(password);
  cy.get('input[id="password-confirmation"]').type(password);
  cy.get('button[title="Create an Account"]').click();
})




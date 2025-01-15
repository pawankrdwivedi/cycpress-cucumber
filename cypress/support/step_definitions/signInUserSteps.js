import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor'

When('User click on Sign In link.', () => {
  cy.get('a[href*="customer/account/login"]').first().click();
})

When('User enters sign in details {string}, {string}.', (email, password) => {
  cy.get('input[id="email"]').type(email);
  cy.get('input[id="pass"]').first().type(password);
  cy.get('button[name="send"]').first().click();
})

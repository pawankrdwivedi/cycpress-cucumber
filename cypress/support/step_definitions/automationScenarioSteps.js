import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor'

Before(() => {
  cy.log('Test Setup')
})

After(() => {
  cy.log('Test Teardown')
})

Given('Application Page is opened.', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
  })

When('User click on Create New Account link.', () => {
    cy.get('a[href*="customer/account/create"]').first().click();
  })

Then('{string} page is displayed.', (text) => {
  cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text',`${text}`);
})

When('User enters account details {string}, {string}, {string}, {string}.', (fName,lName,email, password) => {
  cy.get('input[id="firstname"]').type(fName);
  cy.get('input[id="lastname"]').type(lName);
  cy.get('input[id="email_address"]').type(email);
  cy.get('input[id="password"]').type(password);
  cy.get('input[id="password-confirmation"]').type(password);
  cy.get('button[title="Create an Account"]').click();
})

When('User click on Sign In link.', () => {
  cy.get('a[href*="customer/account/login"]').first().click();
})

When('User enters sign in details {string}, {string}.', (email, password) => {
  cy.get('input[id="email"]').type(email);
  cy.get('input[id="pass"]').first().type(password);
  cy.get('button[name="send"]').first().click();
})


Then('{string} success message is displayed.', (successMessage) => {
  cy.get('div[data-ui-id="message-success"]').should('contain.text',`${successMessage}`);
})

Then('{string} error message is displayed.', (errorMessage) => {
  cy.get('div[data-ui-id="message-error"]').should('contain.text',`${errorMessage}`);
})
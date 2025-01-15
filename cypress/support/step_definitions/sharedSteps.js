import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor'

Before(() => {
  cy.log('Test Setup')
})

After(() => {
  cy.log('Test Teardown')
})

Given('Application Page is opened.', () => {
  const testData = require('../../fixtures/testData.json')
    cy.visit(testData.baseUrL);
    })

Then('{string} page is displayed.', (text) => {
  cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text',`${text}`);
})

Then('{string} success message is displayed.', (successMessage) => {
  cy.get('div[data-ui-id="message-success"]').should('contain.text',`${successMessage}`);
})

Then('{string} error message is displayed.', (errorMessage) => {
  cy.get('div[data-ui-id="message-error"]').should('contain.text',`${errorMessage}`);
})
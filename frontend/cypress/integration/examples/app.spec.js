/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('has input field sample data', () => {
    
    cy.get('input[name="sampleData"]')
      .type('sample data').should('have.value', 'sample data')

    cy.get('.sendData').click();
    cy.get('.display-data-class')
      .should('have.text', 'Posted Successfully to the database')
  })

  it('should display data from database', () => {
    cy.get('.readData').click()
    cy.get('.sample-data-class')
      .should('be.visible')

  })

  it('should display parsed JWT', () => {
    cy.get('.parseJWT').click()
    cy.get('.display-data-class')
      .should('have.text', 'No valid token to parse')
    // cy.get('.sample-data-class')
    //   .should('be.visible')

  })

  

  
})

describe('turing-sorting-hat-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should show the turing hat logo in the nav bar', () => {
    cy.get('.turing-sorting-hat')
  })

  it('should show the title of the app in the nav bar', () => {
    cy.get('h1')
      .contains('Turing Sorting Hat')
  })

  it('should render individual question containers on page load', () => {
    cy.get('.questions-container > :nth-child(1) > :nth-child(1)')
      .should('have.length', 1)
  })

  it('should have clickable radio buttons for questions', () => {
    cy.get('[type="radio"]')
      .parent()
      .find('input')
      .should('have.class', 'answer')
      .check()
  })

  it('should display "get results" button after one question on each card is checked', () => {
    cy.get('[type="radio"]')
      .parent()
      .find('input')
      .should('have.class', 'answer')
      .check()
    cy.get('.get-results-button')
      .contains('GET RESULTS')      
  })

  it('should take user to the results page when get results button is clicked', () => {
    cy.get('[type="radio"]')
      .parent()
      .find('input')
      .should('have.class', 'answer')
      .check()
    cy.get('.get-results-button')
      .click()
      .url().should('include', 'results/BE')
  })
})
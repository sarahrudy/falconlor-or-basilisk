describe('results page frontend', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/results/FE')
  })

  it('should display "You selected FE!" if user selects mostly FE answers', () => {
    cy.get('h1')
      .contains('You selected FE!')
  })
})

describe('results page backend', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/results/BE')
  })

  it('should display "You selected BE!" if user selects mostly BE answers', () => {
    cy.get('h1')
      .contains('You selected BE!')
  })
})





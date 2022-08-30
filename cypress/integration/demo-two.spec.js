describe('Demo Two', () => {
  beforeEach(() => {
    cy.visit('/demo2')
  })

  it('Renders', () => {
    cy.get('#header').should('exist')
  })
})

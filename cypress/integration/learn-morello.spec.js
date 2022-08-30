describe('Demo Two', () => {
  beforeEach(() => {
    cy.visit('/learn-morello')
  })

  it('Renders', () => {
    cy.get('[data-cy=header]').should('be.visible')
  })
})

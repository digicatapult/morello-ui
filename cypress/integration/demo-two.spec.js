describe('Demo Two', () => {
  beforeEach(() => {
    cy.visit('/demo2')
  })

  it('Renders', () => {
    cy.get('[data-cy=header]').should('be.visible')
  })
})

describe('Write Demo', () => {
  beforeEach(() => {
    cy.visit('/write-demo')
  })

  it('Renders', () => {
    cy.get('[data-cy=header]').should('be.visible')
  })
})

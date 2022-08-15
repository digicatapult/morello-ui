describe('Demo One', () => {
  beforeEach(() => {
    cy.visit('/demo1')
  })

  it('Renders login box', () => {
    cy.get('#Password').should('exist')
  })

  it('Max length cuts off long passwords', () => {
    cy.get('#Password', { maxlength: 16, force: true }).type(
      '12345678910111213141516',
      { force: true }
    )
    cy.get('#Password').should('have.value', '1234567891011121')
  })
})
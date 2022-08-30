describe('Learn Morello', () => {
  beforeEach(() => {
    cy.visit('/learn-morello')
  })

  it('Renders', () => {
    cy.get('img')
      .filter('[src="arm-morello-screenshot.png"]')
      .should('be.visible')
    cy.get('img').filter('[src="arm-morello-qr.png"]').should('be.visible')
  })
})

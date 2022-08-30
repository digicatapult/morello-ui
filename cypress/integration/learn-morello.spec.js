describe('Learn Morello', () => {
  beforeEach(() => {
    cy.visit('/learn-morello')
  })

  it('Renders', () => {
    cy.get('img')
      .filter('[src="arm-morello-screenshot.png"]')
      .should('be.visible')
    cy.get('img').filter('[src="arm-morello-qr.svg"]').should('be.visible')
  })
})

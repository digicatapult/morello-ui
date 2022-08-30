describe('Learn Morello', () => {
  beforeEach(() => {
    cy.visit('/about-dsbd')
  })

  it('Renders', () => {
    cy.get('img')
      .filter('[src="dsbd-info-screenshot.png"]')
      .should('be.visible')
    cy.get('img').filter('[src="dsbd-info-qr.svg"]').should('be.visible')
  })
})

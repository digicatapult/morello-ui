describe('Learn Morello', () => {
  beforeEach(() => {
    cy.visit('/learn-morello')
  })

  it('Renders', () => {
    cy.get('img')
      .filter('[data-cy="learn-morello-screenshot"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('img')
      .filter('[data-cy="learn-morello-qr"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})

describe('About DSbD', () => {
  beforeEach(() => {
    cy.visit('/about-dsbd')
  })

  it('Renders', () => {
    cy.get('img')
      .filter('[data-cy="about-dsbd-screenshot"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('img')
      .filter('[data-cy="about-dsbd-qr"]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})

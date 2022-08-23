describe('Demo One', () => {
  beforeEach(() => {
    cy.visit('/demo1')
  })

  // TODO use data= property for getting DOM elements
  it('Renders login box', () => {
    cy.get('#Password').should('exist')
  })

  describe('If password entered is more than 16 chars', () => {
    it('Max length cuts off long passwords', () => {
      // eslint-disable-next-line cypress/no-force
      cy.get('#Password', { maxlength: 16, force: true }).type(
        '12345678910111213141516',
        { force: true }
      )
      cy.get('#Password').should('have.value', '1234567891011121')
    })
  })
  
  describe('Happy path', () => {
    beforeEach(() => {
      cy.get('#Password').type('password')
      cy.get('#submit-password').click()
      cy.get('#hacker-app').click()
      cy.get('#demo1-modal-btn-yes').click() 
    })

    it('Renders Hacker App after submitting a password', () => {
      cy.get('#hacker-app').should('exist')
    })
  
    it('Renders modal after clicking on Hacker App', () => {
      cy.get('#hacker-app-modal').should('exist')
    })
  
    it.skip('Renders progress bar after clicking <YES>', () => {
      cy.get('#demo1-progress-bar').should('exist')
    })
  })
})

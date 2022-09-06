describe('Read Demo', () => {
  beforeEach(() => {
    cy.visit('/read-demo')
  })

  // TODO use data= property for getting DOM elements
  it('Renders login box', () => {
    cy.get('#password').should('exist')
  })

  it('Returns to main menu and confirm that menu container has been rendered', () => {
    cy.get('[data-cy=header-close-btn]').click()
    cy.get('[data-cy=main-menu-container]').should('exist')
  })

  describe('If password entered is more than 16 chars', () => {
    it('Max length cuts off long passwords', () => {
      // eslint-disable-next-line cypress/no-force
      cy.get('#password', { maxlength: 16, force: true }).type(
        '12345678910111213141516',
        { force: true }
      )
      cy.get('#password').should('have.value', '1234567891011121')
    })
  })

  describe('Happy path', () => {
    beforeEach(() => {
      cy.get('#password').type('password')
      cy.get('#submit-password').click()
      cy.get('#hacker-app').click()
      cy.get('[data-cy=read-demo-modal-btn-yes-2]').click()
    })

    it('Renders Hacker App after submitting a password', () => {
      cy.get('#hacker-app').should('exist')
    })

    it('Renders modal after clicking on Hacker App', () => {
      cy.get('#hacker-app-modal').should('exist')
    })

    it('Renders progress bar after clicking <YES>', () => {
      cy.get('#read-demo-progress-bar').should('exist')
    })

    it.skip('Executes read demo binaries by calling an api', () => {
      // TODO
    })
  })
})

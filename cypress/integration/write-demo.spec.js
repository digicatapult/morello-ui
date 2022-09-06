describe('Write Demo', () => {
  beforeEach(() => {
    cy.visit('/write-demo')
  })

  it('Renders username and password boxes', () => {
    cy.get('#username').should('exist')
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
      cy.get('#username').type('root')
      cy.get('#password').type('password')
      cy.get('#login').click()
    })

    it('Renders success/fail message after login attempt', () => {
      cy.get('#login-attempt').should('be.visible')
    })

    it.skip('Executes write demo binaries by calling an api', () => {
      // TODO
    })
  })
})

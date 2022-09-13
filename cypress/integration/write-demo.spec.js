describe('Write Demo', () => {
  beforeEach(() => {
    cy.visit('/write-demo')
  })

  it('Renders username and password boxes', () => {
    cy.get('[data-cy=username]').should('exist')
    cy.get('[data-cy=password]').should('exist')
  })

  it('Returns to main menu and confirm that menu container has been rendered', () => {
    cy.get('[data-cy=header-close-btn]').click()
    cy.get('[data-cy=main-menu-container]').should('exist')
  })

  describe('If input entered is more than upper bound', () => {
    it(`Allows username longer than the upper bound`, () => {
      cy.get('[data-cy=username]').type('abcdefghijklmnopqrstuvwxyz')
      cy.get('[data-cy=username]').should(
        'have.value',
        'abcdefghijklmnopqrstuvwxyz'
      )
    })
    it('Prevents passwords longer than the upper bound', () => {
      // eslint-disable-next-line cypress/no-force
      cy.get('[data-cy=password]', { maxlength: 16, force: true }).type(
        '12345678910111213141516',
        { force: true }
      )
      cy.get('[data-cy=password]').should('have.value', '1234567891011121')
    })
  })

  it.skip('Shows login failed message after failed login', () => {
    cy.get('[data-cy=username]').type('root')
    cy.get('[data-cy=password]').type('bla')
    cy.get('[data-cy=login]').click()

    // TODO API

    cy.get('[data-cy=login-attempt]').should('be.visible')
  })

  it.skip('Shows secret desktop after successful login - no hacking', () => {
    cy.get('[data-cy=username]').type('root')
    cy.get('[data-cy=password]').type('password')
    cy.get('[data-cy=login]').click()

    // TODO API

    cy.get('[data-cy=secret-desktop]').should('be.visible')
  })

  it.skip('Shows secret desktop after successful login - hacking', () => {
    cy.get('[data-cy=username]').type('root------------123') // exploit out of bounds write
    cy.get('[data-cy=password]').type('bla')
    cy.get('[data-cy=login]').click()

    cy.get('[data-cy=username]').type('root')
    cy.get('[data-cy=password]').type('123')
    cy.get('[data-cy=login]').click()

    // TODO API

    cy.get('[data-cy=secret-desktop]').should('be.visible')
  })

  it.skip('Stops hacking on Morello', () => {
    //TODO
  })
})

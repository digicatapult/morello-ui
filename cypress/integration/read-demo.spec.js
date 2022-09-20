describe('Read Demo', { defaultCommandTimeout: 60000 }, () => {
  const secret = 'shhh-secret'

  beforeEach(() => {
    cy.visit('/read-demo')
  })

  describe('Header', () => {
    it('renders read demo header', () => {
      cy.get('[data-cy=header]')
        .should('include.text', 'Are your secrets really safe?')
        .should('have.css', 'background-color')
        .and('contain', 'rgb(56, 77, 108)')

      cy.get('[data-cy=header-close-btn]')
        .should('exist')
        .and('include.text', 'Close')
    })

    it('clicking on close button takes to the main menu', () => {
      cy.get('[data-cy=header-close-btn]').click()
      cy.get('[data-cy=main-menu-container]').should('exist')
    })
  })

  describe('Happy path', () => {
    it('confirms styling and DOM elements Demo 1A', () => {
      // TODO expand by creating an object of props from (theme.js)
      // and asserting each of mmain components
      cy.get('[data-cy=content-container]')
        .should('have.css', 'background-color')
        .and('contain', 'rgb(52, 53, 86)')
      cy.get('[data-cy=password-input-box]')
        .should('have.css', 'background-color')
        .and('contain', 'rgb(52, 53, 86)')
      cy.get('[data-cy=submit-password-btn]')
        .should('have.css', 'background-color')
        .and('contain', 'rgba(0, 0, 0, 0)')
    })

    describe('Enters too long password', () => {
      it('cuts off long passwords', () => {
        // eslint-disable-next-line cypress/no-force
        cy.get('[data-cy=password-input-box]', {
          maxlength: 16,
          force: true,
        }).type('12345678910111213141516', { force: true })
        cy.get('[data-cy=password-input-box]').should(
          'have.value',
          '1234567891011121'
        )
      })
      // TODO assert for error text
    })

    describe('Submits password', () => {
      beforeEach(() => {
        cy.get('[data-cy=password-input-box]').type(secret)
        cy.get('[data-cy=submit-password-btn]').click()
      })

      it('renders hacker app', () => {
        cy.get('[data-cy=hacker-app]').should('exist')
        cy.get('[data-cy=hacker-app-icon]')
          .should('exist')
          .and('have.css', 'background-image')
          .and('to.be.ok')
        cy.get('[data-cy=hacker-app-icon-text]')
          .should('have.css', 'font-family')
          .and('contain', 'AktivGrotesk')
      })

      it('removes password form', () => {
        cy.get('[data-cy=password-input-box]').should('not.exist')
        cy.get('[data-cy=submit-password-btn]').should('not.exist')
      })
    })

    describe('Opens hacker app', () => {
      beforeEach(() => {
        cy.get('[data-cy=password-input-box]').type(secret)
        cy.get('[data-cy=submit-password-btn]').click()
        cy.get('[data-cy=hacker-app]').click()
      })
      describe('Selects [no] option', () => {
        beforeEach(() => {
          cy.get('[data-cy=modal-btn-no-aarch64]').click()
        })

        it('updates state so moddal is no longer rendered', () => {
          cy.get('[data-cy=modal-main]').should('not.exist')
        })
      })

      it('renders modal with yes/no option', () => {
        cy.get('[data-cy=modal-main]').should('exist')
        cy.get('[data-cy=modal-main-text]')
          .should('exist')
          .should(
            'include.text',
            'Would you like to break into the system and reveal the password?'
          )
        cy.get('[data-cy=modal-btn-yes-aarch64]')
          .should('exist')
          .and('include.text', 'YES')
          .and('have.css', 'font-family')
          .and('contain', 'Arial')
        cy.get('[data-cy=modal-btn-no-aarch64]')
          .should('exist')
          .and('include.text', 'NO')
          .and('have.css', 'font-family')
          .and('contain', 'Arial')
      })
    })

    describe('Initiates hacking', () => {
      beforeEach(() => {
        cy.get('[data-cy=password-input-box]').type(secret)
        cy.get('[data-cy=submit-password-btn]').click()
        cy.get('[data-cy=hacker-app]').click()
        cy.get('[data-cy=modal-btn-yes-aarch64]').click()
      })

      it('renders progress animation', () => {
        cy.get('[data-cy=progress-bar]')
          .should('exist')
          .and('include.text', 'hacking in progress')
        cy.get('[data-cy=progress-bar]')
          .should('exist')
          .and('include.text', 'hacking in progress 98%')
      })

      it('displays user`s password', () => {
        cy.get('[data-cy=progress-bar-text]').should('include.text', secret)
      })

      it('renders a side button for demo 1b', () => {
        cy.get('[data-cy=button-side]').should('exist').and('include.text', '')
      })
    })

    describe('Demo 1B', () => {
      beforeEach(() => {
        cy.get('[data-cy=password-input-box]').type(secret)
        cy.get('[data-cy=submit-password-btn]').click()
        cy.get('[data-cy=hacker-app]').click()
        cy.get('[data-cy=modal-btn-yes-aarch64]').click()
        cy.get('[data-cy=button-side]').click()
      })

      it('confirms styling and DOM elements of Demo 1B', () => {
        // TODO refer to demo 1a it block
        cy.get('[data-cy=content-container]')
          .should('have.css', 'background-color')
          .and('contain', 'rgb(255, 255, 255)')
        cy.get('[data-cy=password-input-box]')
          .should('have.css', 'background-color')
          .and('contain', 'rgb(255, 255, 255)')
        cy.get('[data-cy=submit-password-btn]')
          .should('have.css', 'background-color')
          .and('contain', 'rgba(0, 0, 0, 0)')
      })

      describe('Submits password', () => {
        beforeEach(() => {
          cy.get('[data-cy=password-input-box]').type(secret)
          cy.get('[data-cy=submit-password-btn]').click()
        })

        it('renders morello hacker app', () => {
          // TODO assert that it's morello icon?
          cy.get('[data-cy=hacker-app]').should('exist')
          cy.get('[data-cy=hacker-app-icon]')
            .should('exist')
            .and('have.css', 'background-image')
            .and('to.be.ok')
          cy.get('[data-cy=hacker-app-icon-text]')
            .should('have.css', 'font-family')
            .and('contain', 'AktivGrotesk')
        })

        it('removes password input', () => {
          cy.get('[data-cy=password-input-box]').should('not.exist')
          cy.get('[data-cy=submit-password-btn]').should('not.exist')
        })
      })

      describe('Opens hacker app', () => {
        beforeEach(() => {
          cy.get('[data-cy=password-input-box]').type(secret)
          cy.get('[data-cy=submit-password-btn]').click()
          cy.get('[data-cy=hacker-app]').click()
        })

        describe('Selects [no] option', () => {
          beforeEach(() => {
            cy.get('[data-cy=modal-btn-no-cheri]').click()
          })

          it('updates state so moddal is no longer rendered', () => {
            cy.get('[data-cy=modal-main]').should('not.exist')
          })
        })

        it('renders modal with yes/no option', () => {
          cy.get('[data-cy=modal-main]').should('exist')
          cy.get('[data-cy=modal-main-text]')
            .should('exist')
            .should(
              'include.text',
              'Would you like to break into the system and reveal the password?'
            )
          cy.get('[data-cy=modal-btn-yes-cheri]')
            .should('exist')
            .and('include.text', 'YES')
            .and('have.css', 'font-family')
            .and('contain', 'Arial')
          cy.get('[data-cy=modal-btn-no-cheri]')
            .should('exist')
            .and('include.text', 'NO')
            .and('have.css', 'font-family')
            .and('contain', 'Arial')
        })
      })

      describe('Initiates hacking', () => {
        beforeEach(() => {
          cy.get('[data-cy=password-input-box]').type(secret)
          cy.get('[data-cy=submit-password-btn]').click()
          cy.get('[data-cy=hacker-app]').click()
          cy.get('[data-cy=modal-btn-yes-cheri]').click()
        })

        it('renders progress animation', () => {
          cy.get('[data-cy=progress-bar]')
            .should('exist')
            .and('include.text', 'hacking in progress')
          cy.get('[data-cy=progress-bar]')
            .should('exist')
            .and('include.text', 'hacking in progress 98%')
        })

        it('renders HACK FAILED', () => {
          cy.get('[data-cy=progress-bar-text]')
            .should(
              'include.text',
              'HACK FAILED. The password could not be revealed!?'
            )
            .and('not.include.text', secret)
        })

        it.skip('details button renders a concole with all output', () => {
          // TOOD implement once merged
        })

        it('renders Learn More side button', () => {
          cy.get('[data-cy=button-side]')
            .should('exist')
            .and('include.text', 'Learn More')
          cy.get('[data-cy=button-side]').click()
          cy.get('[data-cy=content-container]').should('not.exist')
          cy.get('[data-cy=password-input-box]').should('not.exist')
          cy.get('[data-cy=submit-password-btn]').should('not.exist')
        })
      })
    })
  })
})

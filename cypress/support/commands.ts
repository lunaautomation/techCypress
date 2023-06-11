/// <reference types="cypress" />
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        cookieText(): Chainable<Element>
        acceptCookiesButton():Chainable<Element>

        audienceBanner(name:string):Chainable<Element>
        utilityBanner(name:string):Chainable<Element>

        myAccountSignInButton():Chainable<Element>
      }
    }
  }


  Cypress.Commands.add('myAccountSignInButton',()=>{
    cy.get('[data-testid="Login_SignIn_Button"]')
})
Cypress.Commands.add('audienceBanner',(name:string)=>{
    cy.get('.sh-nav__audience').contains(name)
})
Cypress.Commands.add('utilityBanner',(name:string)=>{
    cy.get('.sh-nav__utility').contains(name)
})

Cypress.Commands.add('cookieText',()=>{
    cy.get('#onetrust-policy-text')
})

Cypress.Commands.add('acceptCookiesButton',()=>{
    cy.get('#onetrust-accept-btn-handler')
})

export {}
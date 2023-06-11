describe('UI Tests', () => {
const customerTypes = ['Personal','Business','Intermediaries']
const generalAreas = [ 'About us', 'Help and support', 'Contact us']
 
  context('Navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Cookie warning can be dismissed', () => {
      cy.cookieText().contains('cookies');
      cy.acceptCookiesButton().click().then(()=>{
      cy.acceptCookiesButton().should('not.be.visible');
      });
    });

    customerTypes.forEach((element)=>{
      it(`${element} custom area is loaded and UI reflects the change`, () => {
        cy.acceptCookiesButton().click();
        cy.audienceBanner(element).click().then(()=>{
          cy.audienceBanner(element).should('have.class', 'selected');
        });
      });
    });

    generalAreas.forEach((element)=>{
      it(`${element} page is loaded and UI reflects the change`, () => {
        cy.acceptCookiesButton().click();
        cy.utilityBanner(element).click().then(()=>{
          cy.utilityBanner(element).should('have.class', 'selected');
        });
      });
    });
    it(`My Account page is loaded and UI reflects the change`, () => {
      cy.acceptCookiesButton().click();
      cy.utilityBanner('My account').click().then(()=>{
        cy.myAccountSignInButton().should('be.visible')
      });
    });
  });
});
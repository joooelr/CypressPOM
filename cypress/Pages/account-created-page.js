class AccountCreatedPage {
  elements = {
    singUpLogin: () => cy.get('a[data-qa="continue-button"]'),
    titleMessage: () => cy.get('#form > div > div > div > h2')    
  };

  clickContinue() {
    this.elements.singUpLogin().click();
  }
}

module.exports = new AccountCreatedPage();
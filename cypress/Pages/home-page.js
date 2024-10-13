const BasePage = require("./base-page");

class HomePage extends BasePage{
  elements = {
    singUpLogin: () => cy.get('a[href="/login"]'),
    products: () => cy.get('a[href="/products"]'),
    loggedUser: () => cy.get('[class="shop-menu pull-right"]  li:nth-child(10) > a > b')
  };
  
  clickLogin() {
    this.elements.singUpLogin().click();
  }
}

module.exports = new HomePage();
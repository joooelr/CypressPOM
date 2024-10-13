const BasePage = require("./base-page");

class ProductsPage extends BasePage {
  elements = {
    singUpLogin: () => cy.get('a[data-qa="continue-button"]'),
    quantity: () => cy.get('#quantity'),
    nameOnCard:  () => cy.get('[data-qa="name-on-card"]'),
    cardNumber:  () => cy.get('[data-qa="card-number"]'),
    cvc: () =>  cy.get('[data-qa="cvc"]'),
    expireMonth:  () => cy.get('[data-qa="expiry-month"]'),
    expireYear:  () => cy.get('[data-qa="expiry-year"]'),
    yourDeliveryAddress:() => cy.get('[id="address_delivery"]'),
    yourBillingAddress:() => cy.get('[id="address_invoice"]'),
    carQuantity:() => cy.get('[id="cart_info"] [class="cart_quantity"]')
    
    
  };

  clickContinue() {
    this.elements.singUpLogin().click();
  }

  openDetails(number){
    cy.get('.product-image-wrapper > .choose > .nav > li > a').eq(number - 1).click();
  }

  clickAddToCart(){
    cy.get('[class="btn btn-default cart"]').click();
  }

  clickViewCart(){
    cy.get('.modal-title').click();
    cy.get('u').click();
  }


  clickProceedToCheckout(){
    cy.get('a[class="btn btn-default check_out"]').click();
  }

  clickPayAndConfirmOrder(){
    cy.get('[data-qa="pay-button"]').click();
  }


  
  clickPlaceOrder(){
    cy.get('a[href="/payment"]').click();
  }
}

module.exports = new ProductsPage();


//cy.get('[data-qa="pay-button"]').click();
//cy.get('[data-qa="continue-button"]').click();
//cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
///* ==== End Cypress Studio ==== */
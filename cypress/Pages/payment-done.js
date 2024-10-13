class PaymentDone {
  elements = {
    orderPlaced: () => cy.get('[data-qa="order-placed"]')    
  }
  clickContinue(){
    cy.get('[data-qa="continue-button"]').click();
  }

}

module.exports = new PaymentDone();
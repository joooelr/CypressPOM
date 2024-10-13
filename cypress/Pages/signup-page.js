class SignUpPage {
    elements = {      
      password: () => cy.get('#password'),
      gender: () => cy.get('#id_gender1'),      
      days: () => cy.get('[data-qa="days"]'),
      months: () => cy.get('[data-qa="months"]'),
      years: () => cy.get('[data-qa="years"]'),
      firstName: () => cy.get('[data-qa="first_name"]'),
      lastName: () => cy.get('[data-qa="last_name"]'),
      company: () => cy.get('[data-qa="company"]'),
      address: () => cy.get('[data-qa="address"]'),
      addrees2: () => cy.get('[data-qa="address2"]'),
      country: () => cy.get('[data-qa="country"]'),
      state: () => cy.get('[data-qa="state"]'),
      city: () => cy.get('[data-qa="city"]'),
      zipCode: () => cy.get('[data-qa="zipcode"]'),
      mobileNumber: () => cy.get('[data-qa="mobile_number"]'),
      createAccount: () => cy.get('[data-qa="create-account"]')
    };
  }
  
  module.exports = new SignUpPage();

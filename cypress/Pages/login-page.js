class LoginPage {
  elements = {
    username: () => cy.get('input[name="name"]'),
    password: () => cy.get('input[data-qa="signup-email"]'),
    loginBtn: () => cy.get('button[data-qa="signup-button"]')
  };

  login(mail, password) {
    this.elements.username().type(mail);
    this.elements.password().type(password);
    this.elements.loginBtn().click();
  }
}

module.exports = new LoginPage();
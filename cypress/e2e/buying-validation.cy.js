import { faker } from '@faker-js/faker';
import homePage from "../Pages/home-page";
import loginPage from "../Pages/login-page";
import signUpPage from "../Pages/signup-page";
import productsPage from "../Pages/products-page";
import accountCreatedPage from "../Pages/account-created-page";
import paymentDone from "../Pages/payment-done";

describe("Login Page ", () => {
  const firstName = faker.person.firstName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const days = faker.number.int({ min: 1, max: 31 });
  const months = faker.date.month({ numeric: true });
  const year = faker.number.int({ min: 1, max: 20 });
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const address = `${faker.location.street()}, ${faker.location.zipCode()}, ${faker.location.buildingNumber()}`;
  const addreess2 = `${faker.location.street()}, ${faker.location.zipCode()}, ${faker.location.buildingNumber()}`;
  const country = "United States";
  const state = faker.location.state();
  const city = faker.location.city();
  const zipCode = faker.location.zipCode()
  const mobileNumber = faker.phone.number('###-###-####');
  const quantityOfProducts = faker.number.int({ min: 1, max: 20 });
  const itemNumber = 3;
  const nameOnCard = `${firstName}, ${lastName}`;
  const cardNumber = faker.finance.creditCardNumber();
  const cvc = faker.finance.creditCardCVV();
  const expireMonth = months;
  const expireYear = faker.number.int({ min: 2024, max: 3000 });

  before('Register user in the applicatiom', () => {
    cy.visit(Cypress.config("baseUrl"));
    
    homePage.clickLogin();  

    loginPage.login(firstName, email);

    signUpPage.elements.password().type(password);
    signUpPage.elements.gender().check();
    signUpPage.elements.days().select(days);
    signUpPage.elements.months().select(months);
    signUpPage.elements.years().select(year);
    signUpPage.elements.firstName().type(firstName);
    signUpPage.elements.lastName().type(lastName);
    signUpPage.elements.company().type(company);
    signUpPage.elements.address().type(address);
    signUpPage.elements.addrees2().type(addreess2);
    signUpPage.elements.country().select(country);
    signUpPage.elements.city().type(city);
    signUpPage.elements.state().type(state);
    signUpPage.elements.zipCode().type(zipCode);
    signUpPage.elements.mobileNumber().type(mobileNumber);
    signUpPage.elements.createAccount().click();    

    accountCreatedPage.elements.titleMessage().should('contains.text','Account Created!').then(() => {
      cy.log('Verify if account was created');
      });

    accountCreatedPage.clickContinue();
    homePage.elements.loggedUser().should('have.text', firstName).then(() => {
      cy.log('Verify if user is logged into de app');
      });
  });

  it("End to End validation for an user buying some products", () => {

      homePage.selectMenu("products");

      productsPage.openDetails(itemNumber);
      productsPage.elements.quantity().clear();
      productsPage.elements.quantity().type(quantityOfProducts);
      productsPage.clickAddToCart();
      productsPage.clickViewCart();
      productsPage.clickProceedToCheckout();

      productsPage.elements.yourDeliveryAddress().should('contain.text', firstName)
        .and('contain.text', lastName)
        .and('contain.text', address)
        .and('contain.text', addreess2)
        .and('contain.text', country)
        .and('contain.text', zipCode)
        .and('contain.text', mobileNumber)
        .then(() => {
          cy.log('Verify if address data is ok');
        });

      productsPage.elements.yourBillingAddress().should('contain.text', firstName)
        .and('contain.text', lastName)
        .and('contain.text', address)
        .and('contain.text', addreess2)
        .and('contain.text', country)
        .and('contain.text', zipCode)
        .and('contain.text', mobileNumber)
        .then(() => {
        cy.log('Verify if address data is ok');
        });
      
      productsPage.elements.carQuantity().should('contain.text', quantityOfProducts).then(() => {
        cy.log('Verify if quantity displayed in car is the selected');
        });

      productsPage.clickPlaceOrder();
      productsPage.elements.nameOnCard().type(nameOnCard);
      productsPage.elements.cardNumber().type(cardNumber);
      productsPage.elements.cvc().type(cvc);
      productsPage.elements.expireMonth().type(expireMonth);
      productsPage.elements.expireYear().type(expireYear);
      productsPage.clickPayAndConfirmOrder();    

      paymentDone.elements.orderPlaced().should('contain.text', 'Order Placed!').then(() => {
        cy.log('Verify if buy process was completed');
        });
      paymentDone.clickContinue();
      productsPage.logout();
      loginPage.elements.loginBtn().should('be.visible');
      loginPage.elements.password().should('be.visible').then(() => {
        cy.log('Verify if page was logged out and page redirected to login page');
        });      
    });
});

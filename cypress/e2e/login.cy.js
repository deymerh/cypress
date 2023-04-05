import { loginPage } from './pageObjects/LoginPage'

describe('Login con page object model', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('login incorrecto', () => {
    loginPage.login('correo', 'nada');
    loginPage.validateErrorLogin();
  });

  it('Login existoso', () => {
    loginPage.validateLoginPage();
    loginPage.login('username', 'password');
    loginPage.validateSuccesLogin();
  });

  it('Login existoso con `env`', () => {
    loginPage.validateLoginPage();
    loginPage.login(Cypress.env('credentials').user, Cypress.env('credentials').password);
    loginPage.validateSuccesLogin();
  });

  it('Login existoso con `JSON`', () => {
    loginPage.validateLoginPage();
    loginPage.login(Cypress.env('credentials').user, Cypress.env('credentials').password);
    loginPage.validateSuccesLogin();
  });

});

describe('Login errroneo con configracion de ambiente en el describe', {
  env: {
    usuarioErroneo: 'error1',
    passwordErroneo: 'error2'
  }
}, () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it.only('login erroneo', () => {
    loginPage.validateLoginPage();
    cy.log('Cypress.env() ', Cypress.env());
    loginPage.login(Cypress.env('usuarioErroneo'), Cypress.env('passwordErroneo'));
    loginPage.validateErrorLogin();
  });
});
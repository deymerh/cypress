Cypress.Cookies.defaults({
  preserve: 'nombre'
})
describe('Cookies', ()=>{
  it('Obtener las cookies', ()=>{
    cy.visit('/');
    cy.getCookies().should('be.empty');
  });

  it('Agregar una cookie', ()=>{
    cy.setCookie('nombre', 'Deymer');
    cy.getCookies().should('have.length', 1);
    cy.getCookie('nombre').should('have.a.property', 'Deymer');

  });
})
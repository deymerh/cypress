describe('Cookies', ()=>{
  beforeEach(()=>{
    cy.session('login', ()=>{
      cy.visit('/');
      cy.setCookie('nombre', 'Deymer');
      // cy.getCookies().should('be.empty');
    });
  });
  
  it('Agregar una cookie', ()=>{
    cy.visit('/');
    cy.getCookie('nombre').should('have.a.property', 'value', 'Deymer')
    cy.getCookies().should('have.length', 1);
  });
})
describe('Cookies', ()=>{
  beforeEach(()=>{
    cy.session('login', ()=>{
      cy.visit('/');
      cy.getCookies().should('be.empty');
    });
  });

  it('Agregar una cookie', ()=>{
    cy.setCookie('nombre', 'Deymer');
    cy.getCookies().should('have.length', 1);
  });
})
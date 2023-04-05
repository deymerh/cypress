describe('Prueba de visual regression', () => {
  it('Compara la imagen de un elemento', () => {
    cy.visit('/');
    cy.wait(3000);
    cy.scrollTo('bottom');
    cy.matchImageSnapshot();
  });

  it('Segunda prueba de un solo elemento', () => {
    cy.visit('/');
    cy.scrollTo('bottom');
    cy.contains('Bulbasaur').should('be.visible').matchImageSnapshot();
  });
});

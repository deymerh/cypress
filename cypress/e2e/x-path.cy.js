describe('x-path', () => {
  it('Trabajando con selectores css', ()=>{
    cy.visit('/');
    cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
      .should('contain', 'Bulbasaur');
  });
  it('Trabajando con selectores x-path', ()=>{
    cy.visit('/');
    // cy.xpath('//h1[contains(text(), Bulbasaur)]')
    //   .should('contain', 'Bulbasaur');
    cy.contains('Bulbasaur');
  });
  
})
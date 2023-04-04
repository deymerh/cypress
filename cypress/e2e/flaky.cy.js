describe('flaky test', ()=>{
  it('single query command', () => {
    cy.visit('/')
    // cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
    // .should('contain', 'Bulbasaur');
    cy.contains('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1', 'Bulbasaur')
  });
})
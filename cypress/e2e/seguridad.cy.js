let texto;
describe('Navegar entre paginas', () => {
  it.skip('Error al navegar entre diferentes dominios en la misma prueba', () => {
    cy.visit('/');
    cy.visit('https://todo-cypress-iota.vercel.app');
    cy.get('#title').type('Titulo de prueba');
  });

  it('Navego a un dominio', function () {
    cy.visit('https://todo-cypress-iota.vercel.app');
    cy.get('h1').invoke('text').as('titulo');
  })

  it('Navego a otro dominio', function () {
    cy.visit('/');
    cy.log(this.titulo);
  })

  it.skip('Navegar entre diferentes dominios correctamente', () => {
    cy.visit('/');
    cy.get('h1')
      .first()
      .invoke('text')
      .then(function (text) {
        cy.log('Soy el text de la linea 25: ', text);
        Cypress.env({textoVariableEntorno: text})
      });

    cy.origin('https://todo-cypress-iota.vercel.app',
      { args: { texto } },
      function () {
        cy.visit('/');
        cy.log(Cypress.env());
        cy.get('h1').first().invoke('text').should('be.equal', Cypress.env('textoVariableEntorno'))
      });

  })
});